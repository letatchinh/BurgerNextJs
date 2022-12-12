import axios from "axios"
const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_AXIOS,
   headers : {
       'content-type' : 'application/json'
   },
  });
  export  default axiosClient