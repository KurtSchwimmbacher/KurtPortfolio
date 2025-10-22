import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WorkShowcase from '@/components/WorkShowcase';
import WorkShowcase2 from '@/components/WorkShowcase2';
import WorkShowcase3 from '@/components/WorkShowcase3';
import WorkShowcase4 from '@/components/WorkShowcase4';
import WorkShowcase5 from '@/components/WorkShowcase5';
import AboutMe from '@/components/AboutMe';


export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar />
      <Hero />
      <WorkShowcase />
      <WorkShowcase2 />
      <WorkShowcase3 />
      <WorkShowcase4 />
      <WorkShowcase5 />
      <AboutMe />

    </div>
  );
}
