import React, { useState } from "react";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import { BiSolidCart } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/searchSlice";
import { logout } from "../redux/loginSlice";
function Navbar() {
  const navigate = useNavigate();
  const search = useSelector((state) => state.search);
  const cart = useSelector((state) => state.cart);
  const {isLoggedIn,userName} = useSelector((state) => state.login);
  const dispatch = useDispatch();
  
  return (
    <div className="pt-8 h-20 shadow-2xl p-2 bg-blue-300 flex justify-between items-center">
      <div className=" px-5 py-1 shadow-2xl bg-blue-300">
        <img
          className="rounded z-20 w-22 h-12 object-cover"
          src={logo}
          alt="logo"
        />
      </div>
      <div className=" px-2 border-2 flex  items-center rounded-lg w-225">
        <CiSearch size={25} className="" />
        <input
          className=" outline-none rounded-lg  w-full py-2 px-4 "
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        {search && (
          <MdCancel
            size={25}
            className="text-blue-700 cursor-pointer"
            onClick={() => dispatch(setSearch(""))}
          />
        )}
      </div>

      <ul className="flex gap-4 font-bold  p-3">
        <li className="flex flex-col gap-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-blue-800"
            }
            to="/"
          >
            Home
          </NavLink>
          <IoHomeOutline size={35} />
        </li>
        <li className="flex flex-col justify-center items-center ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-green-700" : "text-blue-800"
            }
            to="/cart"
          >
            Cart
          </NavLink>

          <div className="  mb-2 absolute z-10 py-6  text-red-700  text-center rounded-full font-bold">
            {cart.length}
          </div>
          <BiSolidCart
            size={35}
            className="relative  z-20 h-15 top-o right-0 "
          />
        </li>
        {isLoggedIn ? (
          <div className="flex justify-center items-center">
            <p className="font-semibold px-4 ">Hello {userName}</p>
            <button
              className="bg-blue-800 text-white px-4 py-2   rounded"
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <li>
            <NavLink to="/login">
              <button className="bg-blue-800 text-white px-4 py-2 rounded">
                Login
              </button>
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
