"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import VideoSlider from '../HomeSections/VideoSlider'
import WebsiteCard from '../HomeSections/WebsiteCard'

const PortfolioPage = () => {
    const [activeTab, setActiveTab] = useState('video')

    const MotionGraphics = [
        {
            id: 1,
            title: "Short-Form Reel",

            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773417524/vid3_vuecno.mp4",

        },
        {
            id: 2,
            title: "Product Showcase",

            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773417523/vid2_giq2o3.mp4",
        },
        {
            id: 3,
            title: "Brand Story",
            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773417523/capsule_1_yjcohq.mp4",
        },
        {
            id: 4,
            title: "Motion Graphics",
            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/f_auto,q_auto/global_cell_wp51pg.mp4",

        },
        {
            id: 5,
            title: "YouTube Edit",
            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773417526/lasya3_z70wvs.mp4"
        },
        {
            id: 6,
            title: "Event Highlight",
            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773417527/website_final_iv1rup.mp4",
        },
        {
            id: 7,
            title: "Event Highlight",

            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773418563/sample_1.2_g2yddt.webm"
        },
        {
            id: 8,
            title: "Event Highlight",

            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773472531/WhatsApp_Video_2026-03-14_at_12.44.34_PM_fmmmby.mp4"
        }

    ]

    const AI_Videos = [
        {
            id: 1,
            title: "Short-Form Reel",

            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773470199/Video-177_dkvoql.mp4",

        },
        {
            id: 2,
            title: "Product Showcase",

            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773470115/Rb_1_kxaaaq.mp4",
        },
        {
            id: 3,
            title: "Brand Story",
            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773471050/Video-52_f6liys.mp4",
        },
        {
            id: 4,
            title: "Motion Graphics",
            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773471972/Video-962_oolfv4.mp4",

        },
        {
            id: 5,
            title: "YouTube Edit",
            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773471962/Video-926_exfxhm.mp4"
        },
        {
            id: 6,
            title: "Event Highlight",
            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773471968/Video-703_c51brt.mp4",
        },
        {
            id: 7,
            title: "Event Highlight",

            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773471979/Video-343_zndptt.mp4"
        },

    ]

    const Transitional = [
        {
            id: 1,
            title: "Short-Form Reel",

            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773471675/SnapInsta.to_AQOUJhEMuCrVQI2FGE4tNVhUEHjpAgXeJNjC2mmo-06nzh_eDoFHJDfzE8mChpdAQF64b3GVWYAJkac4Ybo16c75BAwZgzW3WZSiVq8_epr1c3_whqdlq.mp4",

        },
        {
            id: 2,
            title: "Product Showcase",

            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773471825/eventra_qxvvgb_rjmxms.mp4",
        },
        {
            id: 3,
            title: "Brand Story",
            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773471050/Video-52_f6liys.mp4",
        },
        {
            id: 4,
            title: "Motion Graphics",
            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773417809/global_cell_wp51pg.mp4",

        },
        {
            id: 5,
            title: "YouTube Edit",
            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773417526/lasya3_z70wvs.mp4"
        },
        {
            id: 6,
            title: "Event Highlight",
            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773474318/The_temple_jewellery_shimmers_with_artistry_capturing_the_essence_of_festivity_in_every_intrica_ucmgb2.mp4",
        },
        {
            id: 7,
            title: "Event Highlight",

            src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773473595/4_fm9acf.mp4"
        },

    ]

    return (
        <div>
            <Navbar />

            <section className="w-full mt-50 bg-transparent flex justify-center items-center">
                <div className="container max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col items-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-light text-center mb-4 text-white tracking-tight">
                            Portfolio
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-center max-w-2xl font-medium tracking-wide">
                            Explore our latest work across video editing and web development.
                        </p>
                    </div>

                    {/* Toggle Buttons */}
                    <div className="flex justify-center gap-4 mb-16 relative z-10">
                        <button
                            onClick={() => setActiveTab('video')}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'video'
                                ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(234,139,6,0.4)]'
                                : 'bg-transparent text-gray-400 border border-gray-700 hover:border-amber-500/50 hover:text-amber-400'
                                }`}
                        >
                            Video Editing
                        </button>
                        <button
                            onClick={() => setActiveTab('website')}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'website'
                                ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(234,139,6,0.4)]'
                                : 'bg-transparent text-gray-400 border border-gray-700 hover:border-amber-500/50 hover:text-amber-400'
                                }`}
                        >
                            Website
                        </button>
                    </div>
                </div>
            </section>

            {/* Content Area */}
            <div className="w-full pb-20">
                <AnimatePresence mode="wait">
                    {activeTab === 'video' ? (
                        <motion.div
                            key="video"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="video-slider-header"
                            >
                                <span className="video-slider-label">Videos</span>
                                <h2 className="video-slider-heading">
                                    Motion <span className="video-slider-heading--accent">  Graphics</span>
                                </h2>
                            </motion.div>
                            <VideoSlider videos={MotionGraphics} />

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="video-slider-header my-15"
                            >

                                <h2 className="video-slider-heading">
                                    AI <span className="video-slider-heading--accent">Videos</span>
                                </h2>
                            </motion.div>
                            <VideoSlider videos={AI_Videos} />

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="video-slider-header my-15"
                            >

                                <h2 className="video-slider-heading">
                                    Other <span className="video-slider-heading--accent">Edits</span>
                                </h2>
                            </motion.div>
                            <VideoSlider videos={Transitional} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="website"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <WebsiteCard />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <Footer />
        </div>
    )
}

export default PortfolioPage