import { createSlice } from "@reduxjs/toolkit";
const initialState=JSON.parse(localStorage.getItem("cart"))||[]
const cartSlice=createSlice({

    name:"cart",
   initialState,
    reducers:{
        addToCart:(state,action)=>{
          const exist=state.find((i)=>i.id===action.payload.id)
          if(exist)
          {
          exist.qty+=1;
          }else
            {
                state.push(
                    {...action.payload,qty:1});
            }
            localStorage.setItem("cart",JSON.stringify(state))
        },
        removeFromCart:(state,action)=>{
            return state.filter(item=>item.id!== action.payload);
        },
        increaseQty:(state,action)=>{ 
         const item=state.find(i=>i.id===action.payload)
           if(item) 
            item.qty=item.qty+1
           
        },
        decreaseQty:(state,action)=>{
            const item=state.find(i=>i.id===action.payload)
             if(item && item.qty>1)
               {  item.qty-=1;

               }
               else{
                return state.filter(i=>i.id!==action.payload)
               }
        }
    }
})

export const {addToCart,removeFromCart,increaseQty, decreaseQty}=cartSlice.actions;
export default cartSlice.reducer;