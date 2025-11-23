'use client';

import React from 'react';

const Navbar: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64; // approximate height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10 supports-[backdrop-filter]:bg-black/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Company Name */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          className="text-lg md:text-xl font-bold text-white tracking-wide hover:opacity-90 transition-opacity"
        >
          Kinari Systems
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#capabilities" 
            onClick={(e) => scrollToSection(e, 'capabilities')}
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Capabilities
          </a>
          <a 
            href="#hardware" 
            onClick={(e) => scrollToSection(e, 'hardware')}
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Product
          </a>
          <a 
            href="#demo" 
            onClick={(e) => scrollToSection(e, 'demo')}
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Demo
          </a>
          <a 
            href="#deploy" 
            onClick={(e) => scrollToSection(e, 'deploy')}
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
