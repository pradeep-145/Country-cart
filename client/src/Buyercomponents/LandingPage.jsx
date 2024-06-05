import React from 'react'
import { Link } from 'react-router-dom'

import '../Style/register.css'


export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
                <div className="logo"><img src="Country_Cart_Logo.png" className="logoicon"></img></div>
<div className="login">
            <div className="buttons text-center">

             <div>
            <div id="userspan">BUYER</div></div>
            <div><br /><br /><br /><br /><br /><br /></div> 
                <Link to="/login">
                    <button className="primary-button" id="login_btn"><span>log in</span></button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>

            </div>
            <div className="buttons text-center">
                <div>
            <div id="farmerspan">VENDOR</div></div>
            <div><br /><br /><br /><br /><br /><br /></div> 
            <div></div>
                <Link to="/flogin">
                    <button className="primary-button" id="login_btn"><span>log in</span></button>
                </Link>
                <Link to="/fregister">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
            </div>
        </header>
    );
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: '#fff',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}