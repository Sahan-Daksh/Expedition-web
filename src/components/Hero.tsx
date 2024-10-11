import React from "react";
import BackgroundVideo from '../components/ui/BackgroundVideo';

export function Hero() {
  return (

    <div className="relative w-full mx-auto rounded-md h-screen overflow-hidden">
      <BackgroundVideo />
      <div className="flex items-center justify-center h-full relative z-10"> {/* Center content */}
        <div className="text-center"> {/* Center text and buttons */}
          <h2 className="text-white text-2xl md:text-6xl font-bold">
            Expedition: IEEEXtreme Journey
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 mx-auto">
            Join us in celebrating innovation and excellence in technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              Join IEEE
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              Register for IEEEXtreme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
