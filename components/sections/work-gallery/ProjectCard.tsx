import { ProjectData } from "@/data/work-gallery";
import { ArrowUpRight } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";
import { motion } from "framer-motion";

export function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <div className="bg-[#E9E0C8]/50 rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 overflow-hidden relative border border-[#D8CEB3]/30 shadow-sm">
      {/* Background notebook texture simulation */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to bottom, transparent 23px, #30231D 24px)", backgroundSize: "100% 24px" }} />
      
      {/* Left Content */}
      <div className="w-full lg:w-5/12 flex flex-col relative z-10">
        <span className="text-[#D32F2F] font-bold text-lg mb-2">{project.number}</span>
        
        <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#30231D] mb-4">
          {project.title}
        </h2>
        
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[#30231D] font-serif italic text-xl border-b border-[#30231D]/20 pb-1">
            {project.type} {project.type === "Mobile" ? "Application" : ""}
          </span>
        </div>
        
        <p className="text-[#30231D]/80 leading-relaxed max-w-md mb-8">
          {project.description}
        </p>
        
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-wider text-[#D32F2F] font-bold mb-2">MY ROLE(S)</h4>
          <p className="text-[#30231D] font-bold">
            {project.roles.join(", ")}
          </p>
        </div>
        
        <div className="mb-8">
          <CtaButton href={project.link || "#"} className="bg-[#30231D] text-[#F1C865] hover:bg-[#30231D]/90 border-none">
            View Case Study
          </CtaButton>
        </div>
        
        {project.platforms && (
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#30231D]/60 mt-auto pt-4 border-t border-[#30231D]/10">
            <span>Available on:</span>
            <div className="flex gap-2">
              {project.platforms.map((platform, i) => (
                <span key={platform} className="bg-white/60 px-3 py-1 rounded-full text-[#30231D] text-xs font-bold shadow-sm">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Mockup Display */}
      <div className="w-full lg:w-7/12 relative flex justify-center items-center h-[400px] lg:h-[500px]">
        {/* Decorative Arrow */}
        {project.arrowText && (
          <div className="absolute top-0 right-10 md:top-10 md:left-0 z-20 transform -rotate-12">
            <div className="text-[#D32F2F] font-serif italic text-lg md:text-xl relative whitespace-nowrap">
              {project.arrowText}
              <svg className="absolute -bottom-4 right-0 w-16 h-12 text-[#D32F2F]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50 Q 50 10, 90 50" stroke="currentColor" strokeWidth="3" fill="transparent" strokeLinecap="round" />
                <path d="M80 40 L 90 50 L 80 60" stroke="currentColor" strokeWidth="3" fill="transparent" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        )}

        {/* Mockups */}
        {project.mockupType === "mobile" ? (
          <div className="relative w-full max-w-[400px] h-full flex items-center justify-center">
            {/* Back Phone */}
            <motion.div 
              className="absolute right-4 top-10 w-[220px] h-[450px] bg-white rounded-[2rem] shadow-2xl border-4 border-white overflow-hidden transform rotate-6"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${project.primaryColor}22, ${project.primaryColor}88)` }}>
                 <div className="w-full h-16 bg-white/40 mb-4 rounded-b-xl" />
                 <div className="w-10/12 h-20 bg-white/40 mx-auto rounded-xl mb-4" />
                 <div className="w-10/12 h-20 bg-white/40 mx-auto rounded-xl mb-4" />
                 <div className="w-10/12 h-20 bg-white/40 mx-auto rounded-xl mb-4" />
              </div>
            </motion.div>
            
            {/* Front Phone */}
            <motion.div 
              className="absolute left-4 md:left-10 z-10 w-[240px] h-[480px] bg-white rounded-[2.5rem] shadow-2xl border-[6px] border-white overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                <div className="w-24 h-5 bg-white rounded-b-xl" />
              </div>
              <div className="w-full h-full flex flex-col bg-[#FCF9EC]">
                 <div className="h-[45%] w-full flex items-center justify-center p-4" style={{ backgroundColor: project.primaryColor }}>
                    <div className="w-24 h-24 bg-white/20 rounded-full" />
                 </div>
                 <div className="p-6 flex-1 flex flex-col gap-4">
                    <div className="w-3/4 h-6 bg-[#30231D]/10 rounded-md" />
                    <div className="w-full h-4 bg-[#30231D]/5 rounded-md" />
                    <div className="w-5/6 h-4 bg-[#30231D]/5 rounded-md" />
                    <div className="mt-auto w-full h-12 rounded-full" style={{ backgroundColor: project.primaryColor }} />
                 </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="relative w-full max-w-[600px] flex items-center justify-center mt-10">
            <motion.div 
              className="w-full relative pt-[60%] bg-[#222] rounded-t-2xl rounded-b-md shadow-2xl border-[8px] border-[#333]"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-white overflow-hidden flex flex-col">
                 <div className="h-8 border-b flex items-center px-4 gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                 </div>
                 <div className="flex-1" style={{ background: `linear-gradient(to bottom right, ${project.primaryColor}, #111)` }}>
                    <div className="w-full h-full p-8 flex flex-col items-center justify-center gap-6">
                        <div className="w-1/2 h-10 bg-white/20 rounded-lg" />
                        <div className="flex gap-4 w-full justify-center">
                           <div className="w-1/4 h-24 bg-white/10 rounded-lg" />
                           <div className="w-1/4 h-24 bg-white/10 rounded-lg" />
                           <div className="w-1/4 h-24 bg-white/10 rounded-lg" />
                        </div>
                    </div>
                 </div>
              </div>
              <div className="absolute -bottom-4 -inset-x-6 h-4 bg-[#bbb] rounded-b-xl shadow-lg" />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
