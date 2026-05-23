import { createSlice } from "@reduxjs/toolkit";
import type { CartItem } from "../types/type";
import type { AlltourType } from "../../AllTours/types/type";
import type { PayloadAction } from "@reduxjs/toolkit";


const userId = localStorage.getItem("userId");

const saveCart = (state: CartItem[]) => {
  const currentUserId = localStorage.getItem("userId");
  if (currentUserId) {
    localStorage.setItem(`cart_${currentUserId}`, JSON.stringify(state));
  }
};


const initialState: CartItem[] = userId
  ? JSON.parse(localStorage.getItem(`cart_${userId}`) || "[]")
  : [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AlltourType>) => {
      const item = action.payload;
      const existingItem = state.find((el) => el.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...item, quantity: 1 });
      }
      saveCart(state);
    },
    increment: (state, action: PayloadAction<number>) => {
      const item = state.find((el) => el.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      saveCart(state);
    },
    decrement: (state, action: PayloadAction<number>) => {
      const item = state.find((el) => el.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          saveCart(state);
          return;
        }
        const newState = state.filter((el) => el.id !== action.payload);
        saveCart(newState);
        return newState;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const newState = state.filter((el) => el.id !== action.payload);
      saveCart(newState);
      return newState;
    },
    clearCart: () => {
      const currentUserId = localStorage.getItem("userId");
      if (currentUserId) {
        localStorage.removeItem(`cart_${currentUserId}`);
      }
      return [];
    },
  },
});

export const { addToCart, increment, decrement, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;