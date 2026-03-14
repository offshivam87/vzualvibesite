import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    const socialIcons = [
        { Icon: FaInstagram, url: "https://www.instagram.com/vzualvibe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
        
        { Icon: FaLinkedin, url: "https://www.linkedin.com/company/vzualvibe-media/?viewAsMember=true" },
        { Icon: FaXTwitter, url: "https://x.com/VzualvibeMedia" }
    ];

    return (
        <footer className="bg-black overflow-y-hidden  font-poppins text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* About Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center md:w-[35vw] md:text-left"
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="text-2xl h-[15vh] w-[50vw] md:w-[15vw] md:mr-7 mx-auto md:mx-0 font-bold text-[#FFD700] mb-4"
                        >
                            <img src="https://ik.imagekit.io/vzualvibe/logo/Untitled%20design.png?updatedAt=1760624075585" className='w-full h-full object-cover' alt="" />
                        </motion.div>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-gray-400 text-sm md:ml-[2rem] md:text-[1.1rem] leading-relaxed"
                        >
                            Premium video editing services that bring your vision to life. <br />
                            Trusted by 50+ creators worldwide.
                        </motion.p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-center md:ml-[10rem] md:text-left"
                    >
                        <h4 className="text-lg font-semibold text-[#FFD700] mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Portfolio', 'About Us',].map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <Link 
                                        to={`/${item.toLowerCase().replace(' ', '')}`} 
                                        className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300"
                                    >
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="text-center md:ml-[5rem] md:text-left"
                    >
                        <h4 className="text-lg font-semibold text-[#FFD700] mb-4">Get In Touch</h4>
                        <ul className="space-y-3">
                            <motion.li 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-3 text-gray-400 justify-center md:justify-start"
                            >
                                <FaEnvelope className="text-[#FFD700] flex-shrink-0" />
                                <Link to="mailto:vzualvibemedia@gmail.com" className="hover:text-[#FFD700] transition-colors duration-300">
                                    vzualvibemedia@gmail.com
                                </Link>
                            </motion.li>
                            <motion.li 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-3 text-gray-400 justify-center md:justify-start"
                            >
                                <FaPhone className="text-[#FFD700] rotate-90 flex-shrink-0" />
                                <Link to="tel:+918853106016" className="hover:text-[#FFD700] transition-colors duration-300">
                                    +91 8853106016
                                </Link>
                                <Link to="tel:+919555536556" className="hover:text-[#FFD700] transition-colors duration-300">
                                    | +91 9555536556
                                </Link>
                            </motion.li>
                        </ul>

                        {/* Social Media Icons */}
                        <div className="flex gap-4 mt-6 justify-center md:justify-start">
                            {socialIcons.map(({ Icon, url }, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.4, 
                                        delay: 0.7 + index * 0.1,
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                    whileHover={{ 
                                        scale: 1.2, 
                                        rotate: 5 
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Link
                                        to={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-900 p-3 rounded-full hover:bg-[#FFD700] hover:text-black transition-all duration-300 block"
                                    >
                                        <Icon size={20} />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Divider */}
            <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="border-t border-gray-800 origin-left"
            />

            {/* Bottom Bar */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-7xl mx-auto px-6 py-6"
            >
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} vzualvibe. All rights reserved.
                    </p>
                    
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
