import React from 'react'
import { useState, useEffect } from 'react'
import { getrequestuser, postrequestuser } from '../Services/Myservice'
import axios from 'axios'
function Register() {
    const [userid, setuserid] = useState("")
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")
    const [user, setuser] = useState([])
    useEffect((e) => {
        getrequestuser().then(
            data => setuser(data)
        )
    }, [])
    const handler = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name == "userid") {
            setuserid(value)
        }
        if (name == "username") {
            setusername(value)
        }
        if (name == "email") {
            setemail(value)
        }
        if (name == "password") {
            setpassword(value)
        }
        else {
            setcpassword(value)
        }

    }
    const submit = (e) => {
        e.preventDefault()
        const data = { "userid": userid, "username": username, "email": email, "password": password,"confirmpassowrd":cpassword }
        console.log(data)
        if (password == cpassword) {
            postrequestuser(data).then(data => {console.log(data)
            alert("Register Successfully")
            //window.location.reload('/')
            console.log("registred successfully")
            })

        }
        else {
            alert("password and confirm password not same.")
        }
    }
    return (
        <div className="container" >
            <form onSubmit={submit} style={{ margin: "18px", border: "2px solid black", padding: "34px" }}>
                <h1><u>Register</u></h1>
                <div className="form-group">
                    <label htmlFor="userid">Userid</label>
                    <input type="text" className="form-control" id="userid" name="userid" onChange={handler} />
                </div>
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input type="text" className="form-control" id="username" name="username" onChange={handler} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={handler} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={handler} />
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword"> Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={handler} />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Register
