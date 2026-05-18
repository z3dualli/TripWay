import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../pages/Cart/model/cartSlice'
import authReducer from '../pages/Auth/model/AuthSlice'

const loadCart = () => {
  try{
    return JSON.parse(localStorage.getItem('cart') || '[]')
  } catch {
    return []
  }
}
 
export default loadCart;

export const store = configureStore({
  reducer: {
    cart: cartReducer, 
    auth: authReducer
  },
  preloadedState: {
    cart: loadCart()
  }

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch