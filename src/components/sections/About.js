import Card from "@/components/ui/Card";

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            The Operating System for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-purple-600">
              Private Capital.
            </span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            We replace the noise of open networking with the precision of a curated marketplace. 
            14U Capital connects high-intent founders with active allocators.
          </p>
        </div>

        {/* The Split Platform Logic */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Founder Side (Pink Identity) */}
          <Card className="p-10 flex flex-col h-full border-t-4 border-t-brand-pink">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-brand-pink/10 px-3 py-1 rounded-full border border-brand-pink/20 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
                </span>
                <span className="text-[10px] font-bold text-brand-pink uppercase tracking-widest">Seekers</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">For Founders</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Stop chasing random emails. Get access to a vetted network of active investors who are looking for deals exactly like yours.
              </p>
            </div>
            
            <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-white/5">
              {[
                { label: "Thesis Aligned", val: "Match with relevant funds" },
                { label: "Direct Access", val: "Skip the gatekeepers" },
                { label: "Fast Feedback", val: "No ghosting policy" },
                { label: "Verified Funds", val: "Active capital only" }
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                  <div className="text-slate-500 text-xs">{item.val}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Investor Side (Blue Identity) */}
          <Card className="p-10 flex flex-col h-full border-t-4 border-t-blue-500">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Allocators</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">For Investors</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Deal flow without the noise. Access pre-vetted, high-quality opportunities that match your specific investment thesis and check size.
              </p>
            </div>
            
            <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-white/5">
              {[
                { label: "Pre-Vetted", val: "Due diligence ready" },
                { label: "Standardized Data", val: "Comparable metrics" },
                { label: "Exclusive Allocation", val: "First-look access" },
                { label: "No Spam", val: "High-signal only" }
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                  <div className="text-slate-500 text-xs">{item.val}</div>
                </div>
              ))}
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}