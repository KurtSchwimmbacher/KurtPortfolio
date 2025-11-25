'use client';

import React from 'react';

const Hero = () => {

  return (
    <div id="home" className="min-h-screen flex flex-col relative overflow-hidden bg-[#f7f7f7]">

      {/* Main Hero Section */}
      <div 
        className="flex-1 flex flex-col justify-center px-8 relative z-10"
      >
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
          <div className="text-md text-[#2e2e2e] text-right max-w-lg leading-relaxed">
            I'm Kurt, a third year UX and Development student at the Open Window, graduating in 2025. I take pride in addressing complex issues; finding what users' core pains are and addressing them in their most simple form. I also strive to let the user's voice show through in all my designs, creating authentic experiences that solve problems true to their causes.
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
