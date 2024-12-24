import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-green-400 mb-6">Get in Touch</h3>
              <p className="text-gray-300">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-green-400" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                  <p className="text-gray-400">+91 XXX XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-green-400" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p className="text-gray-400">contact@pplbiotech.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-green-400" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-white">Address</h4>
                  <p className="text-gray-400">Location, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="text-green-400" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-white">Business Hours</h4>
                  <p className="text-gray-400">Monday - Saturday: 9:00 AM - 6:00 PM</p>
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
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-black/50 border border-green-900/30 text-white px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-black/50 border border-green-900/30 text-white px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-black/50 border border-green-900/30 text-white px-4 py-2 focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-md font-semibold hover:from-green-500 hover:to-emerald-500 transition-all shadow-lg shadow-green-500/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;