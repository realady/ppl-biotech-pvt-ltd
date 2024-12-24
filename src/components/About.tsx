import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/95">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-green-400">Our Company</h3>
            <p className="text-gray-300">
              PUMITHILA PRIVATE LIMITED is a renowned healthcare company that operates in the field of marketing Allopathic and Ayurvedic medicines. Under the brand name PPL BIOTECH, we reach out to various patients and customers, providing products that are essential for improving their health.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Target className="text-green-400 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-semibold text-white">Our Mission</h4>
                  <p className="text-gray-400">To provide affordable medicines to people living at the last rung of society, ensuring access to high-quality healthcare for all.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Users className="text-green-400 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-semibold text-white">Our Commitment</h4>
                  <p className="text-gray-400">Promoting equality and accessibility in healthcare services across society, making effective treatments available to economically disadvantaged communities.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Heart className="text-green-400 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-semibold text-white">Our Impact</h4>
                  <p className="text-gray-400">Beyond providing medicines, we promote health education and awareness through regular health camps and public information campaigns.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-green-900/20 to-black p-8 rounded-2xl border border-green-900/30"
          >
            <h3 className="text-2xl font-semibold text-green-400 mb-6">Leadership</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white">Mr. Avinash Kumar Mishra (BA LLB)</h4>
                <p className="text-green-400">Director - Pumithila Pvt. Ltd.</p>
                <p className="text-gray-300 mt-4">
                  An experienced pharmaceuticals professional with over 12 years of in-depth experience in the field. Mr. Mishra's journey from Sales Representative to founding Pumithila Pvt. Ltd. showcases his dedication to making quality healthcare accessible to all.
                </p>
              </div>
              
              <div className="space-y-2">
                <h5 className="text-lg font-semibold text-white">Experience Highlights:</h5>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>12 years of pharmaceutical expertise</li>
                  <li>Experience with Top 5 pharmaceutical companies</li>
                  <li>Progressive career from Sales Representative to Area Manager</li>
                  <li>Founded Pumithila Pvt. Ltd. with a vision for accessible healthcare</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;