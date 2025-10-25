import React from 'react'
import Heading from './Heading'
import RecentVideos from '../HomeComponents/RecentVideos'

import ClientResults from '../HomeComponents/ClientResults'
import How from '../HomeComponents/How'
import Brands from '../HomeComponents/Brands'
import Testimonial from '../HomeComponents/Testimonial'
import ContactForm from '../HomeComponents/ContactForm'
import Footer from '../HomeComponents/Footer'
import Portfolio from '../portfolio/Portfolio'
import AboutUs from './Aboutus'
const Home = () => {
  return (
    <div className=' md:pt-[25vh] overflow-y-hidden overflow-x-hidden pt-[18vh]'>
        <Heading/>
        <RecentVideos/>
      <ClientResults/>
      <How/>
      <Brands/>
      <Testimonial/>
      
     <Footer/>
     
     
        
      
    </div>
  )
}

export default Home
