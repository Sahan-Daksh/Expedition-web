'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulating loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-b from-[#e0f7ff] to-[#f0f4f8] text-white py-4 px-6 lg:px-20 items-center justify-between min-h-[80vh]"> {/* Reduced py to 4 and adjusted min height */}
      <div className={`w-full lg:w-1/3 text-center mb-8 lg:mb-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Image
          src="/img/DSC_0148.jpg"
          alt="xtreme"
          width={500}
          height={250}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
      <div className={`w-full lg:w-2/3 lg:ml-12 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl lg:text-5xl font-bold">
          <span className='text-[#4a4a4a]'>The Journey of </span><span className="text-[#2574DD]">Xtreme 18.0</span>
        </h1>
        <p className="text-lg lg:text-xl leading-relaxed mt-4 text-[#4a4a4a]">
          Xtreme 18.0 is a premier global, 24-hour hackathon organized by the IEEE, where brilliant minds from across the world come together to solve complex programming challenges and compete for prestigious awards.
        </p>
        <p className="text-lg lg:text-xl leading-relaxed mt-4 text-[#4a4a4a]">
          Xtreme 18.0 fosters a spirit of collaboration and intense competition, empowering participants to work alongside industry experts, sharpen their technical skills, and contribute to the future of technology.
        </p>
      </div>
    </div>
  );
};

export default About;
