import { createSlice } from "@reduxjs/toolkit";

const initialState={
  cart:[]

}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,

    reducers:{
        addToCart(state , action){
            state.cart.push(action.payload);
        },
        deleteFromCart(state , action){
           state.cart = state.cart.filter((item)=>item.pizzaId != action.payload)
        },
        increaseQuantity(state , action){
           const item = state.cart.find((item)=>item.pizzaId === action.payload);
           item.quantity++;
           item.totalPrice = item.quantity * item.unitPrice
        },
        decreaseQuantity(state , action){
            const item = state.cart.find((item)=>item.pizzaId === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice

            if(item.quantity === 0){
                cartSlice.caseReducers.deleteFromCart(state , action);
            }
        },
        clearCart(state){
            state.cart=[];
        },
    }
})

export const {addToCart , deleteFromCart , increaseQuantity , decreaseQuantity , clearCart} = cartSlice.actions;
export default cartSlice.reducer;


export const getCart=(state)=>state.cart.cart;
export const getTotalQuantity=(state)=>state.cart.cart.reduce((sum , item)=>sum+item.quantity,0);
export const getTotalPrice=(state)=>state.cart.cart.reduce((sum , item)=>sum+item.totalPrice,0)
export const getCurrentQuantity = (id) => (state) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
  