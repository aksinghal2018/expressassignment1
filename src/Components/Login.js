import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { useHistory } from 'react-router'
import { getrequestuser } from '../Services/Myservice'
function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [user, setuser] = useState([])
    const history=useHistory()
    useEffect(() => {
        getrequestuser().then(
            data => setuser(data.data.pdata)
        )
    }, [])
    const handler = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name == "email") {
            setemail(value)
        }
        if (name == "password") {
            setpassword(value)
        }
    }
    
    const submit=(e)=>{
        console.log(user)
        e.preventDefault()
        const data={"email":email,"password":password}
        var status=-1
        //alert("")
        console.log(data)
        user.map(item=>{
            if(item.email==email && item.password==password){
                localStorage.setItem("login",JSON.stringify({"login":"successfully"}))
                console.log("login Successfull")
                history.push("/product")
                status=1
            }
        })
    }
   
    return (
        <div className="container" >
            <form onSubmit={submit} style={{ margin: "18px", border: "2px solid black", padding: "34px" }}>
                <h1><u>Login</u></h1>
               
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={handler} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={handler} />
                </div>
                
                <button type="submit" className="btn btn-primary" >Login</button>
            </form>
        </div>
    )
}

export default Login
