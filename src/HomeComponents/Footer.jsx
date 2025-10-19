import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black font-poppins text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* About Section */}
                    <div className="text-center md:w-[35vw] md:text-left">
                        <div className="text-2xl  h-[15vh] w-[50vw] md:w-[15vw] md:mr-7 mx-auto md:mx-0 font-bold text-[#FFD700] mb-4">
                            <img src="https://ik.imagekit.io/vzualvibe/logo/Untitled%20design.png?updatedAt=1760624075585" className='w-full h-full object-cover' alt="" />
                        </div>
                        <p className="text-gray-400 text-sm md:ml-[2rem] md:text-[1.1rem] leading-relaxed">
                            Premium video editing services that bring your vision to life. <br />
                            Trusted by 50+ creators worldwide.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:ml-[10rem] md:text-left">
                        <h4 className="text-lg font-semibold text-[#FFD700] mb-4">Quick Links</h4>
                        <ul className="space-y-2">

                            <li>
                                <Link to="/portfolio" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">
                                    Portfolio
                                </Link>
                            </li>

                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    

                    {/* Contact Info */}
                    <div className="text-center md:ml-[5rem] md:text-left">
                        <h4 className="text-lg font-semibold text-[#FFD700] mb-4">Get In Touch</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-400 justify-center md:justify-start">
                                <FaEnvelope className="text-[#FFD700] flex-shrink-0" />
                                <Link to="mailto:info@youragency.com" className="hover:text-[#FFD700] transition-colors duration-300">
                                    vzualvibemedia@gmail.com

                                </Link>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 justify-center md:justify-start">
                                <FaPhone className="text-[#FFD700] rotate-90 flex-shrink-0" />
                                <Link to="tel:+1234567890" className="hover:text-[#FFD700] transition-colors duration-300">
                                    +91 8853106016 | +91 9555536556
                                </Link>
                            </li>
                            
                        </ul>

                        {/* Social Media Icons */}
                        <div className="flex gap-4 mt-6 justify-center md:justify-start">
                            <Link
                                to="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-900 p-3 rounded-full hover:bg-[#FFD700] hover:text-black transition-all duration-300"
                            >
                                <FaInstagram size={20} />
                            </Link>
                            <Link
                                to="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-900 p-3 rounded-full hover:bg-[#FFD700] hover:text-black transition-all duration-300"
                            >
                                <FaYoutube size={20} />
                            </Link>
                            <Link
                                to="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-900 p-3 rounded-full hover:bg-[#FFD700] hover:text-black transition-all duration-300"
                            >
                                <FaLinkedin size={20} />
                            </Link>
                            <Link
                                to="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-900 p-3 rounded-full hover:bg-[#FFD700] hover:text-black transition-all duration-300"
                            >
                                <FaTwitter size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-800"></div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} vzualvibe. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link to="/privacy" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
