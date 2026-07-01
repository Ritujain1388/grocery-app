import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const isValidName=name.trim().length>=3
  const isValidAddress=address.trim().length>=5;
  const isValidPhone=/^[0-9]{10}$/.test(phone);
     const isFormValid=isValidName&&isValidAddress&&isValidPhone
  const handleCheck=() => {
    if(!isFormValid){
      alert("Please enter all details ");
    return;
     }
    const data={name,address,phone};
        localStorage.setItem('checkoutData',JSON.stringify(data));
        console.log(data);
        
          navigate("/Payment",{state:{data}}
            
          );
        }
        
  return (
    <div className="bg-amber-100  w-full min-h-screen flex justify-center items-center">
    <div className="p-8 rounded shadow-lg h-full min-w-75 mx-auto bg-white flex flex-col   justify-center items-center gap-2">
      <h1 className="mb-14 text-4xl text-blue-700 font-bold">Shippin Address</h1>
      <label htmlFor="" className="text-xl ">Enter name
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        className=" border ml-2  px-2 py-1 rounded"
        onChange={(e) => setName(e.target.value)}
      />
    {!isValidName &&<p className="text-red-500">Invalid name</p>}

      </label>
      <label htmlFor="" className=" text-xl">
        Address<input
        type="text"
        placeholder="Address"
        value={address}
        className="border ml-8  px-2 py-1 rounded"
      
        onChange={(e) => setAddress(e.target.value)}
        
      /></label>
     { !isValidAddress &&<p className="text-red-500">Invlaid address</p>} 

           <label htmlFor="" className="text-xl">Phone
      <input type="tel" placeholder="Phone"
        value={phone} className=" ml-9 border px-2 py-1 rounded"
        onChange={(e) => setPhone(e.target.value)} />
        </label>
       {!isValidPhone && <p className="text-red-600">Invalid phone</p> }

      <button
        className= " disabled:bg-gray-400 text-white mt-6 hover:scale-105 transition-all  bg-blue-400 px-4 py-2 rounded"
        onClick={handleCheck}
        disabled={!isFormValid}>
        Proceed to payment
      </button>
    </div>
    </div>
  );
}

export default CheckOut;
