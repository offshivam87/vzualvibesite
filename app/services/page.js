"use client"
import React from 'react'
import { motion } from 'motion/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Video, Film, MonitorPlay, Sparkles, Code, Layout, Smartphone, Globe, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const ServicesPage = () => {
    // container variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 md:px-8 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-4 block">What We Do</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600">Services</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            We blend creativity with cutting-edge technology to deliver visual and digital experiences that leave a lasting impact.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Details Section */}
            <section className="py-16 px-4  md:px-8 max-w-7xl mx-auto relative z-10 pb-32">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
                >
                    {/* Video Editing Service Card */}
                    <motion.div variants={itemVariants} className="group relative rounded-3xl overflow-hidden bg-neutral-900/50 border border-neutral-800 hover:border-amber-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-8 md:p-12 relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-8 border border-amber-500/20 text-amber-500 group-hover:scale-110 transition-transform duration-500">
                                <Video className="w-8 h-8" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Editing</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                                Transform your raw footage into captivating visual narratives. We specialize in dynamic cuts, fluid transitions, color grading, and motion graphics to make your content stand out and engage your audience.
                            </p>

                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <MonitorPlay className="w-6 h-6 text-amber-500" />
                                    <span className="text-lg">Motion Graphics</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <Film className="w-6 h-6 text-amber-500" />
                                    <span className="text-lg">Short-Form & Long Form Edits</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <Sparkles className="w-6 h-6 text-amber-500" />
                                    <span className="text-lg">AI Enhanced Edits</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <CheckCircle2 className="w-6 h-6 text-amber-500" />
                                    <span className="text-lg">Corporate & Event Highlights</span>
                                </div>
                            </div>

                            <Link href="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 font-medium group/btn">
                                View Video Portfolio
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Website Development Service Card */}
                    <motion.div variants={itemVariants} className="group relative rounded-3xl overflow-hidden bg-neutral-900/50 border border-neutral-800 hover:border-amber-500/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-8 md:p-12 relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-8 border border-amber-500/20 text-amber-500 group-hover:scale-110 transition-transform duration-500">
                                <Code className="w-8 h-8" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Web Development</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                                Build your digital presence with lightning-fast, highly responsive, and beautifully designed websites. We craft modern digital experiences tailored to your unique brand identity and business goals.
                            </p>

                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <Layout className="w-6 h-6 text-amber-500" />
                                    <span className="text-lg">Custom Landing Pages</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <Globe className="w-6 h-6 text-amber-500" />
                                    <span className="text-lg">Full-Stack Web Applications</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <Smartphone className="w-6 h-6 text-amber-500" />
                                    <span className="text-lg">Mobile Responsive Design</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <CheckCircle2 className="w-6 h-6 text-amber-500" />
                                    <span className="text-lg">SEO & Performance Optimization</span>
                                </div>
                            </div>

                            <Link href="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 font-medium group/btn">
                                View Web Portfolio
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="pb-32 px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-linear-to-r from-neutral-900 to-black border border-neutral-800 rounded-3xl p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -ml-32 -mb-32" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight relative z-10">Ready to Elevate Your Brand?</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                        Let's collaborate to bring your vision to life. Whether it's a stunning video or a powerful website, we're here to help you succeed.
                    </p>
                    <Link href="#" className="inline-flex items-center justify-center px-8 py-4 text-sm md:text-base font-bold text-black bg-amber-500 hover:bg-amber-400 rounded-full transition-colors relative z-10 shadow-[0_0_20px_rgba(234,139,6,0.3)] hover:shadow-[0_0_30px_rgba(234,139,6,0.5)]">
                        Get In Touch
                    </Link>
                </motion.div>
            </section>

            <Footer />
        </div>
    )
}

export default ServicesPage