
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { PROJECTS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', slideIndex: 1 },
    { name: 'Skills', href: '#skills', slideIndex: 2 },
    { name: 'Projects', href: '#projects', slideIndex: 3 },
    { name: 'Core Skills', href: '#core-skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    
    // For slides inside the pinned GSAP container, we calculate the scroll offset manually.
    // Each 'slide' represents 100vh of scroll progress in the pinned sequence.
    if (link.slideIndex !== undefined) {
      const targetScroll = link.slideIndex * window.innerHeight;
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    } else {
      // For sections outside the pinned sequence (like Core Skills and Contact)
      const target = document.querySelector(link.href);
      if (target) {
        // Because the pinned container adds height as "spacer" padding, 
        // we might need to offset it, but scrollIntoView usually handles fixed/pinned spacers better.
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 relative flex items-center justify-center min-h-[40px]">
        {/* Logo - Positioned to the left */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute left-6 text-xl font-bold tracking-tighter text-black cursor-pointer interactive"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          HGS<span className="text-blue-600">.</span>
        </motion.div>

        {/* Desktop Links - Centered */}
        <div className="hidden md:flex items-center space-x-1 glass px-6 py-2 rounded-full shadow-sm">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="px-4 py-2 text-sm text-black/60 hover:text-blue-600 transition-colors uppercase font-bold tracking-widest text-[10px]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle - Positioned to the right */}
        <button 
          className="md:hidden absolute right-6 glass p-2 rounded-lg text-black interactive"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4 mx-6 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium border-b border-black/5 pb-2 text-black"
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
