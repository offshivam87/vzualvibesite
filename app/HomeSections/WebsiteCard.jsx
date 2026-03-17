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

const websiteData = [{
    title: "Manmauji Dosa – Restaurant Website",
    desc: "A modern and high-performance website for Manmauji Dosa featuring clean UI, fast loading speed, responsive design, and smooth animations to create an engaging user experience.",
    points: [
        "Fast and optimized performance across all devices.",
        "Modern UI with smooth and engaging animations.",
        "Clean design with professional visual polish."
    ],
    tags: ["Fast", "Responsive", "Modern"],
    image: "/images/manmauji.png",
    link: "https://offshivam87.github.io/manmaujiDosa/"
},
{
    title: "City Care - Hospital Website",
    desc: "A modern and responsive hospital website for City Care designed with a clean medical UI, fast performance, and smooth animations to create a trustworthy and user-friendly patient experience.",
    points: [
        "Fast and optimized performance across all devices.",
        "Clean healthcare-focused UI to build trust and clarity.",
        "Smooth animations with responsive modern layouts."
    ],
    tags: ["Minimal", "Professional", "Trustworthy"],
    image: "/images/hospital.png",
    link: "https://offshivam87.github.io/city-care/"
},
{
    title: "PrimeNest - Real Estate Website",
    desc: "A premium and responsive real estate website for PrimeNest, designed with a modern luxury UI, fast performance, and smooth animations to create a seamless and trust-driven property browsing experience.",
    points: [
        "Fast and optimized performance across all devices.",
        "Luxury-focused UI designed for high conversion and lead generation.",
        "Smooth animations with clean and modern responsive layouts."
    ],
    tags: ["Premium", "Responsive", "Modern"],
    image: "/images/realestate.png",
    link: "https://offshivam87.github.io/PrimeNest/"
}


]

const WebsiteCard = () => {


    return (
        <div className="bg-[#0a0a0a] pb-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="text-center px-4 md:mt-15 md:pt-12 pt-10 mb-12 sm:mb-20"
            >
                <span className="video-slider-label">PORTFOLIO</span>
                <h2 className="video-slider-heading">
                    Our Website <span className="video-slider-heading--accent">Work</span>
                </h2>
            </motion.div>

            <div className="w-full flex flex-col items-center justify-center px-4 overflow-hidden gap-20 md:gap-32">
                {websiteData.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={index} className={`w-full max-w-6xl mx-auto flex flex-col-reverse ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}>

                            {/* Text Content */}
                            <motion.div
                                className="w-full md:w-[55%] flex flex-col gap-4 md:gap-6"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-white">
                                    {item.title}
                                </motion.h2>

                                <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                                    {item.desc}
                                </motion.p>

                                {/* 3 Bullet Points */}
                                <motion.ul variants={itemVariants} className="flex flex-col gap-3 md:gap-4">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-gray-300">
                                            <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </motion.ul>

                                {/* Tags */}
                                <motion.div variants={itemVariants} className="flex flex-wrap gap-2 md:gap-3 mt-2">
                                    {item.tags.map((tag) => (
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

                                {/* Visit Website Button */}
                                <motion.div variants={itemVariants} className="mt-4 md:mt-6">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-6 py-2.5 md:px-8 md:py-3 text-sm md:text-base font-semibold text-black bg-amber-500 rounded-full hover:bg-amber-400 transition-all duration-300 hover:scale-105"
                                    >
                                        Visit Website
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </motion.div>
                            </motion.div>

                            {/* Image */}
                            <motion.div
                                className="w-full md:w-[45%] aspect-[4/3] rounded-2xl overflow-hidden bg-white flex-shrink-0 relative group"
                                variants={imageVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                {item.image ? (
                                    <img src={item.image} alt={item.title} className="w-full h-full object-contain transition-transform duration-700 rounded-3xl group-hover:scale-105" />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]" />
                                )}
                            </motion.div>

                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default WebsiteCard