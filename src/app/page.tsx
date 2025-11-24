import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WorkShowcase from '@/components/WorkShowcase';
import WorkShowcase1 from '@/components/WorkShowcase1';
import WorkShowcase2 from '@/components/WorkShowcase2';
import WorkShowcase3 from '@/components/WorkShowcase3';
import WorkShowcase4 from '@/components/WorkShowcase4';
import WorkShowcase5 from '@/components/WorkShowcase5';
import AboutMe from '@/components/AboutMe';
import TitleComp from '@/components/TitleComp';
import SectionDivider from '@/components/SectionDivider';
import ProjectTransition from '@/components/ProjectTransition';
import YearReflection from '@/components/YearReflection';


export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />
      <Hero />
      
      {/* 2nd Year Section */}
      <TitleComp 
        id="work"
        year='2nd year' 
        futureDirection='I knew where my interests lied, but the execution needed some work.' />
      <WorkShowcase3 /> {/* SignStory */}
      <YearReflection text="Looking back at my second year, I realized I was on the right track—accessibility and inclusive design mattered deeply to me. But I learned that having the right idea isn't enough; the execution and attention to detail make all the difference. This project taught me to be more intentional with every design decision." />
      
      <SectionDivider />
      
      {/* 3rd Year Section - Projects in chronological order */}
      <TitleComp 
        year='3rd year' 
        futureDirection='My research deepened, but I let the visuals get away from me' />
      <ProjectTransition text="Working on SignStory opened my eyes to how many accessibility challenges go unnoticed. This sparked a deeper curiosity about how design could address different barriers—leading me to explore how blind thrifters navigate shopping spaces." />
      <WorkShowcase2 /> {/* ThriftR */}
      <ProjectTransition text="Deep community research for ThriftR taught me the importance of understanding people's lived experiences. This shifted my focus to how we connect with different cultures and communities—questioning how technology could create more respectful, meaningful encounters." />
      <WorkShowcase /> {/* Authentica */}
      <ProjectTransition text="While designing for cultural exploration, I kept thinking about safety—especially for my sister. Authentica imagined ideal travel experiences, but I wanted to address the reality that people need to feel secure when venturing into new spaces." />
      <WorkShowcase4 /> {/* Safely */}
      <ProjectTransition text="Safely showed me how simple tools can empower people. This led me to think about other barriers—what about people who want to start businesses but lack access? I wanted to lower the barriers for those who've been excluded from digital commerce." />
      <WorkShowcase5 /> {/* Mozaic */}
      <ProjectTransition text="Empowering people to overcome barriers became a recurring theme. Working on accessibility, safety, and economic empowerment led me back to physical accessibility—this time, using AI to help colorblind climbers navigate routes independently, completing the circle." />
      <WorkShowcase1 /> {/* AscendAI - Latest */}
      <YearReflection text="My third year was about depth and breadth. I deepened my research skills, explored multiple problem spaces, and learned to build functional applications. While I sometimes let visual polish slip in favor of functionality, I discovered my true strength lies in identifying overlooked problems and crafting solutions that genuinely empower people. Each project reinforced that design isn't just about making things pretty—it's about removing barriers and creating authentic experiences." />
      
      <SectionDivider />
      
      {/* Future Direction */}
      <TitleComp 
        year='future'
        futureDirection="I want to continue solving niche problems that impact real lives. Whether it's helping colorblind climbers navigate routes, enabling blind thrifters to shop independently, or empowering informal traders to access digital commerce—I'm drawn to problems that others might overlook. My goal is to keep finding those overlooked barriers and crafting solutions that genuinely make a difference in people's everyday experiences." />
      
      <AboutMe />

    </div>
  );
}
