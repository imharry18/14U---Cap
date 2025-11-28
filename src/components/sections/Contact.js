"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "Investment Inquiry",
    message: "",
  });

  const MAX_CHARS = 500;

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@14ucapital.in?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > MAX_CHARS) return;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT SIDE: Minimal, High-End Info */}
          <div className="space-y-10 pt-4">
            <div>
              <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                Let's talk <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-purple-600">
                  Deal Flow.
                </span>
              </h2>
              <p className="text-slate-400 text-xl font-light max-w-md leading-relaxed">
                Direct access to the platform. No friction. <br/>
                Founders and Investors welcome.
              </p>
            </div>

            <div className="space-y-8">
              {/* Professional Icon Block 1 */}
              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-pink/50 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white group-hover:text-brand-pink transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium tracking-wide text-xs uppercase opacity-70 mb-1">Email Directly</h3>
                  <a href="mailto:hello@14ucapital.in" className="text-xl font-semibold text-white hover:text-brand-pink transition-colors">
                    hello@14ucapital.in
                  </a>
                </div>
              </div>

              {/* Professional Icon Block 2 */}
              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium tracking-wide text-xs uppercase opacity-70 mb-1">For Founders</h3>
                  <p className="text-slate-400 text-sm">Attach your deck for priority review.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Clean, Boxed Form */}
          <div className="relative">
            <Card className="relative p-8 md:p-10 bg-black border border-white/10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-pink uppercase tracking-widest ml-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="founder@startup.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-brand-pink focus:bg-white/10 transition-all"
                  />
                </div>

                {/* Subject Dropdown - Now with explicit Arrow */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-pink uppercase tracking-widest ml-1">I am interested in...</label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white appearance-none focus:outline-none focus:border-brand-pink focus:bg-white/10 transition-all cursor-pointer pr-10"
                    >
                      <option className="bg-black text-slate-300" value="Investment Inquiry">Investment Inquiry</option>
                      <option className="bg-black text-slate-300" value="Pitch Deck Submission">Pitch Deck Submission</option>
                      <option className="bg-black text-slate-300" value="Partnership">Partnership Opportunity</option>
                      <option className="bg-black text-slate-300" value="General Question">General Question</option>
                    </select>
                    
                    {/* The Chevron Icon (Pointer Event None ensures click passes through to select) */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message Area */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-xs font-bold text-brand-pink uppercase tracking-widest">Brief</label>
                    <span className="text-[10px] text-slate-500 font-mono">{formData.message.length}/{MAX_CHARS}</span>
                  </div>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell us about your vision..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-brand-pink focus:bg-white/10 transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button type="submit" size="lg" className="w-full py-4 text-lg">
                    Send Request
                  </Button>
                </div>
                
              </form>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}