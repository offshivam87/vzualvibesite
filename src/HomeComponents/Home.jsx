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
const Home = () => {
  return (
    <div className=' md:pt-[25vh] pt-[18vh]'>
        <Heading/>
        <RecentVideos/>
      <ClientResults/>
      <How/>
      <Brands/>
      <Testimonial/>
      <ContactForm/>
     <Footer/>
     <Portfolio/>
        
      
    </div>
  )
}

export default Home
