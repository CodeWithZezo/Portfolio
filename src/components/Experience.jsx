import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaGraduationCap, FaServer, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiNodedotjs } from 'react-icons/si';
import { GiTeacher } from 'react-icons/gi';

const Experience = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center mb-4 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full">
          <GiTeacher className="mr-2 text-blue-500" />
          <h4 className="text-blue-600 dark:text-blue-400 font-medium">My Journey</h4>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Experience & <span className="bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent">Education</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Sharing knowledge and continuously learning to grow in the tech industry
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="max-w-4xl mx-auto">
        {/* Teaching Experience */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
          className="relative pl-8 sm:pl-16 pb-12 border-l-2 border-blue-200 dark:border-gray-700"
        >
          {/* Timeline dot */}
          <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-500 dark:bg-teal-400 -translate-x-1/2"></div>
          
          <motion.div variants={fadeIn} className="mb-8">
            <div className="flex items-center mb-2">
              <FaChalkboardTeacher className="text-2xl text-blue-500 dark:text-teal-400 mr-3" />
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Online Teaching</h2>
                <p className="text-gray-500 dark:text-gray-400">Freelance / Self-driven • Ongoing</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Creating educational content and teaching backend development concepts in Hindi/Urdu
            </p>
            
            <h3 className="text-lg font-semibold text-blue-600 dark:text-teal-400 mb-3">Key Achievements:</h3>
            <ul className="space-y-3">
              {[
                "Created multiple lessons explaining backend development and Node.js fundamentals",
                "Taught MERN stack topics to students through practical projects",
                "Built projects like Blogify, Feedback Systems, and Server Setup tutorials",
                "Simplified complex topics like NPM, Package.json, Ports, and module systems"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={fadeIn}
                  className="flex items-start text-gray-700 dark:text-gray-300"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-teal-400 mt-2 mr-3"></span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div variants={fadeIn} className="mb-8">
            <div className="flex items-center mb-2">
              <FaGraduationCap className="text-2xl text-blue-500 dark:text-teal-400 mr-3" />
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Education</h2>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                Bachelor of Science in Software Engineering (BSSE)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Agriculture University Rawalpindi, Pakistan
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mr-2">
                  In Progress
                </span>
                Expected Completion: 2028
              </div>
            </div>
          </motion.div>

          {/* Teaching Topics */}
          <motion.div variants={fadeIn}>
            <div className="flex items-center mb-2">
              <FaServer className="text-2xl text-blue-500 dark:text-teal-400 mr-3" />
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Teaching Topics</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Backend Development */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                  <SiNodedotjs className="mr-2 text-green-600" />
                  Backend Development
                </h3>
                <ul className="space-y-2">
                  {["Node.js", "Express.js", "MongoDB"].map((item) => (
                    <li key={item} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-teal-400 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* MERN Stack */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                  <FaReact className="mr-2 text-blue-500" />
                  MERN Stack
                </h3>
                <ul className="space-y-2">
                  {["React", "APIs", "Authentication"].map((item) => (
                    <li key={item} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-teal-400 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Fundamentals */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                  <FaNodeJs className="mr-2 text-green-500" />
                  Fundamentals
                </h3>
                <ul className="space-y-2">
                  {["NPM", "Package.json", "Modules"].map((item) => (
                    <li key={item} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-teal-400 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;