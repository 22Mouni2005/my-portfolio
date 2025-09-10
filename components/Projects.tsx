'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Calendar, Code2 } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Hospital Management System',
      description: 'A comprehensive full-stack web application for efficient hospital management including patient records, staff management, and appointment scheduling.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'MySQL'],
      image: '/api/placeholder/400/250',
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Web Development Internship',
      subtitle: 'ApexPlanet Software Pvt. Ltd.',
      description: 'Developed responsive web applications using modern front-end technologies. Strengthened skills in HTML, CSS, and JavaScript while working on real-world projects.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      image: '/api/placeholder/400/250',
      github: '#',
      live: '#',
      featured: false,
      duration: 'Sep 2025 - Oct 2025'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
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
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing my work and projects that demonstrate my skills and passion for development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 card-hover ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="text-white" size={64} />
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-primary-600 font-medium mb-2">
                          {project.subtitle}
                        </p>
                      )}
                      {project.duration && (
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                          <Calendar size={16} className="mr-1" />
                          {project.duration}
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 mb-6">
              Interested in seeing more of my work?
            </p>
            <a
              href="https://github.com/22Mouni2005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 btn-hover"
            >
              <Github size={20} />
              <span>View All Projects on GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
