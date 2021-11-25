import React from 'react'
//import axios from 'axios'
import { postrequest } from '../Services/Myservice'
import { useState } from 'react'
import { useHistory } from 'react-router'
function Addpost() {
    const [pname, setpname] = useState("")
    const [pdesc, setpdesc] = useState("")
    let history=useHistory()
    const handler=(e)=>{
        if(e.target.name=="pname"){
            setpname(e.target.value)
        }
        else{
            setpdesc(e.target.value)
        }
    }
    const submit=(e)=>{
        e.preventDefault()
        if(pname!="" && pdesc !=""){
       const data={"pname":pname,"pdesc":pdesc}
       console.log(data)
       postrequest(data).then(
           data=>{
               if(data.data.err!='0'){
                   alert("error occur")
               }
               else{
                   alert("post added successfully.")
                   history.push('/')
               }
           }
       )}
       else{
           alert("cannot be empty feilds.")
       }
    }
    return (
        <div className="container">
           
            <form onSubmit={submit}>
  <div className="form-group">
      <label htmlFor="post">Posts</label>
      <input type="text" name="pname" id="post" className="form-control" placeholder="posts" onChange={handler}/>
      </div>
      <div className="form-group">
      <label htmlFor="postdesc">Posts Description</label>
      <textarea className="form-control" id="postdesc" rows="3" name="pdesc" onChange={handler}></textarea>
      </div>
      <button type="submit" className="btn btn-primary" > Submit</button>
      </form>
        </div>
    )
}

export default Addpost
