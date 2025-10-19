import { div } from 'motion/react-client';
import React from 'react'
import Marquee from "react-fast-marquee";

const Brands = () => {

  const videos = [
    "https://ik.imagekit.io/vzualvibe/logo/SnapInsta.to_475438661_9075517859221616_2040462368943918768_n.jpg?updatedAt=1760294356138",
    "https://ik.imagekit.io/vzualvibe/logo/SnapInsta.to_450828565_462533039821456_5177717886216520126_n.jpg?updatedAt=1760294245297",
    "https://ik.imagekit.io/vzualvibe/logo/SnapInsta.to_444167220_461364346480064_2690577398966224215_n.jpg?updatedAt=1760294228633",
    "https://ik.imagekit.io/vzualvibe/logo/SnapInsta.to_508728145_17846357883505696_5079482883430731494_n.jpg?updatedAt=1760294089150",
    "https://ik.imagekit.io/vzualvibe/logo/SnapInsta.to_323508892_6001682316521625_4750112917289688516_n.jpg?updatedAt=1760294000146",
    "https://ik.imagekit.io/vzualvibe/logo/SnapInsta.to_287847413_693614405067632_7738350473347861693_n.jpg?updatedAt=1760293938030",
    "https://ik.imagekit.io/vzualvibe/logo/Beat22%20Logo-01.png?updatedAt=1760293927568",
    "https://ik.imagekit.io/vzualvibe/logo/SnapInsta.to_439788162_1573675606887019_4104243651233387564_n.jpg?updatedAt=1760293797782"

  ];
  return (
    <div className='bg-black'>
      <h1 className="text-[2rem] text-white font-poppins text-center py-10 md:mb-0 md:text-6xl">
        The Editing Choice of 50+ Smart Creators
      </h1>
      <div className="relative w-[85vw]  mt-5 pt-5 md:w-[85vw] h-[20vh] md:h-[40vh] mx-auto overflow-hidden rounded-2xl">
        <Marquee pauseOnHover={false} speed={80} gradient={false}>
        <div className='flex gap-5 md:gap-8 justify-center'>
          {videos.map((video, index) => (
            
            <div
              key={index}
              className="w-[23vw]  md:w-[150px] border-amber-300 border-3 md:h-[150px] h-[11vh]  flex-shrink-0  overflow-hidden rounded-[80px] md:rounded-full"
            >

              <img src={video} className='w-full h-full object-cover' alt="" />

            </div>

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
      </div>
    </div>
  )
}
export default Brands
