import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a
      href={href}
      className="relative px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`relative z-10 text-gray-300 transition-colors ${isHovered ? 'text-white' : ''}`}>
        {children}
      </span>
      {isHovered && (
        <span className="absolute inset-0 bg-green-600/20 rounded-md backdrop-blur-sm -z-0" />
      )}
    </a>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="PPL BIOTECH" 
              className="h-16 w-auto object-contain bg-white/5 rounded-full p-1" 
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#products">Products</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;