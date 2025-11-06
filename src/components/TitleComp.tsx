import React from 'react';

interface TitleCompProps {
  year: '2nd year' | '3rd year' | 'future';
  futureDirection?: string;
  id?: string;
}

const TitleComp: React.FC<TitleCompProps> = ({ year, futureDirection, id }) => {
  const titleText = year === '2nd year' 
    ? `Starting with ${year}` 
    : year === '3rd year'
    ? `and then on to ${year}`
    : 'What\'s next?';
  
  return (
    <section id={id} className="px-4 md:px-8 pt-20 md:pt-32 pb-0 md:pb-0">
      <div className="grid grid-cols-12 md:grid-cols-12 gap-6 md:gap-8">
        <div className="col-span-12">
          <h2 className="text-5xl md:text-7xl font-bold text-[#2e2e2e] text-left">
            {titleText}
          </h2>
          {futureDirection && (
            <p className="text-lg md:text-xl text-[#2e2e2e] mt-4 text-left leading-relaxed">
              {futureDirection}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TitleComp;

