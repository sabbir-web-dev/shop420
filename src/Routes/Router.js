import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navber from '../Components/Naveber/Navber'
import Error from '../Pages/Error'
import LoginPage from '../Pages/LoginPage'
import Shop from '../Pages/Shop'
import Revew from '../Pages/Revew'
import Inventory from '../Pages/Inventory'
import SherchVer from '../Components/Searchber/SherchVer'

function Routers() {
  const [itemCount, setItemCount] = useState(0);
  const [items,setitems] = useState([])


  const itemCounthendeler = (count) => {
    setItemCount(itemCount + 1);
    setitems([{count},...items])
  };

  return (
    <>
      <BrowserRouter>
      <Navber items={itemCount} />
      <SherchVer />
        <Routes>
          <Route path='/' element={<Shop getCount={itemCounthendeler} />} />  
          <Route path='/revew' element={<Revew items={items} />} />  
          <Route path='/inventory' element={<Inventory />} />  
          <Route path='/login-page' element={<LoginPage />} />  
          <Route path='*' element={<Error />} />  
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default Routers
