import { Space } from "antd";
import ItemCalculate from "./ItemCalculate";

export default function Calculate() {
  return (
    <Space.Compact size="large" direction="vertical" style={{padding : '5px 10px' , border : '1px solid #999' , gap : '5px' , borderRadius : '10px'}}>
    <ItemCalculate name="salad" price={0.5}/>
    <ItemCalculate name="bacon" price={1}/>
    <ItemCalculate name="cheese" price={2}/>
    <ItemCalculate name="meat" price={3}/>
    </Space.Compact>
  )
}
