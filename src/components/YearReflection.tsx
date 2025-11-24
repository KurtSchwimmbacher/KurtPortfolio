import React from 'react';

interface YearReflectionProps {
  text: string;
}

const YearReflection: React.FC<YearReflectionProps> = ({ text }) => {
  return (
    <section className="px-4 md:px-8 py-12 md:py-16">
      <div className="grid grid-cols-12 md:grid-cols-12 gap-6 md:gap-8">
        <div className="col-span-12 md:col-span-10 md:col-start-2">
          <p className="text-lg md:text-xl text-[#2e2e2e] text-center leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default YearReflection;

