import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16, // Center the cursor (32px width/height)
      y: mousePosition.y - 16,
      transition: { type: 'tween', ease: 'backOut', duration: 0.1 }
    }
  };

  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate="default"
    />
  );
};

export default CustomCursor;
