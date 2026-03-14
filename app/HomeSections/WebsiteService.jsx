"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function WebsiteService({
    title,
    description,
    image,
    tags,
    link
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className="group relative rounded-3xl overflow-hidden 
      bg-gradient-to-b from-zinc-100 to-zinc-200 
      dark:from-zinc-900 dark:to-zinc-800
      border border-zinc-200 dark:border-zinc-700
      shadow-xl"
        >

            {/* Image */}
            <div className="relative w-full h-[220px] md:h-[260px] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-5">

                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
                    {title}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="text-sm px-3 py-1 rounded-full
              bg-white/80 dark:bg-zinc-800
              border border-zinc-300 dark:border-zinc-700"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Button */}
                <div className="pt-4">
                    <a
                        href={link}
                        className="inline-flex items-center gap-2
            px-5 py-2.5 rounded-full
            bg-black text-white
            hover:bg-zinc-800
            transition"
                    >
                        View Website →
                    </a>
                </div>

            </div>
        </motion.div>
    )
}