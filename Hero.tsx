
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
          Available for new opportunities
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Erick Van Reenen
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-slate-500 mb-8">
          UX/UI & Product Designer
        </h2>
        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl border-l-4 border-indigo-600 pl-6 py-2 italic">
          "Blending creativity, empathy, and business strategy to shape exceptional user lives."
        </p>
        
        <div className="mt-12 flex flex-wrap gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-semibold text-slate-400 uppercase mb-1">Expertise</p>
            <p className="text-sm font-medium text-slate-700">Problem Solver & Strategist</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-semibold text-slate-400 uppercase mb-1">Experience</p>
            <p className="text-sm font-medium text-slate-700">5+ Years in Product</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
