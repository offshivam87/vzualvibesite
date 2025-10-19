import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VideoCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const videos = [
    "https://imagekit.io/player/embed/moodyplayer/sample%201.2.mp4?controls=false&autoplay=true&loop=true&background=%23000000&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fmoodyplayer%2Fsample%25201.2.mp4%2Fik-thumbnail.jpg",
    "https://imagekit.io/player/embed/moodyplayer/json.mp4?controls=false&autoplay=true&loop=true&background=%23000000&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fmoodyplayer%2Fjson.mp4%2Fik-thumbnail.jpg",
    "https://imagekit.io/player/embed/moodyplayer/oodle%20sample%20vid.mp4?controls=false&autoplay=true&loop=true&background=%23000000&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fmoodyplayer%2Foodle%2520sample%2520vid.mp4%2Fik-thumbnail.jpg",
    "https://imagekit.io/player/embed/moodyplayer/reel%201.mp4?controls=false&autoplay=true&loop=true&background=%23000000&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fmoodyplayer%2Freel%25201.mp4%2Fik-thumbnail.jpg",
    "https://imagekit.io/player/embed/moodyplayer/sample%201.2.mp4?controls=false&autoplay=true&loop=true&background=%23000000&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fmoodyplayer%2Fsample%25201.2.mp4%2Fik-thumbnail.jpg",
    "https://imagekit.io/player/embed/moodyplayer/json.mp4?controls=false&autoplay=true&loop=true&background=%23000000&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fmoodyplayer%2Fjson.mp4%2Fik-thumbnail.jpg",
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
    <div className="w-full bg-[#f6fbf5] py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative">
          {/* Custom Previous Button */}
          <button
            ref={prevRef}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black text-white grid place-items-center shadow-lg hover:scale-105 hover:bg-gray-800 transition-all active:scale-95"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Custom Next Button */}
          <button
            ref={nextRef}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black text-white grid place-items-center shadow-lg hover:scale-105 hover:bg-gray-800 transition-all active:scale-95"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
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
                <div className="w-full max-w-[420px] mx-auto rounded-xl overflow-hidden bg-neutral-200 shadow-lg">
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
          <div className="mt-3 text-center text-xs text-gray-500">
            Mobile: 1 video • Desktop: 3 videos • Swipe or use buttons
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
