'use client';

import React from 'react';
import { Check } from 'lucide-react';

const Demo: React.FC = () => {
  return (
    <section id="demo" className="py-24 bg-zinc-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Zero training.
            <br />
            Flawless execution.
            <br />
            <span className="bg-gradient-to-r from-blue-200 to-slate-400 text-transparent bg-clip-text">See it in action.</span>
          </h2>
          
          <div className="text-lg text-zinc-400 leading-relaxed space-y-4">
            <p>
              We put our technology to the ultimate test.<br />
              Using just the smart glasses - which have autonomously ingested a raw PDF SOP - an inexperienced user navigates through a complex electro-mechanical task with precision.
            </p>
          </div>
          
          <div className="space-y-5 pt-4">
            {/* Blue - Matches "Universal Context Ingestion" */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                <Check className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-lg text-white font-medium">Instant SOP Generation</span>
            </div>

            {/* Purple - Matches "Adaptive Real-Time Assistance" */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 border border-purple-500/30">
                <Check className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-lg text-white font-medium">Real-time Guidance</span>
            </div>

            {/* Green - Matches "Automated Traceability/Correction" */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30">
                <Check className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-lg text-white font-medium">Interactive Error Correction</span>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900 group">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/5Jp1gjJdYUY?rel=0" 
              title="AeroVision AI Demo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-xs text-zinc-500 mt-4 text-center">
            Demo: PC Assembly guided purely by AI vision and audio.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Demo;
