'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass p-8 rounded-3xl glass-hover">
                <div className="w-80 h-80 mx-auto relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  {/* Placeholder for profile image */}
                  <div className="text-6xl text-blue-400">👨‍💻</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass p-8 rounded-3xl glass-hover">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I&apos;m a passionate full-stack developer with over 5 years of experience creating 
                  digital solutions that combine beautiful design with powerful functionality. 
                  I specialize in modern web technologies and have a keen eye for user experience.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community. 
                  I believe in continuous learning and staying at the forefront of innovation.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="glass p-4 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400">50+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                  <div className="glass p-4 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400">5+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About