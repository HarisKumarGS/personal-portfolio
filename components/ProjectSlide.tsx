
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { Target, Terminal, CheckCircle2 } from 'lucide-react';

interface ProjectSlideProps {
  project: Project;
}

const ProjectSlide: React.FC<ProjectSlideProps> = ({ project }) => {
  return (
    <section className="h-screen flex flex-col justify-center px-6 lg:px-24 bg-[#fdfdfd] relative overflow-hidden">
      {/* Decorative background number */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <span className="text-[30vw] font-black text-black/[0.02] select-none leading-none">
          {project.id}
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          {/* Visual Side */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group overflow-hidden rounded-[2.5rem] aspect-[4/3] flex items-center justify-center bg-white border border-black/[0.03] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)]"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10 text-center px-12">
                   <h4 className="text-[11px] font-bold tracking-[0.8em] text-blue-600 uppercase mb-8">{project.edge}</h4>
                   <h3 className="text-5xl md:text-7xl font-bold mb-10 text-black leading-[1.1] tracking-tighter">
                    {project.title.split(' ').map((word, i) => (
                      <span key={i} className={i % 2 !== 0 ? 'text-black/30' : ''}>{word} </span>
                    ))}
                   </h3>
                   <div className="flex items-center justify-center space-x-4">
                      <div className="h-px w-10 bg-black/10"></div>
                      <p className="text-[12px] text-black/40 font-bold uppercase tracking-[0.3em]">{project.role}</p>
                      <div className="h-px w-10 bg-black/10"></div>
                   </div>
                </div>
            </motion.div>
          </div>

          {/* Details Side */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-14">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="flex items-start space-x-8 group"
                >
                    <div className="w-16 h-16 bg-blue-50/50 border border-blue-500/10 rounded-3xl shrink-0 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                      <Target className="text-blue-600 group-hover:text-white transition-colors" size={26} strokeWidth={1.5} />
                    </div>
                    <div className="pt-1">
                        <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 mb-3 italic">Challenge</h5>
                        <p className="text-xl text-black/80 leading-relaxed font-light">{project.problem}</p>
                    </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="flex items-start space-x-8 group"
                >
                    <div className="w-16 h-16 bg-emerald-50/50 border border-emerald-500/10 rounded-3xl shrink-0 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                      <Terminal className="text-emerald-600 group-hover:text-white transition-colors" size={26} strokeWidth={1.5} />
                    </div>
                    <div className="pt-1">
                        <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 mb-3 italic">Execution</h5>
                        <p className="text-xl text-black/80 leading-relaxed font-light">{project.action}</p>
                    </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="flex items-start space-x-8 group"
                >
                    <div className="w-16 h-16 bg-indigo-50/50 border border-indigo-500/10 rounded-3xl shrink-0 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                      <CheckCircle2 className="text-indigo-600 group-hover:text-white transition-colors" size={26} strokeWidth={1.5} />
                    </div>
                    <div className="pt-1">
                        <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 mb-3 italic">Outcome</h5>
                        <p className="text-xl text-black/80 leading-relaxed font-light">{project.impact}</p>
                    </div>
                </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlide;
