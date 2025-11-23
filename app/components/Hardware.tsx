'use client';

import React from 'react';
import { Camera, Mic, BatteryFull, Feather } from 'lucide-react';

const Hardware: React.FC = () => {
  // Using the uploaded blueprint image
  const glassImage = "/glasses-blueprint.png";

  const features = [
    {
      icon: <Camera className="w-6 h-6 text-blue-400" />,
      title: "Camera",
      details: [
        "12 MP ultra-wide stills",
        "Up to 3K Ultra HD video at 30 fps",
        "Livestreaming support"
      ]
    },
    {
      icon: <Mic className="w-6 h-6 text-blue-400" />,
      title: "Audio",
      details: [
        "5-mic array",
        "Precision noise suppression",
        "2 open-ear temple speakers"
      ]
    },
    {
      icon: <BatteryFull className="w-6 h-6 text-blue-400" />,
      title: "Battery",
      details: [
        "Up to 3 hours typical use",
        "Up to 48 hours with case",
        "Rapid charging"
      ]
    },
    {
      icon: <Feather className="w-6 h-6 text-blue-400" />,
      title: "Weight",
      details: [
        "52g featherlight design",
        "Balanced weight distribution",
        "All-day industrial comfort"
      ]
    }
  ];

  return (
    <section id="hardware" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Industrial Grade Wearables</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Featherlight form. Heavyweight intelligence. Powered by the world&apos;s most advanced eyewear compute.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl shadow-blue-900/10 group">
            <img 
                src={glassImage} 
                alt="Smart Glasses Blueprint" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
          </div>

          {/* Right Column: 2x2 Spec Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-zinc-900/50 border border-white/5 p-6 rounded-xl hover:bg-white/8 transition-colors duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="w-1 h-1 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hardware;
