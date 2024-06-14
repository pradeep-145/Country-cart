import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const otpVerify = () => {
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/otpverification",{otp}).then(result=>{
            if(result.data=="success")
                navigate('/home')
            else{

                alert('Incorrect OTP')
                location.reload()
            }
        })

    }
    const [otp,setOtp]=useState()
  return (
    <div>
        <h1>Country Cart</h1><br />
        <input type="text" name='otp'onChange={e=>setOtp(e.target.value)}/>
        <button type='submit' onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default otpVerify