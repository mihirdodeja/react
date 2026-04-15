import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <motion.div
        className="loader"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1.2, 1.2, 0.8], 
          opacity: [0, 1, 1, 0], 
          rotate: [0, 90, 180, 270] 
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Loading...
      </motion.h2>
    </div>
  );
};

export default LoadingScreen;
