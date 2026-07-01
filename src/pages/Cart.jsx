import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart,increaseQty,decreaseQty } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
function Cart() {
const cart=useSelector(state=>state.cart)

const dispatch=useDispatch();
console.log(cart);
const navigate=useNavigate()
const total=cart.reduce((acc,item)=>acc+item.price*item.qty,0)
  
return (
    <> {cart.length===0?(
      <div className='text-4xl mt-16 ml-16 text-center'>
        <h1 className='font-bold items-center'>Your cart is empty</h1>
    </div>
    ):(
      cart.map((item)=>(
          <div className= " mt-2 p-4 flex items-center rounded-lg  " key={item.id}>
            <img className=' rounded-lg object-cover h-40' src={item.image} alt="image" />
            <div className='flex flex-col p-4   '>
              <p className=' font-semibold p-2 text-2xl'>{item.name}</p>
            <p className='text-2xl'>₹ {item.price}</p>
            <p className='text-xl '> Free Delivery</p>
            </div>
            
            <div className=' rounded-lg  bg-blue-200 text-2xl flex items-center'>
              <button className='mx-3  p-2 rounded bg-blue-400 px-2 py-1 text-white' onClick={()=>dispatch(increaseQty(item.id))}>+</button>
              <span className=' font-bold'>{item.qty}</span>
              <button className='mx-3 p-2 rounded bg-blue-400 px-2 py-1 text-white' onClick={()=>dispatch(decreaseQty(item.id))}>-</button>
            </div>
            <button className="ml-3 bg-blue-500 text-white px-2 font-bold py-1 text-xl rounded" onClick={()=>dispatch(removeFromCart(item.id))}> Remove </button>
        
          </div>
        )
      )

    )
  
    }
    {cart.length!==0?(<>
          <div className='text-2xl font-bold ml-4 text-green-900 border-t-2 mt-4 pt-4 '>Total:  {total}</div>  
<button className='bg-blue-500 rounded-lg mt-3 text-white  px-8 py-2 ' 
    disabled={cart.length===0} onClick={()=>{
      navigate('/CheckOut')
     }}>Proceed To CheckOut</button>
    </>
  ):([])}
    
    
     
    </>
  )
}

export default Cart