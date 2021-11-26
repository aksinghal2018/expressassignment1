import React from 'react'
import { useState, useEffect } from 'react'
import { getrequestproduct, getrequestuser, postrequestuser } from '../Services/Myservice'
import {useParams} from 'react-router-dom'
import axios from 'axios'
function Sendproduct() {
    const {id} =useParams()
    return (
        <div>
            <h1 style={{marginLeft:"30%",marginTop:"5%"}}>Product Image Upload.</h1>
        <div className="container" style={{marginLeft:"35%",marginTop:"5%"}} >
                <div className="form-group">
                    <iframe  src={`http://localhost:8899/api/post/fileuploaddata/${id}`} ></iframe>
                </div>
              
        </div>
        </div>
    )
}

export default Sendproduct
