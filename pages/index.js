import { Col, Row, Space } from "antd";
import Burger from "../components/Burger";
import CalculatedBill from "../components/CalculatedBill";

export default function Home() {
  return (
    <>
      <Row>
        <Col span={12} offset={6}>
            <Burger />
        </Col>
        <Col span={8} offset={9}>

        <CalculatedBill />
        </Col>
      </Row>
    
    </>
  );
}
