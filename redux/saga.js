import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import axiosClient from "../constant/AxiosConfig";
import { auth } from "../firebase/firebaseConfig";
import { addUser } from "./userSlice";
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function registerRequest(payload) {
  return {
    type: "REGISTER",
    payload,
  };
}
export function orderRequest(payload){
  return {
    type: "ORDER",
    payload,
  };
}
function* order(action){
  action.payload.setLoadings(true)
  try {
    const res = yield call(() => axiosClient.post("api/addOrder",action.payload.newOrder))
    if(res.status === 201){
      toast.success("Order Success !")
      action.payload.offModal()
      action.payload.reset()
    }
  } catch (error) {
    console.log(error);
  }
  action.payload.setLoadings(false)
}
function* login(action){
  try {
 const res =  yield call(() => axiosClient.post("/api/users",{username : action.values.username , password : action.values.password}))
 if(res.status === 200){
   yield put(addUser(res.data))
   yield localStorage.setItem(process.env.NEXT_PUBLIC_LOCALSTORED_KEY,JSON.stringify(res.data))
   toast.success("Successfully Login!");
   yield action.goHome()
 }
  } catch (error) {
    console.log(error);
  }
}
function* register( {payload} ) {
  yield payload.callback(true);
  try {
    console.log(payload);
    const res = yield call(() =>
      axiosClient.post("/api/register", payload.values)
    );
    if (res.status === 201) {
     const res2 = yield createUserWithEmailAndPassword(auth, payload.values.username, payload.values.password)
     if(res2){
       payload.goHome()
       toast.dismiss();
       toast.success("Successfully Register!");
     }
    }
  } catch (error) {
    toast.dismiss();
    toast.error(error.response.data.message);
  }

  yield payload.callback(false);
}
export function AuthenLoginFireBaseRequest(payload) {
  return {
    type: "AUTHENFIREBASE",
    payload,
  };
}

function* authenFireBase({ payload }) {
  yield payload.callback(true);
  yield delay(1000)
  try {
   const res = yield  signInWithEmailAndPassword(auth, payload.values.username, payload.values.password)
  if(res){
    yield login(payload)
  }
  } catch (error) {
    toast.dismiss();
    console.log(error);
    toast.error("Wrong");
  }

  yield payload.callback(false);
}

function* mySaga() {
  yield takeLatest("REGISTER", register);
  yield takeLatest("AUTHENFIREBASE", authenFireBase);
  yield takeLatest("ORDER", order);
}

export default mySaga;
