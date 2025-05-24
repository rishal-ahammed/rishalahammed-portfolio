import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90, color: 'primary' },
      { name: 'JavaScript', level: 85, color: 'accent' },
      { name: 'TypeScript', level: 80, color: 'secondary' },
      { name: 'CSS/SCSS', level: 85, color: 'primary' },
      { name: 'HTML5', level: 95, color: 'accent' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 75, color: 'secondary' },
      { name: 'Express', level: 70, color: 'primary' },
      { name: 'MongoDB', level: 65, color: 'accent' },
      { name: 'SQL', level: 60, color: 'secondary' },
      { name: 'GraphQL', level: 60, color: 'primary' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 80, color: 'accent' },
      { name: 'Webpack', level: 70, color: 'secondary' },
      { name: 'Docker', level: 60, color: 'primary' },
      { name: 'Figma', level: 75, color: 'accent' },
      { name: 'Responsive Design', level: 90, color: 'secondary' },
    ],
  },
];

const SkillBar: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="text-gray-800 dark:text-gray-200 font-medium">
          {skill.name}
        </span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay }}
          className={`h-2.5 rounded-full ${
            skill.color === 'primary'
              ? 'bg-primary-600 dark:bg-primary-500'
              : skill.color === 'secondary'
              ? 'bg-secondary-600 dark:bg-secondary-500'
              : 'bg-accent-600 dark:bg-accent-500'
          }`}
        ></motion.div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
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
            My <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            A showcase of my technical expertise and professional capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  delay={0.1 + skillIndex * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg p-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Additional Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'JavaScript', 'TypeScript', 'React', 'Vue', 'Node.js',
              'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Redux',
              'Sass', 'Tailwind CSS', 'Bootstrap', 'Figma', 'Adobe XD',
              'Git', 'GitHub', 'Docker', 'AWS', 'Firebase',
              'Jest', 'Cypress', 'Webpack', 'Vite', 'Next.js'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.03 }}
                className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200 shadow-md"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;