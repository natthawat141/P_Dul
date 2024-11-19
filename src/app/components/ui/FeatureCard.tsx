"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaRocket } from 'react-icons/fa';

export const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center"
    whileHover={{ y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="bg-white-4 rounded-full mb-4">
      <Icon className="text-4xl text-sky-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </motion.div>
);


const WhyChoosePathform = () => {
  const features = [
    {
      icon: FaGraduationCap,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience in their fields."
    },
    {
      icon: FaLaptopCode,
      title: "Hands-on Learning",
      description: "Engage in practical projects and real-world scenarios to solidify your skills."
    },
    {
      icon: FaRocket,
      title: "Career Advancement",
      description: "Gain the skills and knowledge needed to take your career to the next level."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-sky-800 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Pathform?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="bg-sky-700 text-white rounded-xl p-10 text-center shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8">Join thousands of students already learning on Pathform</p>
          <motion.button 
            className="px-8 py-4 bg-white text-sky-700 font-semibold rounded-full shadow-lg hover:bg-sky-100 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse All Courses
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoosePathform;