
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERTISE } from '../constants';

const Expertise: React.FC = () => {
  return (
    <section className="expertise-section h-screen flex flex-col justify-center px-6 lg:px-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-bold text-black tracking-tighter"
            >
              Skill <br /><span className="text-black/20 italic">set.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            transition={{ delay: 0.3 }}
            className="text-black/80 max-w-sm mb-4 text-lg font-light leading-relaxed"
          >
            A methodology-driven approach to complex infrastructure and high-performance engineering.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {EXPERTISE.map((item, index) => {
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-full glass bg-white/40 border border-blue-500/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.1)] p-8 flex items-center justify-center text-center group cursor-none interactive"
              >
                {/* Subtle hover glow background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-emerald-500/5 transition-all duration-700 -z-10" />
                
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Title: Centered and disappears on hover */}
                  <h3 className="absolute inset-0 flex items-center justify-center text-lg md:text-xl font-black text-black uppercase tracking-[0.15em] transition-all duration-500 group-hover:opacity-0 group-hover:scale-90 group-hover:blur-sm px-4">
                    {item.title}
                  </h3>

                  {/* Description: Appears and slides up slightly on hover */}
                  <p className="opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 text-[11px] md:text-[12px] text-black/60 leading-relaxed font-medium uppercase tracking-wider max-w-[180px] pointer-events-none transform translate-y-4 group-hover:translate-y-0">
                    {item.description}
                  </p>
                </div>

                {/* Orbital detail ring - Persistent blue highlighting */}
                <motion.div 
                  className="absolute inset-0 rounded-full border border-blue-500/20 group-hover:border-blue-500/40 scale-100 group-hover:scale-115 transition-all duration-1000 pointer-events-none"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Background graphic elements */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/[0.02] -z-10" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-black/[0.02] -z-10" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-black/[0.02] -z-10" />
    </section>
  );
};

export default Expertise;
