import React from 'react'
import AboutClient from './AboutClient'

export const metadata = {
    title: 'About | Best Video Editing & Web Development Services in Gorakhpur',
    description: 'VzualVibe is Gorakhpur\'s leading creative agency. We specialize in cinematic video editing and modern web development for businesses in Gorakhpur and across Uttar Pradesh. Meet the team driving digital growth in Purvanchal.',
    keywords: 'About VzualVibe, Video Editing Agency Gorakhpur, Best Web Developers in Gorakhpur, Creative Studio Gorakhpur, VzualVibe Team, Professional Editing Gorakhpur UP, Website Design Gorakhpur',
    alternates: {
        canonical: 'https://vzualvibe.in/about',
    },
    openGraph: {
        title: 'Meet VzualVibe - Gorakhpur\'s Premier Digital Agency',
        description: 'Transforming the digital landscape of Gorakhpur with high-end video editing and expert web development services.',
        url: 'https://vzualvibe.in/about',
        siteName: 'VzualVibe',
        images: [
            {
                url: '/images/banner.png',
                width: 1200,
                height: 630,
                alt: 'VzualVibe Team Gorakhpur',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About VzualVibe | Gorakhpur\'s Creative Experts',
        description: 'Leading the way in Video & Web services in Gorakhpur, UP.',
        images: ['/images/banner.png'],
    },
}

const page = () => {
    return (
        // Fragment (<> </>) ka use karein do components ko wrap karne ke liye
        <>
            <AboutClient />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "mainEntity": {
                            "@type": "LocalBusiness",
                            "name": "VzualVibe",
                            "description": "Gorakhpur's premier video editing and web development agency.",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Gorakhpur",
                                "addressRegion": "UP",
                                "addressCountry": "IN"
                            },
                            "areaServed": "Gorakhpur and Purvanchal Region"
                        }
                    })
                }}
            />
        </>
    )
}

export default page