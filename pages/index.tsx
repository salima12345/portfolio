import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Skills from '@/components/Skills'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const HomePage = () => {
    return (
        <div className='overflow-y-auto overflow-x-hidden bg-gradient-to-r from-black to-[#1A0B2E] h-screen'>
            <div id="top"></div>
            <Navbar />
            <Hero />
            <AboutMe />
            <Skills />
            <Work />
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage
