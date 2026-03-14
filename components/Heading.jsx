
"use client"
import React from 'react'
import { motion } from "motion/react"

const Heading = ({ title, subtitle }) => {
    return (
        <div><motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="video-slider-header md:mt-10"
        >

            <h2 className="video-slider-heading">
                {title} <span className="video-slider-heading--accent">{subtitle}</span>
            </h2>
        </motion.div></div>
    )
}

export default Heading