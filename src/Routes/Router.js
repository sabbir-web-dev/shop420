import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navber from '../Components/Naveber/Navber'
import Error from '../Pages/Error'
import LoginPage from '../Pages/LoginPage'
import Shop from '../Pages/Shop'
import Revew from '../Pages/Revew'
import Inventory from '../Pages/Inventory'
import SherchVer from '../Components/Searchber/SherchVer'

function Routers() {
  return (
    <>
      <BrowserRouter>
      <Navber />
      <SherchVer />
        <Routes>
          <Route path='/' element={<Shop />} />  
          <Route path='/revew' element={<Revew />} />  
          <Route path='/inventory' element={<Inventory />} />  
          <Route path='/login-page' element={<LoginPage />} />  
          <Route path='*' element={<Error />} />  
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default Routers
