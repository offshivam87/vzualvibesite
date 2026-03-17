import React from 'react'
import HomeClient from './HomeSections/HomeClient'

export const metadata = {
  title: 'VzualVibe | Best Video Editing & Web Development in Gorakhpur',
  description: 'VzualVibe provides professional video editing and high-end website development services in Gorakhpur. Boost your digital presence with the best creative agency in UP.',
  keywords: 'Video Editing Gorakhpur, Website Development Gorakhpur, Best Video Editor in Gorakhpur, Web Design Services Gorakhpur, VzualVibe Gorakhpur',
  alternates: {
    canonical: 'https://vzualvibe.in',
  },
  openGraph: {
    title: 'VzualVibe - Video Editing & Web Development Experts',
    description: 'Gorakhpur\'s leading agency for cinematic video editing and modern website solutions.',
    url: 'https://vzualvibe.in',
    siteName: 'VzualVibe',
    images: [
      {
        url: '../public/images/logo.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VzualVibe | Gorakhpur Video & Web Agency',
    description: 'Transforming ideas into reality with expert editing and coding.',
    images: ['../public/images/logo.jpg'],
  },
}

const page = () => {
  return (
    <HomeClient />
  )
}

export default page