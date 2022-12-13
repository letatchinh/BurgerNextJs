import { Card, Col, Row } from "antd"
import axios from "axios"
import Link from "next/link";
import { v4 } from "uuid";
import ItemBurger from "../../components/ItemBurger";
const { Meta } = Card;

export default function Burger({posts}) {
  return (
    <Row justify="space-around" style={{padding : '20px'}}>
    {posts.posts.map(e => 
    <Col key={v4()} span={5}>
   <Link href={`burgers/${e.id}`}>
   <Card
   hoverable
   style={{ width: 240 }}
   cover={<img alt="example" src={e.images[0]} />}
 >
   <Meta title={e.title} description={e.description} />
 </Card>
   </Link>
   </Col>
 
)}
 </Row>
  )
}

  export async function getStaticProps(context) {
    const res = await axios.get("https://dummyjson.com/products")
    const posts = res.data.products
    return {
      // Passed to the page component as props
      props: { posts: {posts} },
    }
  }