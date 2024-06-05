import React , {Fragment, useState} from "react";
import '../FarmerStyle/Farmers.css';
import {Link } from 'react-router-dom'
import Navigation from "../Buyercomponents/Navigation";
import axios from 'axios'
const Farmers = () => {

    const [produtName,setName]=useState()
    const [produtDesc,setDesc]=useState()
    const [produtPrice,setPrice]=useState()
    const [produtQuantity,setQuantity]=useState()
    const [productImage,setImage]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault(); 
        const formData = new FormData();
        formData.append('prodname',produtName);
        formData.append('prodDesc',produtDesc)
        formData.append('prodPrice',produtPrice)
        formData.append('ProdQuant',produtQuantity)
        formData.append('prodImage',productImage)
        axios.post('http://localhost:3000/farmers',formData).then(result=>{console.log(result)
        alert("Product uploaded");
    })
        .catch(err=>console.log(err))
    }

    return(
        <>
        <div className="icon"><img src="Country_Cart_Logo.png" /></div>
        <div className="fcont1">
            <h2 className="title" ><b>POST</b></h2><br></br>
            <form onSubmit={handleSubmit}>
   <p className="attribute">Choose category : </p>
   <select name="cat" id="cat" className="ip">
    <option value="Vegetables">Vegetables</option>
    <option value="Fruits">Fruits</option>
    <option value="Greens">Greens</option>
    <option value="Nuts">Nuts</option>
    <option value="Cereals">Cereals</option>
  </select>
  <br></br>
  <p className="attribute1">Product Details</p>
  <p className="attribute">Product Name : </p><input type="text" className="ip" placeholder="Enter your Product Name" id="name" onChange={(e)=>setName(e.target.value)} required></input>
  <p className="attribute">Description : </p><textarea rows="5" cols="70" className="ip" placeholder="Enter the Description"onChange={(e)=>setDesc(e.target.value)}></textarea>
  <p className="attribute">Price :</p><input type="text" className="ip" placeholder ="Enter the Price " id="pr"onChange={(e)=>setPrice(e.target.value)} required></input>
  <p className="attribute">Quantity :</p><input type="text" className="ip" placeholder ="Enter the Quantity " id="qty"onChange={(e)=>setQuantity(e.target.value)} required></input>
  <p className="attribute">Upload Photos : </p><input type="file" className="ip" id="imgip" accept="image/*"onChange={(e)=>setImage(e.target.files[0])}  required></input>
  <p className="attribute">Location : </p><input type="text" className="ip" id="loc"></input><br></br>
  <p className="attribute2"></p><button className="attribute2" type="submit">Post</button>
  <h4><Link to='/'>Logout</Link></h4>
</form>
        </div>
        </>
    );
}
export default Farmers;
