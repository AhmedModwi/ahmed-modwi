'use client'

import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Ensure we're on the client side
    if (typeof window !== 'undefined') {
      setMounted(true)
    }
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {mounted && [...Array(50)].map((_, i) => {
          // Generate consistent positions based on index to avoid hydration mismatch
          const seedX = (i * 37) % 100 // Pseudo-random based on index
          const seedY = (i * 73) % 100 // Pseudo-random based on index
          const seedDuration = 3 + (i % 3) // Consistent duration based on index
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${seedX}%`,
                top: `${seedY}%`,
              }}
              animate={{
                y: [0, -30, 0],
              }}
              transition={{
                duration: seedDuration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.1,
              }}
            />
          )
        })}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent"
          >
            Ahmed Modwi
          </motion.h1>
          
            <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 mb-4"
          >
            Sales & Customer Experience Professional
          </motion.p>          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Passionate about building relationships, understanding client needs, and delivering 
            solutions that enhance satisfaction and trust. Based in Dubai, UAE.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://ahmed-modwi-cv.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button px-8 py-4 rounded-full text-white font-medium text-lg inline-block text-center"
            >
              View CV Online
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/12pmm4-YjY1mSnKSwqYg8hs85RWh_32E6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-8 py-4 rounded-full text-white font-medium text-lg glass-hover inline-block text-center"
            >
              Download PDF
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="glass px-8 py-4 rounded-full text-white font-medium text-lg glass-hover"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDownIcon className="w-8 h-8 text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero