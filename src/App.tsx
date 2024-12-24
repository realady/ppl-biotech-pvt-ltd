import React from 'react';
import { motion } from 'framer-motion';
import DockNav from './components/DockNav';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import ScrollIndicator from './components/ScrollIndicator';

function App() {
  return (
    <motion.div 
      className="min-h-screen bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DockNav />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
      {/* <ScrollIndicator /> */}
    </motion.div>
  );
}

export default App;