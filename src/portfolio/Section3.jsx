import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {motion} from "framer-motion"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Section3 = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const videos = [
    

    "https://imagekit.io/player/embed/vzual1/motion%20graphic/lasya3.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761060042452&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzual1%2Fmotion%2520graphic%2Flasya3.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761060042452&updatedAt=1761060042452",

    "https://imagekit.io/player/embed/vzual1/motion%20graphic/global%20cell%20motion%20reel.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761059354103&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzual1%2Fmotion%2520graphic%2Fglobal%2520cell%2520motion%2520reel.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761059354103&updatedAt=1761059354103",

    "https://imagekit.io/player/embed/vzual1/motion%20graphic/vv1.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761059939937&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzual1%2Fmotion%2520graphic%2Fvv1.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761059939937&updatedAt=1761059939937",

    "https://imagekit.io/player/embed/moodyplayer/sample%201.2.mp4?controls=true&autoplay=false&loop=true&background=%23000000&updatedAt=1760188192533&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fmoodyplayer%2Fsample%25201.2.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1760188192533&updatedAt=1760188192533"


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
        Motion Graphics
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

export default Section3;
