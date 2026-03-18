import React from 'react'
import ContactClient from './ContactClient'

export const metadata = {
    title: 'Contact VzualVibe | Best Video Editor & Web Developer in Taramandal, Gorakhpur',
    description: 'Looking for professional video editing or website development in Taramandal or Gorakhnath area? Contact VzualVibe at +91 8853106016. We are Gorakhpur\'s top-rated creative agency.',
    keywords: 'VzualVibe Contact, Video Editing Taramandal, Web Development Gorakhnath, Best Video Editor in Gorakhpur, VzualVibe Phone Number, Digital Agency Gorakhpur UP',
    alternates: {
        canonical: 'https://vzualvibe.in/contact',
    },
    openGraph: {
        title: 'Contact VzualVibe Gorakhpur | Start Your Creative Project',
        description: 'Premium video and web services in Taramandal, Gorakhpur. Call us at +91 8853106016.',
        url: 'https://vzualvibe.in/contact',
        siteName: 'VzualVibe',
        images: [
            {
                url: '/images/banner.png',
                width: 1200,
                height: 630,
                alt: 'Contact VzualVibe Gorakhpur',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact VzualVibe | Gorakhpur\'s Digital Experts',
        description: 'Get world-class editing and web services in Taramandal, Gorakhpur.',
        images: ['/images/banner.png'],
    },
}

const page = () => {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
            "@type": "LocalBusiness",
            "name": "VzualVibe",
            "image": "https://vzualvibe.in/logo.png",
            "email": "vzualvibemedia@gmail.com",
            "telephone": ["+91-8853106016", "+91-9935646806"],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bargadwa, Gorakhnath",
                "addressLocality": "Gorakhpur",
                "addressRegion": "UP",
                "postalCode": "273015", // Bargadwa area ka code
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 26.7865, // Bargadwa/Gorakhnath approx coordinates
                "longitude": 83.3510
            },
            "url": "https://vzualvibe.in/contact",
            "openingHours": "Mo-Sa 09:00-20:00"
        }
    };


    return (
        <>
            <ContactClient />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
        </>
    )
}

export default page