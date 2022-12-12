import { Button, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { decrementByAmount, incrementByAmount } from "../redux/burgerSlice";

export default function ItemCalculate({name,price}) {
  const item = useSelector((state) => state.burger.order[name])
  const dispatch = useDispatch()
  const incrementByAmount2 = () => {
    dispatch(incrementByAmount({name,price}))
  }
  const decrementByAmount2 = () => {
    dispatch(decrementByAmount({name,price}))
  }
  return (
    <Space style={{justifyContent : 'space-between' }}>
        <Typography>{name}</Typography>
        <Space>
            <Button onClick={decrementByAmount2} disabled={item === 0}>-</Button>
            <Typography>{item}</Typography>
            <Button onClick={incrementByAmount2}>+</Button>
        </Space>
    </Space>
  )
}
