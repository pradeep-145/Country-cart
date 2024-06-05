import React, { useState } from 'react';
import '../Style/cart.css';
import Navigation from './Navigation';
import { useParams } from 'react-router-dom';

function Cart({ data = [] }) {
    const [items, setItems] = useState(data);

    // Function to handle quantity change
    const handleQuantityChange = (index, action) => {
        const updatedItems = [...items];
        if (action === 'increment') {
            updatedItems[index].quantity += 1;
        } else if (action === 'decrement' && updatedItems[index].quantity > 1) {
            updatedItems[index].quantity -= 1;
        }
        setItems(updatedItems);
    };

    // Function to calculate total price for an item
    const calculateTotal = (item) => {
        return item.price * item.quantity;
    };

    return (
        <>
            <div className="nav">
                <Navigation />
            </div>
            <div className="cart-container">
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(items) && items.length > 0 ? (
                            items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>
                                        <button onClick={() => handleQuantityChange(index, 'decrement')}>-</button>
                                        {item.quantity}
                                        <button onClick={() => handleQuantityChange(index, 'increment')}>+</button>
                                    </td>
                                    <td>${calculateTotal(item).toFixed(2)}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No items in cart</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Cart;
