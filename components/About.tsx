
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-32 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-widest text-blue-600 mb-8"
        >
          01 // The Narrative
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-light leading-snug mb-12 text-black"
        >
          Software Engineer with extensive experience building <span className="text-black font-medium">scalable platform infrastructures</span>. I specialize in designing high-performance systems and integrating advanced <span className="text-blue-600 font-medium italic">Generative AI</span> to drive product innovation.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 text-lg text-black/60"
        >
          <p>
            With a proven track record in cloud architecture and cost-optimization, I deliver secure, compliant solutions from Proof of Concept (POC) to production. My approach balances technical rigor with business agility.
          </p>
          <p>
            "Engineering scalable systems with an AI-first mindset" is not just a tagline—it's the core methodology of every architectural decision I make, ensuring long-term resilience and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
