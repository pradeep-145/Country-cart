import React, { useState } from 'react';
import '../Style/content.css';
import Navigation from './Navigation';
import axios from 'axios'
import { useEffect } from 'react';
const Content=()=> {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    axios.get('https://countrycart.onrender.com/content').then(result=>setProducts(result.data))
    .catch(err=> console.log(err))
  })
  
    return (
      <>
      <div className='nav'>
        <Navigation />
      </div>
        <div className="product-display">
        {products.map(item => {
          return (
              
            <div  key={item._id}className="product">
                <img
                    src={item.productImage}
                    alt="Product"
                    className="product-image"
                    id="img"
                    />
                        <h4 id="name">{item.name}</h4><br />
                        <h4 id="price">Price:{item.produtPrice}</h4><br />
                        <h4 id="quantity">Available:{item.produtQuantity}</h4><br />
                        <button >Buy Now!</button>
                </div>
    
          );
        
        })}        
            
        </div>
                </>
    );
}

export default Content;
