import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiExternalLink } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si';

const Footer = () => {
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

  const linkVariants = {
    hover: {
      x: 5,
      color: '#4FD1C5',
      transition: { duration: 0.2 }
    }
  };

  const socialLinks = [
    {
      icon: <FiLinkedin className="text-xl" />,
      name: "LinkedIn",
      href: "https://linkedin.com/in/codewithzezo",
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-100/20"
    },
    {
      icon: <FiGithub className="text-xl" />,
      name: "GitHub",
      href: "https://github.com/CodeWithZezo",
      color: "hover:text-gray-200",
      bg: "hover:bg-gray-700/50"
    },
    {
      icon: <FiTwitter className="text-xl" />,
      name: "Twitter",
      href: "https://twitter.com/codewithzezo",
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-100/20"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const techStack = [
    { icon: <SiReact className="text-xl" />, name: "React" },
    { icon: <SiNodedotjs className="text-xl" />, name: "Node.js" },
    { icon: <SiMongodb className="text-xl" />, name: "MongoDB" },
    { icon: <SiExpress className="text-xl" />, name: "Express" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-300 pt-16 pb-8 px-4 md:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        {[...Array(5)].map((_, i) => (
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

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* About Column */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-2xl font-bold text-white mb-4"
              whileHover={{ x: 5 }}
            >
              Zeeshan Shami
            </motion.h2>
            <motion.p className="mb-6 leading-relaxed">
              Full Stack MERN Developer passionate about creating innovative web solutions and sharing knowledge with the developer community.
            </motion.p>
            
            <motion.div className="flex flex-wrap gap-3" variants={containerVariants}>
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="px-3 py-1.5 bg-gray-800/80 rounded-full text-teal-300 text-sm font-medium shadow-lg flex items-center gap-2 backdrop-blur-sm"
                >
                  {tech.icon}
                  {tech.name}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-2xl font-bold text-white mb-4"
              whileHover={{ x: 5 }}
            >
              Quick Links
            </motion.h2>
            <motion.ul className="space-y-2" variants={containerVariants}>
              {quickLinks.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a
                    href={link.href}
                    className="flex items-center gap-2"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <FiExternalLink className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Connect Column */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-2xl font-bold text-white mb-4"
              whileHover={{ x: 5 }}
            >
              Connect
            </motion.h2>
            
            <motion.div className="mb-6" variants={itemVariants}>
              <motion.a
                href="mailto:zeeshanshami@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors"
                variants={linkVariants}
                whileHover="hover"
              >
                <FiMail className="text-xl" />
                zeeshanshami@gmail.com
              </motion.a>
            </motion.div>
            
            <motion.div className="flex gap-4" variants={containerVariants}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400 ${social.color} ${social.bg} transition-all`}
                  variants={itemVariants}
                  whileHover={{
                    y: -3,
                    scale: 1.1,
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Zeeshan Shami. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React and Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;