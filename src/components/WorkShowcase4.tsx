import React from 'react';

const WorkShowcase4 = () => {
  return (
    <section className="px-4 md:px-8 py-20 md:py-32">
      <div className="space-y-6 md:space-y-8">
        {/* Full Width Block - 12 columns */}
        <div className="w-full">
          <div 
            className="h-[220px] md:h-[400px] rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/assets/projects/safely/Safely1.png)'
            }}
          >
            {/* Safely1 image as background */}
          </div>
        </div>
        
        {/* Three Column Layout Below */}
        <div className="grid grid-cols-12 md:grid-cols-12 gap-6 md:gap-8">
          {/* Text Content - 4 columns */}
          <div className="col-span-12 md:col-span-4 order-2 md:order-1">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#2e2e2e]">
                Safely / React Native App
              </h3>
              <div className='text-xs text-[#FF4D00]'> 
                  <p>Solo Work</p>
              </div>
              <div className="text-sm space-y-1 text-[#2e2e2e]">
                <p>Safely was inspired by my sister. Safely is a simple app designed for peace of mind.
Users set safety timers with check-ins during trips or risky situations.
If a check-in is missed, an SMS alert is sent to their emergency contact.
Built in React Native with Firebase, Safely helps people feel seen and safe.</p>
                <br />
                <p>Thank you to my lecturers for their support and guidance.</p>
                <a 
                  href="https://github.com/KurtSchwimmbacher/SafelyApp" 
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
          
          {/* First Image Block - 4 columns */}
          <div className="col-span-12 md:col-span-4 order-3 md:order-2">
            <div 
              className="aspect-square rounded-lg bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/assets/projects/safely/Safely2.png)'
              }}
            >
              {/* Safely2 image as background */}
            </div>
          </div>
          
          {/* Second Image Block - 4 columns */}
          <div className="col-span-12 md:col-span-4 order-1 md:order-3">
            <div 
              className="aspect-square rounded-lg bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/assets/projects/safely/Safely3.png)'
              }}
            >
              {/* Safely3 image as background */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase4;
