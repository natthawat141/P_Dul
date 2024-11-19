"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  { name: 'NIDA', logo: '/img/nida.jpg' },
  { name: 'GSCM', logo: '/img/gscm.png' },
  { name: 'Rabbit START', logo: '/img/rabbit-start.png' },
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

        {/* Scrollable partners container */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-8 py-4 px-4 min-w-max">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  className="bg-white rounded-xl shadow-md p-6 w-48 h-32 flex items-center justify-center flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.p
          className="text-center text-gray-600 mt-12 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          "Me Skills ร่วมมือกับพันธมิตรที่เป็นสถาบันการศึกษาและคอมมูนิตี้ที่มีเครือข่ายนักศึกษามากมาย 
          เพื่อสร้างสรรค์แพลตฟอร์มการเรียนรู้ที่เข้าถึงง่ายและมีคุณภาพสูง ตอบโจทย์การพัฒนาทักษะและ
          ความรู้ของผู้เรียนได้อย่างครอบคลุม"
        </motion.p>
      </div>
    </section>
  );
};

export default Partners;
