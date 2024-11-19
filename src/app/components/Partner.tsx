"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  { name: 'NIDA', logo: '/img/nida.jpg' },
  { name: 'GSCM', logo: '/img/gscm.png' },
  { name: 'เป๋าตัง', logo: '/img/pultung.png' },
];

const Partners = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-sky-700 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          OUR PARTNERS
        </motion.h2>

        {/* Centered partners container */}
        <div className="relative max-w-4xl mx-auto"> {/* เพิ่ม max-width และ mx-auto */}
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Scrollable container */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex justify-center items-center space-x-8 py-8 px-4"> {/* เพิ่ม justify-center */}
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  className="bg-white rounded-xl shadow-lg p-6 w-56 h-36 
                    flex items-center justify-center flex-shrink-0
                    hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={90}
                    className="object-contain hover:opacity-90 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.p
          className="text-center text-gray-600 mt-16 max-w-3xl mx-auto px-4 
            leading-relaxed text-lg" // ปรับขนาดและ line height
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          &quot;Me Skills ร่วมมือกับพันธมิตรที่เป็นสถาบันการศึกษาและคอมมูนิตี้ที่มีเครือข่ายนักศึกษามากมาย 
          เพื่อสร้างสรรค์แพลตฟอร์มการเรียนรู้ที่เข้าถึงง่ายและมีคุณภาพสูง ตอบโจทย์การพัฒนาทักษะและ
          ความรู้ของผู้เรียนได้อย่างครอบคลุม&quot;
        </motion.p>
      </div>
    </section>
  );
};

export default Partners;
