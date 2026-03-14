import React from 'react'
import { motion } from 'motion/react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const WebsiteCard = () => {
    const tags = ["Podcasts", "Storytelling", "Vlogs", "Documentaries"];

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="text-center px-4 md:mt-15 md:pt-12 pt-10 "
            >
                <span className="video-slider-label">PORTFOLIO</span>
                <h2 className="video-slider-heading">
                    Our Website <span className="video-slider-heading--accent">Work</span>
                </h2>
            </motion.div>
            <div className="w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-12 md:py-0 overflow-hidden">
                <div className="w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">

                    {/* Text Content - Left Side */}
                    <motion.div
                        className="w-full md:w-[55%] flex flex-col gap-4 md:gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            Long Form Editing
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                            Transform raw footage into engaging long-form videos. From
                            YouTube content to podcasts and documentaries, we craft cinematic
                            edits that improve storytelling, viewer retention, and overall audience
                            impact.
                        </motion.p>

                        {/* 3 Bullet Points */}
                        <motion.ul variants={itemVariants} className="flex flex-col gap-3 md:gap-4">
                            <li className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-gray-300">
                                <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                                Cinematic storytelling edits
                            </li>
                            <li className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-gray-300">
                                <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                                Audience retention focused pacing
                            </li>
                            <li className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-gray-300">
                                <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                                Professional color &amp; sound polish
                            </li>
                        </motion.ul>

                        {/* Tags */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 md:gap-3 mt-2">
                            {tags.map((tag) => (
                                <motion.span
                                    key={tag}
                                    whileHover={{ scale: 1.05, backgroundColor: "#f59e0b", color: "#ffffff", borderColor: "#f59e0b" }}
                                    className="px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm text-gray-300 border border-gray-600 rounded-full hover:border-[#f59e0b] hover:text-white transition-colors duration-300 cursor-pointer"
                                    layout
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Image - Right Side */}
                    <motion.div
                        className="w-full md:w-[45%] aspect-[4/3] rounded-2xl overflow-hidden bg-[#1a1a1a] flex-shrink-0"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* Replace with your image */}
                        <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]" />
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default WebsiteCard