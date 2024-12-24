import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="flex flex-col items-center gap-2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/70"
        >
          <MousePointer size={24} />
        </motion.div>
        <span className="text-sm text-white/50">Scroll to explore</span>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;