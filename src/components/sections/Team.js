import Card from "@/components/ui/Card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Team() {
  const team = [
    {
      name: "Shashank Umashankar",
      role: "Founder & Managing Director",
      bio: "Leads fundraising, valuation, and deal execution. With deep experience across investment banking and venture roles, he drives founder storytelling and round strategy.",
      initials: "SU",
      color: "from-brand-pink to-brand-rose"
    },
    {
      name: "Depesh Vyas",
      role: "Angel Network Head",
      bio: "Angel investor and head of a fast-growing angel network. Experienced in scaling ventures from $5K to $180K MRR, I specialize in identifying high-potential founders, aligning them with the right investors, and driving rigorous, thesis-focused startup qualification.",
      initials: "DV",
      color: "from-purple-600 to-indigo-600"
    },
    {
      name: "Neil Mannikar",
      role: "Associate",
      bio: "Manages sourcing, investor mapping, and pitch support. He helps founders with deck structuring and coordinates initial investor interactions.",
      initials: "NM",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="team" className="relative py-24 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 right-[10%] w-[30rem] h-[30rem] bg-brand-pink/5 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 left-[10%] w-[30rem] h-[30rem] bg-blue-900/5 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Our People</span>
            </div>
            
            <div className="flex flex-col items-center mb-6">
              <TextGenerateEffect 
                words="Meet the" 
                className="text-4xl md:text-5xl font-bold text-white text-center"
              />
              <div className="mt-2">
                <TextGenerateEffect 
                  words="Visionaries." 
                  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-purple-600 pb-1"
                />
              </div>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed">
              A team of operators, analysts, and strategists dedicated to bridging the gap between ambition and capital.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <ScrollReveal 
              key={i}
              delay={i * 0.1} // Stagger effect
              className="group h-full"
            >
              <Card className="p-8 group hover:bg-white/[0.03] transition-all duration-500 h-full">
                
                {/* Initials / Avatar with Hover Glow */}
                <div className="relative mb-8 flex justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full scale-75`}></div>
                  <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-2xl shadow-xl ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500`}>
                    {member.initials}
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-pink transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-4 inline-block">
                    {member.role}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}