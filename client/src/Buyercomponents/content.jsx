import React, { useState } from 'react';
import '../Style/content.css';
import Navigation from './Navigation';
import axios from 'axios'
import { useEffect } from 'react';
const Content=()=> {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/content').then(result=>setProducts(result.data))
    .catch(err=> console.log(err))
  })
  const handleCart=(id)=>{
    
      axios.post('http://localhost:3000/cart',{id})
      .catch(err=>console.log(err))

  }
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
                        <button onClick={handleCart(item._id)}>Add To Cart</button>
                </div>
    
          );
        
        })}        
            
        </div>
                </>
    );
}

export default Content;
