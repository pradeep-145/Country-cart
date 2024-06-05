import React, { useState } from 'react';
import '../Style/content.css';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import Cart from './cart';
import Data from'./data';
import axios from 'axios'
import { useEffect } from 'react';
const Content=()=> {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/content').then(result=>setProducts(result.data))
    .catch(err=> console.log(err))
  })
    return (
      <>
      <div className='nav'>
        <Navigation />
      </div>
        <div className="product-display">
        {Data.map(({id,name,price,image}) => {
          return (

            <div key={id} className="product">
                <img
                    src={image}
                    alt="Product"
                    className="product-image"
                    id="img"

                    />
                  <div className="description-box">

                        <h4 id="name">{name}</h4>
                        
                        <p id="price">{price}</p>
                        <button>Add To Cart</button>
                    </div>  
                </div>
    
          );
        
        })}        
            
        </div>
                </>
    );
}

export default Content;
