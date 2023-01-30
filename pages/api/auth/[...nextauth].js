import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import { app, db, firebaseConfig } from "../../../firebaseConfig";
import * as firestoreFunction from 'firebase/firestore'
import axiosClient from "../../../constant/AxiosConfig";
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/providers
  session : {strategy : "jwt"},
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    }),
    CredentialsProvider({
      type : 'credentials',
      credentials : {
        email : {label : "Email" ,type : 'email',placeholder : "chinh@gmail.com"},
        password : {label : 'Password' ,type : "password"}
      },
      async authorize(credentials,req){
        const {email,password} = credentials
        console.log(credentials,'asdasd');
        const res = await axiosClient.post("/api/users",{username : email, password})
        console.log(res,'sdadsaasdd');
        if(res.status === 200){
          return res.data
        }
        else return null
        // throw new Error("Invalid Account")
      }
    })
  ],
  adapter: FirestoreAdapter(firebaseConfig),
  emulator: {
    // Optional host, defaults to `localhost`
    host: 'localhost',
  // Optional port, defaults to `3001`
    port: 3000,
  },
  pages : {
    signIn : "/login"
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials ,username,id }) {
        const isAllowedToSignIn = true
        if (isAllowedToSignIn) {
          console.log(user);
          return true
        } else {
          // Return false to display a default error message
          return false
          // Or you can return a URL to redirect to:
          // return '/unauthorized'
        }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
  
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if(isNewUser){
       await axiosClient.post("/api/register",{name : user.name , username : user.email , password : user.id})
      }
      return token
    }
}
  // ...
});