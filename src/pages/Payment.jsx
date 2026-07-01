import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
function Payment() {
  const { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();
  const data = localStorage.getItem("checkoutDat");
  const cart = useSelector((state) => state.cart);
  const Total = cart.reduce((acc, item) => acc + item.price, 0);
  const [method, setMethod] = useState("");
  const[upiApp,setUpiApp]=useState("");
  const[upiId,setUpiId]=useState("");
  const[cardNumber,setCardNumber]=useState("");
  const[expiry,setExpiry]=useState("");
  const[cvv,setCvv]=useState("");
  const handleClick = () => {
    if (!method) {
      alert("Please Select any one method");
      return;
    }
    navigate("/success");
    localStorage.removeItem("cart");
  };
  return(
    <>
      <div className=" w-full min-h-screen bg-gray-100">
       {/* user Info */}
        <div className="bg-white shadow-md rounded-lg ">
          <h1 className="text-2xl mb-4 font-bold">Shipping Details</h1>
          <p className=" text-lg"><span className="font-semibold">Name:</span>{state.data.name}</p>
          <p className=" text-lg"><span className="font-semibold">
            Address:</span> {state.data.address}
          </p>
          <p className="text-lg"><span className="font-semibold">Phone:</span>{state.data.phone}</p>
          <div className="bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-3 "> Your Cart</h2>
          {cart.map((item) => (
            <div className=" flex items-center justify-between space-x-2 mb-3  " key={item.id}>
              <img
                className=" mb-2 rounded object-cover w-20 h-20 "
                src={item.image}
                alt="image"
              />

              <p className="text-lg font-semibold "> {item.name}</p>
              <p className="text-lg  font-semibold "> {item.price}</p>
             <p className="text-lg">Qty: {item.qty}</p> 
            
            </div>
          ))}
        {<p className="mt-6 text-2xl font-bold">Total:{Total}</p>}

          </div>
          
        </div>
    
      {/* Payment Method */}
      <div className="  bg-white shadow-lg rounded p-6">
        <h1 className="text-3xl font-bold mb-4 ">Payment Method</h1>
        <div className="space-y-3">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="COD"
            checked={method === "COD"}
            onChange={(e) => setMethod(e.target.value)}
          />
         <span> Cash On Delivery(COD)</span>
        </label>
        <label className="flex items-center space-x-2" >
          <input
            type="radio"
            value="upi"
            checked={method === "upi"}
            onChange={(e) => setMethod(e.target.value)}
          />
         <span> UPI</span>
        </label>
        {method === "upi" && (
          <div className=" ml-5  flex flex-col space-y-3" >
          <label className="flex items-center gap-2">
            <input type="radio" name="upiApp" value={upiApp} 
            onChange={(e)=>setUpiApp(e.target.value)} />
            <span >Gpay</span>
            </label>
            <label className="flex items-center gap-2">
            <input type="radio"  name="upiApp" value={upiApp}
            onChange={(e)=>setUpiApp(e.target.value)} />
            <span >Phonepay</span>
            </label>
            <label className="flex items-center gap-2">
            <input type="radio"  name="upiApp" value={upiApp}
            onChange={(e)=>setUpiApp(e.target.value)}/>
            <span >Bhim</span>
            </label>
            <input type="text"
            placeholder="Enter your UPI ID" 
            value={upiId}
            onChange={(e)=>setUpiId(e.target.value)}
            className="border rounded px-3 py-2 mt-3 w-64"/>
          </div>)}

        <label className= "flex items-center">
          <input
            type="radio"
            value="card"
            checked={method === "card"}
            onChange={(e) => setMethod(e.target.value)}
          />
         <span> Card Payment</span>
        </label>
        { method === "card" && ( 
          <div className="flex space-x-2 " >
<input className="border-2  px-4 py-1 " type="number" placeholder="cardNumber"
value={cardNumber} 
onChange={(e)=>setCardNumber(e.target.value)} />
<input  className="border-2  px-4 py-1 " type="date" value={expiry} onChange={(e)=>setExpiry(e.target.value)}/>
<input className="border-2  px-4 py-1 " type="number" placeholder="Cvv" value={cvv} onChange={(e)=>setCvv(e.target.value)} />
          </div>)}
        <button
          onClick={handleClick}
          className="text-white bg-blue-700 px-4 py-2"
        >
          Paynow
        </button>
        </div>
          </div>
      </div>
    </>
  );
}

export default Payment;
