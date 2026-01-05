
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, Target, Terminal, CheckCircle } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mb-32 flex flex-col lg:flex-row gap-12 items-center"
    >
      <div className={`w-full lg:w-1/2 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
        <div className="relative group overflow-hidden rounded-3xl aspect-[16/10] glass flex items-center justify-center bg-white/40">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Minimalist Visual Representation */}
            <div className="relative z-10 text-center px-12">
               <span className={`text-[120px] font-black opacity-[0.05] absolute -top-16 -left-16 select-none text-black`}>{project.id}</span>
               <h4 className="text-sm font-medium tracking-[0.5em] text-black/30 uppercase mb-4">{project.edge}</h4>
               <h3 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-blue-600 transition-colors text-black">{project.title}</h3>
               <p className="text-black/60 italic">Role: {project.role}</p>
            </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 space-y-8">
        <div className="space-y-4">
            <div className="flex items-start space-x-4">
                <Target className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                    <h5 className="text-xs uppercase tracking-widest text-black/40 mb-1">The Problem</h5>
                    <p className="text-black/80">{project.problem}</p>
                </div>
            </div>
            
            <div className="flex items-start space-x-4">
                <Terminal className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                <div>
                    <h5 className="text-xs uppercase tracking-widest text-black/40 mb-1">The Action</h5>
                    <p className="text-black/80">{project.action}</p>
                </div>
            </div>

            <div className="flex items-start space-x-4">
                <CheckCircle className="text-indigo-600 mt-1 flex-shrink-0" size={20} />
                <div>
                    <h5 className="text-xs uppercase tracking-widest text-black/40 mb-1">The Impact</h5>
                    <p className="text-black/80">{project.impact}</p>
                </div>
            </div>
        </div>
        
        <button className="flex items-center space-x-2 text-sm font-bold border-b border-black/10 pb-2 hover:border-blue-600 transition-colors text-black">
            <span>Case Study Coming Soon</span>
            <ExternalLink size={14} />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
