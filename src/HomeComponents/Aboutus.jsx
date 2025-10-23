import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaAward, FaClock, FaCheckCircle } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Footer from './Footer';

const AboutUs = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const founders = [
        {
            name: 'Shivam Mishra',
            role: 'Co-Founder & Lead Editor',
            description: 'Expert in motion graphics and dynamic storytelling with 2+ years of experience across multiple niches',
            image: "https://ik.imagekit.io/vv2/p3.png?updatedAt=1761197012379"
        },
        {
            name: 'Shubham Mishra',
            role: 'Founder & Creative Director',
            description: 'Specializes in Ai Video editing and Storytelling with 2+ years of crafting compelling visual narratives',
            image: "https://ik.imagekit.io/vv2/p2.png?updatedAt=1761196103672"
        }
    ];

    const features = [
        {
            icon: FaCheckCircle,
            title: 'Reliable Delivery',
            description: 'Your deadlines are our priority. We deliver quality edits on time, every time'
        },
        {
            icon: FaVideo,
            title: 'Multi-Niche Expertise',
            description: 'From corporate to lifestyle, real estate to social media content - we edit it all'
        },
        {
            icon: FaAward,
            title: 'Premium Quality',
            description: 'Professional-grade editing with attention to every detail that matters'
        },
        {
            icon: FaClock,
            title: '2+ Years Experience',
            description: 'Battle-tested expertise across all types of video content and platforms'
        }
    ];

    const stats = [
        { number: '500+', label: 'Videos Edited' },
        { number: '50+', label: 'Happy Clients' },
        { number: '15+', label: 'Niches Covered' },
        { number: '100%', label: 'On-Time Delivery' }
    ];

    return (
        <div className="min-h-screen md:pt-[2rem] pt-[5rem] font-poppins overflow-x-hidden bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-black"></div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="relative max-w-7xl mx-auto text-center"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                    >
                        Welcome to{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600">
                            VzualVibe
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                    >
                        Where creativity meets reliability. Your trusted partner for professional video editing across all niches
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="mt-8 h-1 w-32 mx-auto bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full"
                    />
                </motion.div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="max-w-6xl mx-auto"
                >
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Our <span className="text-yellow-500">Story</span>
                        </h2>
                        <div className="h-1 w-20 mx-auto bg-yellow-500 rounded-full"></div>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="bg-black border border-yellow-900/30 rounded-2xl p-6 sm:p-10 lg:p-12"
                    >
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                            VzualVibe started with a straightforward idea: creators need editing partners they can actually count on. Not just someone who knows their way around editing software, but someone who gets what you're trying to create and shows up when they say they will. That's what brothers Shubham and Shivam Mishra set out to build a service based on trust, quality work, and showing up consistently.
                        </p>

                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                            Over the past <span className="text-yellow-400 font-semibold">two years</span>, we've edited all kinds of content energetic YouTube shorts, engaging Instagram Reels, compelling real estate tours, scroll-stopping social media clips, and more. Sure, we know our way around the technical side of editing. But what really drives us is something simpler: <span className="text-yellow-400 font-semibold">being reliable</span>. We believe that's what separates a good editor from a true partner.
                        </p>

                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                            We get it,your deadlines aren't just dates on a calendar. Your content keeps your business running. That's exactly why <span className="text-yellow-400 font-semibold">reliable, on-time delivery</span> is at the heart of everything we do at VzualVibe. When you work with us, you're not hiring just another editing service. You're working with people who care about your success as much as you do.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Founders Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="max-w-6xl mx-auto"
                >
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Meet the <span className="text-yellow-500">Founders</span>
                        </h2>
                        <div className="h-1 w-20 mx-auto bg-yellow-500 rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {founders.map((founder, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                className="bg-black border-2 border-yellow-900/30 rounded-2xl p-6 sm:p-8 hover:border-yellow-500/50 transition-all duration-300"
                            >
                                <div className="text-center mb-6">
                                    {/* Fixed Image Container */}
                                    <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-amber-300">
                                        <LazyLoadImage
                                            src={founder.image}
                                            alt={founder.name}
                                            effect="blur"
                                            className="w-full h-full object-cover "
                                            style={{ objectPosition: '70% 30%' }}
                                            wrapperClassName="w-full h-full"
                                        />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">
                                        {founder.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm sm:text-base font-medium mb-4">
                                        {founder.role}
                                    </p>
                                    <div className="h-0.5 w-16 mx-auto bg-yellow-500/50 rounded-full"></div>
                                </div>
                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center">
                                    {founder.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="max-w-7xl mx-auto"
                >
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Why Choose <span className="text-yellow-500">VzualVibe</span>
                        </h2>
                        <div className="h-1 w-20 mx-auto bg-yellow-500 rounded-full mb-6"></div>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            We combine technical expertise with the one thing that matters most: reliability
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                                className="bg-black border border-yellow-900/30 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                                    <feature.icon className="text-black text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-yellow-400 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="max-w-6xl mx-auto"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-br from-yellow-900/20 to-black border-2 border-yellow-500/30 rounded-xl p-6 text-center hover:border-yellow-500 transition-all duration-300"
                            >
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-400 text-sm sm:text-base font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-600 rounded-2xl p-8 sm:p-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                            Ready to Experience Reliable Editing?
                        </h2>
                        <p className="text-black/80 text-lg sm:text-xl mb-8">
                            Let's bring your vision to life with edits you can count on
                        </p>
                        <a href="https://wa.me/919935646806" target='_blank' rel="noopener noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-black text-yellow-400 font-bold px-8 sm:px-12 py-4 rounded-full text-lg hover:bg-gray-900 transition-all duration-300 shadow-2xl"
                            >
                                Get Started Today
                            </motion.button>
                        </a>
                    </div>
                </motion.div>
            </section>
            <Footer/>
        </div>
    );
};

export default AboutUs;
