'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

export default function BlurButton({ href = '#', label = 'Click Me' }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-flex items-center justify-center px-7 py-2 rounded-full border border-gray-500 bg-white/20 backdrop-blur-sm transition-colors duration-300 text-gray-700 hover:bg-gray-600 hover:text-white no-underline"
    >
      <motion.span className="relative uppercase z-10 text-sm roboto-condensed"
       animate={isHovered ? { x: -5} : {x: 0} } 
      >{label}</motion.span>

      <motion.span
        initial={{ x: -10, opacity: 0 }}
        animate={isHovered ? { x: 5, opacity: 1 } : { x: -10, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute right-4 z-10"
      >
        <FiArrowRight />
      </motion.span>
    </Link>
  );
}