
import Section from '../portfolio/Section'
import React from 'react'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import ContactForm from '../HomeComponents/ContactForm'
import Footer from '../HomeComponents/Footer'

const Portfolio = () => {
  return (
    <div>
      <Section/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <ContactForm/>
      <Footer/>
      
    </div>
  )
}

export default Portfolio
