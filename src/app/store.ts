import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../pages/Cart/model/cartSlice'

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
    cart: cartReducer
  },
  preloadedState: {
    cart: loadCart()
  }

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch