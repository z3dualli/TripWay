import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './widgets/Header/Header'
import { MainPage } from './pages/MainPage'
import { AllTours } from './pages/AllTours'
import { Cart } from './pages/Cart'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { LoginPage, RegisterPage } from './pages/Auth'


function App() {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route element={<RegisterPage/>} path='/register'/>
          <Route element={<LoginPage/>} path='/login'/>
          <Route element={<MainPage/>} path='/'/>
          <Route element={<AllTours/>} path='/alltours'/>
          <Route element={<Cart/>} path='/cart'/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
