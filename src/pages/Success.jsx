import React from 'react'
import { useNavigate } from 'react-router-dom'

function Success() {
  const navigate=useNavigate();
  return (
    < div className='font-stretch-50% bg-green-200  w-full h-screen flex  flex-col justify-center items-center'>
        <h1 className='text-5xl  text-blue-800 font-bold'>Congrates</h1>
        <p className='text-4xl   text-blue-800 font-bold '>Order done successfully</p>
    <button 
    className='mt-8 text-white hover:scale-110 bg-blue-700 px-4 py-2 hover:bg-indigo-500 transition delay-150 duration-300 eas-in-out hover:text-white  rounded'
    onClick={()=>{
      navigate('/')
    }}>Go To Home </button>
    </div>
  )
}

export default Success