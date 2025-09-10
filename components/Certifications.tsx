'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Calendar, ExternalLink, Trophy } from 'lucide-react'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const certifications = [
    {
      title: 'Python Certificate',
      platform: 'SkillRack',
      date: 'December 2024',
      description: 'Comprehensive Python programming certification covering fundamentals, data structures, and advanced concepts.',
      icon: <Award className="text-yellow-500" size={32} />,
      color: 'from-yellow-400 to-orange-500',
      verified: true
    },
    {
      title: 'SQL Certificate',
      platform: 'SkillRack',
      date: 'May 2025',
      description: 'Database management and SQL query optimization certification focusing on MySQL and database design principles.',
      icon: <Award className="text-blue-500" size={32} />,
      color: 'from-blue-400 to-blue-600',
      verified: true
    },
    {
      title: 'Java NPTEL Certificate',
      platform: 'NPTEL (IIT)',
      date: '12-week course',
      description: 'Advanced Java programming course from IIT with Silver medal achievement, covering OOP concepts and advanced Java features.',
      icon: <Trophy className="text-red-500" size={32} />,
      color: 'from-red-400 to-red-600',
      verified: true,
      achievement: 'Silver Medal'
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-white">
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
              Certifications & Achievements
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional certifications and achievements that validate my technical expertise
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 card-hover group"
              >
                {/* Certificate Header */}
                <div className={`h-24 bg-gradient-to-r ${cert.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 left-4 text-white">
                    {cert.icon}
                  </div>
                  {cert.achievement && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                      {cert.achievement}
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-1 text-sm">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-primary-600 font-semibold">{cert.platform}</span>
                    {cert.verified && (
                      <div className="flex items-center space-x-1 text-green-600 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Verified</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200">
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">View Certificate</span>
                    </button>
                    <div className="text-xs text-gray-500">
                      {cert.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Continuous Learning
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                I believe in continuous learning and staying updated with the latest technologies. 
                These certifications represent my commitment to professional development and my passion 
                for mastering new skills in the ever-evolving field of technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Trophy className="text-yellow-500" size={20} />
                  <span className="text-gray-700 font-medium">3 Certifications</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Award className="text-blue-500" size={20} />
                  <span className="text-gray-700 font-medium">Silver Medal</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Calendar className="text-green-500" size={20} />
                  <span className="text-gray-700 font-medium">Ongoing Learning</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
