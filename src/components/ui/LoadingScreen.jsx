import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-lux-black flex flex-col items-center justify-center text-white"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl font-display tracking-widest mb-8"
      >
        LUX<span className="text-lux-red">DRIVE</span>
      </motion.div>
      
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
            className="h-full bg-lux-red"
            style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-4 font-mono text-sm text-gray-500">
        INITIALISATION DES SYSTÈMES... {progress}%
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
