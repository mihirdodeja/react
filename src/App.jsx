import React from 'react'
import Form from './pages/Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './layout/Header'
import Home from './pages/Home'
import Register from './pages/Register'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/MembershipForm' element={<Form/>}/>
        <Route path='/MembershipForm' element={<Form/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
        <ToastContainer/>
    </BrowserRouter>
  ) 
}

export default App

