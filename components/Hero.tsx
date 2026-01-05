
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 pt-20">
      <div className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex items-center space-x-2 text-blue-600 font-medium tracking-widest text-sm uppercase"
        >
          <span className="w-10 h-px bg-blue-600 block"></span>
          <span>Engineering Scalable Systems</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 leading-[0.9] text-black"
        >
          Hariskumar G S <br />
          <span className="text-black/30">Software Engineer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-black/60 max-w-2xl mb-12 leading-relaxed"
        >
          Architecting high-performance platform infrastructures and secure cloud solutions across <span className="text-black font-semibold">FinTech</span>, <span className="text-black font-semibold">HealthTech</span>, and <span className="text-black font-semibold">IoT</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap gap-6"
        >
          <button className="px-8 py-4 bg-black text-white font-bold rounded-full flex items-center space-x-2 hover:bg-blue-600 transition-all duration-300">
            <span>View Projects</span>
            <ArrowRight size={20} />
          </button>
          
          <div className="flex items-center space-x-8 px-4">
            <div className="flex flex-col items-center">
              <Code size={24} className="text-black/20 mb-1" />
              <span className="text-[10px] uppercase tracking-tighter text-black/40">Scale</span>
            </div>
            <div className="flex flex-col items-center">
              <Cpu size={24} className="text-black/20 mb-1" />
              <span className="text-[10px] uppercase tracking-tighter text-black/40">AI First</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe size={24} className="text-black/20 mb-1" />
              <span className="text-[10px] uppercase tracking-tighter text-black/40">Secure</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-12 right-12 hidden lg:block text-black"
      >
        <p className="text-xs uppercase tracking-[0.4em] rotate-90 origin-right">
          Scroll to explore
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
