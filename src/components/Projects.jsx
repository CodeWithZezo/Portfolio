import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiGithub, 
  FiExternalLink, 
  FiSearch,
  FiArrowRight,
  FiFigma,
  FiDatabase,
  FiCpu,
  FiLayers
} from 'react-icons/fi';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiVercel
} from 'react-icons/si';
import { 
  FaAudioDescription,
  FaUtensils,
  FaQuestionCircle,
  FaComments
} from 'react-icons/fa';
import { BsStars, BsMusicNoteBeamed } from 'react-icons/bs';
import { GiProcessor } from 'react-icons/gi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Full Stack', 'Frontend', 'Backend'];
  
  const projects = [
    {
      id: 1,
      title: "Audio Enhancer App",
      description: "Upload, modify, and download enhanced audio (bass boost, volume boost, EQ). Secure login and user dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
      features: ["Real-time Processing", "Cloud Storage", "User Dashboard", "Audio Analytics"],
      type: "Full Stack",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      githubLink: "#",
      liveLink: "#",
      icon: <BsMusicNoteBeamed className="text-2xl text-pink-500" />
    },
    {
      id: 2,
      title: "Restaurant Website",
      description: "Menu page, WhatsApp ordering integration, cart feature, and deals section. Responsive design and animations.",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      features: ["WhatsApp Integration", "Responsive Design", "Cart System", "Deals Section"],
      type: "Frontend",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      githubLink: "#",
      liveLink: "#",
      icon: <FaUtensils className="text-2xl text-orange-500" />
    },
    {
      id: 3,
      title: "Quiz & IQ Tester",
      description: "Interactive quiz system with scoring, results, and timer. Great for educational platforms.",
      technologies: ["JavaScript", "TypeScript", "Firebase"],
      features: ["Interactive Quiz", "Scoring System", "Timer", "Results Dashboard"],
      type: "Frontend",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      githubLink: "#",
      liveLink: "#",
      icon: <FaQuestionCircle className="text-2xl text-blue-400" />
    },
    {
      id: 4,
      title: "Feedback Collector",
      description: "Simple system to collect and save feedback to a text file, organized by date and user ID.",
      technologies: ["Node.js", "Express", "MongoDB"],
      features: ["Feedback Collection", "File Storage", "Date Organization", "User Tracking"],
      type: "Backend",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      githubLink: "#",
      liveLink: "#",
      icon: <FaComments className="text-2xl text-green-500" />
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'All' || project.type === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getTechIcon = (tech) => {
    switch(tech) {
      case 'React': return <SiReact className="text-blue-500" />;
      case 'Node.js': return <SiNodedotjs className="text-green-600" />;
      case 'MongoDB': return <SiMongodb className="text-green-500" />;
      case 'JavaScript': return <SiJavascript className="text-yellow-500" />;
      case 'HTML': return <SiHtml5 className="text-orange-600" />;
      case 'CSS': return <SiCss3 className="text-blue-600" />;
      case 'Express': return <SiExpress className="text-gray-500" />;
      case 'Tailwind': return <SiTailwindcss className="text-cyan-500" />;
      case 'TypeScript': return <SiTypescript className="text-blue-600" />;
      case 'Firebase': return <SiFirebase className="text-yellow-500" />;
      case 'GSAP': return <GiProcessor className="text-green-400" />;
      default: return <FiLayers className="text-gray-400" />;
    }
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center mb-4 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full">
          <BsStars className="mr-2 text-blue-500" />
          <h4 className="text-blue-600 dark:text-blue-400 font-medium">Featured Work</h4>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          My <span className="bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of my recent work showcasing full-stack development skills and creative solutions
        </p>
      </motion.div>

      {/* Filters and Search */}
      <motion.section 
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <ul className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <motion.li 
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter 
                      ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md' 
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm'
                  }`}
                >
                  {filter}
                </button>
              </motion.li>
            ))}
          </ul>

          <div className="relative w-full md:w-64">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-400 shadow-sm"
            />
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {filteredProjects.map((project) => (
          <motion.div 
            key={project.id}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
                {project.icon}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                <div className="flex gap-2">
                  <motion.a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
                  >
                    <FiGithub size={20} />
                  </motion.a>
                  <motion.a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-teal-400 transition-colors"
                  >
                    <FiExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-600 dark:text-teal-400 mb-2">TECHNOLOGIES</h4>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.li 
                      key={tech} 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-blue-600 dark:text-teal-400 mb-2">KEY FEATURES</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {project.features.map((feature) => (
                    <motion.li 
                      key={feature} 
                      whileHover={{ x: 5 }}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-teal-400 mr-2"></span>
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex justify-center mb-4">
          <FiGithub className="text-4xl text-gray-500 dark:text-gray-400" />
        </div>
        <motion.a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium shadow-lg hover:shadow-xl transition-all"
        >
          View All Projects
          <FiArrowRight className="ml-2" />
        </motion.a>
      </motion.section>
    </section>
  );
};

export default Projects;