
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
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-black">Let's build the <br /><span className="text-blue-600">future infrastructure.</span></h2>
            <div className="flex space-x-6">
              <a href="#" className="p-3 glass rounded-full hover:bg-black hover:text-white transition-all text-black">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 glass rounded-full hover:bg-black hover:text-white transition-all text-black">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-3 glass rounded-full hover:bg-black hover:text-white transition-all text-black">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col justify-end lg:items-end">
            <p className="text-black/40 max-w-xs lg:text-right mb-8">
              Open for strategic collaborations in FinTech, HealthTech, and AI platforms.
            </p>
            <button
              onClick={scrollToTop}
              className="w-16 h-16 glass rounded-full flex items-center justify-center hover:border-blue-600 transition-colors group text-black"
            >
              <ArrowUp className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-black/5 gap-4">
          <p className="text-xs text-black/30 uppercase tracking-widest">
            © 2024 Hariskumar G S // All Rights Reserved
          </p>
          <p className="text-xs text-black/60 font-medium bg-blue-600/5 px-4 py-2 rounded-full border border-blue-600/10">
            Crafted with Antigravity IDE for the Google AI "New Year, New You" Challenge. Deployed on Google Cloud Run.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
