import React from 'react';

const BioWireframe = () => {
  return (
    <section className="px-8 py-16">
      <div className="grid grid-cols-12 gap-8">
        {/* Left Content Block - 4 columns */}
        <div className="col-span-4">
          <div className="bg-gray-200 aspect-square mb-6 rounded-lg">
            {/* Placeholder for image */}
          </div>
          
          {/* Text Content Below Left Block */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#2e2e2e]">
              About Me
            </h3>
            <div className='text-xs text-[#FF4D00]'> 
                <p>Personal</p>
            </div>
            <div className="text-sm space-y-1 text-[#2e2e2e]">
              <p>Bio content goes here. This is a placeholder for the personal information that will be added later.</p>
              <br />
              <p>Thank you for visiting my portfolio.</p>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#2e2e2e] hover:text-[#2e2e2e]/70 transition-colors duration-200"
              >
                Learn More
                <svg 
                  className="w-3 h-3" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Right Content Block - 8 columns */}
        <div className="col-span-8">
          <div className="bg-gray-200 h-[700px] rounded-lg">
            {/* Placeholder for larger image/content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioWireframe;
