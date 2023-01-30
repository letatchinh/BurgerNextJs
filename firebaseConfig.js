import { getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = { 
    apiKey: "AIzaSyCpeMnM_qFVVFGaChI2qi17CRfn04koWUI",
  authDomain: "burger-demo-44d52.firebaseapp.com",
  databaseURL: "https://burger-demo-44d52-default-rtdb.firebaseio.com",
  projectId: "burger-demo-44d52",
  storageBucket: "burger-demo-44d52.appspot.com",
  messagingSenderId: "986029817603",
  appId: "1:986029817603:web:487dbb5329d65a2f693336",
  measurementId: "G-XH1SQHZLQV"
}
// const app = getApps.length > 0 ? getApps() : initializeApp(firebaseConfig)
// const db = getFirestore(app)
// const storage = getStorage(app)
// export {app,db,storage}