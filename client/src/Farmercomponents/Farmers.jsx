import React , {Fragment, useState} from "react";
import '../FarmerStyle/Farmers.css';
import {Link } from 'react-router-dom'
import axios from 'axios'
const Farmers = () => {

    const [Location,setLocation]=useState()
    const [name , setName]=useState()
    const [produtDesc,setDesc]=useState()
    const [produtPrice,setPrice]=useState()
    const [produtQuantity,setQuantity]=useState()
    const [productImage,setImage]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault(); 
        
        
        axios.post('http://localhost:3000/farmers',{Location,name,produtDesc,produtPrice,produtQuantity,productImage}).then(result=>{console.log(result)
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
    <p className="attribute1">Product Details</p>
   <p className="attribute">Choose Vegetable : </p>
    <select name="image" id="image" className="img" onChange={(e)=>{setImage(e.target.value);
        setName(e.target.options[e.target.selectedIndex].text)
    }}>
    <option >SELECT vegetable</option>
    <option value="https://images.app.goo.gl/fbpM73K3i9nQVQzBA">Greens</option>
    <option value="https://img1.exportersindia.com/product_images/bc-full/2020/5/6392633/fresh-drumsticks-1589454780-5430759.jpeg">Drumstick</option>
    <option value="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/04/ash-gourd-1296x728-header.jpg?w=1155&h=1528">Ash gourd</option>
    <option value="https://images.app.goo.gl/RcgWVpGC8msRLmED6">Beet root</option>
    <option value="https://images.app.goo.gl/cxmxsSJLMnRapZKE8">Bitter gourd</option>
    <option value="https://images.app.goo.gl/nWHgZTfKyia8bg3x7">Bottle gourd</option>
    <option value="https://images.app.goo.gl/tBGRtARPGrV6YFci6">Brinjal.</option>
  </select>
  
   
  <br></br>
    
    <p className="attribute">Description : </p><input className="ip" placeholder="Enter the Description"onChange={(e)=>setDesc(e.target.value)}/>
    <p className="attribute">Price :</p><input type="text" className="ip" placeholder ="Enter the Price " id="pr"onChange={(e)=>setPrice(e.target.value)} required></input>
    <p className="attribute">Quantity :</p><input type="text" className="ip" placeholder ="Enter the Quantity " id="qty"onChange={(e)=>setQuantity(e.target.value)} required></input>
    <p className="attribute">Location : </p><input type="text" className="ip" id="loc" onChange={(e)=>setLocation(e.target.value)}></input><br></br>
    <p className="attribute2"></p><button className="attribute2" type="submit">Post</button>
    <h4><Link to='/'>Logout</Link></h4>
    </form>
        </div>
        </>
    );
}
export default Farmers;
