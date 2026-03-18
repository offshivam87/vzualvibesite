"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
]

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScroll, setLastScroll] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY

            if (currentScroll <= 0) {
                setShowNavbar(true)
                return
            }

            if (currentScroll > lastScroll) {
                setShowNavbar(false)
            } else {
                setShowNavbar(true)
            }

            setLastScroll(currentScroll)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScroll])

    return (
        <header
            className={`pointer-events-auto fixed top-3 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-[120%]"
                }`}
        >
            <nav
                className="relative w-full max-w-4xl flex items-center justify-between px-5 py-2 sm:pr-7 sm:pl-3 sm:py-3.5 rounded-full"
                style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                    backdropFilter: "blur(50px) saturate(1.4)",
                    WebkitBackdropFilter: "blur(50px) saturate(1.4)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow:
                        "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(255,255,255,0.05)",
                }}
            >
                {/* Logo */}
                <a
                    href="/"
                    className="flex items-center text-white text-lg sm:text-xl tracking-wider transition-colors duration-300 hover:text-amber-400"
                >
                    <div className="logo w-[14vw] h-[6vh] md:w-[5vw] rounded-[60px] my-auto">
                        <img
                            src="https://ik.imagekit.io/vzualvibe/freepik__background__43968.png?updatedAt=1759289482917"
                            alt="Brand"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    vzualvibe
                </a>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className={`relative text-sm font-medium tracking-wide uppercase transition-all duration-300 group
      ${link.label === "Contact"
                                        ? "px-5 py-2 rounded-full bg-amber-500 text-black hover:bg-amber-400 shadow-[0_0_15px_rgba(234,139,6,0.4)]"
                                        : "text-white hover:text-white"
                                    }`}
                            >
                                {link.label}

                                {/* underline only for normal links */}
                                {link.label !== "Contact" && (
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-400 rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(234,139,6,0.6)]" />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] group"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-5 h-[2px] bg-white/80 rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                            }`}
                    />
                    <span
                        className={`block w-5 h-[2px] bg-white/80 rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""
                            }`}
                    />
                    <span
                        className={`block w-5 h-[2px] bg-white/80 rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                            }`}
                    />
                </button>

                {/* Mobile Dropdown Menu */}
                <div
                    className={`absolute z-50 top-full left-0 right-0 mt-3 rounded-2xl overflow-hidden transition-all duration-400 ease-out md:hidden ${mobileOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-3 pointer-events-none"
                        }`}
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(20,20,20,0.95) 0%, rgba(10,10,10,0.98) 100%)",
                        backdropFilter: "blur(120px) saturate(2)",
                        WebkitBackdropFilter: "blur(120px) saturate(2)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        boxShadow:
                            "0 20px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.1)",
                    }}
                >
                    <ul className="flex flex-col py-3">
                        {navLinks.map((link) => (
                            <Link
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`block text-sm font-medium tracking-wide uppercase transition-all duration-300
    ${link.label === "Contact"
                                        ? "mx-4 my-2 px-5 py-3 rounded-full bg-amber-500 text-black text-center shadow-[0_0_20px_rgba(234,139,6,0.4)]"
                                        : "px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 hover:pl-8"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}