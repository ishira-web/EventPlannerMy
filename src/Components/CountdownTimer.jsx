import React, { useState, useEffect } from 'react';

function CountdownTimer({ eventDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Parse the provided date string
    const targetDate = new Date(eventDate);
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        setIsExpired(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };
    
    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    // Clear interval on unmount
    return () => clearInterval(timer);
  }, [eventDate]);
  
  // Helper to add leading zeros
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  
  return (
    <div className="w--[25rem] h-auto bg-gray-100 rounded-xl p-3 mt-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">Event starts in:</h3>
      
      {isExpired ? (
        <div className="text-red-500 font-semibold">Event has started!</div>
      ) : (
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-lg font-bold text-red-500">
              {formatTime(timeLeft.days)}
            </div>
            <span className="text-xs text-gray-500 mt-1">Days</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-lg font-bold text-red-500">
              {formatTime(timeLeft.hours)}
            </div>
            <span className="text-xs text-gray-500 mt-1">Hours</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-lg font-bold text-red-500">
              {formatTime(timeLeft.minutes)}
            </div>
            <span className="text-xs text-gray-500 mt-1">Minutes</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-lg font-bold text-red-500">
              {formatTime(timeLeft.seconds)}
            </div>
            <span className="text-xs text-gray-500 mt-1">Seconds</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountdownTimer;