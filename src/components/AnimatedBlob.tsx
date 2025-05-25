import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBlob: React.FC = () => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-3xl opacity-30 pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
          borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="w-full h-full bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400"
      />
    </div>
  );
};

export default AnimatedBlob;