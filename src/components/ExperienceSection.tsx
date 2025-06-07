import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ArrowDown  } from 'lucide-react';

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: 'Data Analyst Intern',
    company: 'SMEC Labs',
    location: '', // Add location if needed
    period: 'Jul 2019 - Jan 2021',
    description: [
      'Analyzed large datasets using Pandas and NumPy to uncover insights for internal reporting.',
      'Built predictive models with Scikit-learn and TensorFlow to forecast business trends.',
      'Developed interactive dashboards using Tableau and Power BI to visualize key metrics.',
      'Automated data cleaning and preprocessing tasks, improving workflow efficiency by 25%.',
    ],
  },
  {
    id: 2,
    role: 'Flutter Developer Intern',
    company: 'Softroniics',
    location: 'Malappuram, India',
    period: 'Jul 2019 - Jan 2021',
    description: [
      'Developed a cross-platform mobile app using Flutter and Firebase for event scheduling and management.',
      'Designed intuitive UI screens and navigation to ensure seamless user experience.',
      'Integrated real-time notifications and user authentication features.',
      'Collaborated within an agile team alongside designers and backend developers.',
    ],
  },
];

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
}

const education: Education[] = [
   {
    id: 1,
    degree: 'Diploma in Data Science',
    institution: 'SMEC Labs',
    location: 'Ernakulam, India',
    period: 'Jul 2019 - Jan 2021',
    details: [
      'Covered data analysis, machine learning, and big data technologies',
      'Completed multiple real-world data projects',
      'Collaborated on team-based data science challenges',
    ],
  },
  {
    id: 2,
    degree: 'Bachelor of Computer Application',
    institution: 'ISS Arts and Science College',
    location: 'Perinthalmanna, India',
    period: 'Jun 2021 - May 2024',
    details: [
      'Majoring in Computer Science',
      'Completed key projects in data science and software development',
      'Active participant in coding clubs and workshops',
    ],
  },
  {
    id: 3,
    degree: 'Higher Secondary Education - Computer Science',
    institution: 'GMHSS Perinthalmanna',
    location: 'Perinthalmanna, India',
    period: 'Jun 2019 - Mar 2021',
    details: [
      'Focused on Computer Science subjects',
      'Excelled in mathematics and programming courses',
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-800"
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
            My <span className="text-primary-600 dark:text-primary-400">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            A timeline of my professional journey and educational background
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <Briefcase size={24} className="mr-2 text-primary-600 dark:text-primary-400" />
              Interships & Work Experience
            </motion.h3>

            <div className="relative pl-8 border-l-2 border-primary-300 dark:border-primary-700 space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] bg-primary-600 dark:bg-primary-400 w-5 h-5 rounded-full border-4 border-white dark:border-gray-800"></div>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {exp.role}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300 flex">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <Calendar size={24} className="mr-2 text-primary-600 dark:text-primary-400" />
              Education
            </motion.h3>

            <div className="relative pl-8 border-l-2 border-secondary-300 dark:border-secondary-700 space-y-10">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] bg-secondary-600 dark:bg-secondary-400 w-5 h-5 rounded-full border-4 border-white dark:border-gray-800"></div>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-secondary-600 dark:text-secondary-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {edu.location}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {edu.details.map((item, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300 flex">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center"
          >
            Get in Touch
            <ArrowDown  size={16} className="ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;