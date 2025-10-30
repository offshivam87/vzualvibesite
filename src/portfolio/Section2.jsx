import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Section2 = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const videos = [
    "https://res.cloudinary.com/diryjrxdy/video/upload/v1761850649/SnapInsta.to_AQOUJhEMuCrVQI2FGE4tNVhUEHjpAgXeJNjC2mmo-06nzh_eDoFHJDfzE8mChpdAQF64b3GVWYAJkac4Ybo16c75BAwZgzW3WZSiVq8_epr1c3.mp4",

    "https://res.cloudinary.com/diryjrxdy/video/upload/v1761850652/SnapInsta.to_AQNfw6sQaNkHBjOGc2ysE0lo4ymeNMSPUpWuQfkKpKZVrFQNwWW-_cTg2IKFF1Qm-vB-gzIw6yITfmld_bx5PiDJOTjPn6E52LGiGw0_aw3mz4.mp4",

    "https://res.cloudinary.com/diryjrxdy/video/upload/v1761850647/SnapInsta.to_AQPoTHd9E8-_PvrSb_WF9iI-uTDqedTmfMmkbBrFIohCWBtkhj6n22do0YbMGOj8lACBMFAwuR3H1tQi29spkS5P-N0j7FnJRt3MPOE_xtvo1z.mp4",
    
    "https://res.cloudinary.com/diryjrxdy/video/upload/v1761850667/SnapInsta.to_AQPW8zliBYqsJvNXLP2sVc7DjHv863QcV8WA_o5bOHlz_aYyYW3sLit2ZrfOmGKHX9vIgKJetX0IFxA4jaRKfWahV3xWe9PLEOB3mT0_uof4za.mp4",

    "https://res.cloudinary.com/diryjrxdy/video/upload/v1761850937/eventra_qxvvgb.mp4",


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
    <div className="w-full  bg-black py-8">
      <motion.p
        initial={{ opacity: 0, filter: "blur(10px)", y: -30 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className='text-white text-center mt-[7rem] md:text-6xl text-4xl font-poppins-bold mb-10'
      >
        Ai Videos
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
                <div className=" w-[90vw] md:w-[23vw] md:h-[87vh]  mx-auto rounded-xl overflow-hidden shadow-lg">
                  {/* 9:16 Aspect Ratio for vertical videos */}
                  <div className="relative w-full" style={{ paddingTop: '177.78%' }}>
                    <video
                      src={videoUrl}
                      controls
                      playsInline
                     
                      className="absolute inset-0 w-full h-full object-cover"
                      preload="metadata"
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

export default Section2;
