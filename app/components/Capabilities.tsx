'use client';

import React from 'react';
import { FileText, Eye, ClipboardCheck } from 'lucide-react';

const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Intelligent Operations
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Our multimodal AI bridges the gap between incumbent documentation and fast-paced field work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            
          {/* Capability 1 - Blue */}
          <div className="group p-8 rounded-3xl border border-blue-500/20 bg-blue-900/5 hover:bg-blue-900/10 hover:border-blue-500/50 transition-all duration-500 flex flex-col items-start h-full shadow-lg shadow-blue-900/5">
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:bg-blue-500/10 group-hover:border-blue-500/60 transition-all duration-500 shadow-lg shadow-blue-900/10 group-hover:shadow-blue-900/30">
              <FileText className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors">
              Universal Context Ingestion
            </h3>
            <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              The system digests unstructured data - PDFs, AMMs, technical drawings, or images. It breaks complex documentation down into digestible, actionable steps, creating an instant SOP tailored for the field.
            </p>
          </div>

          {/* Capability 2 - Purple */}
          <div className="group p-8 rounded-3xl border border-purple-500/20 bg-purple-900/5 hover:bg-purple-900/10 hover:border-purple-500/50 transition-all duration-500 flex flex-col items-start h-full shadow-lg shadow-purple-900/5">
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:bg-purple-500/10 group-hover:border-purple-500/60 transition-all duration-500 shadow-lg shadow-purple-900/10 group-hover:shadow-purple-900/30">
              <Eye className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-100 transition-colors">
              Adaptive Real-Time Assistance
            </h3>
            <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              Combines vision and voice AI to guide users step-by-step. Validates actions, flags errors instantly, and answers technical queries dynamically.
            </p>
          </div>

          {/* Capability 3 - Green */}
          <div className="group p-8 rounded-3xl border border-green-500/20 bg-green-900/5 hover:bg-green-900/10 hover:border-green-500/50 transition-all duration-500 flex flex-col items-start h-full shadow-lg shadow-green-900/5">
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-green-500/30 flex items-center justify-center mb-6 group-hover:bg-green-500/10 group-hover:border-green-500/60 transition-all duration-500 shadow-lg shadow-green-900/10 group-hover:shadow-green-900/30">
              <ClipboardCheck className="w-7 h-7 text-green-400 group-hover:text-green-300 transition-colors" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-green-100 transition-colors">
              Automated Traceability
            </h3>
            <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
              Eliminate paperwork. The AI documents the entire workflow, verifying checks along the way. It then generates reports in any required enterprise format automatically, based on the visual and audio log of the session.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Capabilities;
