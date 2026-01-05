
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section className="py-32 px-6 lg:px-24" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-blue-600 mb-4"
          >
            03 // Selected Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-black"
          >
            Project <br />Showcases
          </motion.h2>
        </div>

        <div className="mt-20">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
