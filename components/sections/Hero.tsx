"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";
import { portfolioData } from "@/data/content";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Background line grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(#30231D 1px, transparent 1px)", backgroundSize: "100% 32px" }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side - Polaroid Photo */}
          <motion.div
            initial={{ opacity: 0, rotate: -5, x: -20 }}
            animate={{ opacity: 1, rotate: -2, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12 flex justify-center relative"
          >
            {/* Red Scribble Arrow pointing to polaroid */}
            <svg className="absolute -top-10 -right-4 w-20 h-20 text-[#E53E3E] hidden md:block z-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M80,20 Q40,10 20,60" />
              <path d="M15,45 L20,60 L35,55" />
            </svg>
            <div className="relative bg-white p-4 pb-16 shadow-xl rounded-sm transform rotate-[-2deg] max-w-sm w-full">
              {/* Tape effect */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/70 backdrop-blur-sm shadow-sm rotate-[-3deg] z-10 border border-black/5" />
              
              <div className="aspect-[4/5] bg-muted overflow-hidden relative">
                 {/* The user's photo */}
                 <div className="absolute inset-0 bg-[url('/profile.jpg')] bg-cover bg-center" />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-7/12"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-[1.1] tracking-tight">
              {portfolioData.hero.headline}
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-xl font-medium leading-relaxed">
              {portfolioData.hero.subheadline}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 relative">
              <CtaButton href="https://calendly.com/elijahndenwa/30min" target="_blank" rel="noopener noreferrer" variant="dark" withArrow>
                Book A Call
              </CtaButton>
              {/* Red arrow pointing to Book A Call */}
              <svg className="absolute -top-12 left-20 w-12 h-12 text-[#E53E3E] transform rotate-12 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20,80 Q40,20 80,40" />
                <path d="M70,25 L80,40 L60,45" />
              </svg>
              <a 
                href="/resume.pdf" 
                className="text-foreground font-bold hover:text-foreground/70 transition-colors flex items-center gap-2 border-b-2 border-foreground pb-1"
              >
                Download Resume <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
