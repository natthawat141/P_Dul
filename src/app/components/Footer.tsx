"use client";

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-8 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-600">
              Pathform is a leading online platform for learning and career development. We provide world-class courses
              to help you advance in your career.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-500">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="courses" className="hover:text-gray-500">
                  Courses
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-500">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-500">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-600">
              Email: <a href="mailto:support@pathform.com" className="hover:text-gray-500">support@meskills.com</a>
            </p>
            <p className="text-gray-600 mt-2">Phone: +1 234 567 890</p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="hover:text-gray-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Facebook icon */}
                  <path d="M22 12a10 10 0 10-11 9.95V14.89h-2v-2.89h2v-1.91c0-2.08 1.19-3.24 3.03-3.24.88 0 1.8.16 1.8.16v2h-1.01c-.99 0-1.29.61-1.29 1.23v1.76h2.18l-.35 2.89h-1.83v7.06A10 10 0 0022 12z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Twitter icon */}
                  <path d="M8 19a11 11 0 0011-11v-.5A7.87 7.87 0 0021 6a7.94 7.94 0 01-2.29.63A4 4 0 0020.29 4a7.92 7.92 0 01-2.52.97A4 4 0 0012 8a4.37 4.37 0 00.1.92A11.26 11.26 0 012 5.48a4 4 0 001.25 5.31A4 4 0 012 10.2v.05A4 4 0 004.13 14a4 4 0 01-1.8.07 4 4 0 003.73 2.78A8 8 0 014 18.54a11 11 0 0011 1.15"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* LinkedIn icon */}
                  <path d="M6.94 2A4 4 0 013 6.97v.05A4 4 0 016.94 11H7a4 4 0 004-4.03V6.94A4 4 0 007 3h-.06zM2 22h5V10H2v12zm7.5 0h5V14c0-1.66 1.34-3 3-3s3 1.34 3 3v8h5V14a8 8 0 00-8-8c-3.86 0-7 3.14-7 7v9z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-gray-600">
          <p>&copy; 2024 me skills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
