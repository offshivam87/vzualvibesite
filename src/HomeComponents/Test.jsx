import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function Test() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const reels = [
    {
      id: 1,
      title: "Creative Reel 01",
      creator: "@yourhandle",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=700&fit=crop",
      views: "2.5M"
    },
    {
      id: 2,
      title: "Amazing Content 02",
      creator: "@yourhandle",
      thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=700&fit=crop",
      views: "1.8M"
    },
    {
      id: 3,
      title: "Viral Moment 03",
      creator: "@yourhandle",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=700&fit=crop",
      views: "3.2M"
    },
    {
      id: 4,
      title: "Trending Now 04",
      creator: "@yourhandle",
      thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=700&fit=crop",
      views: "4.1M"
    },
    {
      id: 5,
      title: "Best Shot 05",
      creator: "@yourhandle",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=700&fit=crop",
      views: "1.5M"
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % reels.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + reels.length) % reels.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const getReelPosition = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(reels.length - 1)) return 'right';
    if (diff === -1 || diff === reels.length - 1) return 'left';
    return 'hidden';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-7xl relative">
        
        {/* Main Slider Container */}
        <div className="relative h-[600px] flex items-center justify-center">
          
          {/* Reels Display */}
          <div className="relative w-full h-full flex items-center justify-center">
            {reels.map((reel, index) => {
              const position = getReelPosition(index);
              
              if (position === 'hidden') return null;
              
              const isCenter = position === 'center';
              const isLeft = position === 'left';
              const isRight = position === 'right';
              
              return (
                <div
                  key={reel.id}
                  className={`absolute transition-all duration-700 ease-out ${
                    isCenter ? 'z-20' : 'z-10'
                  }`}
                  style={{
                    transform: isCenter 
                      ? 'translateX(0) scale(1)' 
                      : isLeft 
                      ? 'translateX(-450px) scale(0.8)' 
                      : 'translateX(450px) scale(0.8)',
                    opacity: isCenter ? 1 : 0.5
                  }}
                >
                  <div className="relative w-[320px] h-[560px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                    {/* Reel Image */}
                    <img
                      src={reel.thumbnail}
                      alt={reel.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
                    
                    {/* Play Button - Only on Center */}
                    {isCenter && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/40 transform transition-transform duration-300 group-hover:scale-110">
                          <Play className="w-10 h-10 text-white fill-white ml-1" />
                        </div>
                      </div>
                    )}
                    
                    {/* Reel Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-white font-bold">
                          {reel.creator.charAt(1).toUpperCase()}
                        </div>
                        <span className="text-white font-semibold">{reel.creator}</span>
                      </div>
                      <h3 className="text-white text-xl font-bold mb-1">{reel.title}</h3>
                      <p className="text-white/80 text-sm">{reel.views} views</p>
                    </div>
                    
                    {/* Shimmer Effect on Center */}
                    {isCenter && (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" 
                             style={{
                               animation: 'shimmer 2s infinite',
                               backgroundSize: '200% 100%'
                             }} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={32} strokeWidth={3} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <ChevronRight size={32} strokeWidth={3} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {reels.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating && index !== currentIndex) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 700);
                }
              }}
              disabled={isAnimating}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 w-10 h-3'
                  : 'bg-white/30 w-3 h-3 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-6">
          <p className="text-white text-2xl font-bold">
            {currentIndex + 1} <span className="text-white/50">/</span> {reels.length}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}