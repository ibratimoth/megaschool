import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Shield, DollarSign, Headphones } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/motion';

const WhyChoose = () => {
  const reasons = [
    {
      icon: Settings,
      title: 'Tailor-Made for Schools',
      description: 'Our solutions are specifically designed to meet the unique needs of educational institutions, ensuring perfect fit and functionality.',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with robust security measures and reliable infrastructure to protect sensitive educational data and ensure continuous operation.',
      color: 'green'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'Affordable pricing models that provide excellent value for money, helping institutions optimize their technology investments.',
      color: 'yellow'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Comprehensive customer support with dedicated teams ready to assist you every step of the way, ensuring smooth operations.',
      color: 'purple'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-50',
      green: 'text-green-600 bg-green-50',
      yellow: 'text-yellow-600 bg-yellow-50',
      purple: 'text-purple-600 bg-purple-50'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Why Choose <span className="text-blue-600">MSS</span>?
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We stand out in the educational technology landscape through our commitment to excellence, innovation, and customer satisfaction.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="flex items-start p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl ${getColorClasses(reason.color)} flex items-center justify-center mr-6 flex-shrink-0`}>
                  <IconComponent size={32} />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Institution?</h3>
            <p className="text-lg mb-6 opacity-90">Join hundreds of educational institutions already benefiting from our innovative solutions.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;