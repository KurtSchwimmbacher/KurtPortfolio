import React from 'react';

const WorkShowcase3 = () => {
  return (
    <section className="px-4 md:px-8 py-20 md:py-32 flex flex-col justify-flex-end">
      <div className="grid grid-cols-12 md:grid-cols-12 gap-6 md:gap-8 flex">
        {/* Large Left Block - 9 columns */}
        <div className="col-span-12 md:col-span-9 order-1">
          <div 
            className="h-[420px] md:h-[700px] rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/assets/projects/signstory/SignStory1.png)'
            }}
          >
            {/* SignStory1 image as background */}
          </div>
        </div>
        
        {/* Right Block - 3 columns */}
        <div className="col-span-12 md:col-span-3 flex flex-col justify-flex-end order-2">          
          

          {/* Square Image Placeholder */}
          <div 
            className="aspect-square md:mb-6 rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/assets/projects/signstory/SignStory2.png)'
            }}
          >
            {/* SignStory2 image as background */}
          </div>

          {/* Text Content AboveImage */}
          <div className="space-y-2 flex-1">
            <h3 className="text-xl font-bold text-[#2e2e2e]">
              SignStory - UX & UI Design
            </h3>
            <div className='text-xs text-[#1800f4]'> 
                <p>Solo Work</p>
            </div>
            <div className="text-sm space-y-1 text-[#2e2e2e]">
              <p>SignStory started from a documentary of a father and son learning sign language together.
                After years of drumming the idea of losing my hearing is something that has scared me. SignStory is an app to help people learn sign language in a low pressure, fun, and social way. </p>
                <br />
                <p>Thank you to my lecturers for their support and guidance.</p>
                <a style={{fontSize: '16px', color: '#1800f4'}}
                href="https://finalists.loeries.com/Finalists.aspx?link=viewstation_finalist&id=185923" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#2e2e2e] hover:text-[#2e2e2e]/70 transition-colors duration-200 mt-4"
              >
                Loeries Finalist 2025
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
              <br />
              <a 
                href="https://www.behance.net/gallery/225931659/Sign-Story-Mobile-App-Case-Study" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#2e2e2e] hover:text-[#2e2e2e]/70 transition-colors duration-200 mt-4"
              >
                Full Case Study
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

export default WorkShowcase3;
