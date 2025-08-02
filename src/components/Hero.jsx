import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiGithub, FiLinkedin, FiMail, FiDownload, FiMessageSquare, FiArrowRight
} from 'react-icons/fi';
import {
  SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiExpress
} from 'react-icons/si';
import { GiBrain } from 'react-icons/gi'; // ✅ Correct import for GiBrain

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = ["MERN Developer", "Backend Engineer", "Educator", "Problem Solver"];
  const typingSpeed = 150;
  const eraseSpeed = 100;
  const delayBetweenRoles = 2000;

  useEffect(() => {
    setIsMounted(true);

    // Typing effect
    let timeout;
    const typeWriter = (text, i, callback) => {
      if (i < text.length) {
        setTypedText(text.substring(0, i + 1));
        timeout = setTimeout(() => typeWriter(text, i + 1, callback), typingSpeed);
      } else if (typeof callback === 'function') {
        timeout = setTimeout(callback, delayBetweenRoles);
      }
    };

    const startTyping = () => {
      const currentRole = roles[currentRoleIndex];
      typeWriter(currentRole, 0, () => {
        // After typing, start erasing
        const eraseText = (i) => {
          if (i >= 0) {
            setTypedText(currentRole.substring(0, i));
            timeout = setTimeout(() => eraseText(i - 1), eraseSpeed);
          } else {
            // Move to next role
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        };
        eraseText(currentRole.length);
      });
    };

    timeout = setTimeout(startTyping, 1000);
    return () => clearTimeout(timeout);
  }, [currentRoleIndex]);

  const skills = [
    { name: "React", icon: <SiReact className="text-xl" />, color: "text-blue-400" },
    { name: "Node.js", icon: <SiNodedotjs className="text-xl" />, color: "text-green-500" },
    { name: "MongoDB", icon: <SiMongodb className="text-xl" />, color: "text-green-600" },
    { name: "DSA", icon: <GiBrain className="text-xl" />, color: "text-yellow-600" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-xl" />, color: "text-cyan-400" },
    { name: "Express", icon: <SiExpress className="text-xl" />, color: "text-gray-400" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 px-4 md:px-8 py-12 md:py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? '#4FD1C5' : i % 2 === 0 ? '#4299E1' : '#9F7AEA',
              filter: 'blur(40px)'
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
        >
          {/* Intro section with animated typing */}
          <motion.div className="flex flex-col gap-2" variants={itemVariants}>
            <span className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, repeatDelay: 5, duration: 1 }}
                role="img"
                aria-label="wave"
                className="inline-block"
              >
                👋
              </motion.span>
              Hello there! I'm
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Zeeshan
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Saleem
              </span>
            </h1>

            {/* Animated typing text */}
            <div className="h-12 mt-2 flex items-center">
              <motion.p
                className="text-lg md:text-xl font-medium text-teal-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {typedText}
                <motion.span
                  className="inline-block w-1 h-6 bg-current ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                />
              </motion.p>
            </div>
          </motion.div>

          {/* Role with enhanced hover effects */}
          <motion.div className="flex items-center gap-4" variants={itemVariants}>
            <p className="text-lg md:text-xl font-semibold text-gray-200">
              Full Stack
              <motion.span
                className="relative mx-2 px-2 py-1 bg-teal-600 rounded text-white group inline-flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                MERN
                <motion.span
                  className="absolute -bottom-1 left-1/2 w-0 h-1 bg-blue-400 transform -translate-x-1/2 group-hover:w-3/4"
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
              Developer
              <span className="mx-2 text-teal-400">&bull;</span>
              <motion.span
                className="relative group inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-teal-300">UI/UX</span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full"
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
              &amp;
              <motion.span
                className="relative group ml-1 inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-blue-300">Educator</span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full"
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </p>
          </motion.div>

          {/* Location with animated pin */}
          <motion.div
            className="flex items-center gap-2"
            variants={itemVariants}
            whileHover={{ x: 5 }}
          >
            <motion.span
              className="text-gray-400"
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span role="img" aria-label="location">📍</span>
            </motion.span>
            <span className="text-gray-400">Pakistan</span>
          </motion.div>

          {/* Bio with animated underline */}
          <motion.p
            className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed relative"
            variants={itemVariants}
          >
            Creating seamless digital experiences through clean code and innovative solutions.
            <br className="hidden sm:block" />
            Passionate about teaching and sharing knowledge with the developer community.
            <motion.span
              className="absolute -bottom-2 left-0 w-1/3 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500"
              initial={{ width: 0 }}
              whileInView={{ width: '33%' }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.p>

          {/* Skills with color-coded icons */}
          <motion.ul
            className="flex flex-wrap gap-3 mt-2"
            variants={containerVariants}
          >
            {skills.map((skill) => (
              <motion.li
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1.5 bg-gray-800/80 rounded-full ${skill.color} text-sm font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2 backdrop-blur-sm`}
              >
                {skill.icon}
                {skill.name}
              </motion.li>
            ))}
          </motion.ul>

          {/* Action buttons with improved hover effects */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6"
            variants={containerVariants}
          >
            <motion.a
              href="/cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(45, 212, 191, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              <FiDownload className="group-hover:animate-bounce" />
              Download CV
              <FiArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </motion.a>

            <motion.a
              href="#contact"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(45, 212, 191, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg border-2 border-teal-400 text-teal-300 font-semibold hover:bg-teal-600/10 transition-all flex items-center justify-center gap-2 group"
            >
              <FiMessageSquare className="group-hover:animate-pulse" />
              Let's Connect
              <FiArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </motion.a>
          </motion.div>

          {/* Social links with animated hover */}
          <motion.div
            className="flex gap-5 mt-8"
            variants={containerVariants}
          >
            {[
              {
                icon: <FiGithub />,
                href: "https://github.com/CodeWithZezo",
                color: "hover:text-white",
                bg: "hover:bg-gray-700"
              },
              {
                icon: <FiLinkedin />,
                href: "https://linkedin.com/codewithzezo",
                color: "hover:text-blue-400",
                bg: "hover:bg-blue-100/20"
              },
              {
                icon: <FiMail />,
                href: "mailto:codewithzezo@gmail.com",
                color: "hover:text-red-400",
                bg: "hover:bg-red-100/20"
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -3,
                  scale: 1.1,
                  backgroundColor: social.bg.includes('blue') ? 'rgba(56, 182, 255, 0.1)' :
                    social.bg.includes('red') ? 'rgba(255, 56, 96, 0.1)' : 'rgba(113, 113, 122, 0.1)'
                }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl p-2 rounded-full text-gray-400 ${social.color} transition-colors`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image with enhanced animation */}
        <motion.div
          className="mt-10 md:mt-0 flex flex-col items-center"
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={imageVariants}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-teal-500 shadow-2xl flex items-center justify-center bg-gray-800 group">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 z-10"></div>

            {/* Animated rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-teal-400/30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-400/30"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            {/* Profile image */}
            <img
              src="../images/zeeshan.png"
              alt="Zeeshan Shami"
              className="relative z-0 object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
            />

            {/* Hover overlay */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-black/30 z-20 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="text-white text-lg font-bold flex items-center gap-2"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  That's Me!
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    😊
                  </motion.span>
                </motion.span>
              </motion.div>
            )}
          </div>

          {/* Availability badge with improved animation */}
          <motion.div
            className="mt-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-bold shadow-lg flex items-center gap-2 group"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Available for work
            <motion.span
              className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
            >
              👋
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;