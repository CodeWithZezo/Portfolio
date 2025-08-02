import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiPhone, FiMapPin, FiInstagram, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const cardVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      value: "codewithzezo@gmail.com",
      href: "mailto:codewithzezo@gmail.com",
      color: "text-red-400",
      bg: "hover:bg-red-100/20"
    },
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Phone",
      value: "+92 329 656 4329",
      href: "tel:+923296564329",
      color: "text-green-400",
      bg: "hover:bg-green-100/20"
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Location",
      value: "Pakistan",
      color: "text-blue-400",
      bg: "hover:bg-blue-100/20"
    }
  ];

  const socialLinks = [
    {
      icon: <FiGithub className="text-xl" />,
      title: "GitHub",
      href: "https://github.com/CodeWithZezo",
      color: "hover:text-gray-200",
      bg: "hover:bg-gray-700/50"
    },
    {
      icon: <FiInstagram className="text-xl" />,
      title: "Instagram",
      href: "https://instagram.com/codewithzezo",
      color: "hover:text-pink-400",
      bg: "hover:bg-pink-100/20"
    }
  ];

  return (
    <section id="contact" className="relative py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 overflow-hidden">
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
          className="flex flex-col gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
        >
          {/* Header section */}
          <motion.div className="text-center" variants={itemVariants}>
            <motion.span 
              className="inline-block text-teal-400 text-sm font-semibold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Let's Connect
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Contact info */}
            <motion.div variants={itemVariants}>
              <motion.h2 
                className="text-2xl font-bold text-white mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Contact Information
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover="hover"
                    className={`p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 transition-all ${method.bg}`}
                  >
                    <div className={`${method.color} mb-3`}>
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
                    {method.href ? (
                      <a 
                        href={method.href} 
                        className="text-gray-300 hover:text-teal-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{method.value}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social links */}
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Find Me Online</h2>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400 ${social.color} ${social.bg} transition-all`}
                      whileHover={{
                        y: -3,
                        scale: 1.1,
                      }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Availability status */}
              <motion.div 
                className="mt-12 p-6 rounded-xl bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-400/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <h2 className="text-2xl font-bold text-white mb-3">Current Status</h2>
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                  </span>
                  <span className="text-green-400 font-medium">Available for Projects</span>
                </div>
                <p className="text-gray-300">
                  Currently seeking challenging opportunities in full-stack development. Open to freelance projects and full-time positions.
                </p>
              </motion.div>
            </motion.div>

            {/* Right side - Contact form */}
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="space-y-1"
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none transition-all text-white"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="space-y-1"
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none transition-all text-white"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="space-y-1"
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none transition-all text-white"
                    required
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 25px -5px rgba(45, 212, 191, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  <FiMessageSquare className="group-hover:animate-pulse" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;