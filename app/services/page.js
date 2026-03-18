import React from 'react'
import ServiceClient from './ServiceClient'

export const metadata = {
    title: 'Professional Video Editing & Web Dev Services in Gorakhpur | VzualVibe',
    description: 'VzualVibe offers expert video editing (Cinematic, YouTube, Reels) and premium web development (Next.js, React, E-commerce) in Bargadwa, Gorakhpur. Elevate your brand with the best digital services in UP.',
    keywords: 'Video Editing Services Gorakhpur, Web Development Services Gorakhpur, YouTube Video Editor Bargadwa, E-commerce Website Developer Gorakhnath, VzualVibe Services, Professional UI/UX Design Gorakhpur',
    alternates: {
        canonical: 'https://vzualvibe.in/services',
    },
    openGraph: {
        title: 'Services - Video Editing & Web Development Solutions',
        description: 'From high-end video post-production to custom coding, we provide top-tier digital services in Gorakhpur.',
        url: 'https://vzualvibe.in/services',
        siteName: 'VzualVibe',
        images: [
            {
                url: '/images/banner.png',
                width: 1200,
                height: 630,
                alt: 'VzualVibe Video and Web Services',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'VzualVibe | Premium Digital Services in Gorakhpur',
        description: 'Professional Editing and Modern Web Dev under one roof.',
        images: ['/images/banner.png'],
    },
}

const page = () => {
    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Video Editing and Web Development",
        "provider": {
            "@type": "LocalBusiness",
            "name": "VzualVibe",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bargadwa, Gorakhnath",
                "addressLocality": "Gorakhpur",
                "addressRegion": "UP",
                "postalCode": "273015",
                "addressCountry": "IN"
            }
        },
        "areaServed": {
            "@type": "State",
            "name": "Uttar Pradesh"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Cinematic Video Editing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Next.js & React Web Development"
                    }
                }
            ]
        }
    };

    return (
        <>
            <ServiceClient />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />
        </>
    )
}

export default page