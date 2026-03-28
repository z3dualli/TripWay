import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './widgets/Header/Header'
import { MainPage } from './pages/MainPage'
import { AllTours } from './pages/AllTours'

function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route element={<MainPage/>} path='/'/>
        <Route element={<AllTours/>} path='/alltours'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
