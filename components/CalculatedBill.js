import { Button, Modal, Space } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import Calculate from "./Calculate";
import FormCheckOut from "./FormCheckOut";
import TotalBill from "./TotalBill";

export default function CalculatedBill() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter()
  const showModal = () => {
    if(localStorage.getItem(process.env.NEXT_PUBLIC_LOCALSTORED_KEY)){
      setIsModalOpen(true);
    }
    else{
      router.push("/login")
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  return (
   <Space.Compact direction="vertical" align="center" style={{width : '80%', gap : '10px'}} size='middle'>
    <TotalBill />
    <Calculate />
    <Button onClick={showModal} type="primary">
      Check out
    </Button>
    <Modal title="Fill infomation" open={isModalOpen} onCancel={handleOk}  footer={[
        ]} >
        <FormCheckOut handleOk={handleOk}/>
      </Modal>
   </Space.Compact>
  )
}
