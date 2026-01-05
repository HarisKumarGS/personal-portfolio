
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { SKILL_GROUPS } from '../constants';

const Skills: React.FC = () => {
  // Balanced position calculation for a more expansive, immersive layout
  const skillPositions = useMemo(() => {
    // Adjusted radii to be more responsive and avoid screen edges
    const ringRadiiBase = [200, 320, 440, 560]; 
    
    return SKILL_GROUPS.map((group, groupIdx) => {
      const radius = ringRadiiBase[groupIdx];
      const total = group.skills.length;
      
      // Spread across the full 360 degrees
      const startAngle = (groupIdx * 45); 
      const angleRange = 360;
      
      return group.skills.map((skill, skillIdx) => {
        const angleStep = total > 0 ? angleRange / total : 0;
        const currentAngle = startAngle + (skillIdx * angleStep);
        
        // Controlled noise for an organic "cloud" feel
        const jitter = (Math.random() - 0.5) * 15;
        const rad = ((currentAngle + jitter) * Math.PI) / 180;
        
        // Ensure x and y stay within reasonable bounds
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * (radius * 0.55); 
        
        return { skill, x, y, groupIdx };
      });
    }).flat();
  }, []);

  const ringRadii = [200, 320, 440, 560];

  return (
    <section className="relative py-32 px-6 lg:px-24 bg-[#fdfdfd] overflow-hidden min-h-screen flex flex-col items-center justify-center">
      
      {/* Background Decorative Rings - Centered but with a slight right shift for nav gutter */}
      <div className="absolute top-[50%] left-[55%] md:left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50">
        {ringRadii.map((radius, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: i * 0.15, ease: "easeOut" }}
            style={{ 
              width: radius * 2, 
              height: radius * 1.1, 
              border: '1px solid rgba(0,0,0,0.03)'
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%]"
          />
        ))}
      </div>

      {/* Gravity Center: Title & Description */}
      <div className="relative z-20 text-center max-w-4xl py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[9px] font-bold uppercase tracking-[0.8em] text-blue-600 mb-6"
        >
          Technical Ecosystem
        </motion.div>
        
        <div className="relative inline-block mb-8">
          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-[8rem] font-bold text-black tracking-tighter leading-none"
          >
            Core <span className="text-black/5 italic">Arsenal.</span>
          </motion.h2>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse -z-10" />
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          className="text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto text-black/90"
        >
          A performance-first stack architected for <br className="hidden md:block" /> 
          scale and intelligence.
        </motion.p>
      </div>

      {/* The Orbiting Skill Cloud - Centered with Gutter awareness */}
      <div className="absolute top-[50%] left-[55%] md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        {skillPositions.map(({ skill, x, y, groupIdx }, i) => (
          <motion.div
            key={`${skill}-${i}`}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 80, 
              damping: 20, 
              delay: i * 0.008 
            }}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
                x: [0, 6, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="group"
            >
              <div className="px-5 py-2.5 glass bg-white/70 border border-black/[0.03] rounded-full whitespace-nowrap shadow-[0_15px_40px_-15px_rgba(0,0,0,0.04)] hover:border-blue-500/50 hover:bg-white hover:scale-115 hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.1)] transition-all duration-500 flex items-center space-x-2.5 interactive cursor-none">
                <div className={`w-2 h-2 rounded-full ${
                  groupIdx === 0 ? 'bg-blue-500' : 
                  groupIdx === 1 ? 'bg-emerald-500' : 
                  groupIdx === 2 ? 'bg-indigo-500' : 'bg-cyan-500'
                } group-hover:scale-125 transition-transform`} />
                <span className="text-[11px] font-bold text-black/50 group-hover:text-black uppercase tracking-[0.2em] transition-colors">
                  {skill}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Legend */}
      <div className="absolute bottom-12 flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-30 px-6">
        {SKILL_GROUPS.map((group, i) => (
          <div key={i} className="flex items-center space-x-3">
             <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-emerald-500' : i === 2 ? 'bg-indigo-500' : i === 3 ? 'bg-cyan-500' : 'bg-black'}`} />
             <span className="text-[9px] font-black uppercase tracking-[0.3em]">{group.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
