'use client'

import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovation Inc.',
      description: 'Leading development of scalable web applications using Next.js, React, and Node.js. Mentoring junior developers and implementing best practices.',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL']
    },
    {
      year: '2021 - 2023',
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed and maintained multiple client projects, focusing on modern web technologies and responsive design principles.',
      technologies: ['React', 'Python', 'Django', 'AWS']
    },
    {
      year: '2020 - 2021',
      title: 'Frontend Developer',
      company: 'Creative Agency Co.',
      description: 'Created stunning user interfaces and improved user experience for various client websites and applications.',
      technologies: ['JavaScript', 'Vue.js', 'SCSS', 'Figma']
    },
    {
      year: '2019 - 2020',
      title: 'Junior Web Developer',
      company: 'StartUp Ventures',
      description: 'Started my professional journey building responsive websites and learning modern development practices.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP']
    }
  ]

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          >
            Experience
          </motion.h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} pl-16 md:pl-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black z-10"></div>
                
                <div className={`glass p-8 rounded-3xl glass-hover ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                  <div className="text-blue-400 font-semibold mb-2">{exp.year}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="text-lg text-gray-300 mb-4">{exp.company}</div>
                  <p className="text-gray-400 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Experience