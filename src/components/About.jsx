import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Star, Lightbulb } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/motion';

const About = () => {
    const values = [
        { icon: Lightbulb, title: 'Innovation', desc: 'Forward-looking solutions for modern education' },
        { icon: Heart, title: 'Integrity', desc: 'Transparency and trust in all our dealings' },
        { icon: Star, title: 'Customer-Centricity', desc: 'Prioritizing schools, students, and parents' },
        { icon: Target, title: 'Excellence', desc: 'Continuous improvement for reliability' },
        { icon: Eye, title: 'Sustainability', desc: 'Solutions that grow with institutions' }
    ];

    return (
        <section id="about" className="py-20 bg-white">
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
                        About <span className="text-blue-600">MSS</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
                    >
                        Mega School Solution (MSS) is a forward-thinking technology company dedicated to transforming the education sector through innovative digital solutions. We specialize in developing reliable, user-friendly, and scalable systems that help schools, colleges, and universities enhance efficiency, transparency, and service delivery.With a strong commitment to innovation and excellence, MSS ensures that institutions can focus
                        more on education while leveraging modern tools to simplify administration, communication, and
                        f
                        inancial management.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="bg-blue-50 p-8 rounded-2xl"
                    >
                        <div className="flex items-center mb-6">
                            <Eye className="text-blue-600 mr-4" size={32} />
                            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            To become the leading provider of innovative school management solutions in Africa, empowering educational institutions with digital tools that improve efficiency, accountability, and student experience.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="bg-green-50 p-8 rounded-2xl"
                    >
                        <div className="flex items-center mb-6">
                            <Target className="text-green-600 mr-4" size={32} />
                            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            To deliver high-quality, affordable, and secure technology products that address the unique needs of educational institutions while ensuring ease of use and sustainable growth.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <motion.h3
                        variants={fadeInUp}
                        className="text-3xl font-bold text-center text-gray-900 mb-12"
                    >
                        Our Core Values
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                                >
                                    <IconComponent className="text-blue-600 mx-auto mb-4" size={48} />
                                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                                    <p className="text-gray-600">{value.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;