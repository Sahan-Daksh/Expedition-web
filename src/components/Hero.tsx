import React from "react";
import BackgroundVideo from '../components/ui/BackgroundVideo';

export function Hero() {
  return (
<<<<<<< HEAD
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        Expedition: IEEEXtreme Journey
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        Join us in celebrating innovation and excellence in technology.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Join IEEE
          </button>
          <button 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]" 
            onClick={() => window.open('https://forms.gle/6oDTq2EBWnbJasoY9', '_blank')}>
            Register for IEEEXtreme
          </button>

=======
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
>>>>>>> 0e87089bc52bad13c77888578311e31ebe0eed1c
        </div>
      </div>
    </div>
  );
}
