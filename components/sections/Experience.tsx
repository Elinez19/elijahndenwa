"use client";

import { motion } from "framer-motion";
import { Users, Code, Search, Brackets, Megaphone } from "lucide-react";
import { portfolioData } from "@/data/content";

export function Experience() {
  const experienceList = portfolioData.experience;

  return (
    <section id="experience" className="py-24 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start gap-12 lg:gap-24">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-[30%] sticky top-32"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 relative inline-block">
              My<br/>Experience
              <svg className="absolute -bottom-2 left-0 w-3/4 h-3 text-[#F1C865]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </h2>
            <p className="text-foreground/80 font-bold tracking-wide text-xs uppercase leading-relaxed mt-8">
              Where I've Worked And What I've Accomplished.
            </p>
          </motion.div>

          {/* Right Column */}
          <div className="md:w-[70%] space-y-6">
            {experienceList.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FCF9EC] rounded-[1rem] p-6 md:p-8 flex items-center gap-6 md:gap-8 border border-[#E9E0C8] shadow-sm relative overflow-hidden group"
              >
                {/* Number */}
                <div className="text-4xl font-serif font-bold text-[#30231D] shrink-0">
                  0{index + 1}
                </div>
                
                {/* Content */}
                <div className="flex-grow pl-6 md:pl-8 border-l-2 border-[#F1C865]">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 className="text-xl font-bold text-[#30231D] font-serif">{exp.role}</h3>
                    <span className="text-xs font-bold text-[#F1C865] mt-1 sm:mt-0">{exp.date}</span>
                  </div>
                  <div className="font-bold text-[#30231D]/80 text-sm mb-2">{exp.company}</div>
                  <p className="text-[#30231D]/80 leading-relaxed font-medium text-xs md:text-sm">
                    {exp.description}
                  </p>
                </div>

                {/* Doodle Icon */}
                <div className="hidden sm:flex shrink-0 w-16 h-16 items-center justify-center relative">
                   {/* Decorative sparkles for odds */}
                   {index % 2 === 0 && (
                     <svg className="absolute -top-4 -right-4 w-8 h-8 text-[#F1C865]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M12 3v18m9-9H3m15.364-6.364l-12.728 12.728m0-12.728l12.728 12.728" />
                     </svg>
                   )}
                   {/* Decorative lines for evens */}
                   {index % 2 !== 0 && (
                     <svg className="absolute -left-2 top-0 w-6 h-6 text-[#F1C865]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                       <path d="M5 12h14" />
                       <path d="M12 5v14" />
                     </svg>
                   )}
                   
                   <div className="w-10 h-10 text-[#30231D] flex items-center justify-center">
                     {index === 0 && <Users className="w-8 h-8" strokeWidth={1.5} />}
                     {index === 1 && <Code className="w-8 h-8" strokeWidth={1.5} />}
                     {index === 2 && <Search className="w-8 h-8" strokeWidth={1.5} />}
                     {index === 3 && <Brackets className="w-8 h-8" strokeWidth={1.5} />}
                     {index === 4 && <Megaphone className="w-8 h-8" strokeWidth={1.5} />}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
