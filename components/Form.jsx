"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Phone, Instagram, Linkedin, Youtube, X } from 'lucide-react';

const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xreykjzd", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
                reset(); // Clear the form
                setTimeout(() => setIsSuccess(false), 3000);
            } else {
                alert("Failed to submit form. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="w-full py-16 px-4 md:px-8 bg-black text-white font-sans">
            {/* Header */}
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold mb-3"
                >
                    Get in Touch
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.1 }}
                    className="text-white/50 text-sm sm:text-base font-light"
                >
                    Feel free to reach out, I'll get back to you soon.
                </motion.p>
            </div>

            {/* Content Container */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">

                {/* Left Column: Contact Details */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:col-span-5 bg-[#121212] rounded-2xl gap-5 p-6 sm:p-8 flex flex-col"
                >
                    <h3 className="text-[#fbc02d] font-semibold text-[1.1rem] mb-3">Let's Connect</h3>
                    <p className="text-[#a1a1aa] text-[0.9rem] mb-8 leading-relaxed max-w-[90%]">
                        Ready to start your project? Reach out through any of these channels.
                    </p>

                    {/* WhatsApp Block */}
                    <a href="https://wa.me/9935646806" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-[#1a1a1a] hover:bg-[#222] transition-colors rounded-[0.8rem] p-3 mb-8">
                        <div className="w-11 h-11 bg-[#0f2c16] flex items-center justify-center rounded-lg">
                            <Phone className="w-[1.2rem] h-[1.2rem] text-[#2ebd59]" strokeWidth={2.5} />
                        </div>
                        <div>
                            <h4 className="text-white font-medium text-[0.95rem]">WhatsApp</h4>
                            <p className="text-[#888] text-[0.8rem] mt-0.5">+91 9935646806</p>
                        </div>
                    </a>

                    <h3 className="text-white font-semibold text-[0.9rem] mb-4">Follow Us</h3>

                    <div className="space-y-3">
                        {/* Instagram */}
                        <a href="https://www.instagram.com/vzualvibe/" target='_blank' className="flex items-center gap-4 bg-[#1a1a1a] hover:bg-[#222] transition-colors rounded-[0.8rem] p-3">
                            <div className="w-10 h-10 bg-[#282828] flex items-center justify-center rounded-lg">
                                <Instagram className="w-5 h-5 text-[#a1a1aa]" strokeWidth={1.8} />
                            </div>
                            <div>
                                <h4 className="text-white font-medium text-[0.9rem]">Instagram</h4>
                                <p className="text-[#888] text-[0.75rem] mt-0.5">Follow us on Instagram</p>
                            </div>
                        </a>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/company/vzualvibe-media" target='_blank' className="flex items-center gap-4 bg-[#1a1a1a] hover:bg-[#222] transition-colors rounded-[0.8rem] p-3">
                            <div className="w-10 h-10 bg-[#282828] flex items-center justify-center rounded-lg">
                                <Linkedin className="w-5 h-5 text-[#a1a1aa]" strokeWidth={1.8} />
                            </div>
                            <div>
                                <h4 className="text-white font-medium text-[0.9rem]">LinkedIn</h4>
                                <p className="text-[#888] text-[0.75rem] mt-0.5">Follow us on LinkedIn</p>
                            </div>
                        </a>
                        {/* YouTube */}
                        <a href="https://x.com/VzualvibeMedia" target='_blank' className="flex items-center gap-4 bg-[#1a1a1a] hover:bg-[#222] transition-colors rounded-[0.8rem] p-3">
                            <div className="w-10 h-10 bg-[#282828] flex items-center justify-center rounded-lg">
                                <X className="w-5 h-5 text-[#a1a1aa]" strokeWidth={1.8} />
                            </div>
                            <div>
                                <h4 className="text-white font-medium text-[0.9rem]">X</h4>
                                <p className="text-[#888] text-[0.75rem] mt-0.5">Follow us on X</p>
                            </div>
                        </a>
                    </div>
                </motion.div>

                {/* Right Column: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-full md:col-span-7 bg-[#121212] rounded-2xl p-6 sm:p-8"
                >
                    <h3 className="text-[#fbc02d] font-semibold text-[1.1rem] mb-6">Send a Message</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Name Field */}
                        <div className="space-y-1.5">
                            <label htmlFor="name" className="text-[0.8rem] font-medium text-[#e4e4e7]">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                className={`w-full bg-[#0a0a0a] border ${errors.name ? 'border-red-500/50' : 'border-[#27272a] hover:border-[#3f3f46]'} focus:border-[#fbc02d]/50 rounded-xl py-3 px-4 text-[0.9rem] text-white placeholder:text-[#52525b] outline-none transition-all duration-300`}
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <p className="text-red-400 text-[0.75rem] mt-1">{errors.name.message}</p>}
                        </div>

                        {/* Email Field */}
                        <div className="space-y-1.5">
                            <label htmlFor="email" className="text-[0.8rem] font-medium text-[#e4e4e7]">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                className={`w-full bg-[#0a0a0a] border ${errors.email ? 'border-red-500/50' : 'border-[#27272a] hover:border-[#3f3f46]'} focus:border-[#fbc02d]/50 rounded-xl py-3 px-4 text-[0.9rem] text-white placeholder:text-[#52525b] outline-none transition-all duration-300`}
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            {errors.email && <p className="text-red-400 text-[0.75rem] mt-1">{errors.email.message}</p>}
                        </div>

                        {/*  Phone Field */}
                        <div className="space-y-2">
                            <label
                                htmlFor="phone"
                                className="text-xs sm:text-[0.8rem] font-medium text-[#e4e4e7]"
                            >
                                Phone Number
                            </label>

                            <input
                                id="phone"
                                type="tel"
                                placeholder="8853106016"
                                inputMode="numeric"
                                className={`w-full bg-[#0a0a0a] border 
    ${errors.phone ? "border-red-500/50" : "border-[#27272a] hover:border-[#3f3f46]"} 
    focus:border-[#fbc02d]/50
    rounded-xl
    py-3.5 sm:py-3
    px-4
    text-sm sm:text-[0.9rem]
    text-white
    placeholder:text-[#52525b]
    outline-none
    transition-all duration-300`}
                                {...register("phone", {
                                    required: "Phone number is required",
                                    minLength: {
                                        value: 10,
                                        message: "Phone must be 10 digits"
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Phone must be 10 digits"
                                    }
                                })}
                            />

                            {errors.phone && (
                                <p className="text-red-400 text-[0.75rem] mt-1">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>

                        {/* Message Field */}
                        <div className="space-y-1.5 pt-1">
                            <label htmlFor="message" className="text-[0.8rem] font-medium text-[#e4e4e7]">Message</label>
                            <textarea
                                id="message"
                                placeholder="Tell me about your project..."
                                rows="5"
                                className={`w-full bg-[#0a0a0a] border ${errors.message ? 'border-red-500/50' : 'border-[#27272a] hover:border-[#3f3f46]'} focus:border-[#fbc02d]/50 rounded-xl py-3 px-4 text-[0.9rem] text-white placeholder:text-[#52525b] outline-none transition-all duration-300 resize-none`}
                                {...register("message", { required: "Message is required", minLength: { value: 10, message: "Must be at least 10 characters" } })}
                            />
                            {errors.message && <p className="text-red-400 text-[0.75rem] mt-1">{errors.message.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                onClick={handleSubmit(onSubmit)}
                                disabled={isSubmitting || isSuccess}
                                className={`w-full py-3 rounded-xl font-semibold text-[0.9rem] transition-all duration-300 outline-none ${isSuccess
                                    ? 'bg-[#2ebd59] text-black shadow-lg shadow-[#2ebd59]/20'
                                    : 'bg-[#ffc107] hover:bg-[#ffb300] text-black shadow-lg shadow-[#ffc107]/10'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                        Sending...
                                    </div>
                                ) : isSuccess ? (
                                    "Message Sent Successfully"
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Form;