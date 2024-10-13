import React from "react";
import BackgroundVideo from '../components/ui/BackgroundVideo';

export function Hero() {
  return (
    <div className="relative w-full mx-auto rounded-md h-screen overflow-hidden bg-[#e0f7ff]"> {/* Light blue background */}
      
      <div className="flex items-center justify-center h-full relative z-10"> {/* Center content */}
        <div className="text-center bg-white bg-opacity-80 p-8 rounded-md shadow-lg"> {/* Light gray background with opacity */}
          <h2 className="text-[#2574DD] text-2xl md:text-6xl font-bold">
            Expedition: IEEEXtreme Journey
          </h2>
          <p className="text-[#4a4a4a] text-sm md:text-2xl max-w-xl mt-6 mx-auto">
            Join us in celebrating innovation and excellence in technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <button className="px-4 py-2 bg-[#2574DD] hover:bg-[#1a5da5] transition duration-200 rounded-lg text-white shadow-md">
              Join IEEE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
