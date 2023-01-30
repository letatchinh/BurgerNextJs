import { Button, Checkbox, Divider, Form, Input } from "antd";
import { getProviders, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import GoogleButton from "react-google-button";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import axiosClient from "../../constant/AxiosConfig";
import {  AuthenLoginFireBaseRequest } from "../../redux/saga";
export default function index() {
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const onFinish = async(values) => {
const res = await signIn("credentials", { email: values.username, password: values.password,redirect : false })
if(res.url){
  router.push("/")
}
else{
  console.log(res);
  toast.error("Invalid Email or Password")
}
  // const res = await axiosClient.post("/api/users",{username : values.username, password : values.password})
  // console.log(res,"res");
  //   dispatch(AuthenLoginFireBaseRequest({values,callback : (stt) => setLoading(stt) , goHome : () => router.push("/")  }))

  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      style={{ width: "50%", margin: "0 auto", padding: "100px 0" }}
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          { required: true, message: "Please input your username!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Login
        </Button>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
      <GoogleButton
  onClick={() => signIn('google',{callbackUrl : process.env.NEXT_PUBLIC_NEXTAUTH_URL})}
/>
      </Form.Item>
      <Divider/>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    <Link href="/register">
     <Button type="primary">
          Register
        </Button>
     </Link>
    </Form.Item>
    </Form>
  );
}
// export  const  getServerSideProps=async(context)=> {
//   const providers = await getProviders()
//   return {
//     props:{
//       providers
//     }
//   }
// }