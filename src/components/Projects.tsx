'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Customer Experience & Sales',
      icon: '🤝',
      skills: [
        'Consultative Selling & Client Needs Assessment',
        'Negotiation & Deal Facilitation',
        'Client Communication (VoIP / Messaging / In-person)',
        'Customer Engagement & Experience Management',
        'CRM & Lead Follow-up Practices',
        'Operational Coordination & Documentation'
      ]
    },
    {
      title: 'Marketing & Business Development',
      icon: '📈',
      skills: [
        'Market Research & Competitive Pricing',
        'Digital Listing & Marketing Support',
        'Brand Promotion & Campaign Management',
        'Field Research & Data Collection',
        'Customer Experience Analysis',
        'Business Strategy Consultation'
      ]
    },
    {
      title: 'Technical & Development',
      icon: '💻',
      skills: [
        'Web Development & Design',
        'VoIP & Service Management Systems',
        'Inventory & Product Knowledge Management',
        'Digital Presence Consulting',
        'Website Deployment & Maintenance',
        'Technical Problem Solving'
      ]
    },
    {
      title: 'Operations & Coordination',
      icon: '�',
      skills: [
        'Project Management & Coordination',
        'Site Inspections & Documentation',
        'Travel Arrangements & Visa Processing',
        'Government Documentation Support',
        'Process Optimization',
        'Quality Assurance & Reporting'
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