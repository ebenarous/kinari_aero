'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
        <p className="font-medium text-zinc-500">Kinari Systems</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Developed by MIT Alumni</span>
          <span>Designed for Industry</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
