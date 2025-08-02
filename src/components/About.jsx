import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiUser, FiHeart, FiAward } from 'react-icons/fi';
import { FaLanguage, FaChalkboardTeacher, FaMusic, FaRobot } from 'react-icons/fa';
import { GiBrain, GiSpiderWeb } from 'react-icons/gi';
import { IoFitnessSharp } from 'react-icons/io5';
import { MdOutlineScience } from 'react-icons/md';

const About = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const softSkills = [
    { name: "Problem-Solving", icon: <GiBrain className="text-2xl" /> },
    { name: "Fast Learner", icon: <FiAward className="text-2xl" /> },
    { name: "Creativity", icon: <MdOutlineScience className="text-2xl" /> },
    { name: "Communication", icon: <FaRobot className="text-2xl" /> },
    { name: "Teaching", icon: <FaChalkboardTeacher className="text-2xl" /> },
    { name: "Time Management", icon: <GiSpiderWeb className="text-2xl" /> },
    { name: "Collaboration", icon: <IoFitnessSharp className="text-2xl" /> }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-teal-500 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-purple-500 filter blur-3xl animate-float-delay"></div>
      </div>

      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-4"
          whileHover={{ scale: 1.02 }}
        >
          About Me
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          whileHover={{ scale: 1.01 }}
        >
          Passionate about creating innovative solutions and sharing knowledge with the community.
        </motion.p>
      </motion.div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
        {/* Career Objective */}
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ y: -5 }}
          className="bg-gray-800 rounded-xl shadow-xl p-6 transition-all border border-gray-700 hover:border-teal-400/30 hover:shadow-teal-500/10"
        >
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-gradient-to-br from-teal-900 to-teal-700 text-teal-400 mr-4">
              <FiTarget className="text-2xl" />
            </div>
            <h2 className="text-xl font-bold text-gray-200">Career Objective</h2>
          </div>
          <p className="text-gray-400">
            A highly motivated and curious full-stack developer with a strong foundation in JavaScript technologies. I aim to create seamless digital experiences through clean code, scalable backend systems, and engaging frontends.
          </p>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ y: -5 }}
          className="bg-gray-800 rounded-xl shadow-xl p-6 transition-all border border-gray-700 hover:border-blue-400/30 hover:shadow-blue-500/10"
        >
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 text-blue-400 mr-4">
              <FiUser className="text-2xl" />
            </div>
            <h2 className="text-xl font-bold text-gray-200">Professional Summary</h2>
          </div>
          <p className="text-gray-400">
            Self-driven developer and educator with hands-on experience in developing responsive full-stack web applications using the MERN stack. I create teaching content to explain backend concepts in Hindi/Urdu.
          </p>
        </motion.div>

        {/* Languages */}
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ y: -5 }}
          className="bg-gray-800 rounded-xl shadow-xl p-6 transition-all border border-gray-700 hover:border-purple-400/30 hover:shadow-purple-500/10"
        >
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-gradient-to-br from-purple-900 to-purple-700 text-purple-400 mr-4">
              <FaLanguage className="text-2xl" />
            </div>
            <h2 className="text-xl font-bold text-gray-200">Languages</h2>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-400">
              <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
              English - Professional
            </li>
            <li className="flex items-center text-gray-400">
              <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse delay-100"></span>
              Urdu - Native
            </li>
          </ul>
        </motion.div>

        {/* Interests */}
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ y: -5 }}
          className="bg-gray-800 rounded-xl shadow-xl p-6 transition-all border border-gray-700 hover:border-pink-400/30 hover:shadow-pink-500/10"
        >
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-gradient-to-br from-pink-900 to-pink-700 text-pink-400 mr-4">
              <FiHeart className="text-2xl" />
            </div>
            <h2 className="text-xl font-bold text-gray-200">Interests</h2>
          </div>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              <FaChalkboardTeacher className="mr-3 text-teal-400" />
              Teaching Programming
            </li>
            <li className="flex items-center">
              <GiSpiderWeb className="mr-3 text-blue-400" />
              3D Web Design
            </li>
            <li className="flex items-center">
              <IoFitnessSharp className="mr-3 text-purple-400" />
              Fitness & Health
            </li>
            <li className="flex items-center">
              <FaMusic className="mr-3 text-pink-400" />
              Music Production
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Soft Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700 relative overflow-hidden z-10"
      >
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-teal-900/20 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-900/20 filter blur-3xl"></div>
        
        <motion.h2 
          className="text-2xl font-bold text-center text-gray-200 mb-8 relative"
          whileHover={{ scale: 1.02 }}
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Soft Skills</span>
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 relative">
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-teal-400/50 transition-all"
            >
              <motion.div 
                className="text-2xl mb-3 text-teal-400"
                whileHover={{ rotate: 10, scale: 1.2 }}
              >
                {skill.icon}
              </motion.div>
              <span className="text-sm font-medium text-center text-gray-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 10s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};

export default About;