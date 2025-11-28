import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Area */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-pink to-brand-rose flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-brand-pink/20 group-hover:shadow-brand-pink/40 transition-all duration-500">
            14U
          </div>
          <div>
            <div className="font-bold text-white tracking-tight text-lg group-hover:text-brand-pink transition-colors">
              14U Capital
            </div>
            <div className="text-[10px] uppercase tracking-widest text-brand-muted font-semibold">
              Turn vision into velocity
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-brand-muted">
          {['Home', 'About', 'Services', 'Team'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-brand-pink transition-colors"
            >
              {item}
            </Link>
          ))}
          
          <Button href="#contact" size="sm">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}