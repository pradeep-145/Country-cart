import { useState } from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Content from './Buyercomponents/content'
import Home from './Buyercomponents/HomePage'
import './Style/App.css'
import Cart from './Buyercomponents/cart'
import Landing from './Buyercomponents/LandingPage'
import Login from './Buyercomponents/LoginPage'
import Register from './Buyercomponents/RegisterPage'
import ForgotPass from './Buyercomponents/ForgetPasswordPage'
import Farmers from './Farmercomponents/Farmers'
import FarmerLogin from './Farmercomponents/LoginPage'
import FarmerRegister from './Farmercomponents/RegisterPage'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>      
        <Route path='/home' element={<Home />}></Route>      
        <Route path='/login' element={<Login />}></Route>      
        <Route path='/register' element={<Register />}></Route>      
        <Route path='/forgot' element={<ForgotPass />}></Route>      
      <Route path='/content' element={<Content />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path="/cart/:data" component={<Cart />} />
      <Route path="/farmers" element={<Farmers />} />
      <Route path="/flogin" element={<FarmerLogin />} />
      <Route path="/fregister" element={<FarmerRegister />} />


      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
