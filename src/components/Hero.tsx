import React from "react";
import BackgroundVideo from '../components/ui/BackgroundVideo';

export function Hero() {
  return (
    <div className="relative w-full mx-auto rounded-md h-screen overflow-hidden bg-[#e0f7ff]">
      <BackgroundVideo />

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#e0f7ff] to-transparent opacity-80 z-0"></div>

      <div className="flex items-center justify-center h-full relative z-10">
        <div className="text-center bg-white bg-opacity-90 p-8 rounded-md shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-[#2574DD] text-3xl md:text-7xl font-bold text-shadow">
            Expedition: IEEEXtreme Journey
          </h2>
          <p className="text-[#4a4a4a] text-lg md:text-2xl max-w-xl mt-6 mx-auto">
            Join us in celebrating innovation and excellence in technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <button className="flex items-center px-6 py-3 bg-[#2574DD] hover:bg-[#1a5da5] transition duration-200 rounded-lg text-white shadow-md transform hover:scale-105">
              
              Join IEEE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
