import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CreditCard, IdCard, Smartphone, Shield, BarChart3 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/motion';

const Products = () => {
  const products = [
    {
      name: 'Report Kiganjani',
      description: 'A mobile and web platform for instant access to student performance records.',
      icon: FileText,
      color: 'blue',
      features: [
        'Instant student report access',
        'Parent-teacher communication bridge',
        'Secure and transparent results management'
      ]
    },
    {
      name: 'Control Number',
      description: 'Smart payment management solution for educational institutions.',
      icon: CreditCard,
      color: 'green',
      features: [
        'Automated control number generation',
        'Seamless bank/payment gateway integration',
        'Real-time transaction tracking and reporting'
      ]
    },
    {
      name: 'Electronic ID Cards',
      description: 'Digital ID solution for staff and students with advanced features.',
      icon: IdCard,
      color: 'purple',
      features: [
        'Durable smart cards',
        'Customizable design with institution branding',
        'Integration with attendance, finance, and access systems'
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-50 border-blue-200',
      green: 'text-green-600 bg-green-50 border-green-200',
      purple: 'text-purple-600 bg-purple-50 border-purple-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
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
            Our <span className="text-blue-600">Products</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive digital solutions designed to streamline educational processes and enhance institutional efficiency.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <div className={`w-16 h-16 rounded-xl ${getColorClasses(product.color)} flex items-center justify-center mb-6 border`}>
                  <IconComponent size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full ${product.color === 'blue' ? 'bg-blue-600' : product.color === 'green' ? 'bg-green-600' : 'bg-purple-600'} mt-2 mr-3 flex-shrink-0`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    product.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                    product.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                    'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}>
                    Learn More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;