import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Section = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const videos = [
    "https://imagekit.io/player/embed/vzualvibemedia/ai%20videos/Video-558.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761039703660&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzualvibemedia%2Fai%2520videos%2FVideo-558.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761039703660&updatedAt=1761039703660",

    "https://imagekit.io/player/embed/vzualvibemedia/ai%20videos/Video-343.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761039705546&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzualvibemedia%2Fai%2520videos%2FVideo-343.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761039705546&updatedAt=1761039705546",

    "https://imagekit.io/player/embed/vzualvibemedia/ai%20videos/Video-177.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761039705308&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzualvibemedia%2Fai%2520videos%2FVideo-177.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761039705308&updatedAt=1761039705308",

    "https://imagekit.io/player/embed/vzualvibemedia/ai%20videos/Video-962.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761039704397&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzualvibemedia%2Fai%2520videos%2FVideo-962.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761039704397&updatedAt=1761039704397",

   

    "https://imagekit.io/player/embed/vzualvibemedia/ai%20videos/Video-856.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761039703649&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzualvibemedia%2Fai%2520videos%2FVideo-856.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761039703649&updatedAt=1761039703649",

    "https://imagekit.io/player/embed/vzualvibemedia/ai%20videos/Video-926.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761039703439&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzualvibemedia%2Fai%2520videos%2FVideo-926.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761039703439&updatedAt=1761039703439",

    "https://imagekit.io/player/embed/vzualvibemedia/ai%20videos/Video-703.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761039702929&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzualvibemedia%2Fai%2520videos%2FVideo-703.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761039702929&updatedAt=1761039702929",

    "https://imagekit.io/player/embed/vzualvibemedia/ai%20videos/Video-532.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761039702127&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzualvibemedia%2Fai%2520videos%2FVideo-532.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761039702127&updatedAt=1761039702127",

    "https://imagekit.io/player/embed/vzualvibemedia/ai%20videos/Video-706.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761039701333&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzualvibemedia%2Fai%2520videos%2FVideo-706.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761039701333&updatedAt=1761039701333"

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
                <div className=" w-[90vw] md:w-[23vw] md:h-[80vh]  mx-auto rounded-xl overflow-hidden shadow-lg">
                  {/* 9:16 Aspect Ratio for vertical videos */}
                  <div className="relative w-full" style={{ paddingTop: '177.78%' }}>
                    <iframe
                      src={videoUrl}
                      title={`video-${index}`}
                      className="absolute inset-0 w-full h-full rounded-xl"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                      allowFullScreen
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

export default Section;
