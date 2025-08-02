import React, { useState, useEffect } from 'react';
import { FiHome, FiUser, FiCpu, FiFolder, FiBriefcase, FiMail } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  const navItems = [
    { id: 'home', icon: <FiHome /> },
    { id: 'about', icon: <FiUser /> },
    { id: 'skills', icon: <FiCpu /> },
    { id: 'projects', icon: <FiFolder /> },
    { id: 'experience', icon: <FiBriefcase /> },
    { id: 'contact', icon: <FiMail /> },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleClick = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Patta */}
      {isMobile && (
        <div
          className="fixed right-0 top-1/2 -translate-y-1/2 bg-gray-600 w-2 h-24 rounded-l-md shadow-md z-40"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}

      {/* Sidebar */}
      {isMobile ? (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="fixed top-1/2 right-4 -translate-y-1/2 z-50 bg-gray-900 text-white rounded-xl shadow-lg p-3 space-y-4"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`flex items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-teal-500 ${
                    active === item.id ? 'bg-teal-600' : ''
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 bg-gray-900 text-white rounded-xl shadow-lg p-3 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`flex items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-teal-500 ${
                active === item.id ? 'bg-teal-600' : ''
              }`}
            >
              <span className="text-xl">{item.icon}</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
