import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Heading = () => {
    return (
        <div>
            {/* Top tagline with dot */}
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="md:px-[15rem] px-[0.5rem] md:text-[1rem] text-[0.6rem] text-white text-center pb-5 flex items-center justify-center gap-2"
            >
                <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
                    className="bg-[#FBC740] font-poppins rounded-full md:w-3 md:h-3 w-2 h-2 inline-block"
                />
                Quality videos delivered smoothly, without freelancer drama.
            </motion.h1>

            {/* Main heading with word-by-word animation */}
            <div className="md:px-[15rem] text-center px-[1rem]">
                <motion.h1 
                    className="text-[2.1rem] md:text-[5rem] text-white font-poppins"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.08
                            }
                        }
                    }}
                >
                    {"Reliable editing for top-tier creators and brands".split(" ").map((word, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                                visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                            }}
                            transition={{ duration: 0.5 }}
                            className="inline-block mr-2"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>
            </div>

            {/* Buttons with hover animations */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="btns flex gap-4 justify-center w-full mt-10 mb-3"
            >
                <a href="https://wa.me/919935646806 " target='_blanck'>
                <motion.button 
                    whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0px 10px 30px rgba(251, 199, 64, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="bg-[#FBC740] font-poppins text-[1.5rem] py-1.5 rounded-full px-5"
                >
                    Hire us
                </motion.button>
                </a>
                <Link to="/portfolio">
                <motion.button 
                    whileHover={{ 
                        scale: 1.05,
                        color: "#FBC740",
                        border:"FBC740"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="text-white font-poppins text-[1.6rem]"
                >
                    Our Portfolio
                </motion.button>
                </Link>
            </motion.div>

            {/* Customer section with slide-in animation */}
            <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
                className="customers md:h-[4rem] flex justify-center md:w-[25vw] mx-auto w-full h-[2.5rem]"
            >
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="img md:w-[18vw] w-[20vw] md:pl-5"
                >
                    <img 
                        src="https://ik.imagekit.io/vzualvibe/freepik__background__52407.png?updatedAt=1759659654303" 
                        alt="" 
                        className="w-full h-full object-cover" 
                    />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="txt w-[35vw] md:w-[25vw] text-[0.8rem] md:text-2xl my-auto text-center text-white font-poppins md:pr- pr-6"
                >
                    40+ Happy Clients
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Heading
