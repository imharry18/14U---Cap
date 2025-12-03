import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Area */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-14 h-10 group-hover:scale-105 transition-transform duration-500">
            <Image 
              src="/logo2.png" 
              alt="14U Capital Logo" 
              width={160} 
              height={160} 
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div>
            
            {/* UPDATED: Shimmering Text Effect */}
            <div className="text-[10px] uppercase tracking-widest font-semibold 
              animate-shimmer bg-gradient-to-r from-brand-muted via-white to-brand-muted bg-[length:200%_100%] bg-clip-text text-transparent">
              Turning vision into velocity
            </div>
            
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-brand-muted">
          {['Home','Focus', 'About', 'Services', 'Team'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-brand-pink transition-colors"
            >
              {item}
            </Link>
          ))}
          
          <Button href="#contact" size="sm">
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
}