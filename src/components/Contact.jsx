import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Globe, Clock, Send } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      info: 'Goba Center, Dar-es-Salaam',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@mss.co.tz',
      color: 'green'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+255 688 610 433',
      color: 'purple'
    },
    {
      icon: Globe,
      title: 'Website',
      info: 'www.mss.co.tz',
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-50',
      green: 'text-green-600 bg-green-50',
      purple: 'text-purple-600 bg-purple-50',
      orange: 'text-orange-600 bg-orange-50'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
            Get In <span className="text-blue-600">Touch</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Ready to transform your educational institution? Contact us today to learn more about our innovative solutions.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h3 
              variants={fadeInUp}
              className="text-2xl font-bold text-gray-900 mb-8"
            >
              Contact Information
            </motion.h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className={`w-12 h-12 rounded-lg ${getColorClasses(item.color)} flex items-center justify-center mr-4`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-8 p-6 bg-blue-50 rounded-xl"
            >
              <div className="flex items-center mb-3">
                <Clock className="text-blue-600 mr-3" size={24} />
                <h4 className="font-semibold text-gray-900">Business Hours</h4>
              </div>
              <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h3 
              variants={fadeInUp}
              className="text-2xl font-bold text-gray-900 mb-8"
            >
              Send Us a Message
            </motion.h3>
            
            <motion.form 
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Institution</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your school/institution name"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your needs and how we can help..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-colors duration-300"
              >
                Send Message
                <Send size={20} />
              </button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;