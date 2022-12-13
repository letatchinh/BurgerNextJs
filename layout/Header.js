import React, { useEffect, useState } from 'react';
import { auth } from "../firebase/firebaseConfig";
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { Button, Space, Typography } from "antd";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import axiosClient from '../constant/AxiosConfig';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';
import axios from 'axios';
export default function Header() {
  const [status,setStatus] = useState(false)
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        axiosClient.post(`api/loginWithUsername?username=${user.email}`).then(res => {
          if(res.status === 200){
            dispatch(addUser(res.data))
            localStorage.setItem(process.env.NEXT_PUBLIC_LOCALSTORED_KEY,JSON.stringify(res.data))
            setStatus(true)
    
          }
        }).catch(err => console.log(err))

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        localStorage.removeItem(process.env.NEXT_PUBLIC_LOCALSTORED_KEY)
        setStatus(false)
      }
    });
  },[])
  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div style={{background : 'white' , boxShadow : '0 0 5px 2px #999'}}>
        <Space style={{width : '100%' , padding : '10px 100px'}} className={styles.justifyBetween} >
        <Space>
        <Link href="/">
        <Button type="primary" ghost>
      Home
    </Button>
        </Link>
        <Link href="/burgers">
        <Button type="primary" >
      See More Burger
    </Button>
        </Link>
        </Space>
        {status ?   <Space>
        <Typography>Hello {user && user.name}</Typography>
         <Link href="/myorders">
         <Button type="primary">
            My Order
          </Button>
         </Link>
          <Button onClick={logout} icon={<LogoutOutlined />}>
            Log Out
          </Button>
        </Space> :  
        <Link href='/login'>
        <Button icon={<LoginOutlined />}>
            Log In
          </Button>
        </Link>}
      
       
        </Space>
      </div>
  )
}
