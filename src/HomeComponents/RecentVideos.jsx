import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const RecentVideos = () => {
  const videos = [
    "https://ik.imagekit.io/vzualvibe/Home%20videos/reel2.mp4?updatedAt=1759686414939",
    "https://ik.imagekit.io/vzualvibe/Home%20videos/lasya3.mp4?updatedAt=1759811199963",
    "https://ik.imagekit.io/vzualvibe/Home%20videos/reel%201.mp4?updatedAt=1759811192420",
    "https://ik.imagekit.io/vzualvibe/Home%20videos/oodle%20sample%20vid.mp4?updatedAt=1759811191128",
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const getVideo = (offset) => {
    const newIndex = (current + offset + videos.length) % videos.length;
    return videos[newIndex];
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div className="bg-black relative py-10 overflow-hidden">
      <h1 className="text-3xl text-white font-bold text-center mb-7 md:text-5xl">
        Our Recent Works
      </h1>

      <div className="flex justify-center items-center relative">
        <button
          onClick={handlePrev}
          className="absolute left-1 md:left-10 text-white bg-white/20 hover:bg-white/40 p-2 md:p-4 rounded-full z-10 transition-all duration-300"
        >
          <ChevronLeft size={30} />
        </button>

        <div className="flex items-center justify-center gap-4 md:gap-8 w-full max-w-7xl px-4">
          {/* Left */}
          <div className="w-[0vw] md:w-[20vw] h-[45vh] md:h-[70vh] opacity-40 scale-90 relative overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.video
                key={`left-${current}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "", stiffness: 0, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                src={getVideo(-1)}
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
          </div>

          {/* Center */}
          <div className="w-[70vw] md:w-[25vw] h-[60vh] md:h-[75vh] relative overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.video
                key={`center-${current}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                src={getVideo(0)}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
          </div>

          {/* Right */}
          <div className="w-[0vw] md:w-[20vw] h-[45vh] md:h-[70vh] opacity-40 scale-90 relative overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.video
                key={`right-${current}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "", stiffness: 0, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                src={getVideo(1)}
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-1 md:right-10 text-white bg-white/20 hover:bg-white/40 p-2 md:p-4 rounded-full z-10 transition-all duration-300"
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default RecentVideos;