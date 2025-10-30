import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion'

const RecentVideos = () => {
  const videos = [
    // "https://imagekit.io/player/embed/vzualvibemedia/ai%20videos/Video-558.mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1761039703660&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzualvibemedia%2Fai%2520videos%2FVideo-558.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761039703660&updatedAt=1761039703660",

    //  "https://imagekit.io/player/embed/vzualvibemedia/transitional/SnapInsta.to_AQNfw6sQaNkHBjOGc2ysE0lo4ymeNMSPUpWuQfkKpKZVrFQNwWW-_cTg2IKFF1Qm-vB-gzIw6yITfmld_bx5PiDJOTjPn6E52LGiGw0.mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1761036984122&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzualvibemedia%2Ftransitional%2FSnapInsta.to_AQNfw6sQaNkHBjOGc2ysE0lo4ymeNMSPUpWuQfkKpKZVrFQNwWW-_cTg2IKFF1Qm-vB-gzIw6yITfmld_bx5PiDJOTjPn6E52LGiGw0.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761036984122&updatedAt=1761036984122",

     "https://imagekit.io/player/embed/vzual1/motion%20graphic/lasya3.mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1761060042452&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzual1%2Fmotion%2520graphic%2Flasya3.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761060042452&updatedAt=1761060042452",

     "https://imagekit.io/player/embed/vv2/SnapInsta.to_AQMhCM_xpxycozsuD9Kq4f9n6YDQE0Xy7Obm14pOhylJIeYvM53vUa9x0WHppaBt52SBmtsPMSwz1f2Q3mRY-r2R3uh11oOokdmBSEQ.mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1761066146239&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvv2%2FSnapInsta.to_AQMhCM_xpxycozsuD9Kq4f9n6YDQE0Xy7Obm14pOhylJIeYvM53vUa9x0WHppaBt52SBmtsPMSwz1f2Q3mRY-r2R3uh11oOokdmBSEQ.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761066146239&updatedAt=1761066146239",

     "https://imagekit.io/player/embed/vv2/gymnasium%20video%20board(1).mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1761069098464&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvv2%2Fgymnasium%2520video%2520board%281%29.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761069098464&updatedAt=1761069098464",

    //  "https://imagekit.io/player/embed/vzualvibemedia/ai%20videos/Video-343.mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1761039705546&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzualvibemedia%2Fai%2520videos%2FVideo-343.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761039705546&updatedAt=1761039705546",

    //  "https://imagekit.io/player/embed/vzualvibemedia/transitional/SnapInsta.to_AQPoTHd9E8-_PvrSb_WF9iI-uTDqedTmfMmkbBrFIohCWBtkhj6n22do0YbMGOj8lACBMFAwuR3H1tQi29spkS5P-N0j7FnJRt3MPOE.mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1761036983729&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzualvibemedia%2Ftransitional%2FSnapInsta.to_AQPoTHd9E8-_PvrSb_WF9iI-uTDqedTmfMmkbBrFIohCWBtkhj6n22do0YbMGOj8lACBMFAwuR3H1tQi29spkS5P-N0j7FnJRt3MPOE.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761036983729&updatedAt=1761036983729",

     "https://imagekit.io/player/embed/vzual1/motion%20graphic/global%20cell%20motion%20reel.mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1761059354103&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzual1%2Fmotion%2520graphic%2Fglobal%2520cell%2520motion%2520reel.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761059354103&updatedAt=1761059354103",

     "https://imagekit.io/player/embed/vzual1/talking%20head/SnapInsta.to_AQPTN8BaSyy3dNcMXuOaep6AMOK3u_als9sg3Aife_VRA22g_PHd5ebD0VjQdIiVa1NDin7dDQitpf7dgZsKYiXpWCJX1QTQZFaXjlQ.mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1761062153710&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fvzual1%2Ftalking%2520head%2FSnapInsta.to_AQPTN8BaSyy3dNcMXuOaep6AMOK3u_als9sg3Aife_VRA22g_PHd5ebD0VjQdIiVa1NDin7dDQitpf7dgZsKYiXpWCJX1QTQZFaXjlQ.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761062153710&updatedAt=1761062153710",

     "https://imagekit.io/player/embed/tj8nyzruq/nig.mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1761141007865&thumbnail=https%3A%2F%2Fik.imagekit.io%2Ftj8nyzruq%2Fnig.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1761141007865&updatedAt=1761141007865"
  ]

  return (
    <div className="bg-black relative py-10 overflow-hidden">
     <motion.h1 
    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="text-3xl text-white font-poppins-bold text-center mb-7 md:text-5xl"
>
    Our Recent Works
</motion.h1>


      <div className="relative w-[85vw]   pt-5 md:w-[85vw] h-[40vh] md:h-[80vh] mx-auto overflow-hidden rounded-2xl">
        <Marquee pauseOnHover={true} speed={80} gradient={false}>
          {videos.map((video, index) => (
            <div
              key={index}
              className="w-[47vw] md:w-[18vw] h-[37vh] md:h-[70vh]  flex-shrink-0 mx-2 overflow-hidden rounded-xl"
            >
              <iframe className="w-full h-full object-cover" src={video} title="ImageKit video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"> </iframe>
              {/* <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              /> */}
            </div>
          ))}
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
  );
};

export default RecentVideos;
