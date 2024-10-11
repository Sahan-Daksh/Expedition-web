import React from "react";

const EventTimeline: React.FC = () => {
  return (
    <div className="bg-[#040933] min-h-screen flex justify-center items-center">
      <div className="w-full max-w-4xl py-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Event <span className="text-orange-500">Timeline</span>
        </h1>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-orange-500"></div>

          {/* Event 1 */}
          <div className="mb-4 flex justify-start">
            <div className="relative w-1/2">
              <div className="bg-white text-blue-900 px-4 py-2 rounded-md shadow-md text-sm">
                AWARENESS SESSION
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2">
                <div className="w-3 h-3 bg-orange-500 rounded-full border-4 border-white"></div>
              </div>
              {/* Date */}
              <div className="absolute -top-6 left-0 transform -translate-y-1/2 text-white text-lg">
                <span>September 28</span>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="mb-4 flex justify-end">
            <div className="relative w-1/2">
              <div className="bg-white text-blue-900 px-4 py-2 rounded-md shadow-md text-sm">
                IEEE DAY
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2">
                <div className="w-3 h-3 bg-orange-500 rounded-full border-4 border-white"></div>
              </div>
              {/* Date */}
              <div className="absolute -top-6 right-0 transform -translate-y-1/2 text-white text-lg">
                <span>October 5</span>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="mb-4 flex justify-start">
            <div className="relative w-1/2">
              <div className="bg-white text-blue-900 px-4 py-2 rounded-md shadow-md text-sm">
                WORKSHOP 1 (DAY 1)
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2">
                <div className="w-3 h-3 bg-orange-500 rounded-full border-4 border-white"></div>
              </div>
              {/* Date */}
              <div className="absolute -top-6 left-0 transform -translate-y-1/2 text-white text-lg">
                <span>October 8</span>
              </div>
            </div>
          </div>

          {/* Event 4 */}
          <div className="mb-4 flex justify-end">
            <div className="relative w-1/2">
              <div className="bg-white text-blue-900 px-4 py-2 rounded-md shadow-md text-sm">
                WORKSHOP 1 (DAY 2)
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2">
                <div className="w-3 h-3 bg-orange-500 rounded-full border-4 border-white"></div>
              </div>
              {/* Date */}
              <div className="absolute -top-6 right-0 transform -translate-y-1/2 text-white text-lg">
                <span>October 9</span>
              </div>
            </div>
          </div>

          {/* Event 5 */}
          <div className="mb-4 flex justify-start">
            <div className="relative w-1/2">
              <div className="bg-white text-blue-900 px-4 py-2 rounded-md shadow-md text-sm">
                WORKSHOP 2
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2">
                <div className="w-3 h-3 bg-orange-500 rounded-full border-4 border-white"></div>
              </div>
              {/* Date */}
              <div className="absolute -top-6 left-0 transform -translate-y-1/2 text-white text-lg">
                <span>October 13</span>
              </div>
            </div>
          </div>

          {/* Event 6 */}
          <div className="mb-4 flex justify-end">
            <div className="relative w-1/2">
              <div className="bg-white text-blue-900 px-4 py-2 rounded-md shadow-md text-sm">
                HAXPEDITION
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2">
                <div className="w-3 h-3 bg-orange-500 rounded-full border-4 border-white"></div>
              </div>
              {/* Date */}
              <div className="absolute -top-6 right-0 transform -translate-y-1/2 text-white text-lg">
                <span>October 19</span>
              </div>
            </div>
          </div>

          {/* Event 7 */}
          <div className="mb-4 flex justify-start">
            <div className="relative w-1/2">
              <div className="bg-white text-blue-900 px-4 py-2 rounded-md shadow-md text-sm">
                XTREME 18.0
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2">
                <div className="w-3 h-3 bg-orange-500 rounded-full border-4 border-white"></div>
              </div>
              {/* Date */}
              <div className="absolute -top-6 left-0 transform -translate-y-1/2 text-white text-lg">
                <span>October 26</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
