
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
    { name: 'Expertise', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold tracking-tighter text-black"
        >
          HGS<span className="text-blue-600">.</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1 glass px-6 py-2 rounded-full">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="px-4 py-2 text-sm text-black/60 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="hidden md:block px-6 py-2 bg-black text-white text-sm font-bold rounded-full hover:bg-blue-600 transition-all">
          Resume
        </button>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden glass p-2 rounded-lg text-black"
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
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-3 bg-black text-white font-bold rounded-xl">
                Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
