"use client";
import { useState, useEffect } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 89) {
          clearInterval(timer);
          return 89;
        }
        const newProgress = oldProgress + 1;
        return newProgress;
      });
    }, 20);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#232931]">
      <div className="w-64 h-4 bg-white rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#4ECCA3] transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-4 text-[#4ECCA3] font-semibold">กรุณารอสักครู่... {progress}%</p>
    </div>
  );
}