import { Space, Typography } from "antd";
import { useSelector } from "react-redux";

export default function TotalBill() {
  const totalBill = useSelector(state => state.burger.totalBill)
  return (
    <Space style={{justifyContent : 'space-between' , border : '1px solid #999' , borderRadius : '10px' , padding : '5px'}}>
        <Typography>Total</Typography>
        <Typography>{totalBill}</Typography>
    </Space>
  )
}
