"use client";

import { motion } from "framer-motion";

export function TechStack() {
  return (
    <section className="py-24 relative z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-serif text-5xl font-bold text-foreground mb-4 relative inline-block">
            What I Build With
            <svg className="absolute -bottom-2 left-0 w-3/4 h-3 text-[#F1C865]" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </h2>
          <p className="text-foreground/80 font-bold tracking-wide text-xs mt-6 uppercase leading-loose">
            The Tools & Technologies I Use Most To Turn<br/>Ideas Into Real Shippable Products.
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Card 1: Mobile */}
          <div className="bg-[#FCF9EC] rounded-[1rem] p-8 md:p-12 border border-[#E9E0C8] shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-16 relative overflow-hidden">
             {/* Faint scribble background decoration */}
             <svg className="absolute top-0 right-0 w-64 h-full text-[#E9E0C8]/30 opacity-50 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M10,10 Q50,90 90,10 T50,90 T10,10" fill="none" stroke="currentColor" strokeWidth="2" />
             </svg>

             <div className="w-full md:w-1/4 flex items-start gap-2 relative z-10">
               <span className="text-[#F1C865] font-bold text-sm mt-2">01</span>
               <div className="font-serif text-4xl font-bold text-[#30231D]">Mobile</div>
             </div>
             
             <div className="w-full md:w-3/4 flex flex-wrap gap-6 relative z-10">
               <div className="flex items-center gap-2 text-xs font-bold text-[#30231D]">
                 <div className="w-6 h-6 bg-cyan-400 rounded-sm flex items-center justify-center text-white text-[10px]">R</div>
                 React Native
               </div>
               <div className="flex items-center gap-2 text-xs font-bold text-[#30231D]">
                 <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center text-white text-[10px]">E</div>
                 Expo
               </div>
               <div className="flex items-center gap-2 text-xs font-bold text-[#30231D]">
                 <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center text-white text-[10px]">TS</div>
                 Typescript
               </div>
             </div>
          </div>

          {/* Card 2: Front-End */}
          <div className="bg-[#FCF9EC] rounded-[1rem] p-8 md:p-12 border border-[#E9E0C8] shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-16 relative overflow-hidden">
             {/* Faint scribble background decoration */}
             <svg className="absolute top-0 right-0 w-64 h-full text-[#E9E0C8]/30 opacity-50 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M90,90 Q50,10 10,90 T50,10 T90,90" fill="none" stroke="currentColor" strokeWidth="2" />
             </svg>

             <div className="w-full md:w-1/4 flex items-start gap-2 relative z-10">
               <span className="text-[#F1C865] font-bold text-sm mt-2">02</span>
               <div className="font-serif text-4xl font-bold text-[#30231D]">Front-End</div>
             </div>
             
             <div className="w-full md:w-3/4 flex flex-wrap gap-8 relative z-10">
               <div className="flex items-center gap-2 text-xs font-bold text-[#30231D]">
                 <div className="w-6 h-6 bg-cyan-400 rounded-sm flex items-center justify-center text-white text-[10px]">R</div>
                 React.js
               </div>
               <div className="flex items-center gap-2 text-xs font-bold text-[#30231D]">
                 <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center text-white text-[10px]">N</div>
                 Next.js
               </div>
               <div className="flex items-center gap-2 text-xs font-bold text-[#30231D]">
                 <div className="w-6 h-6 bg-yellow-400 rounded-sm flex items-center justify-center text-black text-[10px]">JS</div>
                 Javascript
               </div>
               <div className="flex items-center gap-2 text-xs font-bold text-[#30231D]">
                 <div className="w-6 h-6 bg-cyan-500 rounded-sm flex items-center justify-center text-white text-[10px]">TW</div>
                 Tailwind CSS
               </div>
               <div className="flex items-center gap-2 text-xs font-bold text-[#30231D]">
                 <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center text-white text-[10px]">TS</div>
                 Typescript
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
