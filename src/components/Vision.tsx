'use client'

import { motion } from 'framer-motion'

const Vision = () => {
  return (
    <section id="vision" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-3xl"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10 glass p-12 rounded-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-6xl mb-8"
            >
              💡
            </motion.div>
            
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl text-gray-200 italic leading-relaxed mb-8"
            >
              "For the next few years, I'll learn from the field — every client, every deal. 
              Later, I'll turn those lessons into machine learning models that make selling 
              smarter and more human."
            </motion.blockquote>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="border-t border-blue-500/30 pt-8"
            >
              <div className="text-xl font-bold text-blue-400 mb-4">
                The Philosophy
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Real estate and automotive sales aren't just about transactions — they're about 
                understanding human psychology at decision points worth thousands of dollars. 
                This is where data meets emotion, where algorithms must learn empathy.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm not just building a career in sales. I'm conducting field research 
                for the next generation of intelligent systems.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30"
            >
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Sales First. Systems Later.
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Vision