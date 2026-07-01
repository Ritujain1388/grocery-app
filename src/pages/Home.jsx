import React from 'react'
import { useMemo } from 'react'
import { groceryProducts } from '../groceryProduct'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart,removeFromCart } from '../redux/cartSlice'

function Home() {
  const dispatch=useDispatch();
  const search=useSelector((state)=>state.search)
   const cart=useSelector((state)=>state.cart)
  
   
   const filterProduct=groceryProducts.filter((item)=>{
    const value=search.trim().toLowerCase();
   return (value ===""||
    
      item.name.toLowerCase().includes(value.toLowerCase())|| item.category.toLowerCase().includes(value.toLowerCase())
   )

  
})

  return (
    <div className=' min-h-screen w-full max-w-7xl mx-auto p-2 mt-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8 rounded-lg' >
      {filterProduct.map((item)=>{
    const isActive=cart.some((i)=>i.id===item.id)
     return  ( <div className=' w-full min-w-20 mx-auto hover:scale-105 flex flex-col items-center p-4 bg-gray-300  rounded-2xl ' key={item.id}>
          <img className='items-center  h-40 w-full object-cover rounded-2xl' src={item.image} alt="image" />
          <div className='flex justify-between items-center gap-28'>
          <p className='text-2xl font-bold '>{item.name}</p>
          <p className='font-bold text-blue-700  '>₹{item.price}</p>
          </div>
          <p className='text-2xl font-semibold'>{item.category}</p>
          <button   onClick={()=>{ 
            if(isActive)
             {dispatch(removeFromCart(item.id))}
          else { dispatch(addToCart(item))} }} className={`rounded mt-3 ${isActive? "bg-gray-400":"bg-blue-800"}  text-white px-4 py-2  `}>
            {isActive?"removeFromCart":"Add To Cart"}</button>
        </div>
      )})}
     
      
    </div>
  )
}

export default Home