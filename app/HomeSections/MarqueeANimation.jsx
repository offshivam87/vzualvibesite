"use client"

import { motion } from "motion/react"

/* ───────────────────────────────────────────────
   Replace these placeholder paths with your own
   client project images / logos.
   ─────────────────────────────────────────────── */
const clientImages = [
    { src: "/images/armor-fit.jpg", alt: "Client Project 1" },
    { src: "/images/k2p.png", alt: "Client Project 2" },
    { src: "/images/scalebait.png", alt: "Client Project 3" },
    { src: "/images/ggmedical.png", alt: "Client Project 4" },
    { src: "/images/rbeathing.png", alt: "Client Project 5" },

]

/* Single row that scrolls infinitely */
const MarqueeRow = ({ reverse = false, speed = 80 }) => {
    /* We duplicate the list so the strip never shows a gap */
    const items = [...clientImages, ...clientImages]

    return (
        <div className="marquee-row">
            <div
                className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}
                style={{ "--marquee-speed": `${speed}s` }}
            >
                {items.map((img, i) => (
                    <div className="marquee-card" key={i}>
                        <div className="marquee-card-inner">
                            <img className="logo-img"
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                draggable={false}
                            />
                            {/* subtle amber glow on hover */}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const MarqueeAnimation = () => {
    return (
        <section className="marquee-section">
            {/* Section heading */}
            {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="marquee-header"
            >
                <span className="marquee-label">Portfolio</span>
                <h2 className="marquee-heading">
                    Brands We've <span className="marquee-heading--accent">Worked With</span>
                </h2>
                <p className="marquee-subheading">
                    A glimpse of the projects and clients who trust us to bring their vision to life.
                </p>
            </motion.div> */}

            {/* Two rows — second row scrolls in reverse for visual depth */}
            <div className="marquee-rows">
                <MarqueeRow speed={35} />

            </div>
        </section>
    )
}

export default MarqueeAnimation