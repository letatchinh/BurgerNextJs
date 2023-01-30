import { Card, Col, Row } from "antd"
import axios from "axios"
import Link from "next/link";
import { v4 } from "uuid";
import { useRouter } from 'next/router'

import ItemBurger from "../../../components/ItemBurger";
import Error404 from "../../../components/Error404";
const { Meta } = Card;

export default function Burgerss({posts}) {
  const router = useRouter()
  if (!router.isFallback && !posts) {
    return <Error404 />;
}
  return (
    <Row justify="space-around" style={{padding : '20px'}}>
    {posts.posts.map(e => 
    <Col key={v4()} span={5}>
   <Link href={`${e.id}.html`}>
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