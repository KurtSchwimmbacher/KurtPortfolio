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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          
          {/* Featured Project Card - Takes 2 columns, 2 rows */}
          <Link 
            href={featuredProject.link}
            className="md:col-span-2 md:row-span-2 group"
          >
            <div className="h-full bg-white rounded-lg overflow-hidden border border-[#e5e5e5] hover:border-[#1800f4] transition-all duration-300 hover:shadow-lg cursor-pointer">
              {/* Image */}
              <div 
                className="w-full h-[60%] bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url(${featuredProject.image})`
                }}
              />
              
              {/* Content */}
              <div className="p-6 md:p-8 h-[40%] flex flex-col justify-between">
                <div>
                  <div className="text-xs text-[#1800f4] mb-2 font-medium">
                    {featuredProject.tag}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2e2e2e] mb-3 group-hover:text-[#1800f4] transition-colors duration-300">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm text-[#2e2e2e]/70 line-clamp-3">
                    {featuredProject.description}
                  </p>
                </div>
                <div className="mt-4 text-sm text-[#2e2e2e] font-medium group-hover:text-[#1800f4] transition-colors duration-300">
                  View Project →
                </div>
              </div>
            </div>
          </Link>

          {/* Other Project Cards */}
          {otherProjects.map((project, index) => (
            <Link 
              key={project.id}
              href={project.link}
              className="group"
            >
              <div className="h-full bg-white rounded-lg overflow-hidden border border-[#e5e5e5] hover:border-blue-600 transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col">
                {/* Image */}
                <div 
                  className="w-full aspect-square bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url(${project.image})`
                  }}
                />
                
                {/* Content */}
                <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-[#1800f4] mb-1 font-medium">
                      {project.tag}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#2e2e2e] mb-2 group-hover:text-[#1800f4] transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#2e2e2e]/70 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-3 text-xs text-[#2e2e2e] font-medium group-hover:text-[#1800f4] transition-colors duration-300">
                    View →
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* View All Projects Card */}
          <Link 
            href={viewAllLink}
            className="group"
          >
            <div className="h-full bg-gradient-to-br from-[#1800f4] to-[#1400cc] rounded-lg overflow-hidden border border-[#1800f4] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-6 md:p-8 text-center">
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">
                  View All Projects
                </h3>
                <p className="text-sm text-blue-200 mb-4">
                  Explore all my work
                </p>
                <div className="inline-flex items-center gap-2 text-white font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Explore
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

