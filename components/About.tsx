'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, MapPin, GraduationCap, Code2 } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 bg-white">
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image and Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Profile Image */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl ring-8 ring-white/60">
                  <Image
                    src="/images/profile.svg"
                    alt="Mounika Karri"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <Code2 className="text-white" size={32} />
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-3">
                  <MapPin className="text-primary-600" size={20} />
                  <span className="text-gray-700 font-medium">Visakhapatnam, AP</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-3">
                  <GraduationCap className="text-primary-600" size={20} />
                  <span className="text-gray-700 font-medium">3rd Year B.Tech</span>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Hello! I'm Mounika Karri
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I am a passionate 3rd-year B.Tech student from Visakhapatnam, Andhra Pradesh, 
                  with a strong foundation in computer science and a deep love for creating 
                  innovative web solutions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  My journey in technology has equipped me with skills in multiple programming 
                  languages including C, Python, Java, and modern web technologies like HTML, 
                  CSS, and JavaScript. I'm particularly passionate about full-stack development 
                  and creating user-friendly applications that solve real-world problems.
                </p>
              </div>

              {/* Skills Preview */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['C', 'Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'MongoDB', 'MySQL'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Personal Qualities */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">What Drives Me</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-600">Problem-solving mindset</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-600">Continuous learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-600">Team collaboration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-600">Attention to detail</span>
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
