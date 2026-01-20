
import React from 'react';
import { CaseStudy } from './types.ts';

interface Props {
  project: CaseStudy;
}

const CaseStudyCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      <div className="h-64 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          {project.metrics && (
            <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
              {project.metrics}
            </span>
          )}
        </div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-slate-900 mb-1">{project.title}</h3>
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">{project.focus}</p>
        </div>
        
        <p className="text-slate-600 mb-6 text-sm leading-relaxed font-medium">
          {project.highlight}
        </p>
        
        <div className="space-y-4 mt-auto">
          <div className="grid grid-cols-12 gap-2">
            <span className="col-span-2 text-[10px] font-black text-slate-300 pt-1">SITUATION</span>
            <p className="col-span-10 text-xs text-slate-500 leading-normal">{project.situation}</p>
          </div>
          <div className="grid grid-cols-12 gap-2">
            <span className="col-span-2 text-[10px] font-black text-slate-300 pt-1">TASK</span>
            <p className="col-span-10 text-xs text-slate-500 leading-normal">{project.task}</p>
          </div>
          <div className="grid grid-cols-12 gap-2">
            <span className="col-span-2 text-[10px] font-black text-indigo-300 pt-1">RESULT</span>
            <p className="col-span-10 text-xs text-slate-700 font-semibold leading-normal">{project.result}</p>
          </div>
        </div>

        <button className="mt-8 text-sm font-bold text-indigo-600 flex items-center hover:translate-x-1 transition-transform">
          View Detailed Case Study
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
