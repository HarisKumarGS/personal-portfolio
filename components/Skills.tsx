
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_GROUPS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-32 px-6 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-blue-600 mb-4"
          >
            04 // Core Arsenal
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-black"
          >
            Technical Skill Cloud
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1 }}
              className="glass p-10 rounded-3xl"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-8 tracking-wider uppercase">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-black/5 border border-black/5 rounded-full text-sm hover:border-blue-600 transition-colors cursor-default text-black/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
