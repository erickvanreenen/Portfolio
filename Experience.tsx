
import React from 'react';
import { EXPERIENCE } from './constants.tsx';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Career Trajectory</h2>
        <div className="space-y-12">
          {EXPERIENCE.map((item, idx) => (
            <div key={item.id} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/2 -ml-px w-0.5 h-full bg-slate-200"></div>
              
              <div className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 md:w-1/2"></div>
                
                <div className="absolute left-0 md:left-1/2 md:-ml-3 w-6 h-6 rounded-full border-4 border-slate-50 bg-indigo-600 z-10 shadow-sm"></div>
                
                <div className={`flex-1 md:w-1/2 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all hover:shadow-md ${idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <span className="text-xs font-bold text-indigo-600 mb-2 block">{item.period}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{item.company}</h3>
                  <p className="text-sm font-semibold text-slate-500 mb-4">{item.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
