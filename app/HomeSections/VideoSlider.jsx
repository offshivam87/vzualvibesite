"use client"
import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import { motion } from 'motion/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// const videos = [
//     {
//         id: 1,
//         title: "Short-Form Reel",
//         src: "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
//     },
//     {
//         id: 2,
//         title: "Product Showcase",
//         src: "https://videos.pexels.com/video-files/3205918/3205918-uhd_2560_1440_25fps.mp4",
//     },
//     {
//         id: 3,
//         title: "Brand Story",
//         src: "https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4",
//     },
//     {
//         id: 4,
//         title: "Motion Graphics",
//         src: "https://videos.pexels.com/video-files/5377684/5377684-uhd_2560_1440_25fps.mp4",
//     },
//     {
//         id: 5,
//         title: "YouTube Edit",
//         src: "https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_24fps.mp4",
//     },
//     {
//         id: 6,
//         title: "Event Highlight",
//         src: "https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4",
//     },
// ]

/* ── Single video slide ── */
const VideoCard = ({ video, isActive }) => {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)

    /* auto-pause when this slide is no longer active */
    useEffect(() => {
        if (!isActive && videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
            setPlaying(false)
        }
    }, [isActive])

    const togglePlay = useCallback(() => {
        const vid = videoRef.current
        if (!vid) return

        if (vid.paused) {
            vid.play().catch(() => { })
            setPlaying(true)
        } else {
            vid.pause()
            setPlaying(false)
        }
    }, [])

    return (
        <div className="vcard">
            <video
                ref={videoRef}
                src={video.src}

                loop
                playsInline
                preload="metadata"
                className="vcard__video"
            />

            {/* click overlay to play/pause */}
            <div className="vcard__click-area" onClick={togglePlay} />

            {/* gradient */}
            <div className="vcard__gradient" />

            {/* play / pause button */}
            <button className="vcard__btn" onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}>
                {playing ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
            </button>

            {/* title */}
            <div className="vcard__title">{video.title}</div>
        </div>
    )
}

/* ── Carousel section ── */
const VideoSlider = ({ videos }) => {
    const [activeIdx, setActiveIdx] = useState(0)

    /* pause all videos in the swiper via DOM (handles cloned slides too) */
    const handleSlideChange = useCallback((swiper) => {
        setActiveIdx(swiper.realIndex)
        swiper.el.querySelectorAll('video').forEach((v) => {
            v.pause()
            v.currentTime = 0
        })
    }, [])

    return (
        <section>


            <Swiper
                modules={[Pagination, Navigation]}
                slidesPerView={1.2}
                centeredSlides
                spaceBetween={16}
                loop
                speed={400}
                pagination={{ clickable: true }}
                navigation
                onSlideChange={handleSlideChange}
                breakpoints={{
                    480: { slidesPerView: 1.5, spaceBetween: 20 },
                    768: { slidesPerView: 2.2, spaceBetween: 24 },
                    1024: { slidesPerView: 3, spaceBetween: 28 },
                    1440: { slidesPerView: 3.5, spaceBetween: 32 },
                }}
                className="video-swiper"
            >
                {videos.map((video, i) => (
                    <SwiperSlide key={video.id}>
                        <VideoCard video={video} isActive={i === activeIdx} />
                    </SwiperSlide>
                ))}
            </Swiper>


        </section>
    )
}

export default VideoSlider