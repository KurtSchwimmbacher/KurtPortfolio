import React from 'react';

const AboutMe = () => {
  return (
    <section className="px-4 md:px-8 py-20 md:py-32">
      <div className="min-h-[600px] flex flex-col">
        {/* Top Whitespace */}
        <div className="flex-1"></div>
        
        {/* Horizontal Divider - 12 columns */}
        <div className="w-full border-t-2 border-[#2e2e2e] mb-8"></div>
        
        {/* Content Below Divider */}
        <div className="grid grid-cols-12 md:grid-cols-12 gap-6 md:gap-8 items-end">
          {/* Bio Section - Right Aligned, 5 columns */}
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <div className="text-right">
              <p className="text-sm text-[#2e2e2e] leading-relaxed">
              My names Kurt, I'm a third year UX and development student at the Open Window, graduating in 2025. I specialise in crafting intuitive front end designs, both in design and in code.
              I take pride in addressing complex issues. Finding what users core pains are and addressing them in their most simple form. I also strive to let the users voice shown through in all my designs, creating authentic experiences. 
              </p>
            </div>
          </div>
          
          {/* Profile Photo Block - 3 columns, Bottom Aligned */}
          <div className="col-span-12 md:col-span-3">
            <div 
              className="aspect-square rounded-lg bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/assets/kurtpfp.jpg)',
                filter: 'grayscale(40%)'
              }}
            >
              {/* GitHub profile image as background */}
            </div>
          </div>

          <div className='col-span-12 md:col-span-6'>
            
          </div>
          
          {/* Social Media Links - Bottom Aligned */}
          <div className="col-span-4 md:col-span-1 flex flex-col items-center">
            <a 
              href="https://www.behance.net/kurtschwimm1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-[#2e2e2e] hover:text-[#2e2e2e]/70 transition-colors duration-200"
            >
              Behance
            </a>
          </div>
          
          <div className="col-span-4 md:col-span-1 flex flex-col items-center">
            <a 
              href="https://www.linkedin.com/in/kurt-schwimmbacher-58b629234/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-[#2e2e2e] hover:text-[#2e2e2e]/70 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
          
          <div className="col-span-4 md:col-span-1 flex flex-col items-center">
            <a 
              href="https://www.linkedin.com/in/kurt-schwimmbacher-58b629234/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-[#2e2e2e] hover:text-[#2e2e2e]/70 transition-colors duration-200"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
