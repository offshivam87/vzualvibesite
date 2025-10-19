import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../HomeComponents/Home'
import Portfolio from '../portfolio/Portfolio'

const MainRoutes = () => {
  return (
    <div className=' bg-black'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      
    </div>
  )
}

export default MainRoutes
