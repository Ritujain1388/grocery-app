import { createSlice } from "@reduxjs/toolkit";

 const initialState=JSON.parse(localStorage.getItem("user"))||{
        userName:"",
        isLoggedIn:false
    }
const loginSlice=createSlice({
    name:"login",
    initialState,
    reducers:{
        setLogin:(state,action)=>{
         localStorage.setItem("user",JSON.stringify(action.payload))  
            return action.payload
        },
        logout:()=>{
            localStorage.removeItem("user");
        return{ userName:"",isLoggedIn:false}     }
    }

})

export const {setLogin,logout}=loginSlice.actions;
export default loginSlice.reducer;