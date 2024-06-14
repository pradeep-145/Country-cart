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
                    src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/04/ash-gourd-1296x728-header.jpg?w=1155&h=1528'
                    
                    alt="Product"
                    className="product-image"
                    id="img"
                    />
  
                  <div className="description-box">

                        <h4 id="name">{item.name}</h4>
                        
                        <p id="price">{item.productPrice}</p>
                        <button onClick={handleCart(item._id)}>Add To Cart</button>
                    </div>  
                </div>
    
          );
        
        })}        
            
        </div>
                </>
    );
}

export default Content;
