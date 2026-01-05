
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="about-section h-screen flex flex-col justify-center px-6 lg:px-24 bg-[#fdfdfd] relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.2] mb-16 text-black tracking-tight"
        >
          Software Engineer with extensive experience building <span className="text-black font-medium">scalable platform infrastructures</span>. I specialize in designing high-performance systems and integrating advanced <span className="text-blue-600 font-medium italic">Generative AI</span> to drive product innovation.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 text-lg text-black/50 font-light">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            With a proven track record in cloud architecture and cost-optimization, I deliver secure, compliant solutions from Proof of Concept (POC) to production. My approach balances technical rigor with business agility.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            "Engineering scalable systems with an AI-first mindset" is not just a tagline—it's the core methodology of every architectural decision I make, ensuring long-term resilience and innovation.
          </motion.p>
        </div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute left-24 top-0 bottom-0 w-[1px] bg-black/[0.03] -z-10 hidden lg:block"></div>
    </section>
  );
};

export default About;
