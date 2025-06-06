import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import ThreeBackground from './ThreeBackground';
import AnimatedBlob from './AnimatedBlob';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden pt-16 md:pt-20"
    >
      <ThreeBackground />
      <AnimatedBlob />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm md:text-base font-medium text-primary-600 dark:text-primary-400 mb-4"
          >
            Hi there!
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 dark:text-white mb-6 leading-tight"
          >
            I'm <span className="text-primary-600 dark:text-primary-400">Rishal Ahammed</span>
            <span className="block mt-3">Creative Developer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed"
          >
            I turn data into insights and build ML-powered solutions.
            <span className="hidden md:inline"><br/></span>
            <span className="md:hidden"> </span>
            With dev skills, I blend code and creativity to solve real problems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors duration-300 shadow-lg hover:shadow-xl text-center"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-400 rounded-full font-medium hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors duration-300 backdrop-blur-sm text-center"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center sm:justify-start space-x-6 mb-16 sm:mb-0"
          >
            <a 
              href="https://github.com/rishal-ahammed" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="Github"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rishal-ahammed/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="https://x.com/rishalahmd_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={28} />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none"
      >
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-3 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 px-4 py-1 rounded-full">
          Scroll Down
        </span>
        <ChevronDown
          size={24}
          className="text-primary-600 dark:text-primary-400 animate-bounce"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;