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


export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />
      <Hero />
      <TitleComp 
        id="work"
        year='2nd year' 
        futureDirection='I knew where my interests lied, but the execution needed some work.' />
      <WorkShowcase3 />  
      <TitleComp 
        year='3rd year' 
        futureDirection='My research deepened, but I let the visuals get away from me' />    
      <WorkShowcase2 />
      <WorkShowcase />
      <WorkShowcase4 />
      <WorkShowcase5 />
      <WorkShowcase1 />
      <AboutMe />

    </div>
  );
}
