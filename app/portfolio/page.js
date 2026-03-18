import React from 'react'
import PortfolioClient from './PortfolioClient'

export const metadata = {
    title: 'Portfolio | Video & Web Projects in Gorakhpur',
    description: 'Explore VzualVibe\'s portfolio featuring premium video editing projects and high-performance websites delivered in Gorakhpur and beyond. See how we help brands grow with creative visuals.',
    keywords: 'VzualVibe Portfolio, Video Editing Gorakhpur, Web Development Gorakhpur, website development gorakhpur, Cinematic Video Portfolio, Next.js Website Showcase , video editing services gorakhpur, web development services gorakhpur, best video editor in gorakhpur, best website developer in gorakhpur',
    alternates: {
        canonical: 'https://vzualvibe.in/portfolio',
    },
    openGraph: {
        title: 'VzualVibe Portfolio - Cinematic Videos & Modern Websites',
        description: 'Check out our latest work samples in video production and web design, based out of Bargadwa, Gorakhpur.',
        url: 'https://vzualvibe.in/portfolio',
        siteName: 'VzualVibe',
        images: [
            {
                url: '/images/banner.png', // Apne best kaam ka screenshot/collage yahan lagayein
                width: 1200,
                height: 630,
                alt: 'VzualVibe Project Showcase',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'VzualVibe Work | Best Editing & Coding in UP',
        description: 'View our creative portfolio and case studies.',
        images: ['/images/banner.png'],
    },
}

const page = () => {
    return (
        <>
            <PortfolioClient />
            {/* Portfolio Specific Schema - Google Images aur Search mein fayda deta hai */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "VzualVibe Portfolio",
                        "description": "A collection of video editing and web development projects by VzualVibe in Gorakhpur.",
                        "publisher": {
                            "@type": "Organization",
                            "name": "VzualVibe",
                            "location": "Gorakhpur, India"
                        },
                        "mainEntity": {
                            "@type": "ItemList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Cinematic Video Editing"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Custom Web Development"
                                }
                            ]
                        }
                    })
                }}
            />
        </>
    )
}

export default page