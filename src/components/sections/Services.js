import Card from "@/components/ui/Card";

export default function Services() {
  const services = [
    {
      title: "Fundraising Advisory",
      desc: "End-to-end execution. From narrative strategy to term sheet negotiation.",
      tags: ["Deal Structuring", "Negotiation Lead", "Investor Matching"],
      deliverable: "Term Sheet"
    },
    {
      title: "Financial Modeling",
      desc: "Defensible logic. We build the mathematical backbone of your valuation.",
      tags: ["DCF Analysis", "Unit Economics", "Growth Scenarios"],
      deliverable: "Financial Model"
    },
    {
      title: "M&A Execution",
      desc: "Strategic exits. Buy-side and sell-side mandates for high-growth assets.",
      tags: ["Target Mapping", "Due Diligence", "Closing Process"],
      deliverable: "Deal Close"
    },
    {
      title: "Market Intelligence",
      desc: "Data-driven conviction. We validate market depth for IC memos.",
      tags: ["TAM/SAM/SOM", "Competitive Moats", "GTM Strategy"],
      deliverable: "Market Note"
    },
    {
      title: "Pitch Narrative",
      desc: "Storytelling that converts. We align vision with metrics to secure capital.",
      tags: ["Master Deck", "One-Pager", "Investor Scripts"],
      deliverable: "Pitch Deck",
      isWide: true
    }
  ];

  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-white/10 pb-6">
        <div>
          <h2 className="text-3xl font-bold text-white">Service Architecture</h2>
          <p className="text-slate-500 text-sm mt-2">Precision modules for capital events</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <Card 
            key={i} 
            className={`p-8 flex flex-col justify-between bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-300 group ${service.isWide ? 'md:col-span-2' : ''}`}
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-pink transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-medium text-slate-300 uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                Core Output
              </span>
              <span className="text-xs font-semibold text-white bg-brand-pink/10 border border-brand-pink/20 px-3 py-1 rounded-full">
                {service.deliverable}
              </span>
            </div>
          </Card>
        ))}
        
        {/* Empty space filler or CTA card could go here if grid is uneven, but currently it fits nicely with 5 items (3 top, 2 wide bottom is another option, currently 3 top, 1 wide bottom + 1 empty space visually if not handled. Let's make the last one span 2 to fill the grid better) */}
      </div>
    </section>
  );
}