import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">Rishal.</h3>
            <p className="text-gray-400 max-w-md">
              Creating beautiful, functional, and innovative digital experiences through thoughtful design and clean code.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
    { name: 'github', url: 'https://github.com/rishal-ahammed' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/rishal-ahammed/' },
    { name: 'twitter', url: 'https://x.com/rishalahmd_' },
    { name: 'instagram', url: 'https://instagram.com/rishhh.l' }
  ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-300"
                  aria-label={`Follow on ${social.name}`}
                >
                  <i className={`fab fa-${social.name} text-white`}></i>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">Email:</span>
                <a
                  href="mailto:rishalahmd6@gmail.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  rishalahmd6@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">Phone:</span>
                <a
                  href="tel:+919567148342"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  +91 9567148342
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">Location:</span>
                <span className="text-gray-400">Kerala, India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center mt-8"
        >
          <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Rishal. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-white group-hover:animate-bounce" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;