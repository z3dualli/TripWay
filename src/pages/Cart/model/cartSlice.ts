import { createSlice,  } from "@reduxjs/toolkit";
import type { CartItem } from "../types/type";
import type { AlltourType } from "../../AllTours/types/type";
import type { PayloadAction } from "@reduxjs/toolkit";

const saveCart = (state: CartItem[])=> {
  localStorage.setItem("cart", JSON.stringify(state))
}

const initialState: CartItem[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState, 
  reducers: {
    addToCart: (state, action: PayloadAction<AlltourType>) => {
      const item = action.payload

      const existingItem = state.find(el => el.id === item.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.push({...item, quantity: 1})
      }
      saveCart(state)
    }, 
    increment: (state, action: PayloadAction<number>) => {
      const item = state.find(el => el.id === action.payload)

      if (item) {
          item.quantity += 1
      }
      
      saveCart(state)
    }, 
    decrement: (state, action: PayloadAction<number>) => {
      const item = state.find(el => el.id === action.payload)

      if (item) {
        if (item.quantity > 1) {
          item.quantity -=1
        } else {
          return state.filter(el => el.id !== action.payload)
        }
      }
      saveCart(state)
    }, 
    removeFromCart: (state, action: PayloadAction<number>) => {
      const newState =  state.filter(el => el.id !== action.payload)
      saveCart(newState)
      return newState
    },
  }
})

export const {
  addToCart,
  increment, 
  decrement, 
  removeFromCart, 
} = cartSlice.actions

export default cartSlice.reducer