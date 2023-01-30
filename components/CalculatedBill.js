import { Button, Modal, Space } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Calculate from "./Calculate";
import FormCheckOut from "./FormCheckOut";
import TotalBill from "./TotalBill";

export default function CalculatedBill() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {data}= useSession()
  const router = useRouter()
  const showModal = () => {
    if(data){
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
