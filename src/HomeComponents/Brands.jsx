import React from 'react'
import { motion } from 'framer-motion'
import Marquee from "react-fast-marquee";

const Brands = () => {
  const videos = [
    
    "https://ik.imagekit.io/vzualvibe/logo/SnapInsta.to_475438661_9075517859221616_2040462368943918768_n.jpg?updatedAt=1760294356138",
    "https://ik.imagekit.io/vzualvibe/logo/SnapInsta.to_450828565_462533039821456_5177717886216520126_n.jpg?updatedAt=1760294245297",
    "https://ik.imagekit.io/vzualvibe/logo/SnapInsta.to_444167220_461364346480064_2690577398966224215_n.jpg?updatedAt=1760294228633",
    "https://ik.imagekit.io/tj8nyzruq/SnapInsta.to_465065513_1593085221589157_7523134629298945608_n.jpg?updatedAt=1761141127816",
    "https://ik.imagekit.io/vzualvibe/logo/SnapInsta.to_508728145_17846357883505696_5079482883430731494_n.jpg?updatedAt=1760294089150",
    "https://ik.imagekit.io/vzualvibe/logo/SnapInsta.to_323508892_6001682316521625_4750112917289688516_n.jpg?updatedAt=1760294000146",
    "https://ik.imagekit.io/vzualvibe/logo/SnapInsta.to_287847413_693614405067632_7738350473347861693_n.jpg?updatedAt=1760293938030",
    "https://ik.imagekit.io/vv2/Gymnasim%20logo.png?updatedAt=1761071345092",
    "https://ik.imagekit.io/vzualvibe/logo/SnapInsta.to_439788162_1573675606887019_4104243651233387564_n.jpg?updatedAt=1760293797782",
    
    "https://ik.imagekit.io/vv2/SnapInsta.to_481613963_1301528497571857_5073046430784992067_n.jpg?updatedAt=1761071344805",
    "https://ik.imagekit.io/vv2/SnapInsta.to_462830935_1287621539074942_1578001952167093595_n.jpg?updatedAt=1761071202148",
    "https://ik.imagekit.io/vv2/SnapInsta.to_499956073_17911429914131393_1230516517385930264_n.jpg?updatedAt=1761071132614",

    "https://ik.imagekit.io/vv2/SnapInsta.to_495548580_17846990370465298_5849442170782749903_n.jpg?updatedAt=1761071704543",
    "https://ik.imagekit.io/vv2/SnapInsta.to_363285465_560283106148546_7506753415135648234_n.jpg?updatedAt=1761071704585"


  ];

  return (
    <div className='bg-black'>
      {/* Heading with blur fade-in */}
      <motion.h1 
        initial={{ opacity: 0, filter: "blur(10px)", y: -30 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-[2rem] text-white font-poppins-bold text-center py-10 md:mb-0 md:text-6xl"
      >
        The Editing Choice of 50+ Smart Creators
      </motion.h1>

      {/* Marquee container with fade-in and scale */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-[85vw] mt-5 pt-5 md:w-[85vw] h-[20vh] md:h-[40vh] mx-auto overflow-hidden rounded-2xl"
      >
        <Marquee pauseOnHover={true} speed={80} gradient={false}>
          <div className='flex gap-5 md:gap-8 justify-center'>
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                
                className="w-[23vw] md:w-[150px] border-amber-300 border-3 md:h-[150px] h-[11vh] flex-shrink-0 overflow-hidden rounded-[80px] md:rounded-full cursor-pointer"
              >
                <img src={video} className='w-full h-full object-cover' alt="" />
              </motion.div>
            ))}
            <div className="w-[8vw] md:w-[20px] flex-shrink-0"></div>
          </div>
        </Marquee>

        {/* Left smooth fade */}
        <div
          className="pointer-events-none absolute -left-5 top-0 h-full w-[20%] z-10"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 90%)",
            filter: "blur(10px)",
          }}
        ></div>

        {/* Right smooth fade */}
        <div
          className="pointer-events-none absolute -right-4 top-0 h-full w-[20%] z-10"
          style={{
            background: "linear-gradient(to left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 90%)",
            filter: "blur(10px)",
          }}
        ></div>
      </motion.div>
    </div>
  )
}

export default Brands
