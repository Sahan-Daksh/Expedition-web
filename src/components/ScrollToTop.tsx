"use client"; // This makes the component a Client Component

import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  // Handle scroll position changes
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / windowHeight) * 100;
      setScrollPosition(scrollTop); // Set actual scrollTop to determine visibility
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Don't display the button if at the top of the page (scrollPosition < 100px)
  if (scrollPosition < 100) {
    return null; // Don't render the button
  }

  return (
    <div
      className="fixed bottom-5 left-5 w-10 h-32 flex flex-col items-center justify-center cursor-pointer rounded-lg z-50"
      onClick={scrollToTop}
    >
      <div
        className="w-1 bg-teal-400 transition-all duration-300 ease-out"
        style={{ height: `${(scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
      ></div>
      <span className="mt-2 text-black text-xs transform rotate-90">Scroll to top</span>
    </div>
  );
};

export default ScrollToTop;
