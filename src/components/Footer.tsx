import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black/90 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col items-center lg:items-start">
            <motion.img 
              src="/logo.png" 
              alt="PPL BIOTECH"
              className="h-24 w-auto mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <p className="text-sm text-gray-400 text-center lg:text-left">
              PUMITHILA PRIVATE LIMITED is a renowned healthcare company providing affordable Allopathic and Ayurvedic medicines.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-green-400 transition-colors">Our Products</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-green-400" />
                <span>+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-green-400" />
                <span>contact@pplbiotech.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-green-400" />
                <span>Location, India</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-green-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-green-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-green-400 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} PPL BIOTECH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;