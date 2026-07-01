import React, { useEffect } from "react";
import { setLogin } from "../redux/loginSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const login = useSelector((state) => state.login.isLoggedIn);
  const navigate = useNavigate();

  const clickLogin = () => {
    console.log("loginbutton click");
    if (!name.trim()) {
      alert("Please Enter Name first");

      return;
    }
    dispatch(setLogin({ userName: name, isLoggedIn: true }));
    console.log("after dispatch");

    navigate("/cart", { replace: true });
    setName("");
  };
  console.log("login", login);

  return (
    <div className=" bg-gray-200 min-h-screen  flex justify-center items-center">
      <div className="p-6 bg-white  min-h-75 rounded shadow-lg   mx-auto flex flex-col items-center pt-10  gap-6   ">
        <h1 className="font-bold text-3xl mb-3  text-blue-600">LogIn</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-1 mb-6 "
          onKeyDown={(e) => e.key === "Enter" && clickLogin()}
        />
        <button
          className=" text-lg bg-blue-800 px-6  py-1 rounded text-white  hover:scale-95"
          onClick={clickLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
