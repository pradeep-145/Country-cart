import React from "react"
import '../Style/Navi.css'
import logo from '/Country_Cart_Logo.png'
function Navigation(){
    return (
        <nav>   
        <ul>
            <li>
                <a href="/home">
                <img src={logo} alt="Logo"></img>
            </a>
            </li>
            <li>
                <a href="/">
                <img src="/switch.png">

                </img>
                    </a>
            </li>
            
            <li>
                <a href="#footer">Contact Us</a>
            </li>
            <li>
              <a href="/Content">Content</a>
            </li>
            <li className="right">
              <a href="/home">Home</a>
            </li>
            </ul>
         </nav>
    )
}

export default Navigation;