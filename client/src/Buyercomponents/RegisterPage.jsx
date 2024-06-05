import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import '../Style/register.css'

export default function SignUpPage() {
        const [name,setName]=useState();
        const [email,setEmail]=useState();
        const [password,setPass]=useState();
        const navigate=useNavigate()
        const handleSubmit=(e)=>{
            e.preventDefault(); 
            axios.post('http://localhost:3000/register',{name,email,password}).then(result=>{console.log(result)
        navigate('/login')})
            .catch(err=>console.log(err))
        }
    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2><br></br>
            <h5>Create your personal account</h5><br></br>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name"  onChange={(e)=>setName(e.target.value)}/>
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email"  onChange={(e)=>setEmail(e.target.value)}/>
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password"   onChange={(e)=>setPass(e.target.value)} />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                   <input type='submit' id='sub-btn' value='Register' ></input>
                </p>
            </form>
            <footer>
                <p><Link to="/login">click to login</Link>.</p>
            </footer>
        </div>
    )

}
