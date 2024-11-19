"use client";

import React, { useEffect , useState} from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const mockCourses = [
  {
    id: 1,
    title: "Introduction to Blockchain",
    description: "Learn the basics of blockchain technology and its applications.",
    image: "https://wallpapers.com/images/hd/blockchain-background-w6j23ajcqe9t5npe.jpg",
  },
  {
    id: 2,
    title: "Advanced React Development",
    description: "Master React and build powerful front-end applications.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04cy7qVYMjzsxBUzw6txDCKUspBfDxnewPQ&s",
  },
  {
    id: 3,
    title: "Data Science for Beginners",
    description: "Start your journey into data science with Python and machine learning.",
    image: "https://images.pexels.com/photos/3182761/pexels-photo-3182761.jpeg",
  },
//   {
//     id: 4,
//     title: "Solidity and Smart Contracts",
//     description: "Build decentralized applications using Solidity.",
//     image: "https://wallpapers.com/images/hd/ethereum-snowy-night-my4f0fnnj7q6g5jd.jpg",
//   },
//   {
//     id: 5,
//     title: "Machine Learning Masterclass",
//     description: "Deep dive into machine learning algorithms and models.",
//     image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
//   },
//   {
//     id: 6,
//     title: "DevOps Best Practices",
//     description: "Learn how to manage deployments and automation efficiently.",
//     image: "https://cdn.prod.website-files.com/63f902d79a33f7ff016cde0b/63f902d89a33f792806ce715_6390a0fef43ebc2532e4a341_shutterstock_2200985385.jpeg",
//   },
];

const MainCon: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200 });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=" bg-gradient-to-b  from-sky-50 to-white text-gray-800 min-h-[600px] pt-5  ">
 



        <div className="container mx-auto relative z-10 ">
          <h2 className="text-4xl font-bold text-center text-sky-700 mb-16" data-aos="fade-up">Our Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" data-aos="fade-up">
            {mockCourses.map((course) => (
              <div key={course.id} className="bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-sky-600">{course.title}</h3>
                  <p className="mt-2 text-gray-600">{course.description}</p>
                  <button className="mt-6 inline-block px-4 py-2 bg-sky-600 text-white font-medium rounded hover:bg-sky-500">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
     



    </div>
  );
};

export default MainCon;