import React from "react";
import Marquee from "react-fast-marquee";

const RecentVideos = () => {
  const videos = [
    "https://imagekit.io/player/embed/moodyplayer/sample%201.2.mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1760188192533&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fmoodyplayer%2Fsample%25201.2.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1760188192533&updatedAt=1760188192533",

    "https://imagekit.io/player/embed/moodyplayer/json.mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1760188423415&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fmoodyplayer%2Fjson.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1760188423415&updatedAt=1760188423415",

    "https://imagekit.io/player/embed/moodyplayer/oodle%20sample%20vid.mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1760188629247&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fmoodyplayer%2Foodle%2520sample%2520vid.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1760188629247&updatedAt=1760188629247",

    "https://imagekit.io/player/embed/moodyplayer/reel%201.mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1760188017938&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fmoodyplayer%2Freel%25201.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1760188017938&updatedAt=1760188017938",

    "https://imagekit.io/player/embed/moodyplayer/reel%201.mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1760188017938&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fmoodyplayer%2Freel%25201.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1760188017938&updatedAt=1760188017938",

    "https://imagekit.io/player/embed/moodyplayer/reel%201.mp4?controls=false&autoplay=true&loop=true&background=%23000000&updatedAt=1760188017938&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fmoodyplayer%2Freel%25201.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1760188017938&updatedAt=1760188017938",
  ];

  return (
    <div className="bg-black relative py-10 overflow-hidden">
      <h1 className="text-3xl text-white font-poppins-bold text-center mb-7 md:text-5xl">
        Our Recent Works
      </h1>

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
