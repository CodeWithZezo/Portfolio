import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaCode, 
  FaServer, FaTools, FaChalkboardTeacher 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiExpress, SiMongodb, 
  SiPostman, SiVercel, SiNetlify, SiFirebase, SiDocker 
} from 'react-icons/si';
import { GiGears, GiVideoCamera, GiArtificialIntelligence } from 'react-icons/gi';
import { IoMdSchool, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import { DiVisualstudio } from 'react-icons/di';
import { BsFillPaletteFill, BsStars } from 'react-icons/bs';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating beautiful, responsive user interfaces",
      icon: <FaCode className="text-2xl text-blue-500" />,
      skills: [
        { name: "React.js", level: 4, icon: <FaReact /> },
        { name: "JavaScript ES6+", level: 5, icon: <FaCode /> },
        { name: "HTML5 & CSS3", level: 5, icon: <><IoLogoHtml5 className="inline mr-1" /><IoLogoCss3 className="inline" /></> },
        { name: "Tailwind CSS", level: 4, icon: <SiTailwindcss /> },
        { name: "GSAP Animation", level: 3, icon: <GiGears /> },
        { name: "Framer Motion", level: 3, icon: <GiArtificialIntelligence /> }
      ]
    },
    {
      title: "Backend Development",
      description: "Building scalable server-side applications",
      icon: <FaServer className="text-2xl text-green-500" />,
      skills: [
        { name: "Node.js", level: 4, icon: <FaNodeJs /> },
        { name: "Express.js", level: 4, icon: <SiExpress /> },
        { name: "MongoDB", level: 4, icon: <SiMongodb /> },
        { name: "RESTful APIs", level: 4, icon: <FaServer /> },
        { name: "JWT Authentication", level: 3, icon: <FaServer /> },
        { name: "Docker", level: 2, icon: <SiDocker /> }
      ]
    },
    {
      title: "Tools & DevOps",
      description: "Development tools and deployment platforms",
      icon: <FaTools className="text-2xl text-purple-500" />,
      skills: [
        { name: "Git & GitHub", level: 4, icon: <FaGitAlt /> },
        { name: "Postman", level: 4, icon: <SiPostman /> },
        { name: "Vercel & Netlify", level: 4, icon: <><SiVercel className="inline mr-1" /><SiNetlify className="inline" /></> },
        { name: "Firebase", level: 3, icon: <SiFirebase /> },
        { name: "VS Code", level: 5, icon: <DiVisualstudio /> },
        { name: "CI/CD", level: 3, icon: <FaTools /> }
      ]
    },
    {
      title: "Creative & Education",
      description: "Content creation and teaching expertise",
      icon: <FaChalkboardTeacher className="text-2xl text-yellow-500" />,
      skills: [
        { name: "Technical Teaching", level: 5, icon: <IoMdSchool /> },
        { name: "Video Production", level: 4, icon: <GiVideoCamera /> },
        { name: "Urdu/Hindi Content", level: 5, icon: <FaChalkboardTeacher /> },
        { name: "Graphic Design", level: 3, icon: <BsFillPaletteFill /> },
        { name: "Video Editing", level: 3, icon: <GiVideoCamera /> },
        { name: "Canva", level: 4, icon: <BsFillPaletteFill /> }
      ]
    }
  ];

  const techStack = [
    { name: "React.js", category: "Frontend", icon: "⚛️" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "TypeScript", category: "Language", icon: "🔷" },
    { name: "Tailwind", category: "Styling", icon: "🎨" },
    { name: "GSAP", category: "Animation", icon: "⚡" }
  ];

  const renderStars = (level) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < level ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}>★</span>
        ))}
      </div>
    );
  };

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Header Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center mb-4 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full"
        >
          <BsStars className="mr-2 text-blue-500" />
          <h4 className="text-blue-600 dark:text-blue-400 font-medium">Technical Expertise</h4>
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Skills & <span className="bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent">Expertise</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A comprehensive toolkit built through years of hands-on experience in modern web development and passionate teaching
        </p>
      </motion.section>

      {/* Tech Stack Overview */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <motion.li 
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="text-2xl mb-2">{tech.icon}</div>
              <h3 className="font-medium text-gray-800 dark:text-white">{tech.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{tech.category}</p>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Detailed Skills Sections */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20">
                {category.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white ml-3">{category.title}</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{category.description}</p>
            
            <ul className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.li 
                  key={skillIndex}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <span className="text-gray-500 dark:text-gray-400 mr-2">{skill.icon}</span>
                      <span className="text-gray-700 dark:text-gray-200">{skill.name}</span>
                    </div>
                    {renderStars(skill.level)}
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.05 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                    />
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Ready to Build Something <span className="text-blue-600 dark:text-blue-400">Amazing</span>?
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Let's collaborate and bring your ideas to life with modern technologies and creative solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white rounded-lg font-medium transition-all flex items-center mx-auto shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">🚀</span> Let's Work Together
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Skills;