import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import ProjectView from './ProjectView';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
  longDescription?: string;
  features?: string[];
  challenges?: string[];
  screenshots?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product listings, cart functionality, and secure checkout process.',
    longDescription: 'An advanced e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and a responsive design that works seamlessly across all devices.',
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
    features: [
      'User authentication and profile management',
      'Real-time inventory tracking',
      'Secure payment processing with Stripe',
      'Advanced search and filtering',
      'Responsive design for all devices',
      'Admin dashboard for inventory management'
    ],
    challenges: [
      'Implemented real-time inventory synchronization across multiple servers',
      'Optimized image loading and caching for faster page loads',
      'Developed a secure payment gateway integration with error handling',
      'Created a scalable database structure for millions of products'
    ],
    screenshots: [
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
      'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg'
    ]
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media managers with real-time data visualization and reporting.',
    longDescription: 'A comprehensive social media analytics platform that helps businesses track their social media performance across multiple platforms. Features include real-time data visualization, automated reporting, and AI-powered insights.',
    image: 'https://images.pexels.com/photos/938965/pexels-photo-938965.jpeg',
    category: 'Web Development',
    technologies: ['Vue.js', 'Express', 'Chart.js', 'Firebase'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
    features: [
      'Real-time analytics tracking',
      'Custom report generation',
      'Multi-platform integration',
      'Automated insights',
      'Team collaboration tools'
    ],
    challenges: [
      'Built a scalable real-time data processing pipeline',
      'Implemented complex data visualization components',
      'Optimized performance for large datasets',
      'Created an intuitive user interface for complex data'
    ],
    screenshots: [
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg'
    ]
  },
  // ... (remaining projects with similar detailed data)
];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section
      id="projects"
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
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Explore my recent work and creative solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="space-x-2">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-300"
                        aria-label="View Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-300"
                        aria-label="View Code"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2 text-xs font-medium text-primary-600 dark:text-primary-400">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-300"
                  >
                    View Project <ArrowUpRight size={16} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectView
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;