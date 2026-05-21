import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { authState } from "../types/type";

const initialState: authState = {
  email: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ email: string }>) {
      state.email = action.payload.email;
      state.isAuth = true;
    },
    logout(state) {
      state.email = null;
      state.isAuth = false;
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
