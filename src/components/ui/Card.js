export default function Card({ children, className = '' }) {
  return (
    <div 
      className={`
        relative 
        bg-white/[0.02] 
        backdrop-blur-xl 
        border border-white/10 
        rounded-2xl 
        overflow-hidden 
        transition-all duration-500 
        hover:bg-white/[0.04] 
        hover:border-brand-pink/20 
        hover:shadow-[0_0_40px_-10px_rgba(236,72,153,0.1)]
        ${className}
      `}
    >
      {/* Subtle Top Gradient Line for polish */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-brand-pink/30 transition-all duration-500" />
      
      {children}
    </div>
  );
}