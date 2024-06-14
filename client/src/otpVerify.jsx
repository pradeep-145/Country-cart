import React, { useState } from 'react'
import axios from 'axios'
import './otp.css'
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
    <div className='text-center m-5-auto'>
        <form >

        <h1>Country Cart</h1><br />
        <p>You're trying to login to Country Cart , Please Enter the otp sent to your mail...</p>
        <input type="number" name='otp'  maxLength='6'onChange={e=>setOtp(e.target.value)} placeholder='Enter Otp'/> <br />
        <button type='submit' onClick={handleSubmit}>SUBMIT</button>
        </form>
    </div>
  )
}

export default otpVerify