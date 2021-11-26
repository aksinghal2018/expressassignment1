import React from 'react'
import { useState, useEffect } from 'react'
import { getrequestproduct } from '../Services/Myservice'
function Product() {
    const [product, setproduct] = useState([])
    useEffect(() => {
        getrequestproduct().then(
            data => setproduct(data.data.pdata)
        )
    }, [])
    return (

        <div className="container mt-4" style={{border:"2px solid black"}}>
            <h1><u>Products</u></h1>
            <div className="row" style={{padding:"20px"}}>
                {
                    product.map((item, index) => {
                        return (
                            <div className="card col-lg-3 col-md-4 col-4 mt-4" style={{width: "18rem",marginRight:"40px",marginLeft:"40px"}}>
                                <img className="card-img-top mt-2" src={`http://localhost:8899/${item.images}`} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">
                                        <h5>Price:{item.price}</h5>
                                        <h5>Quantity:{item.quantity}</h5>
                                    </p>
                                    <a href="/" className="btn btn-primary">Add</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product
