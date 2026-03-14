import React from 'react'
import { motion } from 'framer-motion'

const Testimonial = () => {
  const testimonials = [
    "https://ik.imagekit.io/vzualvibe/testimonial/Beige%20Reminder%20Notification%20Tweet%20Instagram%20Post%20(3).png?updatedAt=1760365628333",
    "https://ik.imagekit.io/vv2/Beige%20Reminder%20Notification%20Tweet%20Instagram%20Post%20(5).png?updatedAt=1761070608401",
    "https://ik.imagekit.io/vv2/Beige%20Reminder%20Notification%20Tweet%20Instagram%20Post%20(6).png?updatedAt=1761070933556"
  ];

  return (
    <div className='bg-black pb-10 md:pb-0'>
      {/* Heading with blur fade-in */}
      <motion.h1 
        initial={{ opacity: 0, filter: "blur(10px)", y: -30 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl text-white font-poppins-bold text-center md:mb-0 md:text-6xl"
      >
        Clients Testimonials
      </motion.h1>

      <div className="w-full min-h-[70vh] mt-10">
        <div className="cards w-[98vw] mx-auto flex flex-col md:flex-row justify-center gap-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100,  }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                ease: "easeIn"
              }}
              
              className="img w-full md:w-[30vw] md:h-[60vh] h-[40vh] cursor-pointer"
            >
              <motion.img 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={testimonial}
                alt="Client testimonial" 
                className='w-full h-full object-contain' 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
