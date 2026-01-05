
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import FloatingScene from './components/FloatingScene';
import CustomCursor from './components/CustomCursor';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    // Reveal animations on scroll
    gsap.utils.toArray('section').forEach((section: any) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Interactive Cursor Layer */}
      <CustomCursor />

      {/* 3D Background Layer */}
      <FloatingScene />
      
      {/* UI Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Skills />
        <Footer />
      </div>

      {/* Background Subtle Gradient Overlay */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/50 blur-[150px] translate-y-1/2 -translate-x-1/2 rounded-full" />
      </div>
    </div>
  );
};

export default App;
