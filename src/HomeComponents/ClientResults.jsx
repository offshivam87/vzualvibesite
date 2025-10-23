import React from 'react'
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ClientResults = () => {
    // Container variants for stagger effect
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    // Image card variants
    const imageVariants = {
        hidden: { 
            opacity: 0, 
            y: 100,
            scale: 0.8
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    // Images array for easier management
    const clientImages = [
        {
            id: 1,
            src: "https://ik.imagekit.io/vzualvibe/views/Screenshot%202025-10-11%20214759.png?updatedAt=1760199510147",
            alt: "Client Result 1"
        },
        {
            id: 2,
            src: "https://ik.imagekit.io/vzualvibe/views/Screenshot%202025-10-11%20214446.png?updatedAt=1760199390401",
            alt: "Client Result 2"
        },
        {
            id: 3,
            src: "https://ik.imagekit.io/vzualvibe/views/Screenshot%202025-10-11%20200658.png?updatedAt=1760196135173",
            alt: "Client Result 3"
        },
        {
            id: 4,
            src: "https://ik.imagekit.io/vzualvibe/views/Screenshot%202025-10-11%20200758.png?updatedAt=1760196135191",
            alt: "Client Result 4"
        },
        {
            id: 5,
            src: "https://ik.imagekit.io/vzualvibe/views/Screenshot%202025-10-11%20201511.png?updatedAt=1760196135257",
            alt: "Client Result 5"
        },
        {
            id: 6,
            src: "https://ik.imagekit.io/vzualvibe/views/Screenshot%202025-10-11%20202233.png?updatedAt=1760196135311",
            alt: "Client Result 6"
        }
    ];

    return (
        <div className='bg-black w-full'>
            {/* Heading with blur fade-in animation */}
            <motion.h1 
                initial={{ opacity: 0, filter: "blur(10px)", y: -30 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-4xl text-white font-poppins-bold text-center md:mb-0 md:text-6xl"
            >
                Client Results
            </motion.h1>

            <div className='flex justify-center gap-[5rem] pb-10'>
                <motion.h1 
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    className="text-[1rem] mt-2 text-white font-poppins text-center my-3 md:mb-0 md:text-3xl"
                >
                    (30M+ Views Generated)
                </motion.h1>
            </div>

            <div className="flex flex-col gap-5 md:gap-0 bg-black">
                {/* First Row */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex h-[25vh] md:h-[70vh] w-full justify-center items-center gap-3 md:gap-7 mx-auto"
                >
                    {clientImages.slice(0, 3).map((image) => (
                        <motion.div 
                            key={image.id}
                            variants={imageVariants}
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="w-[29vw] md:h-[65vh] md:w-[20vw] border-amber-300 border-3 rounded h-[23vh] overflow-hidden"
                        >
                            <LazyLoadImage
                                src={image.src}
                                alt={image.alt}
                                effect="blur"
                                className='w-full h-full object-cover'
                                placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23111' width='400' height='300'/%3E%3C/svg%3E"
                                threshold={100}
                                wrapperClassName="w-full h-full"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Second Row */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex h-[25vh] md:h-[70vh] w-full justify-center items-center gap-3 md:gap-7 mx-auto"
                >
                    {clientImages.slice(3, 6).map((image) => (
                        <motion.div 
                            key={image.id}
                            variants={imageVariants}
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="w-[29vw] rounded h-[23vh] border-amber-300 border-3 md:h-[65vh] md:w-[20vw] overflow-hidden"
                        >
                            <LazyLoadImage
                                src={image.src}
                                alt={image.alt}
                                effect="blur"
                                className='w-full h-full object-cover'
                                placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23111' width='400' height='300'/%3E%3C/svg%3E"
                                threshold={100}
                                wrapperClassName="w-full h-full"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default ClientResults
