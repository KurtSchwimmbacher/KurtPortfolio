import React from 'react';

const WorkShowcase1 = () => {
  return (
    <section className="px-4 md:px-8 py-20 md:py-32">
      <div className="grid grid-cols-12 md:grid-cols-12 gap-6 md:gap-8">
        {/* First Image Section - 4 columns */}
        <div className="col-span-12 md:col-span-4 order-2 md:order-1">
          <div 
            className="aspect-square mb-6 rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/assets/projects/AscendAI/AscendAI1.png)'
            }}
          >
            {/* Thriftr1 image as background */}
          </div>
          
          {/* Text Content Below First Image */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#2e2e2e]">
              AscendAI -AI powered React Native App
            </h3>
            <div className='text-xs text-[#1800f4]'> 
                <p>Solo Work</p>
            </div>
            <div className="text-sm space-y-1 text-[#2e2e2e]">
              <p>AscendAI helps colorblind climbers identify legal holds and grade routes independently.
Built with AI-powered hold recognition, it scans climbing routes and filters holds by color to match route regulations.
With real-time identification and difficulty grading, it empowers colorblind climbers to climb confidently without relying on others.
Designed for mobile; intelligent, inclusive, and empowering.</p>
              <br />
              <p>Thank you to my lecturers for their support and guidance.</p>
              <a 
                href="https://github.com/KurtSchwimmbacher/AscendAI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#2e2e2e] hover:text-[#2e2e2e]/70 transition-colors duration-200"
              >
                Full Github Repo
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
        
        {/* Second Image Section - 3 columns */}
        <div className="col-span-12 md:col-span-3 order-3 md:order-2">
          <div 
            className="w-full rounded-lg bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: 'url(/assets/projects/AscendAI/AscendAI2.png)',
              paddingBottom: '136.33%'
            }}
          >
            {/* Thriftr2 image as background */}
          </div>
        </div>
        
        {/* Third Image Section - 5 columns (taller) */}
        <div className="col-span-12 md:col-span-5 order-1 md:order-3">
          <div 
            className="h-[420px] md:h-[800px] rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/assets/projects/AscendAI/AscendAI3.png)'
            }}
          >
            {/* Thriftr3 image as background */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase1;
