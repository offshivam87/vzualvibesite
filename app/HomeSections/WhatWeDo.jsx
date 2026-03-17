"use client"
import React from 'react'
import { motion } from "motion/react"
import Link from "next/link"
import shortImage from "@/public/images/short-form-editing.png"
import webImage from "@/public/images/web-app-development.png"

const services = [
    {
        id: 1,
        title: "Premium Website Development",
        desc: "We build high-conversion, SEO-optimized, and lightning-fast web experiences using the latest tech stack to turn visitors into loyal customers. Your website is your 24/7 salesman.",
        image: webImage,
        tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        points: [
            "High-conversion website design",
            "SEO optimized architecture",
            "Fast and scalable performance"
        ]
    },
    {
        id: 2,
        title: "Trending Video Editing",
        desc: "Harness the power of attention. We craft engaging, high-impact Reels, TikToks, Shorts, and cinematic long-form videos designed to stop the scroll and drive viral growth for your brand.",
        image: shortImage,
        tech: ["Motion Graphics", "Short-Form", "Long-Form", "Color Grading"],
        points: [
            "Scroll-stopping short videos",
            "Cinematic storytelling edits",
            "Viral-focused pacing & retention"
        ]
    }
];

const WhatWeDo = () => {
    return (
        <div className="w-full pb-10 lg:py-20 px-4 md:px-10 lg:px-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center md:pt-2 mb-20"
            >
                <span className="video-slider-label">Services</span>
                <h2 className="video-slider-heading">
                    Our <span className="video-slider-heading--accent">Services</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="group relative bg-[#111111] border border-gray-800 rounded-3xl overflow-hidden hover:border-gray-700 hover:shadow-2xl hover:shadow-yellow-400/5 transition-all duration-500 flex flex-col"
                    >
                        {/* Image Container */}
                        <div className="relative w-full h-[35vh] md:h-[45vh] lg:h-[40vh] overflow-hidden">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                src={service.image.src}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-8 md:p-10 -mt-20 relative z-10 flex flex-col justify-end">
                            <h3 className="text-white text-3xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                {service.desc}
                            </p>

                            <ul className="space-y-4 text-gray-300 mb-8 flex-1">
                                {service.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(250,204,21,0.6)]"></span>
                                        <span className="leading-snug">{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 mt-auto mb-8">
                                {service.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-black/50 border border-gray-800 rounded-full text-xs font-medium text-gray-300 group-hover:border-gray-700 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <Link href="/contact" className="w-full group/btn relative overflow-hidden rounded-xl bg-yellow-400 px-8 py-3.5 text-center font-bold text-black transition-all hover:bg-yellow-500 active:scale-95 shadow-[0_0_15px_rgba(250,204,21,0.2)] hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Get a Quote
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default WhatWeDo