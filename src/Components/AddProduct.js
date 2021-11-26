import React from 'react'
import { useState, useEffect } from 'react'
import { getrequestproduct, postrequestproduct } from '../Services/Myservice'
import axios from 'axios'
function AddProduct() {
    const [productid, setproductid] = useState("")
    const [name, setname] = useState("")
    const [price, setprice] = useState("")
    const [quantity, setquantity] = useState("")
    const [description, setdescription] = useState("")
    const [filedata, setfiledata] = useState("")
    const [product, setproduct] = useState([])
    const [error, seterror] = useState("")
    useEffect((e) => {
        getrequestproduct().then(
            data => setproduct(data.data.pdata)
        )
    }, [])
    const handler = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name == "productid") {
            var status = -1
            product.map(item => {
                if (item.productid == value) {
                    seterror("already avaliable id !")
                    status = 1
                }
            })
            if (status == -1) {
                seterror("")
            }
            //alert(error)
            setproductid(value)
        }
        if (name == "name") {
            setname(value)
        }
        if (name == "price") {
            setprice(value)
        }
        if (name == "quantity") {
            setquantity(value)
        }
        if (name == "description") {
            setdescription(value)
        }


    }
    const submit = (e) => {
        e.preventDefault()
        const data = { "productid": productid, "name": name, "price": price, "quantity": quantity, "description": description }
        console.log(data)
        if (error == "") {
            if (productid != "" && name != "" && price != "" && quantity != "" && description != "") {
                postrequestproduct(data).then(data => {
                    console.log(data)
                    alert("Product Added Successfully")
                    //window.location.reload('/')
                    console.log("Product Add successfully")
                    window.location.replace(`/addImage/${productid}`)
                })
            }
            else {
                alert("feild not be empty")
            }

        }
        else {
            alert("id already registred.")
        }
    }
    return (
        <div className="container" >
            <form onSubmit={submit} style={{ margin: "18px", border: "2px solid black", padding: "34px" }}>
                <h1><u>Add Product</u></h1>
                <div className="form-group">
                    <label htmlFor="productid">Productid</label>
                    <input type="text" className="form-control" id="productid" name="productid" onChange={handler} autoComplete="off" />
                    {error != "" ? <p>{error}</p> : <></>}
                </div>
                <div className="form-group">
                    <label htmlFor="productname">Product Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={handler} />
                </div>
                <div className="form-group">
                    <label htmlFor="productprice">Product Price</label>
                    <input type="text" className="form-control" id="price" name="price" onChange={handler} />
                </div>
                <div className="form-group">
                    <label htmlFor="productquantity">Product Quantity</label>
                    <input type="text" className="form-control" id="quantity" name="quantity" onChange={handler} />
                </div>
                <div className="form-group">
                    <label htmlFor="productdescription">Product Description</label>
                    <textarea class="form-control" id="description" rows="3" name="description" onChange={handler}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default AddProduct
