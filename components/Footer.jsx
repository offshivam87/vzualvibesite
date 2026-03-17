import React from 'react';
import { Instagram, Linkedin, Youtube, Mail, MapPin, Phone, X } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-black pt-20 pb-10 overflow-hidden border-t border-white/10 font-sans">
            {/* Subtle glow effect at the top border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-linear-to-r from-transparent via-amber-500/50 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[100px] bg-amber-500/5 blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Info */}
                    <div className="md:col-span-5 lg:col-span-5">
                        <div className="text-2xl font-bold tracking-tighter text-[#fbc02d] mb-6">
                            vzualvibe
                        </div>
                        <p className="text-[#a1a1aa] text-sm leading-relaxed mb-8 max-w-sm">
                            Expert web development and cinematic video editing designed to convert your viewers into loyal customers. Don't just exist online. Dominate.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://www.instagram.com/vzualvibe/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#a1a1aa] hover:bg-[#fbc02d] hover:text-black transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.linkedin.com/company/vzualvibe-media" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#a1a1aa] hover:bg-[#fbc02d] hover:text-black transition-all duration-300">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://x.com/VzualvibeMedia" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#a1a1aa] hover:bg-[#fbc02d] hover:text-black transition-all duration-300">
                                <X size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
                        <h4 className="text-white font-semibold mb-6 uppercase text-[0.85rem] tracking-wider">Navigation</h4>
                        <ul className="space-y-3">
                            <li><Link href="/home" className="text-[#a1a1aa] hover:text-[#fbc02d] text-sm transition-colors duration-300 inline-block">Home</Link></li>
                            <li><Link href="/portfolio" className="text-[#a1a1aa] hover:text-[#fbc02d] text-sm transition-colors duration-300 inline-block">Portfolio</Link></li>
                            <li><Link href="/services" className="text-[#a1a1aa] hover:text-[#fbc02d] text-sm transition-colors duration-300 inline-block">Services</Link></li>
                            <li><Link href="/about" className="text-[#a1a1aa] hover:text-[#fbc02d] text-sm transition-colors duration-300 inline-block">About Us</Link></li>
                            <li><Link href="/contact" className="text-[#a1a1aa] hover:text-[#fbc02d] text-sm transition-colors duration-300 inline-block">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-4 lg:col-span-4 lg:col-start-9">
                        <h4 className="text-white font-semibold mb-6 uppercase text-[0.85rem] tracking-wider">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-[#a1a1aa] text-sm">
                                <Mail size={18} className="text-[#fbc02d] shrink-0 mt-0.5" />
                                <a href="mailto:vzualvibemedia@gmail.com" className="hover:text-white transition-colors duration-300">vzualvibemedia@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3 text-[#a1a1aa] text-sm md:hidden lg:flex">
                                <Phone size={18} className="text-[#fbc02d] shrink-0 mt-0.5" />
                                <a href="tel:+918853106016" className="hover:text-white transition-colors duration-300">+91 8853106016</a>
                            </li>
                            <li className="flex items-start gap-3 text-[#a1a1aa] text-sm hidden md:flex lg:hidden">
                                <Phone size={18} className="text-[#fbc02d] shrink-0 mt-0.5" />
                                <a href="tel:+918853106016" className="hover:text-white transition-colors duration-300 text-left">
                                    +91<br />88531<br />06016
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-[#a1a1aa] text-sm">
                                <MapPin size={18} className="text-[#fbc02d] shrink-0 mt-0.5" />
                                <span>Gorakhpur,<br />Uttar Pradesh, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#666] text-[0.8rem]">
                        &copy; {currentYear} VzualVibe. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;