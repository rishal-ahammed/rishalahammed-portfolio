import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Monitor, Palette, Download } from 'lucide-react';
import localImage from '../assets/images/Img-profile.jpg';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
  >
    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </motion.div>
);

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            I'm a passionate developer with a keen eye for design and a dedication to creating seamless, user-centric experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={localImage}
              alt="Developer at work"
              className="rounded-lg shadow-xl w-full max-w-md object-cover h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              My Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With over 5 years of experience in web development, I specialize in creating responsive, accessible, and performant applications. I'm passionate about clean code, intuitive UX, and staying on the cutting edge of technology.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My approach combines technical expertise with creative problem-solving to deliver solutions that not only meet but exceed client expectations. I believe in continuous learning and embracing new challenges.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">30+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
            </div>

            <a
              href="/Rishal-Ahammed-CV.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </a>
          </motion.div>
        </div>

        <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-10">
          What I Do
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Code size={24} />}
            title="Web Development"
            description="Building responsive websites and applications with modern frameworks and clean code."
            delay={0.1}
          />
          <FeatureCard
            icon={<Palette size={24} />}
            title="UI/UX Design"
            description="Creating intuitive interfaces and seamless user experiences that delight and engage."
            delay={0.2}
          />
          <FeatureCard
            icon={<Monitor size={24} />}
            title="Frontend Expertise"
            description="Specialized in React, Vue, and modern CSS to create stunning interfaces."
            delay={0.3}
          />
          <FeatureCard
            icon={<Lightbulb size={24} />}
            title="Creative Solutions"
            description="Innovative approaches to complex problems with effective, scalable solutions."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;