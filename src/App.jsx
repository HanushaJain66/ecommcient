import React from 'react'
import Createprod from './Components/admin/Createprod'
import './Styles/App.css'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './Components/Signup';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import Prodcat from './Components/Prodcat';
import Cart from './Components/Cart';
import Items from './Components/Items';
import Placeorder from './Components/Placeorder';
const App = () => {
  return (
    // <div>App</div>


    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Createprod />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products/:cat' element={<Prodcat />} />
        <Route path='/items/:id' element={<Items />} />
        <Route path='/changepassword' element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/orderproduct' element={<Placeorder />} />
      </Routes>
      <Cart />
    </BrowserRouter>
  )
}

export default App