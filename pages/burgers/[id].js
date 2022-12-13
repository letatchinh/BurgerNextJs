import { Card, Col, Row } from "antd"
import axios from "axios"
const { Meta } = Card;

export default function Burger({post}) {
  return (

   <Card
   hoverable
   style={{ width: 240 , margin : '50px auto' }}
   cover={<img alt="example" src={post.post.images[0]} />}
 >
   <Meta title={post.post.title} description={post.post.description} />
 </Card>

  )
}
export async function getStaticPaths() {
    const res = await axios.get("https://dummyjson.com/products")
    const paths = res.data.products.map((post) => ({
        params: { id: post.id.toString() },
      }))
    return {
      paths: paths,
      fallback: false, // can also be true or 'blocking'
    }
  }

  export async function getStaticProps(context) {
    const id = context.params.id
    const res = await axios.get(`https://dummyjson.com/products/${id}`)
    const post = res.data
    return {
      // Passed to the page component as props
      props: { post: {post} },
    }
  }