import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import ProjectView from "./ProjectView";

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
    title: "Smoking & Drinking Behavior Prediction",
    description:
      "A machine learning model that predicts smoking and alcohol consumption based on health and demographic data.",
    longDescription:
      "Developed a predictive system using supervised learning algorithms to classify individuals based on their likelihood to smoke or drink. The model was trained on real-world demographic and health datasets, with feature engineering and exploratory data analysis to identify key indicators. Performance was evaluated using precision, recall, and ROC-AUC metrics.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg", // Replace with your own or dataset-related image
    category: "Data Science & Machine Learning",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn"],
    demoUrl: "https://example.com", // Add your project URL if hosted
    codeUrl: "https://github.com/yourusername/smoking-drinking-prediction", // Replace with your GitHub repo link
    features: [
      "Data cleaning and preprocessing",
      "Exploratory Data Analysis (EDA) and visualizations",
      "Feature selection and engineering",
      "Model training with classification algorithms",
      "Performance evaluation with confusion matrix and ROC-AUC",
      "Result interpretation for behavior analysis",
    ],
    challenges: [
      "Handling missing and imbalanced data",
      "Selecting relevant features for behavior classification",
      "Tuning hyperparameters for optimal accuracy",
      "Ensuring model generalization and avoiding overfitting",
    ],
    screenshots: [
      "https://images.pexels.com/photos/618558/pexels-photo-618558.jpeg", // Replace with screenshots or result charts
      "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",
    ],
  },
  {
    id: 2,
    title: "Spotify Dataset Analysis",
    description:
      "An in-depth data analysis project uncovering patterns in track popularity, audio features, and platform performance.",
    longDescription:
      "This project involved exploratory data analysis (EDA) and visualization of a comprehensive Spotify dataset to identify key patterns in music streaming behavior. The analysis focused on attributes like danceability, energy, tempo, release trends, and platform distribution. Advanced correlation and statistical insights were extracted to understand what drives popularity across different platforms.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg", // You can replace with a Spotify-themed or custom visual
    category: "Data Analysis & Visualization",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Tableau"],
    demoUrl: "https://example.com/spotify-dashboard", // Optional: link to Tableau Public or report if available
    codeUrl: "https://github.com/yourusername/spotify-data-analysis", // Replace with actual repo link
    features: [
      "Year-wise trends in track energy and tempo",
      "Correlation analysis between streams and audio features",
      "Genre and mood analysis across platforms",
      "Visual dashboards with distribution and performance insights",
      "Analysis of seasonal popularity spikes and monthly releases",
      "Deep dive into playlist appearances and chart consistency",
    ],
    challenges: [
      "Cleaning and merging high-dimensional data",
      "Identifying meaningful features from audio metrics",
      "Handling missing and inconsistent streaming records",
      "Designing visualizations that convey multi-platform insights",
    ],
    screenshots: [
      "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg", // Replace with actual analysis charts or dashboards
      "https://images.pexels.com/photos/1648534/pexels-photo-1648534.jpeg",
    ],
  },
  {
    id: 3,
    title: "ShirtPrint Co. Assistant (AI Chatbot Project)",
    description:
      "An intelligent chatbot designed to assist customers with custom shirt printing orders and inquiries.",
    longDescription:
      "Developed an AI-powered chatbot for ShirtPrint Co., a custom shirt printing business in Kochi. The chatbot streamlines customer interactions by answering queries, guiding order placements, and providing updates on print status. Built with React and Node.js for web interface and backend, leveraging external AI APIs to enhance natural language understanding and intelligence.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    category: "AI & Chatbot Development",
    technologies: ["React", "Node.js", "REST APIs", "Third-party AI API Keys"],
    demoUrl: "https://example.com/shirtprint-chatbot",
    codeUrl: "https://github.com/yourusername/shirtprint-chatbot",
    features: [
      "Natural language processing via AI APIs",
      "Order management integration for real-time updates",
      "Multi-platform support (web and mobile)",
      "Personalized recommendations based on user preferences",
      "Seamless conversation flow with fallback handling",
      "Analytics dashboard for monitoring chatbot interactions",
    ],
    challenges: [
      "Integrating third-party AI APIs effectively",
      "Ensuring accurate understanding of custom order specifications",
      "Building a scalable backend with Node.js",
      "Optimizing response time and user engagement",
    ],
    screenshots: [
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
      "https://images.pexels.com/photos/3182788/pexels-photo-3182788.jpeg",
    ],
  },
  {
  id: 4,
  title: 'Evento – Event Management App',
  description: 'A cross-platform app for creating, managing, and promoting events with ticketing and real-time updates.',
  longDescription: 'Developed a Flutter-based mobile app for event management, enabling event creation, ticket booking, notifications, and attendee analytics. Integrated Firebase for authentication, real-time database, and push notifications to provide a seamless experience across Android and iOS.',
  image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
  category: 'Mobile App Development',
  technologies: ['Flutter', 'Firebase', 'Dart', 'Google Maps API'],
  demoUrl: 'https://example.com/evento-app',
  codeUrl: 'https://github.com/yourusername/evento-app',
  features: [
    'Cross-platform support for Android and iOS',
    'Event creation and management tools for organizers',
    'Ticket booking and secure payment processing',
    'Real-time notifications and event updates',
    'Personalized event recommendations',
    'Map integration for event locations'
  ],
  challenges: [
    'Synchronizing event data and bookings in real-time',
    'Ensuring smooth and responsive UI across devices',
    'Integrating secure payment gateways',
    'Effective push notification management'
  ],
  screenshots: [
    'https://images.pexels.com/photos/3184462/pexels-photo-3184462.jpeg',
    'https://images.pexels.com/photos/3184457/pexels-photo-3184457.jpeg'
  ]
},
{
  id: 5,
  title: 'SINE – Super App Concept',
  description: 'A comprehensive Super App integrating messaging, payments, and third-party mini-apps for daily services.',
  longDescription: 'Conceptualized and designed a scalable Super App combining instant messaging, secure payments, order management, and third-party mini-app integrations. Built with React and Node.js, the platform provides a unified user experience for personal and commercial use with dynamic dashboards and secure transaction processing.',
  image: 'https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg',
  category: 'Mobile & Web Concept',
  technologies: ['React', 'Node.js', 'Firebase', 'REST APIs', 'Figma'],
  demoUrl: 'https://example.com/sine-superapp',
  codeUrl: 'https://github.com/yourusername/sine-superapp',
  features: [
    'Unified platform with messaging, payments, and order management',
    'Support for third-party mini-app integrations',
    'Secure user authentication and encrypted transactions',
    'Dynamic dashboards for personal and commercial users',
    'Scalable architecture for service expansion'
  ],
  challenges: [
    'Designing flexible architecture for mini-app support',
    'Ensuring secure real-time messaging and transactions',
    'Creating intuitive multi-service user interface',
    'Managing data synchronization with low latency'
  ],
  screenshots: [
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg'
  ]
},


  // ... (remaining projects with similar detailed data)
];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-primary-600 dark:text-primary-400">
              Projects
            </span>
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
                  ? "bg-primary-600 text-white shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
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
