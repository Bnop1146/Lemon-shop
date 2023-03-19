import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart(state, action) {
        const item = action.payload;
        const existingItemIndex = state.cartItems.findIndex(cocktail => cocktail.idDrink === item.idDrink);
        
        if (existingItemIndex >= 0) {
          state.cartItems[existingItemIndex].cartQuantity += 1;
        } else {
          const newItem = {...item, cartQuantity: 1};
          state.cartItems.push(newItem);
        }
      },
      removeFromCart(state, action){
        const nextCartItems = state.cartItems.filter(
          cartItem => cartItem.idDrink !== action.payload.id
        )

        state.cartItems = nextCartItems;
        
      },
      decreaseCart(state, action){
        const item = state.cartItems.findIndex(cocktail => cocktail.idDrink === action.payload.idDrink)

        if(state.cartItems[item ].cartQuantity >1){
          state.cartItems[item].cartQuantity -=1
        } 
        else if (state.cartItems[item].cartQuantity === 1) {const nextCartItems = state.cartItems.filter(
          cartItem => cartItem.idDrink !== action.payload.idDrink
        )

        state.cartItems = nextCartItems;
        }
      },
      clearCart(state, action){
        state.cartItems = [];
      }
    },
  });
  

export const { addToCart, removeFromCart, decreaseCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;