import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './HomeComponents/Home'
import RecentVideos from './HomeComponents/RecentVideos'
import Test from './HomeComponents/Test'
import ClientResults from './HomeComponents/ClientResults'
import How from './HomeComponents/How'
import Brands from './HomeComponents/Brands'
import Testimonial from './HomeComponents/Testimonial'
import ContactForm from './HomeComponents/ContactForm'

const App = () => {
  return (
    <div className='bg-black w-full h-screen '>
      <div>
      <Navbar/>
      <Home/>
      <RecentVideos/>
      <ClientResults/>
      <How/>
      <Brands/>
      <Testimonial/>
      <ContactForm/>
      </div>
    
      
    </div>
  )
}

export default App
