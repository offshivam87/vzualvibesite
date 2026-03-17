"use client"
import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Form from '@/components/Form'

const ContactClient = () => {
    return (
        <div>
            <Navbar />
            <section className="mt-50 px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-linear-to-r from-neutral-900 to-black border border-neutral-800 rounded-3xl p-12 text-center relative overflow-hidden"
                >
                    {/* glow effects */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -ml-32 -mb-32" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight relative z-10">
                        Let’s Start Your Project
                    </h2>

                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                        Have an idea, brand, or project in mind? Tell us what you're looking for
                        and our team at <span className="text-white font-semibold">VzualVibe</span> will help turn it into
                        a powerful website or high-impact video.
                    </p>

                    <Link
                        href="tel:+918853106016"
                        className="inline-flex items-center justify-center px-8 py-4 text-sm md:text-base font-bold text-black bg-amber-500 hover:bg-amber-400 rounded-full transition-colors relative z-10 shadow-[0_0_20px_rgba(234,139,6,0.3)] hover:shadow-[0_0_30px_rgba(234,139,6,0.5)]"
                    >
                        Call Now
                    </Link>
                </motion.div>
            </section>

            <Form />
            <Footer />
        </div>
    )
}

export default ContactClient