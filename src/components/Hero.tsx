import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('home');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.bottom > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center z-0" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-black/90 z-10" />
      
      {/* Motion Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 relative z-20 text-center"
      >
        <div className="relative">
          {/* Animated Gradient Background */}
          <motion.div
            className="absolute -inset-x-20 -inset-y-32 bg-gradient-to-r from-green-500/10 to-emerald-500/10 blur-3xl z-1"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.h1 
            className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-100 to-emerald-300 mb-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            PPL BIOTECH
          </motion.h1>
        </div>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Providing affordable and quality healthcare solutions through innovative Allopathic and Ayurvedic medicines
        </motion.p>
      </motion.div>

      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
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
        )}
      </AnimatePresence>
      
    </section>
  );
};

export default Hero;
