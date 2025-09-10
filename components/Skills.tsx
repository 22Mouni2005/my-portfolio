'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Globe, Wrench } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-primary-600" size={24} />,
      skills: [
        { name: 'C', level: 85, color: 'bg-blue-500' },
        { name: 'Python', level: 90, color: 'bg-yellow-500' },
        { name: 'Java', level: 80, color: 'bg-red-500' },
      ]
    },
    {
      title: 'Web Development',
      icon: <Globe className="text-primary-600" size={24} />,
      skills: [
        { name: 'HTML', level: 95, color: 'bg-orange-500' },
        { name: 'CSS', level: 90, color: 'bg-blue-400' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-400' },
      ]
    },
    {
      title: 'Databases',
      icon: <Database className="text-primary-600" size={24} />,
      skills: [
        { name: 'MySQL', level: 80, color: 'bg-blue-600' },
        { name: 'MongoDB', level: 75, color: 'bg-green-500' },
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="text-primary-600" size={24} />,
      skills: [
        { name: 'GitHub', level: 85, color: 'bg-gray-800' },
        { name: 'VS Code', level: 90, color: 'bg-blue-500' },
        { name: 'SkillRack', level: 80, color: 'bg-purple-500' },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and expertise
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 card-hover"
              >
                <div className="flex items-center space-x-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Additional Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Full Stack Development',
                'Responsive Design',
                'Problem Solving',
                'Team Collaboration',
                'Version Control',
                'Agile Methodology',
                'UI/UX Design',
                'API Development'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
