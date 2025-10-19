import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './HomeComponents/Home'

import Portfolio from './portfolio/Portfolio'
import MainRoutes from './Route/MainRoutes'


const App = () => {
  return (
    <div className='bg-black  '>
      
      <Navbar/>
      <MainRoutes/>
      
     
    </div>
  )
}

export default App
