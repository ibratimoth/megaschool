import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Shield } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/motion';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            <span className="text-blue-600">Mega School</span>
            <br />
            <span className="text-green-600">Solution</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Transforming Education Through Innovative Digital Solutions
          </motion.p>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            Empowering schools, colleges, and universities with reliable, user-friendly, and scalable systems for enhanced efficiency and transparency.
          </motion.p>
          
          <motion.button 
            variants={fadeInUp}
            onClick={scrollToAbout}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Learn More
            <ArrowRight size={20} />
          </motion.button>
          
          <motion.div 
            variants={fadeInUp}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <BookOpen className="text-blue-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Solutions</h3>
              <p className="text-gray-600 text-center">Innovative tools designed for modern education</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <Users className="text-green-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Friendly</h3>
              <p className="text-gray-600 text-center">Easy-to-use interfaces for all stakeholders</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <Shield className="text-blue-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600 text-center">Trusted solutions with robust security</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;