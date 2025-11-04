import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Hero Section */}
      <div className="flex-1 flex flex-col justify-center px-8">
        <h1 className="text-9xl md:text-[12rem] font-bold text-[#2e2e2e] mb-20 text-left">
          Kurt
        </h1>
        
        {/* Blue Divider Line */}
        <div className="w-full border-t-2 border-blue-600 mb-20"></div>
        
        {/* Content Below Divider */}
        <div className="w-full flex justify-between items-start">
          {/* Left - Selected Work */}
          <div className="text-lg text-[#2e2e2e] font-medium">
            Selected Work
          </div>
          
          {/* Center - Year */}
          <div className="text-lg text-[#2e2e2e] font-medium text-center flex-1">
            2024/2025
          </div>
          
          {/* Right - Description */}
          <div className="text-lg text-[#2e2e2e] text-right max-w-lg leading-relaxed">
            I'm Kurt, a recent UX and Development graduate based in Pretoria. I care about solving problems that are true to their causes and while I'm there, why not make it pretty too?
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
