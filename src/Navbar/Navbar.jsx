import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header 
      className={`top-8 fixed left-1/2 -translate-x-1/2 z-50 mx-auto w-[95%] md:w-[50vw] rounded-[50px] backdrop-blur-md bg-white/20 border border-[#FFD700] shadow-lg transition-all duration-300 ${
        open ? "h-auto" : "h-[8vh]"
      }`}
    >
      <nav className="flex items-center justify-between px-4 py-1.5">
        {/* Left: Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="logo w-[14vw] h-[6vh] md:w-[5vw] rounded-[60px] my-auto">
            <img
              src="https://ik.imagekit.io/vzualvibe/freepik__background__43968.png?updatedAt=1759289482917"
              alt="Brand"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-poppins">Vzualvibe</span>
        </Link>

        {/* Right: Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-white/90 font-poppins hover:text-white transition">Home</Link>
          <Link to="/portfolio" className="text-white/90 font-poppins hover:text-white transition">Portfolio</Link>
          <Link to="/about" className="text-white/90 font-poppins hover:text-white transition">About us</Link>
          <Link
            to="tel:+918853106016"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 px-4 py-2 font-poppins-bold text-gray-800 hover:text-white transition"
          >
            Quick Call
          </Link>
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
        className={`md:hidden px-4 transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100 pb-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col my-2 gap-3 text-center pt-2">
          <Link onClick={() => setOpen(false)} to="/" className="text-white/90 font-poppins hover:text-white transition">Home</Link>
          <Link onClick={() => setOpen(false)} to="/portfolio" className="text-white/90 font-poppins hover:text-white transition">Portfolio</Link>
          <Link onClick={() => setOpen(false)} to="/about" className="text-white/90 font-poppins hover:text-white transition">About us</Link>
          <Link
            onClick={() => setOpen(false)}
            to="tel:+918853106016"
            className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 px-4 py-2 text-gray-800 hover:text-white transition"
          >
            Quick Call
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
