const StartupBanner = () => {
  return (
    <div className="bg-gradient-to-b from-[#e0f7ff] to-[#f0f4f8] text-white h-screen flex items-center justify-center relative overflow-hidden mt-[-20px]">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e0f7ff] to-[#f0f4f8] opacity-50"></div>

      {/* Main content */}
      <div className="z-10 flex flex-col items-center space-y-8 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-black drop-shadow-lg">
          Enlist to the battle of startups!
        </h1>
        <p className="text-lg md:text-xl text-black max-w-2xl mx-auto">
          Join us as we dive into the realms of creativity and entrepreneurship, shaping the future one idea at a time.
          Don't miss out - secure your spot today!
        </p>
        <p className="font-semibold text-black">Registration deadline: 12th October</p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-3 px-6 rounded-lg shadow-lg transition duration-200">
            DELEGATE BOOKLET
          </button>
          <button className="bg-gray-700 text-white py-3 px-6 rounded-lg shadow-lg cursor-not-allowed opacity-50">
            REGISTRATIONS CLOSED
          </button>
        </div>

        {/* Decorative elements */}
        
      </div>
    </div>
  );
};

export default StartupBanner;
