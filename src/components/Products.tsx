import React from 'react';
import { motion } from 'framer-motion';
import { Pill, Thermometer, Stethoscope, Heart, Brain, Flower } from 'lucide-react';

const products = [
  {
    icon: Thermometer,
    title: "Cold, Fever & Cough",
    description: "Effective remedies for common ailments"
  },
  {
    icon: Pill,
    title: "Digestive Health",
    description: "Solutions for digestive problems"
  },
  {
    icon: Flower,
    title: "Skin & Hair Care",
    description: "Natural care products for skin and hair"
  },
  {
    icon: Brain,
    title: "Dental Care",
    description: "Complete oral healthcare solutions"
  },
  {
    icon: Heart,
    title: "Joint & Bone Health",
    description: "Relief from joint and bone pain"
  },
  {
    icon: Stethoscope,
    title: "Ayurvedic Solutions",
    description: "Traditional healing with modern approach"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-black/90">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-xl hover:bg-gray-800/50 transition-colors"
            >
              <product.icon className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
              <p className="text-gray-400">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;