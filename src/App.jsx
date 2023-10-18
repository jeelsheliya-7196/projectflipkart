import React from 'react'
import Header from './Component/Header/Header'
import { Route, Routes } from 'react-router'
import ViewProduct from './Component/ViewProduct/ViewProduct'
import Electronic_product from './Component/ElectronicshowProduct/Electronic_product'
import AddToCart from './Component/AddToCart/AddToCart'
import Skin_Care from './Component/SkinCare/SkinCare'
import Home_kitchen from './Component/Home&Kitchen/Home_kitchen'
import LogIn from './Component/LogIn/LogIn'
import SignUp from './Component/SignUp/SignUp'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<ViewProduct />} />
        <Route path='/electronic_show' element={<Electronic_product />} />
        <Route path='/skin_care' element={<Skin_Care />} />
        <Route path='/home_kitchen' element={<Home_kitchen />} />
        <Route path='/cart' element={<AddToCart />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App