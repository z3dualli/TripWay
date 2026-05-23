import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { authState } from "../types/type";

const initialState: authState = {
  email: null,
  isAuth: false,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ email: string, role: string}>) {
      state.email = action.payload.email;
      state.isAuth = true;
      state.role = action.payload.role;
    },
    logout(state) {
      state.email = null;
      state.isAuth = false;
      state.role = null
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("cart");
      localStorage.removeItem("role")
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
