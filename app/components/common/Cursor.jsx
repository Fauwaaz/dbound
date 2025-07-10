"use client"; // Required for interactivity

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Only run this effect on the client side
    if (typeof window === 'undefined') return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    // Hide default cursor
    document.body.style.cursor = 'none';

    // Set initial positions
    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    // GSAP animation for smooth follow
    gsap.to({}, {
      duration: 0.016,
      repeat: -1,
      onRepeat: () => {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;
        
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY
          }
        });
        
        gsap.set(follower, {
          css: {
            left: posX - 0,
            top: posY - 12
          }
        });
      }
    });

    // Track mouse movement
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Handle hover states
    const handleMouseEnter = () => {
      gsap.to(follower, { scale: 3, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(follower, { scale: 1, duration: 0.3 });
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    
    // Add hover effects to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      // Cleanup
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default Cursor;