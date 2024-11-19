"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const quotes = [
  "Change your future with your own hands",
  "Unlock your potential, one lesson at a time",
  "Your journey to success starts here",
  "Learn today, lead tomorrow",
  "Empowering minds, shaping futures"
];

const Welcome = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // ทำการส่งอีเมลไปยัง API หรือ backend ของคุณที่นี่
    console.log('Subscribed email:', email);
    setEmail('');
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-sky-100 to-blue-200 py-16 overflow-hidden">
      {/* วงกลมด้านบนซ้าย */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* วงกลมด้านล่างขวา */}
      <div className="absolute bottom-0 right-0 w-128 h-128 bg-sky-200 rounded-full opacity-40 transform translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-sky-800">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to me Skills
          </motion.h2>
          <motion.div
            className="h-16 mb-8"
            key={currentQuote}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl italic">
              {quotes[currentQuote]}
            </p>
          </motion.div>
          <p className="mb-6">Stay updated with our latest courses and educational tips!</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-full text-sky-800 bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 flex-grow"
              required
            />
            <motion.button
              type="submit"
              className="px-6 py-2 bg-sky-600 text-white font-semibold rounded-full shadow-lg hover:bg-sky-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
