'use client';

import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="flex justify-between items-center px-8 py-6">
      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src="/Kurt_Logo.svg" 
          alt="Kurt Logo" 
          width={62} 
          height={62}
          className="w-auto h-8 md:h-10"
        />
      </div>
      
      {/* Navigation Links */}
      <div className="flex space-x-8">
        <button 
          onClick={() => scrollToSection('work')}
          className="text-[#2e2e2e] hover:text-[#2e2e2e]/70 transition-colors duration-200"
        >
          Work
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="text-[#2e2e2e] hover:text-[#2e2e2e]/70 transition-colors duration-200"
        >
          About
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
