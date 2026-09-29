import Link from "next/link";
import { portfolioData } from "@/data/content";

export function CTA() {
  return (
    <section className="relative w-full py-32 bg-[#3E2F26] text-background text-center px-6 mt-12 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-20 mix-blend-overlay"></div>
      <div className="max-w-3xl mx-auto space-y-12 relative z-10">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            Building Something ?<br />
            Let's Talk.
          </h2>
          <div className="relative inline-block w-48 h-3">
             <div className="absolute inset-0 bg-[#F1C865] rounded-full transform rotate-2 opacity-90" />
          </div>
        </div>
        
        <p className="text-background/90 font-medium max-w-xl mx-auto text-lg md:text-xl leading-relaxed">
          Whether You Need A Mobile Product, A Marketing Website, Or Extra Engineering Support. Tell Me What You Are Working On.
        </p>
        
        <div className="pt-8">
          <Link 
            href={`mailto:${portfolioData.contact.email}`}
            className="inline-block bg-[#F1C865] text-[#30231D] font-bold font-serif px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
