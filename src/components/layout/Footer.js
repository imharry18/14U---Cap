import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-10 overflow-hidden">
      
      {/* Ambient Blue-Pink Gradient Glow (Requested Feature) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-pink-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Left Column: Brand & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-600 to-blue-600 flex items-center justify-center text-white font-bold text-[10px] shadow-lg shadow-pink-900/20">
                14U
              </div>
              <span className="text-xl font-bold text-white tracking-tight">14U Capital</span>
            </div>

            {/* Address Area (Placeholder based on your image structure) */}
            <div className="text-slate-400 text-sm leading-relaxed">
              <p>14U Capital Headquarters</p>
              <p>Mumbai, Maharashtra</p>
              <p>India</p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col sm:flex-row gap-8 text-sm">
              <div>
                <span className="block text-slate-500 mb-1">Email</span>
                <a href="mailto:hello@14ucapital.in" className="text-white hover:text-pink-500 transition-colors">
                  hello@14ucapital.in
                </a>
              </div>
              <div>
                <span className="block text-slate-500 mb-1">Social</span>
                <a href="#" className="text-white hover:text-pink-500 transition-colors">
                  @14ucapital
                </a>
              </div>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Column 1: Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick links</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link href="#home" className="hover:text-pink-500 transition-colors">Home</Link></li>
                <li><Link href="#about" className="hover:text-pink-500 transition-colors">About us</Link></li>
                <li><Link href="#services" className="hover:text-pink-500 transition-colors">Services</Link></li>
                <li><Link href="#team" className="hover:text-pink-500 transition-colors">Team</Link></li>
                <li><Link href="#contact" className="hover:text-pink-500 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 2: Social */}
            <div>
              <h4 className="text-white font-semibold mb-6">Social</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter (X)</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">YouTube</a></li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h4 className="text-white font-semibold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-pink-500 transition-colors">Terms of service</Link></li>
                <li><Link href="#" className="hover:text-pink-500 transition-colors">Privacy policy</Link></li>
                <li><Link href="#" className="hover:text-pink-500 transition-colors">Cookie policy</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} 14U Capital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Designed with precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}