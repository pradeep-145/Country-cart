import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../Style/register.css'

export default function SignInPage() {
    const [email,setEmail]=useState();
        const [password,setPass]=useState();
        const navigate=useNavigate();
        const handleSubmit=(e)=>{
            e.preventDefault(); 
            axios.post('http://localhost:3000/login',{email,password}).then(result=>{
            console.log(result)
            if(result.data=="success")
            navigate('/home');
        
        })
            .catch(err=>console.log(err))
           
        }
    return (
        <div className="text-center m-5-auto">
            <h2>Sign In</h2><br></br>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required  onChange={(e)=>setEmail(e.target.value)}/>
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forgot"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" onChange={(e)=>setPass(e.target.value)} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
