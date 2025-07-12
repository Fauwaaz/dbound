"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const ResponsiveNavMenu = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState('');

  const menuItems = [
    { id: 'projects', href: '/projects', label: 'Projects' },
    { id: 'services', href: '/services', label: 'Services' },
    { id: 'about', href: '/about', label: 'About' },
    { id: 'contact', href: '/contact', label: 'contact' },
    { id: 'insights', href: '/insights', label: 'Insights' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuItemClick = (itemId: React.SetStateAction<string>) => {
    setActiveTab(itemId);
    setIsMobileMenuOpen(false);
  };

  const handleMouseEnter = (itemId: React.SetStateAction<string>) => {
    setHoveredTab(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredTab('');
  };

  return (
    <>
      {/* Desktop Navigation - Hidden on tablet and mobile */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 hidden lg:block"
      >
        <div className="mx-6 mb-6 flex justify-center">
          <div className="bg-black/60 backdrop-blur-sm rounded-full border border-white/20 shadow-2xl">
            <div className="flex items-center justify-around">
              {menuItems.map((item) => (             
                <motion.div
                  key={item.id}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.id);
                  }}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                  className="relative flex flex-col items-center px-6 py-4 rounded-xl transition-colors duration-200 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={item.href}>
                  <AnimatePresence>
                    {hoveredTab === item.id && (
                      <motion.div
                        layoutId="activeTab"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 bg-black/80 rounded-full"
                      />
                    )}
                  </AnimatePresence>

                  <motion.span
                    className="text-sm uppercase font-bold relative z-10"
                    animate={{
                      color: hoveredTab === item.id ? '#ffffff' : '#dedede',
                      scale: hoveredTab === item.id ? 1.05 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.label}
                  </motion.span>

                  {/* Active Tab Indicator Dot */}
                  <AnimatePresence>
                    {activeTab === item.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-lg z-10"
                      />
                    )}
                  </AnimatePresence>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Button - Visible on tablet and mobile */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-6 right-6 z-50 lg:hidden"
      >
        <motion.button
          onClick={toggleMobileMenu}
          className="bg-white/50 backdrop-blur-sm rounded-full border border-white/20 shadow-2xl p-4 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            backgroundColor: isMobileMenuOpen ? 'rgba(107, 114, 128, 0.8)' : 'rgba(255, 255, 255, 0.5)',
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center space-y-1">
            <motion.div
              className="w-1 h-1 bg-gray-600 rounded-full"
              animate={{ 
                backgroundColor: isMobileMenuOpen ? '#ffffff' : '#6b7280',
                scale: isMobileMenuOpen ? 1.2 : 1
              }}
            />
            <motion.div
              className="w-1 h-1 bg-gray-600 rounded-full"
              animate={{ 
                backgroundColor: isMobileMenuOpen ? '#ffffff' : '#6b7280',
                scale: isMobileMenuOpen ? 1.2 : 1
              }}
            />
            <motion.div
              className="w-1 h-1 bg-gray-600 rounded-full"
              animate={{ 
                backgroundColor: isMobileMenuOpen ? '#ffffff' : '#6b7280',
                scale: isMobileMenuOpen ? 1.2 : 1
              }}
            />
          </div>
          <motion.span 
          animate={{
            color: isMobileMenuOpen ? 'rgba(255, 255, 255, 255)' : 'gray'
          }}
          className="ml-2 text-sm font-medium text-gray-600"
          >Menu</motion.span>
        </motion.button>
      </motion.div>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={toggleMobileMenu}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative flex items-center justify-center h-full"
            >
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-8 mx-6 w-full">
                {/* Close Button */}
                <motion.button
                  onClick={toggleMobileMenu}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Menu Items */}
                <div className="space-y-4 mt-8">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMobileMenuItemClick(item.id);
                      }}
                      className="relative block w-full text-center py-4 px-6 rounded-xl transition-all duration-200 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <AnimatePresence>
                        {activeTab === item.id && (
                          <motion.div
                            layoutId="mobileActiveTab"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-500 rounded-xl"
                          />
                        )}
                      </AnimatePresence>

                      <motion.span
                        className="text-lg uppercase font-medium relative z-10"
                        animate={{
                          color: activeTab === item.id ? '#ffffff' : '#374151',
                          scale: activeTab === item.id ? 1.05 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.label}
                      </motion.span>

                      <motion.div
                        className="absolute inset-0 bg-gray-100 rounded-xl opacity-0"
                        whileHover={{ opacity: activeTab === item.id ? 0 : 0.1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResponsiveNavMenu;