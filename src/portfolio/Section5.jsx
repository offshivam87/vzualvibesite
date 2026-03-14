import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {motion} from "framer-motion"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Section5 = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const videos = [

    "https://imagekit.io/player/embed/vv2/gymnasium%20video%20board(1).mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761069098464&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvv2%2Fgymnasium%2520video%2520board%281%29.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761069098464&updatedAt=1761069098464",
    
    

    "https://imagekit.io/player/embed/vv2/Nigga%20aman.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761069560491&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvv2%2FNigga%2520aman.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761069560491&updatedAt=1761069560491",


     "https://imagekit.io/player/embed/vv2/asesthetic%20gym.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761069168278&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvv2%2Fasesthetic%2520gym.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761069168278&updatedAt=1761069168278",

    "https://imagekit.io/player/embed/vv2/SnapInsta.to_AQNfcaFkZm4CWgrWlVygR6KBO0jT-xl-vzVTt1m055O0rH5lPJbdXhbBs-VDsZ_sImNAFyRbps73QV7KHIlaucbaXoOvpBn4_EEmlbY.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761069171790&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvv2%2FSnapInsta.to_AQNfcaFkZm4CWgrWlVygR6KBO0jT-xl-vzVTt1m055O0rH5lPJbdXhbBs-VDsZ_sImNAFyRbps73QV7KHIlaucbaXoOvpBn4_EEmlbY.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761069171790&updatedAt=1761069171790",


   

    "https://imagekit.io/player/embed/vv2/0719%20(1).mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761069140004&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvv2%2F0719%2520%281%29.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761069140004&updatedAt=1761069140004",


    

    "https://imagekit.io/player/embed/vv2/SnapInsta.to_AQOIa1lAzR_3QChsnQJ2mswz-ItaeEOlGgexL5pfnCK6DRIAuxfve1N9k28idZCrFzjIj9T2b8aS4JRUIKCy5weoLK2Wi-XH-QgapQg.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761066584232&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvv2%2FSnapInsta.to_AQOIa1lAzR_3QChsnQJ2mswz-ItaeEOlGgexL5pfnCK6DRIAuxfve1N9k28idZCrFzjIj9T2b8aS4JRUIKCy5weoLK2Wi-XH-QgapQg.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761066584232&updatedAt=1761066584232" ,

    "https://imagekit.io/player/embed/vv2/SnapInsta.to_AQMhjmsSSqC_rZusqwsVX5iJZGTAh48WUE76dojj7_uJ-GjUx3zms5CCJEYsxCzGRwuJQgZrTXD-wU2H5p7sQGCWkeIJ_Hu3sUj6f0I.mp4?controls=true&autoplay=false&loop=false&background=%23000000&updatedAt=1761069172005&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvv2%2FSnapInsta.to_AQMhjmsSSqC_rZusqwsVX5iJZGTAh48WUE76dojj7_uJ-GjUx3zms5CCJEYsxCzGRwuJQgZrTXD-wU2H5p7sQGCWkeIJ_Hu3sUj6f0I.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761069172005&updatedAt=1761069172005",

    


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
        Gym Edit
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

export default Section5;
