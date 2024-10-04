"use client";

import { useState, useEffect } from "react";
import "../../css/components/Countdown.css";

const Countdown = () => {
  const targetDate = new Date("2024-10-26T05:29:59").getTime(); // Change this to your target date
  const [timeRemaining, setTimeRemaining] = useState<number>(targetDate - Date.now()); // Start with initial number

  useEffect(() => {
    const updateCountdown = () => {
      setTimeRemaining(targetDate - Date.now());
    };

    // Update the countdown every second
    const intervalId = setInterval(updateCountdown, 1000);
    
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetDate]);

  // Calculate remaining time
  const getTime = () => {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTime();

  return (
    <div className="countdown-container">
      <div className="countdown-overlay"></div>
      <div className="countdown-content flex flex-col items-center">
        <div className="countdown-time-units">
          <div className="countdown-time-unit">
            <p className="countdown-time-label">DAYS</p> <br />
            <p className="countdown-time-value">
              {String(days).padStart(2, "0")}
            </p>
          </div>
          <div className="countdown-time-unit">
            <p className="countdown-time-label">HOURS</p> <br />
            <p className="countdown-time-value">
              {String(hours).padStart(2, "0")}
            </p>
          </div>
          <div className="countdown-time-unit">
            <p className="countdown-time-label">MINUTES</p>
            <br />
            <p className="countdown-time-value">
              {String(minutes).padStart(2, "0")}
            </p>
          </div>
          <div className="countdown-time-unit">
            <p className="countdown-time-label">SECONDS</p>
            <br />
            <p className="countdown-time-value">
              {String(seconds).padStart(2, "0")}
            </p>
          </div>
        </div>
        <div className="grand-finale">
          <p className="grand-finale-text">IEEEXtreme</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;