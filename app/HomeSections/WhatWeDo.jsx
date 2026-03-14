"use client"
import React, { useRef, useEffect, useState } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import shortImage from "@/public/images/short-form-editing.png"
import webImage from "@/public/images/web-app-development.png"
import longImage from "@/public/images/long-form-editing.png"
import { motion } from "motion/react"

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        id: 1,
        title: "Modern Web Solutions",
        desc: "Your website is your 24/7 salesman. We build high-conversion, SEO-optimized, and lightning-fast web experiences using the latest tech stack to turn visitors into loyal customers.",
        image: webImage,
        tech: ["Websites", "Landing Pages", "E-commerce"],
        points: [
            "High-conversion website design",
            "SEO optimized architecture",
            "Fast and scalable performance"
        ]
    },
    {
        id: 2,
        title: "Short-Form Content",
        desc: "Harness the power of attention. We craft high-impact Reels, TikToks, and Shorts designed to stop the scroll and drive viral growth for your personal brand or business.",
        image: shortImage,
        tech: ["Motion Graphics", "Talking Heads", "AI Videos", "etc"],
        points: [
            "Scroll-stopping short videos",
            "Platform optimized edits",
            "Viral-focused storytelling"
        ]
    },
    {
        id: 3,
        title: "Long Form Editing",
        desc: "Transform raw footage into engaging long-form videos. From YouTube content to podcasts and documentaries, we craft cinematic edits that improve storytelling, viewer retention, and overall audience impact.",
        image: longImage,
        tech: ["Podcasts", "Storytelling", "Vlogs", "Documentaries"],
        points: [
            "Cinematic storytelling edits",
            "Audience retention focused pacing",
            "Professional color & sound polish"
        ]
    }
];

const WhatWeDo = () => {
    const containerRef = useRef(null)
    const rightSideRef = useRef(null)
    const textWrapperRef = useRef(null) // Naya ref text animations ke liye
    const [activeProject, setActiveProject] = useState(projects[0])

    // Main ScrollTrigger Logic
    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            // Right Side ko Pin karna
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: rightSideRef.current,
                pinSpacing: false,
                anticipatePin: 1,
            });

            // Har image box ke liye trigger jo text change karega
            projects.forEach((project, i) => {
                ScrollTrigger.create({
                    trigger: `.img-box-${i}`,
                    start: "bottom 90%",
                    end: "bottom 50%",
                    onEnter: () => setActiveProject(projects[i]),
                    onEnterBack: () => setActiveProject(projects[i]),
                });
            });
        });

        return () => mm.revert();
    }, [])

    // Text Change Animation Logic
    useEffect(() => {
        // Jab bhi activeProject change hoga, ye animation chalega
        if (textWrapperRef.current) {
            gsap.fromTo(
                textWrapperRef.current.children,
                { opacity: 0, y: 30 }, // Start position (Niche aur invisible)
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    // Ek ke baad ek aayenge (Heading, fir desc, fir tags)
                    ease: "power2.out"
                }
            );
        }
    }, [activeProject]); // Dependency array mein activeProject rakha hai

    return (
        <div className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center px-4 md:mt-15 md:pt-12 mb-10 "
            >
                <span className="video-slider-label">PORTFOLIO</span>
                <h2 className="video-slider-heading">
                    Our <span className="video-slider-heading--accent">Services</span>
                </h2>
            </motion.div>
            <div ref={containerRef} className='w-full  py-2 lg:py-20 px-6 md:px-20'>



                {/* DESKTOP & MOBILE WRAPPER */}
                <div className='flex flex-col lg:flex-row gap-10'>

                    {/* LEFT SIDE: Scrolling Images (Desktop) / Full Blocks (Mobile) */}
                    <div className="w-full lg:w-1/2 space-y-10 lg:space-y-40">
                        {projects.map((project, i) => (
                            <div key={project.id} className={`img-box-${i} space-y-6 lg:space-y-0`}>
                                {/* Image Box */}
                                <div className={` relative w-full h-[30vh] lg:h-[70vh] ${project.color} rounded-3xl flex items-center justify-center shadow-lg shadow-white/5`}>
                                    <img src={project.image.src} alt={project.title} className="w-full rounded-2xl h-full object-cover" />
                                </div>

                                {/* MOBILE ONLY TEXT */}
                                <div className="lg:hidden space-y-4 pb-10 border-b border-gray-800">
                                    <h2 className="text-white text-4xl font-bold">{project.title}</h2>
                                    <p className="text-gray-400 text-lg">{project.desc}</p>
                                    <div className='flex gap-2'>
                                        {project.tech.map(t => <span key={t} className="text-xs border border-gray-600 px-2 py-1 rounded-full text-white">{t}</span>)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE: Sticky Content */}
                    <div
                        ref={rightSideRef}
                        className="hidden lg:flex w-1/2 h-[70vh] flex-col justify-start space-y-8"
                    >
                        {/* Text Wrapper for GSAP Stagger Animation */}
                        <div ref={textWrapperRef} className="space-y-6">
                            <div className="overflow-hidden">
                                <h2 className="text-white text-5xl font-bold">
                                    {activeProject.title}
                                </h2>
                            </div>

                            <p className='text-gray-400 text-xl leading-relaxed min-h-[80px]'>
                                {activeProject.desc}
                            </p>

                            <ul className='space-y-4 text-gray-300 text-lg'>
                                {activeProject?.points?.map((point, i) => (
                                    <li key={i} className="flex items-center gap-3">

                                        <span className="w-2 h-2 bg-yellow-400 rounded-full block"></span>

                                        {point}

                                    </li>
                                ))}
                            </ul>

                            <div className='flex flex-wrap gap-3 pt-6'>
                                {activeProject.tech.map((tech) => (
                                    <span key={tech} className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-sm text-white shadow-md">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Scroll Space Buffer */}
                <div className="h-[5vh] lg:h-[10vh]"></div>
            </div>
        </div>
    )
}

export default WhatWeDo