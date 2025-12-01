"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react"; // Import motion for animations
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "Investment Inquiry",
    message: "",
    file: null,
  });
  
  // Status states: idle, loading, success, error
  const [status, setStatus] = useState("idle"); 
  const fileInputRef = useRef(null);
  const MAX_CHARS = 500;

  // CHANGE THIS: Your admin email
  const RECIPIENT_EMAIL = "harishkumar17102@gmail.com"; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // 1. Prepare the data
      const data = new FormData();
      data.append("email", formData.email);
      data.append("subject", formData.subject);
      data.append("message", formData.message);
      if (formData.file) {
        data.append("file", formData.file);
      }

      // 2. Send to API
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: data,
      });

      // 3. Handle Result
      if (response.ok) {
        setStatus("success");
        setFormData({
          email: "",
          subject: "Investment Inquiry",
          message: "",
          file: null,
        });
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > MAX_CHARS) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleRemoveFile = () => {
    setFormData({ ...formData, file: null });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT SIDE: Info & Branding */}
          <ScrollReveal>
            <div className="space-y-10 pt-4">
              <div>
                <div className="mb-6 flex flex-col items-start">
                  <TextGenerateEffect 
                    words="Let's talk" 
                    className="text-5xl md:text-6xl font-extrabold text-white tracking-tight"
                  />
                  <div className="mt-2">
                    <TextGenerateEffect 
                      words="Deal Flow." 
                      className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-purple-600 pb-1"
                    />
                  </div>
                </div>
                <p className="text-slate-400 text-xl font-light max-w-md leading-relaxed">
                  Direct access to the platform. No friction. <br/>
                  Founders and Investors welcome.
                </p>
              </div>

              <div className="space-y-8">
                {/* Email Info */}
                <div className="flex items-center space-x-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-pink/50 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white group-hover:text-brand-pink transition-colors">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium tracking-wide text-xs uppercase opacity-70 mb-1">Email Directly</h3>
                    <a href={`mailto:${RECIPIENT_EMAIL}`} className="text-xl font-semibold text-white hover:text-brand-pink transition-colors">
                      {RECIPIENT_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Founder Info */}
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
          </ScrollReveal>

          {/* RIGHT SIDE: Interactive Form Card */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              {/* Card Container */}
              <Card className="relative p-8 md:p-10 bg-black border border-white/10 shadow-2xl min-h-[500px] flex flex-col justify-center">
                
                {/* ----------------- SUCCESS STATE DESIGN ----------------- */}
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
                    
                    {/* Ambient Glow Behind Success Icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-pink/20 blur-[50px] rounded-full pointer-events-none" />

                    {/* Animated Checkmark Circle */}
                    <motion.div 
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-24 h-24 rounded-full bg-gradient-to-tr from-brand-pink to-purple-600 p-[2px] mb-8 shadow-[0_0_30px_-5px_rgba(236,72,153,0.4)]"
                    >
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                        <motion.svg 
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={2.5} 
                          stroke="currentColor" 
                          className="w-10 h-10 text-brand-pink"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </motion.svg>
                      </div>
                    </motion.div>

                    {/* Success Heading */}
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-pink to-purple-600 mb-4"
                    >
                      Message Received
                    </motion.h3>

                    {/* Success Description */}
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-slate-400 max-w-xs mx-auto mb-10 leading-relaxed"
                    >
                      Thank you for reaching out. Our team has been notified and will review your inquiry shortly.
                    </motion.p>

                    {/* Return Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Button 
                        onClick={() => setStatus("idle")}
                        variant="secondary"
                        className="bg-white/5 hover:bg-white/10 border-white/10"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  </div>
                ) : (
                  // ----------------- INPUT FORM -----------------
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
                        disabled={status === "loading"}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-brand-pink focus:bg-white/10 transition-all disabled:opacity-50"
                      />
                    </div>

                    {/* Subject Dropdown */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-pink uppercase tracking-widest ml-1">I am interested in...</label>
                      <div className="relative">
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          disabled={status === "loading"}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white appearance-none focus:outline-none focus:border-brand-pink focus:bg-white/10 transition-all cursor-pointer pr-10 disabled:opacity-50"
                        >
                          <option className="bg-black text-slate-300" value="Investment Inquiry">Investment Inquiry</option>
                          <option className="bg-black text-slate-300" value="Pitch Deck Submission">Pitch Deck Submission</option>
                          <option className="bg-black text-slate-300" value="Partnership">Partnership Opportunity</option>
                          <option className="bg-black text-slate-300" value="General Question">General Question</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* File Upload (Founders) */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 ml-1">
                        <label className="text-xs font-bold text-brand-pink uppercase tracking-widest">Pitch Deck</label>
                        <div className="relative group">
                          <div className="cursor-help text-slate-500 hover:text-brand-pink transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>
                          </div>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-800 border border-white/10 rounded text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                            <p className="text-[10px] text-slate-300 font-medium">Optional for Founders. Attach deck for priority review.</p>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <input
                          type="file"
                          id="file-upload"
                          name="file"
                          ref={fileInputRef}
                          accept=".pdf,.doc,.docx,.ppt,.pptx"
                          onChange={handleFileChange}
                          disabled={status === "loading"}
                          className="hidden"
                        />
                        <div className={`flex items-center justify-between w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg transition-all hover:bg-white/10 ${formData.file ? 'border-brand-pink/50' : ''} ${status === "loading" ? 'opacity-50 pointer-events-none' : ''}`}>
                          <span className={`text-sm truncate mr-4 ${formData.file ? 'text-white' : 'text-slate-500 italic'}`}>
                            {formData.file ? formData.file.name : "No file chosen"}
                          </span>
                          {formData.file ? (
                            <button type="button" onClick={handleRemoveFile} className="text-slate-400 hover:text-red-500 transition-colors p-1" title="Remove file">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          ) : (
                            <label htmlFor="file-upload" className="cursor-pointer text-[10px] font-bold uppercase tracking-wider bg-brand-pink text-white px-3 py-1.5 rounded hover:bg-brand-rose transition-colors whitespace-nowrap">
                              Choose File
                            </label>
                          )}
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-600 ml-1">Compatible formats: PDF, DOCX, PPT</p>
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
                        disabled={status === "loading"}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/20 focus:outline-none focus:border-brand-pink focus:bg-white/10 transition-all resize-none disabled:opacity-50"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full py-4 text-lg"
                        disabled={status === "loading"}
                      >
                        {status === "loading" ? "Sending..." : "Submit Inquiry"}
                      </Button>
                      
                      {status === "error" && (
                        <p className="text-center text-red-400 text-sm mt-3 animate-pulse">
                          Something went wrong. Please try again.
                        </p>
                      )}
                    </div>
                    
                  </form>
                )}
              </Card>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}