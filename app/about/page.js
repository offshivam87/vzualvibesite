"use client"
import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Target, Users, Zap, TrendingUp } from 'lucide-react'

const AboutPage = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 md:px-8 relative overflow-hidden flex flex-col items-center justify-center">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] " />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <span className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-4 block">Our Story</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Behind <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600">VzualVibe</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            We are a collective of digital craftsmen, blending cinematic visuals with cutting-edge web technology to build experiences that resonate.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Origin Story Section */}
            <section className="py-20 px-4 md:px-8 relative z-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">How We Started.</h2>
                        <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            VzualVibe began with a simple observation: brands were struggling to merge high-quality video production with seamless digital experiences. Too often, a great video lived on a slow, unresponsive website, or a beautiful website lacked compelling visual storytelling.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            In 2024, our founders combined their expertise in motion graphics and full-stack development to create an agency that does both without compromise. We realized that true digital impact happens when aesthetics and performance move in perfect harmony.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Today, we partner with innovative brands to deliver cohesive digital identities—from the first frame of a social media reel to the final pixel of a custom web application.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="aspect-auto md:aspect-4/3 rounded-3xl overflow-hidden relative bg-neutral-900 border border-neutral-800 p-4 sm:p-6 md:p-8 flex flex-col justify-center min-h-[350px] mt-8 lg:mt-0">
                            <div className="absolute inset-0 bg-linear-to-br from-amber-500/10 to-transparent opacity-50" />

                            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 relative z-10">
                                <div className="bg-black/50 backdrop-blur-md border border-white/5 rounded-2xl p-4 md:p-6 flex flex-col items-center text-center gap-2 md:gap-4 hover:border-amber-500/30 transition-colors">
                                    <Target className="w-7 h-7 md:w-10 md:h-10 text-amber-500" />
                                    <div>
                                        <h3 className="font-bold text-white mb-1 text-sm md:text-base">Our Mission</h3>
                                        <p className="text-xs md:text-sm text-gray-500">Elevate storytelling.</p>
                                    </div>
                                </div>
                                <div className="bg-black/50 backdrop-blur-md border border-white/5 rounded-2xl p-4 md:p-6 flex flex-col items-center text-center gap-2 md:gap-4 hover:border-amber-500/30 transition-colors">
                                    <Zap className="w-7 h-7 md:w-10 md:h-10 text-amber-500" />
                                    <div>
                                        <h3 className="font-bold text-white mb-1 text-sm md:text-base">Our Edge</h3>
                                        <p className="text-xs md:text-sm text-gray-500">Speed and precision.</p>
                                    </div>
                                </div>
                                <div className="bg-black/50 backdrop-blur-md border border-white/5 rounded-2xl p-4 md:p-6 flex flex-col items-center text-center gap-2 md:gap-4 hover:border-amber-500/30 transition-colors">
                                    <Users className="w-7 h-7 md:w-10 md:h-10 text-amber-500" />
                                    <div>
                                        <h3 className="font-bold text-white mb-1 text-sm md:text-base">Our Approach</h3>
                                        <p className="text-xs md:text-sm text-gray-500">Collaborative focus.</p>
                                    </div>
                                </div>
                                <div className="bg-black/50 backdrop-blur-md border border-white/5 rounded-2xl p-4 md:p-6 flex flex-col items-center text-center gap-2 md:gap-4 hover:border-amber-500/30 transition-colors">
                                    <TrendingUp className="w-7 h-7 md:w-10 md:h-10 text-amber-500" />
                                    <div>
                                        <h3 className="font-bold text-white mb-1 text-sm md:text-base">Our Goal</h3>
                                        <p className="text-xs md:text-sm text-gray-500">Measurable impact.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Meet the Founders Section */}
            <section className="py-24 px-4 md:px-8 relative z-10 bg-black/40 border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet The <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600">Founders</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            The creative and technical minds bringing your brand to life.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20"
                    >
                        {/* Founder 1 */}
                        <motion.div variants={fadeIn} className="group">
                            <div className="relative aspect-4/5 rounded-3xl overflow-hidden mb-6 border border-neutral-800 group-hover:border-amber-500/50 transition-colors duration-500">
                                <div className="absolute inset-0 bg-neutral-900 animate-pulse" /> {/* Fallback loading state */}
                                <Image
                                    src="/images/founder_one.png"
                                    alt="Creative Director"
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out z-10"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80 z-20" />

                                <div className="absolute bottom-0 left-0 p-8 z-30">
                                    <h3 className="text-3xl font-bold text-white mb-2">Alex Mercer</h3>
                                    <p className="text-amber-500 font-medium">Creative Director & Co-Founder</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-lg leading-relaxed px-2">
                                With over 8 years in video production and visual storytelling, Alex bridges the gap between raw emotion and digital media. He ensures every frame we produce aligns with your core brand message.
                            </p>
                        </motion.div>

                        {/* Founder 2 */}
                        <motion.div variants={fadeIn} className="group">
                            <div className="relative aspect-4/5 rounded-3xl overflow-hidden mb-6 border border-neutral-800 group-hover:border-amber-500/50 transition-colors duration-500">
                                <div className="absolute inset-0 bg-neutral-900 animate-pulse" /> {/* Fallback loading state */}
                                <Image
                                    src="/images/founder_two.png"
                                    alt="Technical Director"
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out z-10"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80 z-20" />

                                <div className="absolute bottom-0 left-0 p-8 z-30">
                                    <h3 className="text-3xl font-bold text-white mb-2">Sophia Chen</h3>
                                    <p className="text-amber-500 font-medium">Head of Engineering & Co-Founder</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-lg leading-relaxed px-2">
                                Sophia is a full-stack architect obsessed with clean code and lightning-fast performance. She ensures our aesthetic visions are supported by robust, scalable, and responsive web technologies.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default AboutPage