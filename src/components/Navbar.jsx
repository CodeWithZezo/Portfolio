import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active link based on scroll position
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      
      const matchingLink = navLinks.find(link => link.id === current);
      if (matchingLink) {
        setActiveLink(matchingLink.name);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  const handleLinkClick = (linkName, linkId) => {
  setActiveLink(linkName);
  setMobileMenuOpen(false);

  const element = document.getElementById(linkId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};


  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className={`flex items-center justify-between px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl rounded-full ${isScrolled ? 'backdrop-blur-md bg-gray-900/90 shadow-lg' : 'backdrop-blur-sm bg-gray-900/70'} transition-all duration-300 border border-gray-800/50`}>
        {/* Logo with animated hover effect */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-none"
        >
          <h1 
            className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => handleLinkClick('Home', 'home')}
          >
            codeWithZezo
          </h1>
        </motion.div>

        {/* Desktop Navigation with enhanced hover effects */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-2 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.id} className="relative">
                <button
                  onClick={() => handleLinkClick(link.name, link.id)}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative z-10 ${activeLink === link.name ? 'text-teal-400' : 'text-gray-300 hover:text-gray-100'}`}
                >
                  {link.name}
                </button>
                
                {/* Animated background for hover effect */}
                {hoveredLink === link.id && (
                  <motion.span 
                    layoutId="navHoverBg"
                    className="absolute inset-0 rounded-full bg-gray-800/50 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                )}
                
                {/* Active link indicator */}
                {activeLink === link.name && (
                  <motion.span 
                    layoutId="navUnderline"
                    className="absolute left-1/2 bottom-0 h-0.5 bg-teal-400 -translate-x-1/2"
                    style={{ width: '70%' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Social buttons container */}
        <div className="flex items-center gap-3">
          {/* GitHub Button */}
          <motion.a
            href="https://github.com/codewithzezo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:flex p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
          >
            <FiGithub size={18} />
          </motion.a>

          {/* LinkedIn Button */}
          <motion.a
            href="https://linkedin.com/in/codewithzezo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:flex p-2 rounded-full bg-gray-800 text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-colors"
          >
            <FiLinkedin size={18} />
          </motion.a>

          {/* Mobile Menu Button with animated icon */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu with better animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`md:hidden mt-2 mx-4 rounded-xl shadow-lg overflow-hidden bg-gray-900 backdrop-blur-lg border border-gray-800`}
          >
            <ul className="flex flex-col p-2">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => handleLinkClick(link.name, link.id)}
                    className={`w-full px-4 py-3 text-left rounded-lg flex items-center justify-between text-sm font-medium transition-colors ${
                      activeLink === link.name 
                        ? 'bg-gray-800 text-teal-400' 
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    <span>{link.name}</span>
                    {activeLink === link.name && (
                      <FiArrowRight className="text-teal-400" />
                    )}
                  </button>
                </motion.li>
              ))}
              
              {/* Mobile social links */}
              <div className="flex justify-center gap-4 px-4 py-3 border-t border-gray-800">
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                >
                  <FiGithub size={18} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                  className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-colors"
                >
                  <FiLinkedin size={18} />
                </motion.a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;