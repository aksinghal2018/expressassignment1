import React from 'react'
import { useState, useEffect } from 'react'
import { getrequestproduct } from '../Services/Myservice'
function Product() {
    const [productshow, setproductshow] = useState([])
    const [product, setproduct] = useState([])
    const [choice, setchoice] = useState("All")
    const [category, setcategory] = useState([])
    useEffect(() => {
        getrequestproduct().then(
            data => {
                var categorydata=[]
                data.data.pdata.map(
                    item=>{
                        //console.log(categorydata.indexOf(item.category)==-1)
                        if(categorydata.indexOf(item.category)==-1){
                            categorydata.push(item.category)
                        }
                    }
                )
                //console.log(categorydata)
                setproduct(data.data.pdata)
                setcategory(categorydata)
            }
        )
    }, [])
    const handler=(e)=>{
        setchoice(e.target.value)
        const value=e.target.value
        console.log(value)
        if(value=="All"){
            setproductshow(product)
        }
        else{
            var data=[]
            product.map(item=>{
                if(item.category==value){
                    data.push(item)
                }
            })
            setproductshow(data)
        }

        
    }
    return (

        <div className="container mt-4" style={{border:"2px solid black"}}>
            <div style={{display:"flex"}}><h1><u>Products</u></h1>
            
            <div  style={{fontSize:"20px",color:"black",marginLeft:"50%",marginTop:"2%"}}><form>
  <label for="cars">Choose Category:</label>
  <select id="cars" name="cars" style={{width:"200px"}}   onChange={handler}>
    <option value="none">None</option>
    <option value="All">All</option>
    {
        category.map(item=>{
            return(<option value={item}>{item}</option>)
        })
    }
  </select>
  </form></div></div>
            <div className="row" style={{padding:"20px"}}>
                {
                    productshow.map((item, index) => {
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
