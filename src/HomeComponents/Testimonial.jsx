import React from 'react'

const Testimonial = () => {
  return (
    <div className='bg-black pb-10 md:pb-0'>
      <h1 className="text-4xl text-white font-poppins text-center md:mb-0 md:text-6xl">
        Clients Testimonials
      </h1>

      <div className="w-full min-h-[70vh] mt-10">
        <div className="cards w-[98vw] mx-auto flex flex-col md:flex-row justify-center gap-3">
          <div className="img w-full md:w-[30vw] md:h-[60vh] h-[40vh]">
            <img 
              src="https://ik.imagekit.io/vzualvibe/testimonial/Beige%20Reminder%20Notification%20Tweet%20Instagram%20Post%20(3).png?updatedAt=1760365628333" 
              alt="Client testimonial" 
              className='w-full h-full object-contain' 
            />
          </div>

          <div className="img w-full md:w-[30vw] md:h-[60vh] h-[40vh]">
            <img 
              src="https://ik.imagekit.io/vzualvibe/testimonial/Beige%20Reminder%20Notification%20Tweet%20Instagram%20Post%20(3).png?updatedAt=1760365628333" 
              alt="Client testimonial" 
              className='w-full h-full object-contain' 
            />
          </div>

          <div className="img w-full md:w-[30vw] md:h-[60vh] h-[40vh]">
            <img 
              src="https://ik.imagekit.io/vzualvibe/testimonial/Beige%20Reminder%20Notification%20Tweet%20Instagram%20Post%20(3).png?updatedAt=1760365628333" 
              alt="Client testimonial" 
              className='w-full h-full object-contain' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
