import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-400">Mounika Karri</h3>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin size={16} />
              <span>Visakhapatnam, Andhra Pradesh</span>
            </div>
            <p className="text-gray-400">
              3rd-year B.Tech Student | Full Stack Web Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-400">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-primary-400 transition-colors">
                About
              </a>
              <a href="#skills" className="block text-gray-300 hover:text-primary-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-primary-400 transition-colors">
                Projects
              </a>
              <a href="#experience" className="block text-gray-300 hover:text-primary-400 transition-colors">
                Experience
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-400">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <a 
                  href="mailto:mounikaf6@gmail.com" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  mounikaf6@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-400" />
                <a 
                  href="tel:6309425985" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  +91 6309425985
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin size={16} className="text-primary-400" />
                <a 
                  href="https://linkedin.com/in/mounika-k-a04097354" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Github size={16} className="text-primary-400" />
                <a 
                  href="https://github.com/22Mouni2005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Mounika Karri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
