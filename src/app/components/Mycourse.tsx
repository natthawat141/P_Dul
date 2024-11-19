"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaUsers, FaClock, FaPlay } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const mockCourse = {
  id: 1,
  title: "เทคนิคการนำเสนอแบบมืออาชีพ",
  description: "ยกระดับทักษะการนำเสนอของคุณสู่มาตรฐานมืออาชีพ กับหลักสูตรเทคนิคการนำเสนอแบบมืออาชีพ",
  image: "/img/b2.png",
  rating: 4.9,
  students: 10,
  duration: "1 สัปดาห์",
  level: "ขั้นสูง",
  price: null,
  tags: ["การนำเสนอ", "Storytelling"],
  instructor: "คุณ กิตติศักดิ์ สิงห์ งาม ",
  updatedAt: "อัพเดทล่าสุด: มกราคม 2024"
};

const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleEnroll = () => {
    router.push('/learn');
  };

  return (
    <div className="w-full min-h-[600px] relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Course Info */}
          <div className="text-white space-y-6">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-yellow-400 text-gray-800 text-sm font-bold px-3 py-1 rounded-full">
                {course.level}
              </span>
              <span className="text-white/80 text-sm">{course.updatedAt}</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight mb-4">
              {course.title}
            </h1>

            <p className="text-lg text-white/80 mb-6">
              {course.description}
            </p>

            <div className="flex items-center space-x-6 text-white/80">
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-2" />
                <span>{course.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center">
                <FaUsers className="mr-2" />
                <span>{course.students.toLocaleString()} ผู้เรียน</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <span>{course.duration}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 my-6">
              {course.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white/10 text-white text-sm px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                onClick={handleEnroll}
                className="flex items-center px-8 py-4 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlay className="mr-2" />
                เริ่มเรียนได้เลย
              </motion.button>
              <p className="text-white/60">
                คอร์สนี้ฟรี! ไม่มีค่าใช้จ่าย
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/80">
                ผู้สอน: {course.instructor}
              </p>
            </div>
          </div>

          {/* Right Column - Course Preview */}
          <motion.div
            className="relative bg-white/5 rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={course.image} 
              alt="Course Preview" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaPlay className="text-white text-3xl ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const MyCourse = () => {
  return (
    <section className="bg-black">
      <CourseCard course={mockCourse} />
    </section>
  );
};

export default MyCourse;