'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Sales & Communication',
      icon: '🤝',
      skills: [
        'Consultative Selling',
        'Client Relationship Management', 
        'Negotiation & Closing',
        'Market Research & Analysis',
        'Customer Needs Assessment',
        'Application & Documentation Assistance'
      ]
    },
    {
      title: 'Data & Systems',
      icon: '⚡',
      skills: [
        'Python Programming',
        'Web Development (Next.js, React)',
        'Data Analytics & Visualization',
        'Machine Learning Foundations',
        'Database Management',
        'System Architecture Design'
      ]
    },
    {
      title: 'Industry Knowledge',
      icon: '🏢',
      skills: [
        'Real Estate Market Dynamics',
        'Automotive Sales Processes',
        'Construction Operations',
        'Financial Product Consultation',
        'Telecommunications Systems',
        'Digital Marketing Strategies'
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        'Obsidian (Knowledge Management)',
        'Google Workspace',
        'VoIP Communication Systems',
        'CRM Platforms',
        'Project Management Tools',
        'Data Visualization Tools'
      ]
    }
  ]

  return (
    <section id="skills" className="py-32 relative">
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
            Skills & Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8 glass-hover group"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 group-hover:animate-bounce">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ x: 5 }}
                      className="flex items-center p-3 bg-black/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills