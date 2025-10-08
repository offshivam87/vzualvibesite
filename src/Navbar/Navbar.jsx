import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (

    
    <header className=" top-8 fixed left-1/2 -translate-x-1/2  z-50 mx-auto w-[95%] md:w-[50vw] h-[8vh] md:h-[8vh] rounded-[50px] backdrop-blur-md bg-white/20 border border-[#FFD700] shadow-lg">
      <nav className="flex items-center justify-between px-4 py-1.5">
        {/* Left: Brand */}
        <a href="/" className="flex items-center gap-2">
        <div className="logo w-[14vw] h-[6vh] md:w-[5vw]  rounded-[60px] my-auto ">
          <img
            src="https://ik.imagekit.io/vzualvibe/freepik__background__43968.png?updatedAt=1759289482917"
            alt="Brand"
            className="w-full h-full object-cover "
          />
          </div>
          <span className="text-white font-poppins">Vzualvibe</span>
        </a>

        {/* Right: Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#page1" className="text-white/90 font-poppins hover:text-white transition">Home</a>
          <a href="#page2" className="text-white/90 font-poppins hover:text-white transition">Portfolio</a>
          <a href="#page3" className="text-white/90 font-poppins hover:text-white transition">About us</a>
          <a
            href="tel:+911234567890"
            className="inline-flex items-center rounded-lg bg-[#FBC740] px-4 py-2 font-poppins-bold text-gray-800 hover:text-white  transition"
          >
            Quick Call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 transition"
        >
          <svg
            className={`h-6 w-6 transition-transform ${open ? "rotate-90" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown panel */}
      <div
        className={`md:hidden px-4 pb-3 transition-[max-height,opacity] duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col my-2 gap-3 text-center pt-2">
          <a onClick={() => setOpen(false)} href="#page1" className="text-white/90 font-poppins hover:text-white transition">Home</a>
          <a onClick={() => setOpen(false)} href="#page2" className="text-white/90 font-poppins hover:text-white transition">Portfolio</a>
          <a onClick={() => setOpen(false)} href="#page3" className="text-white/90 font-poppins hover:text-white transition">About us</a>
          <a
            onClick={() => setOpen(false)}
            href="tel:+911234567890"
            className="inline-flex w-full items-center justify-center rounded-lg bg-[#FBC740] px-4 py-2 text-white  transition"
          >
            Quick Call
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
