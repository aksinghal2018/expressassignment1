import axios from 'axios'
import { MainUrl } from '../config/Url'

export const getrequest=()=>{
    return(axios.get(`${MainUrl}post/getpost`,{ withCredentials: true }))
}
export  const  postrequest=(data)=>{
    return(
    axios.post(`${MainUrl}post/addpost`,data),{ withCredentials: true })
}
export  const  updaterequest=(data)=>{
   // console.log(data)
    const config = { headers: {'Content-Type': 'application/json'} };
    return(
    axios.put(`${MainUrl}post/updatepost`,data,{ withCredentials: true }))
}
export  const  deletetrequest=(data)=>{
    return(
    axios.delete(`${MainUrl}post/deletepost/${data}`),{ withCredentials: true })
}