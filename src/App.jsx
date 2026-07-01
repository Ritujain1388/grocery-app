import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { groceryProducts } from "./groceryProduct"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { useState } from "react"
import { useSelector } from "react-redux"
import Login from "./pages/Login"
import ProtectRoute from "./components/ProtectRoute"
import CheckOut from "./pages/CheckOut"
import Payment from "./pages/Payment"
import Success from "./pages/Success"
function App() {
  const search=useSelector((state)=>state.search)
 
  
  

  return (
    <>
    <Navbar   />
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/cart' element=
{<ProtectRoute><Cart /></ProtectRoute>}/>
<Route path='/login' element={<Login />}/>
<Route path='checkout' element={<CheckOut/>}/>
<Route path='/payment' element={<Payment />}/>
<Route path='/success' element={<Success />}/>


      
   
    </Routes>
    </>
  )
}

export default App
