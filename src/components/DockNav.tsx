import React from 'react';
import { motion } from 'framer-motion';
import { Home, Info, Package, Phone } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: Info, label: 'About', href: '#about' },
  { icon: Package, label: 'Products', href: '#products' },
  { icon: Phone, label: 'Contact', href: '#contact' }
];

const DockNav = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50 py-4">
      <motion.nav 
        className="bg-black/20 backdrop-blur-lg px-8 py-4 rounded-full border border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-12">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="group relative flex flex-col items-center"
              whileHover={{ scale: 1.2, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="text-white/70 group-hover:text-green-400 transition-colors"
              >
                <item.icon size={28} />
              </motion.div>
              <span className="absolute -bottom-6 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
                {item.label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};

export default DockNav;