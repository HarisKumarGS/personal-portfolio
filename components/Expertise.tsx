
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERTISE } from '../constants';
import { Layout, Shield, Cloud, Zap } from 'lucide-react';

const iconMap: Record<string, any> = {
  Layout: Layout,
  Shield: Shield,
  Cloud: Cloud,
  Zap: Zap,
};

const Expertise: React.FC = () => {
  return (
    <section className="py-32 px-6 lg:px-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-widest text-blue-600 mb-4"
            >
              02 // Strategy
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-black"
            >
              Strategic <br />Expertise
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-black/50 max-w-sm"
          >
            A methodology-driven approach to complex infrastructure and enterprise-grade software delivery.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {EXPERTISE.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl group hover:border-blue-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">{item.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
