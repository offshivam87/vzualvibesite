import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './HomeComponents/Home'
import RecentVideos from './HomeComponents/RecentVideos'
import Test from './HomeComponents/Test'

const App = () => {
  return (
    <div className='bg-black w-full h-screen '>
      <div>
      <Navbar/>
      <Home/>
      <RecentVideos/>
      {/* <Test/> */}
      </div>
    
      
    </div>
  )
}

export default App
