import { message } from "antd";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function Layout({children}) {
  

  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
