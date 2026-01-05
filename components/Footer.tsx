
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-32 pb-12 px-6 lg:px-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-black tracking-tight leading-tight">Let's build the <br /><span className="text-blue-600">future infrastructure.</span></h2>
            <div className="flex space-x-4">
              <a href="#" className="p-4 glass rounded-2xl hover:bg-black hover:text-white transition-all text-black interactive">
                <Github size={22} strokeWidth={1.5} />
              </a>
              <a href="#" className="p-4 glass rounded-2xl hover:bg-black hover:text-white transition-all text-black interactive">
                <Linkedin size={22} strokeWidth={1.5} />
              </a>
              <a href="#" className="p-4 glass rounded-2xl hover:bg-black hover:text-white transition-all text-black interactive">
                <Mail size={22} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col justify-end lg:items-end">
            <p className="text-black/40 font-medium max-w-xs lg:text-right mb-8">
              Open for strategic collaborations in FinTech, HealthTech, and AI platforms.
            </p>
            <button
              onClick={scrollToTop}
              className="w-16 h-16 glass rounded-full flex items-center justify-center hover:border-blue-600 transition-colors group text-black interactive"
            >
              <ArrowUp size={24} strokeWidth={2} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-black/5 gap-4">
          <p className="text-[10px] text-black/30 font-bold uppercase tracking-[0.3em]">
            © 2024 Hariskumar G S // All Rights Reserved
          </p>
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <p className="text-[10px] text-black/60 font-bold uppercase tracking-widest bg-blue-600/5 px-4 py-2 rounded-full border border-blue-600/10">
              Crafted for Google AI "New Year, New You" Challenge
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
