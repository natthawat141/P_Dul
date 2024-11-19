"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// ข้อมูลปัญหาการศึกษา
const educationProblems = [
  {
    id: 1,
    title: "การเข้าถึงการศึกษาในพื้นที่ห่างไกล",
    description: "บางพื้นที่ที่ห่างไกลยังคงประสบปัญหาในการเข้าถึงการศึกษา"
  },
  {
    id: 2,
    title: "การขาดแคลนครูที่มีความเชี่ยวชาญ",
    description: "หลายโรงเรียนหรือสถาบันการศึกษาในประเทศไทยยังขาดครูที่มีความเชี่ยวชาญในบางสาขาวิชา โดยเฉพาะด้านเทคโนโลยีและสาขาเฉพาะทาง"
  },
  {
    id: 3,
    title: "เทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็ว",
    description: "วิชาหรือความรู้ในบางสาขาที่เกี่ยวกับเทคโนโลยี เช่น การพัฒนา AI, การเขียนโปรแกรม หรือการตลาดดิจิทัล มีการเปลี่ยนแปลงอย่างรวดเร็ว"
  },
  {
    id: 4,
    title: "ค่าใช้จ่ายในการศึกษาสูง",
    description: "ในการเรียนแต่ละครั้งมักจะมาพร้อมค่าใช้จ่าย เช่นค่าเดินทาง ค่าที่พัก และค่าอุปกรณ์การเรียน"
  },
  {
    id: 5,
    title: "ข้อจำกัดทางกายภาพ",
    description: "การแพร่ระบาดของโควิด-19 แสดงให้เห็นถึงอุปสรรคในการเข้าถึงการศึกษาในโรงเรียนหรือมหาวิทยาลัย"
  }
];

// ข้อมูลทีม
const teamMembers = [
  {
    name: "Kiattisak Sing-ngam",
    role: "CTO",
    image: "/images/team/kiattisak.jpg"
  },
  {
    name: "Natthawat sawatdee",
    role: "CMO",
    image: "/images/team/natthawat.jpg"
  },
  {
    name: "Phattharanarin Mueanrit",
    role: "Public Relations",
    image: "/images/team/phattharanarin.jpg"
  },
  {
    name: "Jidarpha Chamchooy",
    role: "CEO",
    image: "/images/team/jidarpha.jpg"
  },
  {
    name: "Chaniya Sangsirikhunakorn",
    role: "Project Manager",
    image: "/images/team/chaniya.jpg"
  }
];

// SDGs Impact
const sdgsImpact = [
  {
    goal: "SDG 4 & 5",
    title: "Quality Education & Gender Equality",
    description: "ช่วยให้ผู้เรียนทุกเพศสามารถเข้าถึงการศึกษาคุณภาพสูงได้อย่างเท่าเทียม"
  },
  {
    goal: "SDG 9",
    title: "Industry, Innovation, and Infrastructure",
    description: "พัฒนานวัตกรรมการเรียนรู้และโครงสร้างพื้นฐานทางการศึกษาดิจิทัล"
  },
  {
    goal: "SDG 10",
    title: "Reduced Inequality",
    description: "ลดความเหลื่อมล้ำในการเข้าถึงการศึกษา"
  },
  {
    goal: "SDG 17",
    title: "Partnerships for the Goals",
    description: "สร้างความร่วมมือระหว่างองค์กรต่างๆ ในการพัฒนาการศึกษา"
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            MeLearn
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            แพลตฟอร์ม E-Learning ที่มุ่งยกระดับการศึกษาไทยด้วยเทคโนโลยีล้ำสมัย
          </motion.p>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ปัญหาการศึกษาในประเทศไทย</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationProblems.map((problem) => (
              <motion.div
                key={problem.id}
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">เทคโนโลยีของเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-4">Melearn AI</h3>
              <p className="text-gray-600">AI ผู้ช่วยอัจฉริยะที่ช่วยในการเรียนรู้และค้นหาข้อมูล</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-4">Blockchain Technology</h3>
              <p className="text-gray-600">ใช้ NFT สำหรับใบรับรองและตั๋วเข้าร่วมกิจกรรม</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-4">Melearn Token</h3>
              <p className="text-gray-600">Token ดิจิทัลสำหรับการซื้อคอร์สและมีส่วนร่วมในแพลตฟอร์ม</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ทีมของเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDGs Impact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">SDGs Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sdgsImpact.map((impact, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-semibold mb-2">{impact.goal}</h3>
                <h4 className="text-lg font-medium mb-3">{impact.title}</h4>
                <p className="text-gray-600">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;