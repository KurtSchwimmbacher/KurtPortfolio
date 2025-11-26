'use client';

import React from 'react';
import Link from 'next/link';

interface ProjectCard {
  id: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  link: string;
  featured?: boolean;
}

interface BentoGridProps {
  projects: ProjectCard[];
  viewAllLink?: string;
}

const BentoGrid: React.FC<BentoGridProps> = ({ 
  projects, 
  viewAllLink = '/projects' 
}) => {
  const featuredProject = projects.find(p => p.featured) || projects[0];
  const otherProjects = projects.filter(p => !p.featured && p.id !== featuredProject.id).slice(0, 3);

  return (
    <section className="px-4 md:px-8 py-24 md:py-32 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto">
        {/* Bento Grid Container */}
        <div 
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 md:min-h-[600px]"
          style={{ gridTemplateRows: 'repeat(2, 1fr)' }}
        >
          
          {/* Featured Project Card - Takes 2 columns, 2 rows */}
          <Link 
            href={featuredProject.link}
            className="md:col-span-2 md:row-span-2 group h-full min-h-[300px] block"
          >
            <div className="h-full w-full bg-[#f7f7f7] rounded-lg overflow-hidden border border-[#e0e0e0] shadow-sm group-hover:border-[#1800f4] transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 cursor-pointer flex flex-col">
              {/* Title */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2e2e2e] mb-3 group-hover:text-[#1800f4] transition-colors duration-300">
                  {featuredProject.title}
                </h3>
              </div>
              
              {/* Image */}
              <div 
                className="flex-1 w-full bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500 ease-out"
                style={{
                  backgroundImage: `url(${featuredProject.image})`
                }}
              />
            </div>
          </Link>

          {/* Other Project Cards */}
          {otherProjects.map((project, index) => (
            <Link 
              key={project.id}
              href={project.link}
              className="group h-full min-h-[300px] block"
            >
              <div className="h-full w-full bg-[#f7f7f7] rounded-lg overflow-hidden border border-[#e0e0e0] shadow-sm group-hover:border-[#1800f4] transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 cursor-pointer flex flex-col">
                {/* Title */}
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-bold text-[#2e2e2e] mb-3 group-hover:text-[#1800f4] transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                </div>
                
                {/* Image */}
                <div 
                  className="flex-1 w-full bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500 ease-out"
                  style={{
                    backgroundImage: `url(${project.image})`
                  }}
                />
              </div>
            </Link>
          ))}

          {/* View All Projects Card */}
          <Link 
            href={viewAllLink}
            className="group h-full min-h-[300px] block"
          >
            <div className="h-full w-full bg-gradient-to-br from-[#1800f4] to-[#1400cc] rounded-lg overflow-hidden border border-[#e0e0e0] shadow-sm group-hover:border-white/50 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 cursor-pointer flex flex-col">
              {/* Title */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                  View All Projects
                </h3>
              </div>
              
              {/* Spacer/Image area - using gradient as visual element */}
              <div className="flex-1 w-full bg-gradient-to-br from-[#1800f4]/80 to-[#1400cc]/80 group-hover:from-[#1800f4] group-hover:to-[#1400cc] transition-all duration-300" />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

