
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tight hover:text-indigo-600 transition-colors">
          EVR<span className="text-indigo-600">.</span>
        </a>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#work" className="hover:text-indigo-600 transition-colors">Work</a>
          <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
        <a 
          href="#contact" 
          className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-sm"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
