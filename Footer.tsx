
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's build something exceptional.</h2>
        <p className="text-slate-500 max-w-xl mb-12">
          I am currently open to strategic product design roles and high-impact partnerships.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 mb-16">
          <a 
            href="mailto:erickvanreenen@gmail.com" 
            className="flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
          >
            erickvanreenen@gmail.com
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all"
          >
            LinkedIn Profile
          </a>
        </div>
        
        <div className="w-full h-px bg-slate-100 mb-12"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center w-full text-slate-400 text-xs font-medium gap-4">
          <p>© {new Date().getFullYear()} Erick Van Reenen. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-slate-900">Portfolio</a>
            <a href="#" className="hover:text-slate-900">Résumé</a>
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
