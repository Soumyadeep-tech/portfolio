import { useState, useEffect } from "react";

const RealTimeClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      //second: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      className="fixed top-14 sm:top-20 right-1 sm:right-4 z-40 bg-black/80 dark:bg-white/80 
                backdrop-blur-sm border border-red-500 dark:border-red-400 
                rounded-lg sm:rounded-xl p-1.5 sm:p-4 text-center w-[120px] sm:w-[200px] 
                max-w-[calc(100vw-16px)] overflow-hidden"
    >
      <div className="text-red-400 dark:text-red-600 font-mono text-sm sm:text-2xl font-bold leading-tight">
        {formatTime(time)}
      </div>
      <div className="text-gray-300 dark:text-gray-700 text-xs sm:text-sm mt-0.5 sm:mt-1 leading-tight hidden sm:block">
        {formatDate(time)}
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5 sm:mt-2 hidden sm:block">
        Live Clock
      </div>
    </div>
  );
};

export default RealTimeClock;
