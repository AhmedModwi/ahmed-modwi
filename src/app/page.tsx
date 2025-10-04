'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Projects'
import Vision from '@/components/Vision'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Vision />
      <Contact />
      <Footer />
    </main>
  )
}