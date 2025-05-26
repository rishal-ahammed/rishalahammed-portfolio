import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Github, ArrowLeft } from 'lucide-react';

interface ProjectViewProps {
  project: {
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
  };
  onClose: () => void;
}

const ProjectView: React.FC<ProjectViewProps> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen py-10 px-4 sm:px-6"
        onClick={e => e.stopPropagation()}
      >
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative h-64 sm:h-80">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-200">{project.category}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors duration-300"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Features */}
            {project.features && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="mr-2 mt-1 text-primary-600 dark:text-primary-400">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Challenges & Solutions</h3>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">
                      <strong className="text-primary-600 dark:text-primary-400">Challenge {index + 1}:</strong> {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Screenshots */}
            {project.screenshots && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <img
                      key={index}
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={onClose}
                className="flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Projects
              </button>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
              >
                <ExternalLink size={20} className="mr-2" />
                Live Demo
              </a>
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors duration-300"
              >
                <Github size={20} className="mr-2" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectView;