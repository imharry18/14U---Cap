import React from "react";
import Button from "@/components/ui/Button";
import { Cover } from "@/components/ui/cover";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Network Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-brand-pink/10 blur-[100px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-blue-900/10 blur-[100px] mix-blend-screen animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Platform Badge */}
        <div className="inline-flex items-center space-x-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-4 py-1.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
          </span>
          <span className="text-xs font-medium text-slate-300 tracking-wide">The Professional Network for Capital</span>
        </div>

        {/* Headline with Text Generate Effect */}
        <div className="mb-6">
          <div className="flex flex-col items-center justify-center">
            {/* Main white text */}
            <TextGenerateEffect 
              words="We turn vision into" 
              className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight text-center inline-block" 
            />
            
            {/* Gradient text inside Cover */}
            <div className="mt-2 md:mt-4">
              <Cover>
                <TextGenerateEffect 
                  words="velocity." 
                  className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-rose to-blue-600 inline-block pb-1"
                />
              </Cover>
            </div>
          </div>
        </div>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-brand-muted leading-relaxed max-w-2xl mx-auto mb-10">
          14U Capital partners with high-quality startups and serious investors by combining clarity, strategy, and momentum. 
          <span className="block mt-2 text-white/80">Connect directly. Deal efficiently. Grow together.</span>
        </p>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#contact" variant="primary" size="lg" className="w-full sm:w-auto min-w-[180px]">
              Join as Investor
            </Button>
          
          <Button href="#contact" variant="secondary" size="lg" className="w-full sm:w-auto min-w-[180px]">
            Start Fundraising
          </Button>
        </div>

      </div>
    </section>
  );
}