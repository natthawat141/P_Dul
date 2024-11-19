"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaUsers, FaClock } from 'react-icons/fa';

const mockCourses = [
  {
    id: 1,
    title: "Advanced Blockchain Development",
    description: "Master the art of building decentralized applications and smart contracts.",
    image: "https://thumbs.dreamstime.com/b/ethereum-eth-technology-background-circuit-eth-logo-dark-blue-crypto-currency-concept-print-243693714.jpg",
    rating: 4.9,
    students: 15420,
    duration: "8 weeks",
    level: "Advanced",
    price: 199.99,
    tags: ["Blockchain", "Ethereum", "Solidity"]
  },
  {
    id: 2,
    title: "AI and Machine Learning Masterclass",
    description: "Dive deep into artificial intelligence and machine learning algorithms.",
    image: "https://media.istockphoto.com/id/1448152453/vector/big-data-technology-and-data-science-illustration-data-flow-concept-querying-analysing.jpg?s=612x612&w=0&k=20&c=To0lhCrVmDYdSkOUOGxGsjlYe0buj_wwGCDqYhF9p2o=",
    rating: 4.8,
    students: 22150,
    duration: "12 weeks",
    level: "Intermediate",
    price: 249.99,
    tags: ["AI", "Machine Learning", "Python"]
  },
  {
    id: 3,
    title: "Full-Stack Web Development with Next.js",
    description: "Build modern, scalable web applications with Next.js and React.",
    image: "https://www.0xkishan.com/blogs/nextjs/hero.png",
    rating: 4.9,
    students: 18730,
    duration: "10 weeks",
    level: "Intermediate",
    price: 179.99,
    tags: ["Next.js", "React", "Node.js"]
  },
  // Add more mock courses as needed
];

const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative">
        <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50" />
        <div className="absolute bottom-0 left-0 p-4">
          <span className="bg-yellow-400 text-gray-800 text-xs font-bold px-2 py-1 rounded-full">
            {course.level}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center mb-4">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-gray-700 font-semibold">{course.rating.toFixed(1)}</span>
          <span className="text-gray-500 text-sm ml-2">
            ({course.students.toLocaleString()} students)
          </span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <FaClock className="mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1" />
            {course.students.toLocaleString()}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-sky-100 text-sky-800 text-xs font-semibold px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-800">${course.price}</span>
          <motion.button
            className="px-4 py-2 bg-sky-600 text-white font-semibold rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const PopularCourses = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Popular Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="text-center mt-12">
          <motion.button
            className="px-8 py-3 bg-sky-600 text-white font-semibold rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Courses
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
