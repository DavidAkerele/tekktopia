import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLines = ({ direction = 'right' }) => {
  // Define the lines with different widths
  const lines = [
    { width: '50%' },
    { width: '70%' },
    { width: '30%' },
    { width: '90%' },
    { width: '40%' },
  ];

  // Animation configuration based on the direction
  const animationConfig = {
    initial: { x: direction === 'right' ? '100%' : '-100%' },
    animate: { x: direction === 'right' ? '-100%' : '100%' },
    transition: { duration: 6, ease: 'linear', repeat: Infinity },
  };

  return (
    <div className="w-full h-[50px] overflow-hidden flex items-center">
      {lines.map((line, index) => (
        <motion.div
          key={index}
          className="h-[4px]"
          style={{
            width: line.width,
            marginRight: '10px',
            background:
              'linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 1))',
          }}
          initial={animationConfig.initial}
          animate={animationConfig.animate}
          transition={{
            ...animationConfig.transition,
            // Add a delay to stagger the animation for each line
            delay: index * 1.2, // Adjust this delay for visual effect
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedLines;
