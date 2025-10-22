import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-6">
      {/* Logo */}
      <div className="text-2xl font-medium text-[#2e2e2e]">
        ks
      </div>
      
      {/* Navigation Links */}
      <div className="flex space-x-8">
        <a 
          href="#work" 
          className="text-[#2e2e2e] hover:text-[#2e2e2e]/70 transition-colors duration-200"
        >
          Work
        </a>
        <a 
          href="#about" 
          className="text-[#2e2e2e] hover:text-[#2e2e2e]/70 transition-colors duration-200"
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
