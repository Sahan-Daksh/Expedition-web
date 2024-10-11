import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#040933] text-white py-12 px-6 lg:px-20 items-center justify-between min-h-screen">
      <div className="w-full lg:w-1/3 text-center mb-8 lg:mb-0">
        {/* Replace this with your actual image path */}
        <Image
          src="/img/DSC_0148.jpg"
          alt="xtreme"
          width={500}
          height={250}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
      <div className="w-full lg:w-2/3 lg:ml-12">
        <h1 className="text-4xl lg:text-5xl font-bold">
        The Journey of <span className="text-[#2574DD]">Xtreme 18.0</span>
        </h1>
        <p className="text-lg lg:text-xl leading-relaxed mt-4">
        Xtreme 18.0 is a premier global, 24-hour hackathon organized by the IEEE, where brilliant minds from across the world come together to solve complex programming challenges and compete for prestigious awards. This event showcases the relentless pursuit of excellence, as participants push the boundaries of what’s possible in the tech world.

        </p>
        <p className="text-lg lg:text-xl leading-relaxed mt-4">
        Xtreme 18.0 fosters a spirit of collaboration and intense competition, empowering participants to work alongside industry experts, sharpen their technical skills, and contribute to the future of technology. As a testament to ingenuity and teamwork, Xtreme 18.0 continues to inspire the next generation of problem solvers and innovators, leaving a lasting impact on the global tech community.
        </p>
      </div>
    </div>
  );
};

export default About;
