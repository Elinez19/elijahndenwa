"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";
import { CtaButton } from "@/components/ui/CtaButton";
import { GraduationCap, Trophy, Code2, Database, Check } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-24 relative z-20">
      
      {/* View All Work Link */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
         <a href="#" className="inline-flex items-center text-3xl font-serif font-bold text-foreground hover:opacity-70 transition-opacity relative group">
           <span className="relative z-10">View All Work</span>
           {/* Yellow scribble underline */}
           <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#F1C865] z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
             <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="3" />
           </svg>
           <svg className="w-8 h-8 ml-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
         </a>
      </div>

      {/* Torn Paper Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative">
        <div className="relative">
          {/* Top Torn Edge SVG */}
          <svg className="absolute -top-4 left-0 w-full h-8 text-[#3B312A] z-10" preserveAspectRatio="none" viewBox="0 0 1200 40" fill="currentColor">
            <path d="M0,40 L0,20 Q10,10 20,25 T40,15 T60,30 T80,10 T100,25 T120,15 T140,30 T160,10 T180,25 T200,15 T220,30 T240,10 T260,25 T280,15 T300,30 T320,10 T340,25 T360,15 T380,30 T400,10 T420,25 T440,15 T460,30 T480,10 T500,25 T520,15 T540,30 T560,10 T580,25 T600,15 T620,30 T640,10 T660,25 T680,15 T700,30 T720,10 T740,25 T760,15 T780,30 T800,10 T820,25 T840,15 T860,30 T880,10 T900,25 T920,15 T940,30 T960,10 T980,25 T1000,15 T1020,30 T1040,10 T1060,25 T1080,15 T1100,30 T1120,10 T1140,25 T1160,15 T1180,30 T1200,10 L1200,40 Z" />
          </svg>
          
          <div className="bg-[#3B312A] text-white py-16 px-10 md:px-16 shadow-2xl relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/3">
                <h3 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4 text-[#FCF9EC] relative inline-block">
                  Proof Beyond<br/>The Code.
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#F1C865]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="3" />
                  </svg>
                </h3>
                <p className="text-[#D8CEB3] text-xs font-bold mt-4 leading-relaxed">A Few Things I Am Proud Of, On<br/>And Off The Screen</p>
              </div>
              <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="flex flex-col items-center">
                   <GraduationCap className="w-10 h-10 text-white mb-4" strokeWidth={1.5} />
                   <div className="text-[0.65rem] text-[#D8CEB3] font-bold tracking-wide">First Class Degree<br/>While Working Full<br/>Time</div>
                </div>
                <div className="flex flex-col items-center">
                   <Trophy className="w-10 h-10 text-white mb-4" strokeWidth={1.5} />
                   <div className="text-[0.65rem] text-[#D8CEB3] font-bold tracking-wide">Winner In UI/UX<br/>Award</div>
                </div>
                <div className="flex flex-col items-center">
                   <Code2 className="w-10 h-10 text-white mb-4" strokeWidth={1.5} />
                   <div className="text-[0.65rem] text-[#D8CEB3] font-bold tracking-wide">Open Source<br/>Contributions<br/>@someorg</div>
                </div>
                <div className="flex flex-col items-center">
                   <Database className="w-10 h-10 text-white mb-4" strokeWidth={1.5} />
                   <div className="text-[0.65rem] text-[#D8CEB3] font-bold tracking-wide">Production<br/>Applications<br/>Shipped</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Torn Edge SVG */}
          <svg className="absolute -bottom-4 left-0 w-full h-8 text-[#3B312A] z-10" preserveAspectRatio="none" viewBox="0 0 1200 40" fill="currentColor">
            <path d="M0,0 L0,20 Q10,30 20,15 T40,25 T60,10 T80,30 T100,15 T120,25 T140,10 T160,30 T180,15 T200,25 T220,10 T240,30 T260,15 T280,25 T300,10 T320,30 T340,15 T360,25 T380,10 T400,30 T420,15 T440,25 T460,10 T480,30 T500,15 T520,25 T540,10 T560,30 T580,15 T600,25 T620,10 T640,30 T660,15 T680,25 T700,10 T720,30 T740,15 T760,25 T780,10 T800,30 T820,15 T840,25 T860,10 T880,30 T900,15 T920,25 T940,10 T960,30 T980,15 T1000,25 T1020,10 T1040,30 T1060,15 T1080,25 T1100,10 T1120,30 T1140,15 T1160,25 T1180,10 T1200,30 L1200,0 Z" />
          </svg>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-serif text-5xl font-bold text-foreground mb-4 relative inline-block">
            Choose How<br/>We Can Work
            <svg className="absolute -bottom-2 left-0 w-1/2 h-3 text-[#F1C865]" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </h2>
          <p className="text-foreground/80 font-bold tracking-wide text-sm mt-6">Three Ways To Bring Me Into Your Project.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#2A1F1A] text-white rounded-[2rem] p-8 md:p-10 relative shadow-xl flex flex-col">
            {/* Sticky Note */}
            <div className="absolute -top-4 -right-4 bg-[#F1C865] text-[#30231D] font-bold text-[0.6rem] py-2 px-4 rounded-sm shadow-md transform rotate-6 border border-black/10 w-24 text-center">
              Best For MVPs &<br/>Startups
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#F1C865] font-bold text-lg">01</span>
              <div className="w-6 h-[2px] bg-[#F1C865]" />
            </div>
            <h3 className="text-3xl font-serif mb-4">Focused<br/>Build</h3>
            <p className="text-[#D1D5DB] text-[0.7rem] font-bold mb-8 h-12 leading-relaxed">For Startups That Need A Mobile Product Built Properly From Start To Launch.</p>
            
            <div className="text-4xl font-bold text-white mb-1">$3k - $6k</div>
            <p className="text-[#D1D5DB] text-[0.65rem] uppercase tracking-widest font-bold mb-8">1 - 3 Months</p>
            
            <ul className="space-y-4 mb-10 flex-grow">
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> MVPs, Major Features Or Rebuilds</li>
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> iOS And Android App</li>
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> Figma To Code</li>
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> API Integrations, Auth, Payments etc.</li>
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> App Store & Play Store Launch</li>
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> 30 Days Post-Launch Support</li>
            </ul>
            <CtaButton href="#contact" variant="light" className="w-full shadow-none text-xs py-3 mt-auto rounded-full">Discuss Your Project</CtaButton>
          </div>

          {/* Card 2 */}
          <div className="bg-[#464D61] text-white rounded-[2rem] p-8 md:p-10 relative shadow-xl flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#F1C865] font-bold text-lg">02</span>
              <div className="w-6 h-[2px] bg-[#F1C865]" />
            </div>
            <h3 className="text-3xl font-serif mb-4">Marketing<br/>Website</h3>
            <p className="text-[#D1D5DB] text-[0.7rem] font-bold mb-8 h-12 leading-relaxed">A Website That Looks Premium, Loads Fast, And Drives Action.</p>
            
            <div className="text-4xl font-bold text-white mb-1">$1k - $1.5k</div>
            <p className="text-[#D1D5DB] text-[0.65rem] uppercase tracking-widest font-bold mb-8">1 - 2 Weeks</p>
            
            <ul className="space-y-4 mb-10 flex-grow">
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> Dynamic Website</li>
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> Responsive Development</li>
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> SEO Foundations</li>
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> Analytics Setup</li>
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> Hosting And Domain Support</li>
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> Performance Optimization</li>
            </ul>
            <CtaButton href="#contact" variant="light" className="w-full shadow-none text-xs py-3 mt-auto rounded-full">Build My Website</CtaButton>
          </div>

          {/* Card 3 */}
          <div className="bg-[#5A6072] text-white rounded-[2rem] p-8 md:p-10 relative shadow-xl flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#F1C865] font-bold text-lg">03</span>
              <div className="w-6 h-[2px] bg-[#F1C865]" />
            </div>
            <h3 className="text-3xl font-serif mb-4">Embedded<br/>Engineer</h3>
            <p className="text-[#D1D5DB] text-[0.7rem] font-bold mb-8 h-12 leading-relaxed">More Engineering Capacity To Help Your Team Ship Consistently.</p>
            
            <div className="text-3xl lg:text-4xl font-bold text-white mb-1">From $1k / Mo</div>
            <p className="text-[#D1D5DB] text-[0.65rem] uppercase tracking-widest font-bold mb-8">Contract-Based</p>
            
            <ul className="space-y-4 mb-10 flex-grow">
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> New Feature Development</li>
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> API Integrations</li>
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> Bug Fixes & Maintenance</li>
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> Code Reviews</li>
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> Product & Engineering Collaboration</li>
               <li className="flex items-start text-xs font-bold text-[#E5E7EB]"><Check className="w-4 h-4 text-[#F1C865] mr-3 shrink-0" /> AI Assistant Development</li>
            </ul>
            <CtaButton href="#contact" variant="light" className="w-full shadow-none text-xs py-3 mt-auto rounded-full">Work With Me</CtaButton>
          </div>
        </div>
      </div>

      {/* Not Sure Which Fits Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-[#FAF2D9] rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm border border-[#E9E0C8]">
            <div className="md:w-2/3">
               <h3 className="font-serif text-3xl font-bold text-[#30231D] mb-3">Not Sure Which Fits Your<br/>Project ?</h3>
               <p className="text-sm font-bold text-[#30231D]/80">Tell me what you are building, and I will recommend the best way to<br/>move forward.</p>
            </div>
            <div className="md:w-1/3 flex justify-end">
               <CtaButton href="#contact" variant="dark" className="px-6 py-4 text-sm w-full md:w-auto">
                 Book A Call With Me
               </CtaButton>
            </div>
         </div>
      </div>
    </section>
  );
}
