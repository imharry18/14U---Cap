import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact"; // Import the new component

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow w-full">
        <Hero />
        <About />
        <Services />
        <Team />
        
        {/* New Contact Section */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}