import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {motion} from "framer-motion"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Section4 = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const videos = [
    
    "https://imagekit.io/player/embed/vv2/SnapInsta.to_AQMhCM_xpxycozsuD9Kq4f9n6YDQE0Xy7Obm14pOhylJIeYvM53vUa9x0WHppaBt52SBmtsPMSwz1f2Q3mRY-r2R3uh11oOokdmBSEQ.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761066146239&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvv2%2FSnapInsta.to_AQMhCM_xpxycozsuD9Kq4f9n6YDQE0Xy7Obm14pOhylJIeYvM53vUa9x0WHppaBt52SBmtsPMSwz1f2Q3mRY-r2R3uh11oOokdmBSEQ.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761066146239&updatedAt=1761066146239",

    "https://imagekit.io/player/embed/vzual1/talking%20head/SnapInsta.to_AQPTN8BaSyy3dNcMXuOaep6AMOK3u_als9sg3Aife_VRA22g_PHd5ebD0VjQdIiVa1NDin7dDQitpf7dgZsKYiXpWCJX1QTQZFaXjlQ.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761062153710&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzual1%2Ftalking%2520head%2FSnapInsta.to_AQPTN8BaSyy3dNcMXuOaep6AMOK3u_als9sg3Aife_VRA22g_PHd5ebD0VjQdIiVa1NDin7dDQitpf7dgZsKYiXpWCJX1QTQZFaXjlQ.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761062153710&updatedAt=1761062153710",

    "https://imagekit.io/player/embed/vv2/vv.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761065761906&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvv2%2Fvv.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761065761906&updatedAt=1761065761906",

    "https://imagekit.io/player/embed/vzual1/talking%20head/Video-197.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761062234769&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzual1%2Ftalking%2520head%2FVideo-197.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761062234769&updatedAt=1761062234769",

    "https://imagekit.io/player/embed/vzual1/talking%20head/Video-263.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761062267637&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzual1%2Ftalking%2520head%2FVideo-263.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761062267637&updatedAt=1761062267637",

    "https://imagekit.io/player/embed/vzual1/talking%20head/Video-685.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761062291513&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzual1%2Ftalking%2520head%2FVideo-685.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761062291513&updatedAt=1761062291513",

    

    "https://imagekit.io/player/embed/vv2/client%2016.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761064000818&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvv2%2Fclient%252016.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761064000818&updatedAt=1761064000818",

    "https://imagekit.io/player/embed/vv2/Video-176.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761064355575&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvv2%2FVideo-176.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761064355575&updatedAt=1761064355575",

    "https://imagekit.io/player/embed/vv2/dr%20arushi%20story.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761065491139&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvv2%2Fdr%2520arushi%2520story.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761065491139&updatedAt=1761065491139",

    "https://imagekit.io/player/embed/vv2/vv.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761065761906&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvv2%2Fvv.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761065761906&updatedAt=1761065761906"

    


  ];

  // Navigation initialization ke baad setup
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      const params = swiperInstance.params;
      params.navigation.prevEl = prevRef.current;
      params.navigation.nextEl = nextRef.current;
      
      // Navigation ko re-initialize karo
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="w-full  bg-black ">
      <motion.p
        initial={{ opacity: 0, filter: "blur(10px)", y: -30 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className='text-white text-center  md:text-6xl text-4xl font-poppins-bold mb-15'
      >
        Talking Head
      </motion.p>
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative">
          {/* Custom Previous Button */}
          <button
            ref={prevRef}
            className="absolute left-2 md:-left-20 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-20 md:h-20 rounded-full bg-black text-white grid place-items-center shadow-lg hover:scale-105 hover:bg-gray-800 transition-all active:scale-95"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 md:w-10 md:h-10 h-6" />
          </button>

          {/* Custom Next Button */}
          <button
            ref={nextRef}
            className="absolute right-2 md:-right-20 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-20 md:h-20 rounded-full bg-black text-white grid place-items-center shadow-lg hover:scale-105 hover:bg-gray-800 transition-all active:scale-95"
            aria-label="Next"
          >
            <ChevronRight className="w-6 md:w-10 md:h-10 h-6" />
          </button>

          {/* Swiper Container */}
          <Swiper
            modules={[Navigation, Pagination]}
            onSwiper={setSwiperInstance}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 16,
                centeredSlides: false,
              },
            }}
            className="!pb-12"
          >
            {videos.map((videoUrl, index) => (
              <SwiperSlide key={index}>
                <div className=" w-[90vw] md:w-[23vw] md:h-[80vh]  mx-auto rounded-xl overflow-hidden shadow-lg">
                  {/* 9:16 Aspect Ratio for vertical videos */}
                  <div className="relative w-full" style={{ paddingTop: '177.78%' }}>
                    <iframe
                      src={videoUrl}
                      title={`video-${index}`}
                      className="absolute inset-0 w-full h-full rounded-xl"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;
                      allowFullScreen"
                      loading="lazy"
                      
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Helper Text */}
          
        </div>
      </div>
    </div>
  );
};

export default Section4;
