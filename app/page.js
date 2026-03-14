"use client"

import FloatingLines from "@/components/FloatingLines"
import Navbar from "@/components/Navbar"
import WhatWeDo from "./HomeSections/WhatWeDo"
import { motion } from "motion/react"
import ScrollVelocity from "@/components/ScrollVelocity"
import WebsiteService from "./HomeSections/WebsiteService"
import WebsiteCard from "./HomeSections/WebsiteCard"
import Form from "@/components/Form"
import Footer from "@/components/Footer"
import NumberCounting from "./HomeSections/NumberCounting"
import { AccordionDemo } from "./HomeSections/Accordion"
import dynamic from "next/dynamic"

const VideoSlider = dynamic(
  () => import("./HomeSections/VideoSlider"),
  { ssr: false }
)




export default function Home() {

  const videos = [
    {
      id: 1,
      title: "Short-Form Reel",
      src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773473595/4_fm9acf.mp4",
    },
    {
      id: 2,
      title: "Product Showcase",
      src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773470115/Rb_1_kxaaaq.mp4",

    },
    {
      id: 3,
      title: "Brand Story",
      src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773474318/The_temple_jewellery_shimmers_with_artistry_capturing_the_essence_of_festivity_in_every_intrica_ucmgb2.mp4",

    },
    {
      id: 4,
      title: "Motion Graphics",
      src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/f_auto,q_auto/global_cell_wp51pg.mp4",
    },
    {
      id: 5,
      title: "YouTube Edit",
      src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773417523/vid2_giq2o3.mp4",

    },
    {
      id: 6,
      title: "Event Highlight",
      src: "https://res.cloudinary.com/dlsxtmkaq/video/upload/v1773472531/WhatsApp_Video_2026-03-14_at_12.44.34_PM_fmmmby.mp4",
    },
  ]
  return (
    <>
      <main className="relative h-svh max-h-[700px] md:h-screen md:max-h-none bg-black overflow-hidden">

        {/* Floating Lines Background — dimmed for text readability */}
        <div className="absolute inset-0 opacity-80">
          <div className="absolute inset-0">
            <FloatingLines
              linesGradient={["#ea8b06", "#f5e747"]}
              animationSpeed={1}
              interactive
              bendRadius={5}
              bendStrength={-0.5}
              mouseDamping={0.05}
              parallax
              parallaxStrength={0.2}
            />
          </div>
        </div>

        {/* Dark vignette overlay for extra contrast around center text */}
        <div
          className="absolute inset-0 z-5 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, transparent 80%)",
          }}
        />

        {/* Edge fade — smooth blend into black at top & bottom */}
        <div
          className="absolute inset-0 z-6 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 15%, transparent 65%, rgba(0,0,0,0.85) 90%, rgb(0,0,0) 100%)",
          }}
        />

        {/* Overlay Content — pointer-events-none so floating lines still respond to mouse */}
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col">

          {/* Navbar */}
          <Navbar />

          {/* Centered Hero Content */}
          <div className="flex-1 flex flex-col items-center justify-start pt-25 sm:pt-20 md:justify-center md:pt-10  text-center px-5 sm:px-6 opacity-0 animate-[fadeUp_1s_ease-out_0.3s_forwards]">
            <h1 className="pb-3 text-[0.8rem]">FRAME • PIXEL • PERFORM</h1>
            <h1 className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
              Don’t Just Exist Online.
              <span className="block font-semibold bg-linear-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-none">
                Dominate with VzualVibe
              </span>
            </h1>


            <p className="mt-4 text-[18px] sm:mt-6 text-white/60 sm:text-lg md:text-xl max-w-xs sm:max-w-lg md:max-w-2xl font-light tracking-wide drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
              Expert web development and cinematic video editing designed to convert your viewers into loyal customers.
            </p>

            {/* Two CTA Buttons */}
            <div className="pointer-events-auto mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <a
                href="/portfolio"
                className="group relative px-6 sm:px-8 py-3 sm:py-3.5 bg-amber-500 text-black font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(234,139,6,0.4)]"
              >
                View Our Work
              </a>
              <a
                href="#contact"
                className="group relative px-6 sm:px-8 py-3 sm:py-3.5 border border-white/30 text-white font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:border-amber-400 hover:text-amber-400 hover:shadow-[0_0_30px_rgba(234,139,6,0.15)]"
              >
                Get In Touch
              </a>
            </div>
            <div className="my-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="customers md:h-[4rem]  flex justify-center md:w-[22vw] mx-auto w-[18rem] h-[2rem]"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="img md:w-[12vw]  w-[20vw] md:pl-10"
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
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="txt  w-[35vw] md:w-[25vw] text-[0.7rem] md:text-[1.3rem] my-auto text-center text-white font-poppins md:pr- pr-6"
                >
                  40+ Happy Clients
                </motion.div>
              </motion.div>
            </div>
          </div>



        </div>
      </main>


      {/* Video Carousel */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="video-slider-header md:mt-10"
      >

        <h2 className="video-slider-heading">
          Our Video <span className="video-slider-heading--accent">Work</span>
        </h2>
      </motion.div>
      <VideoSlider videos={videos} />

      {/* website cards */}

      <WebsiteCard />



      {/* marquee scroll */}


      <div className="relative overflow-hidden py-20">
        <ScrollVelocity
          texts={['vzualvibe • ']}
          velocity={100}
          className="custom-scroll-text"
        />
      </div>
      {/* What We Do Section */}
      <div className="relative z-10">
        <WhatWeDo />
      </div>

      <NumberCounting />



      {/* form */}
      <Form />

      {/* accordion */}
      <AccordionDemo />

      {/* footer */}
      <Footer />

    </>
  )
}