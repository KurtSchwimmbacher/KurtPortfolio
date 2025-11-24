import React from 'react';

interface ProjectTransitionProps {
  text: string;
}

const ProjectTransition: React.FC<ProjectTransitionProps> = ({ text }) => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12">
      <div className="grid grid-cols-12 md:grid-cols-12 gap-6 md:gap-8">
        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <p className="text-base md:text-lg text-[#2e2e2e] text-center leading-relaxed italic">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectTransition;

