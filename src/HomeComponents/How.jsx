import React from 'react'
import { motion } from 'framer-motion'

const How = () => {
  const steps = [
    {
      number: "01",
      title: "Share Your Vision",
      description: "You tell us your goals, target audience, and content style. Whether it's short-form reels or brand films — we understand your vibe before we touch a single frame."
    },
    {
      number: "02",
      title: "Upload Your Footage",
      description: "Simply send us your raw clips. We handle everything like organizing, trimming, color grading, and crafting your story from start to finish."
    },
    {
      number: "03",
      title: "We Edit, You Review",
      description: "Our editors bring your ideas to life. You'll get a preview link to review and request changes easily — no messy back-and-forth."
    },
    {
      number: "04",
      title: "Final Delivery, Fast",
      description: "Once approved, your final videos are exported, optimized, and delivered in all formats you need,ready to post and perform."
    },
  ];

  return (
    <div className='bg-black py-10'>
      {/* Heading with blur fade-in */}
      <motion.h1 
        initial={{ opacity: 0, filter: "blur(10px)", y: -30 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-2xl text-white font-poppins text-center mb-10 md:text-6xl md:mb-16"
      >
        Our Simple 4-Step Process
      </motion.h1>

      <div className="bg-black text-white py-5 px-8">
        <div className="max-w-7xl mx-auto md:flex md:gap-12 md:items-start">
          {/* Image Section with slide-in from left */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 md:sticky md:top-10"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="img rounded-2xl w-full h-[25vh] md:w-[42vw] mb-5 md:h-[70vh] md:mb-0"
            >
              <img 
                src="https://ik.imagekit.io/vzualvibe/images/man-edits-video-his-computer.jpg?updatedAt=1760288903707" 
                alt="" 
                className='w-full h-full object-cover rounded-2xl' 
              />
            </motion.div>
          </motion.div>

          {/* Steps Section with stagger animation */}
          <div className="md:w-1/2">
            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: "easeOut" 
                  }}
                >
                  <motion.div 
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <motion.span 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.15 + 0.2,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="text-white text-[1.3rem] font-poppins"
                      >
                        {step.number}
                      </motion.span>
                    </div>

                    <div>
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.15 + 0.1 
                        }}
                        className="text-xl md:text-2xl font-poppins mb-2"
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.15 + 0.2 
                        }}
                        className="text-gray-400 text-sm font-poppins leading-relaxed"
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </motion.div>
                  {index < steps.length - 1 && (
                    <motion.hr 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.15 + 0.3 
                      }}
                      className='border-gray-700 mt-5 md:mt-3 origin-left' 
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default How
