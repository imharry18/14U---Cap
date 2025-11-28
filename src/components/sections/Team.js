import Card from "@/components/ui/Card";

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
      bio: "A seasoned operator who has scaled companies from $5K to $180K MRR. Leads the angel network, ensuring thesis-aligned investor matching and precise startup qualification.",
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
    <section id="team" className="py-24 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">Our Team</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <Card key={i} className="p-6 hover:border-white/20 group">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg`}>
                {member.initials}
              </div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <div className="text-brand-pink text-xs uppercase tracking-wide font-semibold mb-4">{member.role}</div>
              <p className="text-brand-muted text-sm leading-relaxed">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}