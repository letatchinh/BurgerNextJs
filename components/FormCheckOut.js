import { Button, Form, Input } from "antd";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderRequest } from "../redux/saga";

export default function FormCheckOut({handleOk} ) {
  const [form] = Form.useForm();
  const {data} = useSession()
  const burgerOrder = useSelector(state => state.burger)
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch()
  const setLoadings = (loading) => {
    setLoading(loading)
  }
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };
      const onFinish = (values) => {
        const {name,email,numberPhone,address,note} = values.user
        const newOrder = {contact : { address ,name,note,phone : numberPhone} ,email , order : burgerOrder.order , price : burgerOrder.totalBill , timeStamp : Date.now()}
        // dispatch(orderRequest({newOrder,offModal : () => handleOk() , setLoadings : setLoadings , reset : () => form.resetFields()}))
      };
      const onError = (values) => {
        console.log(values);
      };
  return (
    <Form {...layout} form={form} name="nest-messages" onError={onError} onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} labelAlign={"left"} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} initialValue={data && data.user.email}  labelAlign={"left"} label="Email" rules={[{ type: 'email' }]}>
        <Input disabled/>
      </Form.Item>
      <Form.Item name={['user', 'numberPhone']} labelAlign={"left"} label="Number Phone" 
      >
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'address']}  labelAlign={"left"}label="Address">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'note']} labelAlign={"left"} label="Note">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button loading={loading} type="primary" onSubmit={onsubmit}  htmlType="submit">
          Order
        </Button>
      </Form.Item>
    </Form>
  )
}

