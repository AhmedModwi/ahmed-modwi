'use client'

import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern, full-featured e-commerce platform built with Next.js and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/ahmed/ecommerce'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/ahmed/taskapp'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with interactive maps, detailed forecasts, and location-based weather data visualization.',
      image: '/api/placeholder/400/300',
      technologies: ['Vue.js', 'D3.js', 'OpenWeather API', 'Tailwind'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/ahmed/weather'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with dark theme, smooth animations, and glassmorphism design elements.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/ahmed/portfolio'
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive social media analytics dashboard with data visualization, engagement tracking, and performance insights.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Chart.js', 'Express.js', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/ahmed/analytics'
    },
    {
      title: 'Learning Management System',
      description: 'A modern LMS with course creation, student progress tracking, interactive quizzes, and video streaming capabilities.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Prisma', 'AWS S3', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/ahmed/lms'
    }
  ]

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl overflow-hidden glass-hover group"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-4xl text-blue-400">🚀</div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <CodeBracketIcon className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects