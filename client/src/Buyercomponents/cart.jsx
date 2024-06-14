import React, { useEffect, useState } from 'react';
import '../Style/cart.css';
import Navigation from './Navigation';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Cart() {
    const [items, setItems] = useState();
    const [count,setCount]=useState(1);
    const [price,setPrice]=useState();
    useEffect(()=>{
        axios.post("http://localhost:3000/cart").then(result=>setItems(result.data)).catch(err=>console.log(err))
    })

    const calculateTotal = (item) => {
        return item.price * item.quantity;
    };

    return (
        <>
            <div className="nav">
                <Navigation />
            </div>
            <div className="cart-container">
                {items.map(item=>{
                    return(
                        <>
                            <div  key={item.name}className="product">
                <img
                    src={item.productImage}
                    
                    alt="Product"
                    className="product-image"
                    id="img"
                    />
  
                 

                        <h4 id="name">{item.name}</h4><br />
                        <h4 id="price">Price:{price}</h4><br />
                        <h4 id="count">Total Items:{count}</h4>
                        <button onClick={e=>{
                            setCount(count+1)
                            setPrice(price)
                        }}>Add</button>
                </div>
    
                        </>
                    )
                })}
            </div>
        </>
    );
}

export default Cart;
