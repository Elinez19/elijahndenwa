"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";
import { CtaButton } from "@/components/ui/CtaButton";

export function Projects() {
  const doodleTexts = [
    "Built for scale & speed",
    "Seamless user experience",
    "Complex logic made simple"
  ];

  return (
    <section id="work" className="py-32 relative bg-background z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight">Featured<br/>Projects</h2>
          <p className="text-foreground mt-4 font-bold tracking-wide text-sm">A Few Things I Have Helped Build And Ship.</p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-32 md:space-y-40">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-[#E6D8B8] rounded-[2rem] shadow-2xl relative flex flex-col md:flex-row min-h-[500px]">
                
                {/* Left Content */}
                <div className="p-8 md:p-12 lg:p-16 md:w-[55%] flex flex-col justify-center relative z-10">
                  
                  {/* Number Indicator */}
                  <div className="flex items-center mb-6 relative w-max">
                    <span className="text-[#D32F2F] font-bold text-xl relative z-10">0{index + 1}</span>
                    <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-8 h-[2px] bg-[#F1C865] z-20" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-5xl md:text-7xl font-bold text-[#30231D] mb-2">{project.title}</h3>
                  <p className="font-bold text-[#30231D]/70 text-lg mb-6">Web Application</p>

                  <p className="text-base text-[#30231D]/90 mb-8 leading-relaxed max-w-sm font-medium">
                    {project.description}
                  </p>

                  {/* Role */}
                  <div className="mb-10">
                    <p className="text-[#D32F2F] text-xs font-bold tracking-widest mb-2">MY ROLE</p>
                    <p className="font-bold text-[#30231D] text-xl">{project.role}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
                    <CtaButton href={project.link} variant="dark">
                      View Case Study
                    </CtaButton>
                  </div>

                  {/* Stores */}
                  <div className="mt-8 flex items-center gap-4">
                    <span className="text-xs font-bold text-[#30231D]">Available On</span>
                    <div className="flex gap-2">
                       <div className="bg-[#FCF9EC] border border-black/10 shadow-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                         <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.33-.87 3.86-.76 1.8.14 3.12 1.05 3.93 2.5-3.32 1.95-2.73 6.3.36 7.54-.7 1.69-1.52 3.32-3.23 2.89zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.3 2.4-2.01 4.31-3.74 4.25z"/></svg>
                         <div className="flex flex-col">
                           <span className="text-[0.55rem] font-bold leading-none text-[#30231D]">Download on the</span>
                           <span className="text-[0.7rem] font-bold leading-none mt-0.5 text-[#30231D]">App Store</span>
                         </div>
                       </div>
                       <div className="bg-[#FCF9EC] border border-black/10 shadow-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                         <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.34 0 .67.12.95.34l14.07 10.15c.67.48.82 1.41.34 2.08-.16.22-.38.4-.64.53L4.98 21.61c-.75.38-1.66.08-2.04-.67-.17-.35-.25-.73-.25-1.12z"/></svg>
                         <div className="flex flex-col">
                           <span className="text-[0.55rem] font-bold leading-none text-[#30231D]">Download on the</span>
                           <span className="text-[0.7rem] font-bold leading-none mt-0.5 text-[#30231D]">Play Store</span>
                         </div>
                       </div>
                    </div>
                  </div>

                  {/* Doodle */}
                  <div className="absolute top-16 right-4 hidden xl:block text-[#D32F2F]">
                    <div className="font-serif text-sm transform -rotate-12 whitespace-nowrap">{doodleTexts[index % 3]}</div>
                    <svg className="w-10 h-10 mt-1 ml-8 text-[#D32F2F] transform rotate-[15deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20,20 Q60,40 80,80" />
                      <path d="M55,80 L80,80 L85,55" />
                    </svg>
                  </div>
                </div>

                {/* Right Side Mockups (Breaking out of container) */}
                <div className="md:w-[45%] relative h-[350px] md:h-auto mt-8 md:mt-0 z-20">
                  <div className="absolute inset-0 flex justify-center md:items-center md:-top-16 md:-bottom-16">
                     <div className="relative w-full h-full flex justify-center items-center">
                        {/* Back Phone */}
                        <div className="absolute ml-24 md:ml-32 w-[160px] md:w-[220px] h-[320px] md:h-[480px] bg-[#FCF9EC] rounded-[2rem] border-[6px] md:border-8 border-[#30231D] shadow-2xl transform rotate-6 z-0 overflow-hidden flex flex-col items-center">
                           {/* Notch */}
                           <div className="w-1/2 h-4 md:h-6 bg-[#30231D] rounded-b-xl absolute top-0" />
                           {/* Content Placeholder */}
                           <div className="mt-8 md:mt-10 w-full px-3">
                             <div className="w-full h-16 md:h-24 bg-red-100 rounded-xl mb-3" />
                             <div className="w-full h-6 md:h-10 bg-orange-100 rounded-lg mb-2" />
                             <div className="w-full h-10 md:h-16 bg-amber-100 rounded-lg" />
                           </div>
                        </div>
                        {/* Front Phone */}
                        <div className="absolute mr-16 md:mr-24 w-[160px] md:w-[220px] h-[320px] md:h-[480px] bg-white rounded-[2rem] border-[6px] md:border-8 border-[#30231D] shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform -rotate-3 z-10 overflow-hidden flex flex-col items-center">
                           {/* Notch */}
                           <div className="w-1/2 h-4 md:h-6 bg-[#30231D] rounded-b-xl absolute top-0" />
                           {/* Content Placeholder */}
                           <div className="mt-8 md:mt-10 w-full px-3">
                             <div className="w-full h-24 md:h-36 bg-blue-50 rounded-xl mb-3" />
                             <div className="w-full h-12 md:h-16 bg-blue-100 rounded-lg mb-2" />
                             <div className="w-full h-12 md:h-16 bg-blue-100 rounded-lg" />
                           </div>
                        </div>
                     </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
