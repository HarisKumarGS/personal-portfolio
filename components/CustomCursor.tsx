
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for the "Lag" effect (The Ring)
  const springConfig = { damping: 25, stiffness: 250 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener('mousemove', moveCursor);

    // Detect interaction elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer Ring - Smooth Follow */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 60 : 32,
          height: isHovered ? 60 : 32,
          backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
          borderColor: isHovered ? 'rgba(59, 130, 246, 0.5)' : 'rgba(0, 0, 0, 0.2)',
        }}
        className="pointer-events-none z-[9999] rounded-full border-[1.5px] border-solid"
      />

      {/* Inner Dot - Precise Follow */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? '#2563eb' : '#000000',
        }}
        className="pointer-events-none z-[9999] h-2 w-2 rounded-full"
      />
    </>
  );
};

export default CustomCursor;
