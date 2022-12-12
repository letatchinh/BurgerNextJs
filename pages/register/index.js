import { Button, Checkbox, Divider, Form, Input, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {  registerRequest } from "../../redux/saga";

export default function index() {
  const router = useRouter()
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch()
  const onFinish = async(values) => {
    dispatch(registerRequest({values,callback : (stt) => setLoading(stt) , goHome : () => router.push("/")}))
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
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your Name!" }]}
      >
        <Input />
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
          Register
        </Button>
      </Form.Item>
      <Divider/>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    <Link href="/login">
     <Button type="primary">
          Login
        </Button>
     </Link>
    </Form.Item>
    </Form>
  );
}
