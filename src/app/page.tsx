import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScrollVelocity from '@/components/ScrollVelocity';
import BentoGrid from '@/components/BentoGrid';
import AboutMe from '@/components/AboutMe';

// Project data for the bento grid
const projects = [
  {
    id: 'ascendai',
    title: 'AscendAI - AI powered React Native App',
    description: 'Helps colorblind climbers identify legal holds and grade routes independently. Built with AI-powered hold recognition, it scans climbing routes and filters holds by color to match route regulations.',
    tag: 'Solo Work',
    image: '/assets/projects/AscendAI/AscendAI1.png',
    link: '/projects/ascendai', // Placeholder - will implement routing later
    featured: true,
  },
  {
    id: 'thriftr',
    title: 'ThriftR - UX & UI Design',
    description: 'Helps thrifters shop with intention, not impulse. Built from deep community research, it turns thrift trips into mindful, budget-friendly experiences.',
    tag: 'Solo Work',
    image: '/assets/projects/thriftr/Thriftr1.png',
    link: '/projects/thriftr',
  },
  {
    id: 'authentica',
    title: 'Authentica - Service Design',
    description: 'A service design project focused on creating authentic experiences that solve problems true to their causes.',
    tag: 'Solo Work',
    image: '/assets/projects/authentica/Authentica3.png',
    link: '/projects/authentica',
  },
  {
    id: 'safely',
    title: 'Safely - React Native App',
    description: 'A React Native application designed with safety and user experience in mind.',
    tag: 'Solo Work',
    image: '/assets/projects/safely/Safely1.png',
    link: '/projects/safely',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />
      <Hero />
      
      {/* Scroll Velocity as Section Breaker */}
      <div className="py-4 md:py-8 bg-[#f7f7f7]">
        <ScrollVelocity 
          texts={['Selected Work', '2024/2025']}
          velocity={0.5}
          className="text-xl md:text-[6rem] font-bold text-[#2e2e2e]"
        />
      </div>

      {/* Bento Grid of Projects */}
      <BentoGrid 
        projects={projects}
        viewAllLink="/projects"
      />


      {/* Scroll Velocity as Section Breaker */}
      <div className="py-2 md:py-4 bg-[#f7f7f7]">
        <ScrollVelocity 
          texts={['About Me']}
          velocity={0.5}
          className="text-xl md:text-[6rem] font-bold text-[#2e2e2e]"
        />
      </div>

      {/* 
        NOTE: Existing showcase components preserved below for later use in /projects page
        Components kept intact:
        - WorkShowcase (Authentica)
        - WorkShowcase1 (AscendAI)
        - WorkShowcase2 (ThriftR)
        - WorkShowcase3 (SignStory)
        - WorkShowcase4 (Safely)
        - WorkShowcase5 (Mozaic)
        - TitleComp
        - SectionDivider
        - AboutMe
        - YearReflection
      */}

      <AboutMe />
    </div>
  );
}
