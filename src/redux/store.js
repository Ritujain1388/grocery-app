import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import searchReducer from './searchSlice'
import loginReducer from './loginSlice'
export const store=configureStore({
    reducer:{
        cart:cartReducer,
         search:searchReducer,
         login:loginReducer,
        
}})


