'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      company: 'ApexPlanet Software Pvt. Ltd.',
      position: 'Web Development Intern',
      duration: 'Sep 11, 2025 – Oct 25, 2025',
      location: 'Remote',
      type: 'Internship',
      description: 'Gained hands-on experience in web development while working on real-world projects and strengthening front-end development skills.',
      responsibilities: [
        'Designed and developed responsive web applications using HTML, CSS, and JavaScript',
        'Strengthened front-end development skills through practical implementation',
        'Collaborated with team members on various web development projects',
        'Learned industry best practices and modern development workflows'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Git']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My journey in professional development and the experiences that shaped my skills
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Experience Card */}
                <div className="ml-16 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 card-hover">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center space-x-2 text-primary-600 font-semibold mb-2">
                        <Building2 size={18} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-500 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                          className="flex items-start space-x-2"
                        >
                          <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-600">{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Future Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12 bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Looking Forward
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm actively seeking new opportunities to apply my skills and continue growing as a developer. 
              I'm particularly interested in full-stack development roles where I can contribute to meaningful projects 
              and learn from experienced professionals.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
