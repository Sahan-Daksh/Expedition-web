'use client';
import React, { useEffect, useState } from "react";

const Timeline: React.FC = () => {
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer for triggering animations
  useEffect(() => {
    const handleScroll = () => {
      const timelineElement = document.getElementById("timeline");
      if (timelineElement) {
        const rect = timelineElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setIsInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="timeline"
      className="bg-gradient-to-b from-[#f0f4f8] to-[#e0f7ff] min-h-screen flex justify-center items-center pt-2" // Reduced padding to pt-2
    >
      <div className="w-full max-w-4xl py-10">
        <h1 className="text-4xl font-bold text-center text-[#2574DD] mb-8">
          Event <span className="text-[#2574DD]">Timeline</span>
        </h1>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-[#2574DD]"></div>

          {/* Event 1 */}
          <div
            className={`mb-4 flex justify-start transition-transform duration-700 ease-out ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="relative w-1/2">
              <div className="bg-white text-blue-900 px-4 py-2 rounded-md shadow-md text-sm">
                AWARENESS SESSION
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2">
                <div className="w-3 h-3 bg-[#2574DD] rounded-full border-4 border-white"></div>
              </div>
              {/* Date */}
              <div className="absolute -top-6 left-0 transform -translate-y-1/2 text-blue-900 text-lg">
                <span>September 28</span>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div
            className={`mb-4 flex justify-end transition-transform duration-700 ease-out delay-100 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="relative w-1/2">
              <div className="bg-white text-blue-900 px-4 py-2 rounded-md shadow-md text-sm">
                IEEE DAY
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2">
                <div className="w-3 h-3 bg-[#2574DD] rounded-full border-4 border-white"></div>
              </div>
              {/* Date */}
              <div className="absolute -top-6 right-0 transform -translate-y-1/2 text-blue-900 text-lg">
                <span>October 5</span>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div
            className={`mb-4 flex justify-start transition-transform duration-700 ease-out delay-200 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="relative w-1/2">
              <div className="bg-white text-blue-900 px-4 py-2 rounded-md shadow-md text-sm">
                WORKSHOP 1 (DAY 1)
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2">
                <div className="w-3 h-3 bg-[#2574DD] rounded-full border-4 border-white"></div>
              </div>
              {/* Date */}
              <div className="absolute -top-6 left-0 transform -translate-y-1/2 text-blue-900 text-lg">
                <span>October 8</span>
              </div>
            </div>
          </div>

          {/* Event 4 */}
          <div
            className={`mb-4 flex justify-end transition-transform duration-700 ease-out delay-300 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="relative w-1/2">
              <div className="bg-white text-blue-900 px-4 py-2 rounded-md shadow-md text-sm">
                WORKSHOP 1 (DAY 2)
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2">
                <div className="w-3 h-3 bg-[#2574DD] rounded-full border-4 border-white"></div>
              </div>
              {/* Date */}
              <div className="absolute -top-6 right-0 transform -translate-y-1/2 text-blue-900 text-lg">
                <span>October 9</span>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div
            className={`mb-4 flex justify-start transition-transform duration-700 ease-out ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="relative w-1/2">
              <div className="bg-white text-blue-900 px-4 py-2 rounded-md shadow-md text-sm">
                AWARENESS SESSION
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2">
                <div className="w-3 h-3 bg-[#2574DD] rounded-full border-4 border-white"></div>
              </div>
              {/* Date */}
              <div className="absolute -top-6 left-0 transform -translate-y-1/2 text-blue-900 text-lg">
                <span>September 28</span>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div
            className={`mb-4 flex justify-end transition-transform duration-700 ease-out delay-100 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="relative w-1/2">
              <div className="bg-white text-blue-900 px-4 py-2 rounded-md shadow-md text-sm">
                IEEE DAY
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2">
                <div className="w-3 h-3 bg-[#2574DD] rounded-full border-4 border-white"></div>
              </div>
              {/* Date */}
              <div className="absolute -top-6 right-0 transform -translate-y-1/2 text-blue-900 text-lg">
                <span>October 5</span>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div
            className={`mb-4 flex justify-start transition-transform duration-700 ease-out ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="relative w-1/2">
              <div className="bg-white text-blue-900 px-4 py-2 rounded-md shadow-md text-sm">
                AWARENESS SESSION
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2">
                <div className="w-3 h-3 bg-[#2574DD] rounded-full border-4 border-white"></div>
              </div>
              {/* Date */}
              <div className="absolute -top-6 left-0 transform -translate-y-1/2 text-blue-900 text-lg">
                <span>September 28</span>
              </div>
            </div>
          </div>

          {/* Continue for the rest of the events */}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
