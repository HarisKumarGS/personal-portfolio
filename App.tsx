
import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import ProjectSlide from './components/ProjectSlide';
import Skills from './components/Skills';
import Footer from './components/Footer';
import FloatingScene from './components/FloatingScene';
import CustomCursor from './components/CustomCursor';
import { PROJECTS } from './constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Reveal animations for sections after the sticky block (Skills, Footer)
    const postStickySections = gsap.utils.toArray('section.post-sticky');
    postStickySections.forEach((section: any) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Sequential Sticky Slide Transitions - COZYDIADORA style
    // High-end stacking effect: Current section slides up and scales down slightly, 
    // Next section slides up from the bottom with full opacity.
    if (containerRef.current && heroRef.current && aboutRef.current && expertiseRef.current) {
      const totalSlides = 3 + PROJECTS.length;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalSlides * 100}%`,
          scrub: 0.8, // Slightly smoother scrub for weightier feel
          pin: true,
          anticipatePin: 1,
        }
      });

      // Unified transition helper to maintain consistent 'Antigravity' physics
      const transitionBetween = (prev: HTMLElement, next: HTMLElement, phase: number) => {
        // Prev section moves out: slide up slightly and scale down
        tl.to(prev, {
          y: "-30%",
          scale: 0.92,
          opacity: 0.5,
          filter: "blur(10px)",
          ease: "power4.inOut"
        }, phase);

        // Next section moves in: slide up from bottom
        tl.fromTo(next,
          { 
            y: "100%", 
            opacity: 1, // Start with full opacity for stacking feel
            scale: 1.05 
          },
          { 
            y: "0%", 
            opacity: 1, 
            scale: 1, 
            ease: "power4.inOut" 
          }, 
          phase
        );
      };

      // Phase 0 -> 1: Hero to About
      transitionBetween(heroRef.current, aboutRef.current, 0);

      // Phase 1 -> 2: About to Expertise
      transitionBetween(aboutRef.current, expertiseRef.current, 1);

      // Phase 2 -> 3+: Project Slides
      PROJECTS.forEach((_, index) => {
        const currentRef = projectRefs.current[index];
        const prevRef = index === 0 ? expertiseRef.current : projectRefs.current[index - 1];
        const phase = 2 + index;

        if (currentRef && prevRef) {
          transitionBetween(prevRef as HTMLElement, currentRef as HTMLElement, phase);
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-[#fdfdfd]">
      <CustomCursor />
      <FloatingScene />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Progress Indicator - Sticky */}
        <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-50 pointer-events-none hidden lg:flex">
            {[...Array(3 + PROJECTS.length)].map((_, i) => (
                <div key={i} className="w-1 h-8 bg-black/10 rounded-full overflow-hidden relative">
                    <div className={`absolute inset-0 bg-blue-600 origin-top transition-transform duration-500 scale-y-0`} id={`indicator-${i}`}></div>
                </div>
            ))}
        </div>

        <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
          {/* Hero Slide */}
          <div ref={heroRef} className="absolute inset-0 z-10 will-change-transform">
            <Hero />
          </div>
          
          {/* About Slide */}
          <div ref={aboutRef} className="absolute inset-0 z-20 opacity-0 pointer-events-none will-change-transform">
            <div className="pointer-events-auto h-full w-full">
              <About />
            </div>
          </div>
          
          {/* Expertise Slide */}
          <div ref={expertiseRef} className="absolute inset-0 z-30 opacity-0 pointer-events-none will-change-transform">
            <div className="pointer-events-auto h-full w-full">
              <Expertise />
            </div>
          </div>

          {/* Individual Project Slides */}
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              ref={(el) => { projectRefs.current[index] = el; }} 
              className="absolute inset-0 z-[40] opacity-0 pointer-events-none will-change-transform"
            >
              <div className="pointer-events-auto h-full w-full">
                <ProjectSlide project={project} />
              </div>
            </div>
          ))}
        </div>

        <section className="post-sticky relative z-[60]">
          <Skills />
        </section>
        <section className="post-sticky relative z-[60]">
          <Footer />
        </section>
      </div>

      {/* Global Background Accents */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 blur-[180px] -translate-y-1/2 translate-x-1/2 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-100/30 blur-[180px] translate-y-1/2 -translate-x-1/2 rounded-full" />
      </div>
    </div>
  );
};

export default App;
