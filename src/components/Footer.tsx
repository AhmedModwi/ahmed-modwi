'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass p-8 rounded-3xl inline-block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white mb-4"
            >
              Ahmed Modwi
            </motion.div>
            <p className="text-gray-400 mb-6">
              Crafting digital experiences with passion and precision
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:ahmedmodwi@outlook.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                📧
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                🐙
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://linkedin.com/in/ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                💼
              </motion.a>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 Ahmed Modwi. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer