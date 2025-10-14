import React from 'react'

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
      <h1 className="text-2xl text-white font-poppins text-center mb-10 md:text-6xl md:mb-16">
        Our Simple 4-Step Process
      </h1>

      <div className="bg-black text-white py-5 px-8">
        <div className="max-w-7xl mx-auto md:flex md:gap-12 md:items-start">
          {/* Image Section */}
          <div className="md:w-1/2 md:sticky md:top-10">
            <div className="img rounded-2xl w-full h-[25vh] md:w-[42vw] mb-5 md:h-[70vh] md:mb-0">
              <img 
                src="https://ik.imagekit.io/vzualvibe/images/man-edits-video-his-computer.jpg?updatedAt=1760288903707" 
                alt="" 
                className='w-full h-full object-cover rounded-2xl' 
              />
            </div>
          </div>

          {/* Steps Section */}
          <div className="md:w-1/2">
            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={index}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <span className="text-white text-[1.3rem] font-poppins">
                        {step.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-poppins mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-poppins leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <hr className='border-gray-700 mt-5 md:mt-3' />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default How
