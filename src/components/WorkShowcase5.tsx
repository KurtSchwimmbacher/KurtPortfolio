import React from 'react';

const WorkShowcase5 = () => {
  return (
    <section className="px-4 md:px-8 py-20 md:py-32">
      <div className="grid grid-cols-12 md:grid-cols-12 gap-6 md:gap-8">
        {/* Left Content Block - 8 columns (mirrored from WorkShowcase) */}
        <div className="col-span-12 md:col-span-8 order-1">
          <div 
            className="h-[420px] md:h-[700px] rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/assets/projects/CodeCloud/CC1.png)'
            }}
          >
            {/* CC1 image as background */}
          </div>
        </div>
        
        {/* Right Content Block - 4 columns (mirrored from WorkShowcase) */}
        <div className="col-span-12 md:col-span-4 order-2">
          <div 
            className="aspect-square md:mb-6 rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/assets/projects/CodeCloud/CC2.png)'
            }}
          >
            {/* CC2 image as background */}
          </div>
          
          {/* Text Content Below Right Block */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#2e2e2e]">
              Code & Cloud Academy / Dotnet & Vue Electron App 
            </h3>
            <div className='text-xs text-[#1800f4]'> 
                <p>Group Work • Students Backend • Students Frontend • Timetable Generation</p>
            </div>
            <div className="text-sm space-y-1 text-[#2e2e2e]">
              <p>Built with .NET, Vue, and Electron, Code & Cloud Academy is an all-in-one school management platform.
It supports students, lecturers, and admins with organized modules, assignments, and announcements.
Timetables and course tools update seamlessly across roles.
A modern digital classroom that makes education easier to run and easier to experience.</p>
              <br />
              <p>Thank you to my lecturers for their support and guidance.</p>
              <a 
                href="https://github.com/Mwape-Kurete/CC-School-Frontend" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#2e2e2e] hover:text-[#2e2e2e]/70 transition-colors duration-200"
              >
                Github Repository
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
      </div>
    </section>
  );
};

export default WorkShowcase5;
