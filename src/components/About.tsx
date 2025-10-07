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
                <div className="w-80 h-80 mx-auto relative rounded-full overflow-hidden border-4 border-blue-400/30 shadow-lg shadow-blue-400/20">
                  <Image
                    src="https://i.postimg.cc/Gt53fc53/Gemini-Generated-Image-ronjcwronjcwronj.png"
                    alt="Ahmed Modwi"
                    fill
                    className="object-cover"
                    priority
                  />
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
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">The Journey Begins</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I&apos;m Ahmed Modwi Ibrahim, a dynamic and persuasive 28-year-old sales professional 
                  living in Dubai, UAE. With practical experience across digital marketing, web services, 
                  client-facing operations, and travel assistance, I specialize in listening to customers, 
                  diagnosing needs, and guiding purchase or service decisions.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  My unique background combines a Civil Engineering degree from University of Khartoum 
                  with diverse experience across customer engagement, field research, web development, 
                  and brand promotion. I have strong market awareness, a consultative selling approach, 
                  and the ability to translate technical information into clear recommendations.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Ready to apply sales and client service skills to showroom and property 
                  consultancy roles in the UAE, I thrive in dynamic environments where I can 
                  combine analytical thinking with human-centered solutions.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="glass p-4 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400">8+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="glass p-4 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400">2</div>
                    <div className="text-sm text-gray-400">Languages Fluent</div>
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