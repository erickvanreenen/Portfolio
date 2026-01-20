
import React from 'react';
import { TECH_STACK } from './constants.tsx';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="w-12 h-1 bg-indigo-500 mr-4"></span>
            Professional Ethos
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Experienced designer with a robust background in entrepreneurship, business development, and education. I embrace research not just as a phase, but as a critical tool for uncovering deep user needs and business opportunities.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            I am a dedicated problem-solver, balancing bold innovation with highly practical, metric-driven solutions. My goal is always to create products that feel as good as they work, while hitting critical KPIs.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-400">Primary Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map(tech => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
             <img src="https://picsum.photos/seed/erick/800/800" alt="Erick Portrait" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-indigo-600 p-8 rounded-2xl shadow-xl hidden lg:block">
            <p className="text-4xl font-black mb-1">5+</p>
            <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
