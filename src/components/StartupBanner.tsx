// components/StartupBanner.tsx

const StartupBanner = () => {
    return (
      <div className="bg-gray-900 text-white h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-[#040933] opacity-50"></div>
  
        {/* Main content */}
        <div className="z-10 flex flex-col items-center space-y-6 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Enlist to the battle of startups!</h1>
          <p className="text-lg md:text-xl">
            Join us as we dive into the realms of creativity and entrepreneurship, shaping the future one idea at a time. 
            Don't miss out - secure your spot today!
          </p>
          <p className="font-semibold">Registration deadline: 27th February</p>
  
          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg">
              DELEGATE BOOKLET
            </button>
            <button className="bg-gray-700 cursor-not-allowed text-white py-3 px-6 rounded-lg">
              REGISTRATIONS CLOSED
            </button>
          </div>
        </div>
  
        {/* Astronaut Image */}
        <div className="absolute bottom-0 right-0 z-0">
          <img
            src="/astronaut.png" // Make sure to put this image in your public folder
            alt="Astronaut"
            className="h-96 w-auto"
          />
        </div>
      </div>
    );
  };
  
  export default StartupBanner;
  