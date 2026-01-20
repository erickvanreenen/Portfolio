
import React from 'react';
import Navbar from './Navbar.tsx';
import Hero from './Hero.tsx';
import CaseStudyCard from './CaseStudyCard.tsx';
import About from './About.tsx';
import Experience from './Experience.tsx';
import Footer from './Footer.tsx';
import { CASE_STUDIES } from './constants.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Case Studies Grid */}
        <section id="work" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Strategic Case Studies</h2>
              <p className="text-slate-500 max-w-2xl text-lg">
                Selected projects where design strategy directly drove business outcomes and user satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {CASE_STUDIES.map(project => (
                <CaseStudyCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
        
        <About />
        
        <Experience />
        
        {/* Call to Action Section (Mini) */}
        <section className="py-16 px-6 bg-indigo-600 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div>
              <h3 className="text-3xl font-bold mb-2">Want to see the full portfolio?</h3>
              <p className="text-indigo-100">I have detailed PDF dossiers for each of these projects and more.</p>
            </div>
            <a 
              href="mailto:erickvanreenen@gmail.com?subject=Portfolio%20Request" 
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all whitespace-nowrap"
            >
              Request Full Folio
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
