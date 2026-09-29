import { ProjectData, galleryProjects } from "@/data/work-gallery";
import { Contact } from "@/components/sections/Contact";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function CaseStudy({ project }: { project: ProjectData }) {
  const currentIndex = galleryProjects.findIndex(p => p.id === project.id);
  const nextProject = galleryProjects[(currentIndex + 1) % galleryProjects.length];

  return (
    <article className="min-h-screen pt-32 w-full overflow-hidden relative">
      {/* Post-it Note */}
      <div className="absolute top-24 md:top-32 right-4 md:right-20 z-20 transform rotate-6">
        <div className="bg-[#5C4321] text-[#FCF9EC] p-6 shadow-xl relative w-32 h-32 flex flex-col justify-center gap-2">
          {/* Tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#F1C865]/80 transform -rotate-3" />
          
          <div className="flex justify-between items-center border-b border-[#FCF9EC]/20 pb-1">
            <span className="text-xs uppercase tracking-wider font-bold">Client</span>
            <span className="text-xs uppercase tracking-wider font-bold">Year</span>
          </div>
          <div className="flex justify-between items-center font-serif font-bold">
            <span className="text-sm">{project.client}</span>
            <span className="text-sm">{project.year}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/work-gallery" className="inline-flex items-center text-[#30231D]/60 hover:text-[#30231D] mb-8 font-bold text-sm transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Gallery
        </Link>
        
        {/* Title */}
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#30231D] mb-12 max-w-4xl leading-tight">
          {project.title} - {project.subtitle || project.description.split('.')[0] + '.'}
        </h1>

        {/* Hero Banner */}
        <div className="bg-[#3A2C25] rounded-[2rem] w-full h-[400px] md:h-[600px] mb-16 relative overflow-hidden flex items-center justify-center border-b-8 border-r-8 border-[#30231D]">
          {project.mockupType === 'mobile' ? (
             <div className="flex gap-4 md:gap-8 overflow-hidden px-10 items-center justify-center h-full">
                {/* Simulated App Screens */}
                {[1, 2, 3].map((num) => (
                  <div key={num} className={`w-[180px] md:w-[260px] h-[380px] md:h-[520px] bg-[#FCF9EC] rounded-[2rem] border-[6px] border-white shadow-2xl flex flex-col overflow-hidden ${num % 2 === 0 ? 'translate-y-8' : '-translate-y-8'}`}>
                    <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                      <div className="w-24 h-5 bg-white rounded-b-xl" />
                    </div>
                    <div className="h-[40%] w-full flex items-center justify-center p-4" style={{ backgroundColor: project.primaryColor }}>
                       <div className="w-20 h-20 bg-white/20 rounded-full" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col gap-4">
                       <div className="w-3/4 h-4 bg-[#30231D]/10 rounded-md" />
                       <div className="w-full h-3 bg-[#30231D]/5 rounded-md" />
                       <div className="w-5/6 h-3 bg-[#30231D]/5 rounded-md" />
                       <div className="mt-auto w-full h-10 rounded-full" style={{ backgroundColor: project.primaryColor }} />
                    </div>
                  </div>
                ))}
             </div>
          ) : (
            <div className="w-[90%] max-w-[800px] aspect-video bg-[#222] rounded-t-2xl rounded-b-md shadow-2xl border-[8px] border-[#333] relative flex flex-col">
              <div className="h-6 md:h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-[#1a1a1a]">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 overflow-hidden relative" style={{ background: `linear-gradient(to bottom right, ${project.primaryColor}, #111)` }}>
                <div className="absolute inset-0 p-8 flex flex-col items-center justify-center gap-8">
                  <div className="w-1/2 h-12 bg-white/20 rounded-lg backdrop-blur-md" />
                  <div className="flex gap-4 w-full justify-center">
                    <div className="w-1/3 h-32 bg-white/10 rounded-lg backdrop-blur-md" />
                    <div className="w-1/3 h-32 bg-white/10 rounded-lg backdrop-blur-md" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 md:-bottom-6 -inset-x-6 md:-inset-x-8 h-4 md:h-6 bg-[#bbb] rounded-b-xl shadow-lg" />
            </div>
          )}
        </div>

        {/* Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 border-b border-[#D8CEB3] pb-16">
          <div className="flex items-start gap-4">
            <span className="text-sm font-bold text-[#30231D] w-24 pt-2">Available On</span>
            <div className="flex flex-wrap gap-3">
              {project.platforms?.map(platform => (
                <div key={platform} className="flex items-center gap-2 border border-[#D8CEB3] rounded-full px-4 py-2 bg-white/50">
                  <span className="text-sm font-bold text-[#30231D]">{platform}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-sm font-bold text-[#30231D] w-24 pt-2">Built With</span>
            <div className="flex flex-wrap gap-3">
              {project.techStack?.map(tech => (
                <div key={tech} className="flex items-center gap-2 border border-[#D8CEB3] rounded-full px-4 py-2 bg-[#E9E0C8]/50">
                  <span className="text-sm font-bold text-[#30231D]">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16 md:space-y-24 mb-24">
          <Section title="OVERVIEW" content={project.overview || ""} subtitle={project.title} />
          <Section title="CHALLENGE" content={project.challenge || ""} subtitle={`What was the problem?`} />
          <Section title="SOLUTION" content={project.solution || ""} subtitle={`How we solved it`} />
        </div>

        {/* Next Project */}
        <div className="border-t border-[#D8CEB3] pt-16 mb-24">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative mb-8">
              <span className="text-[#D32F2F] font-serif italic text-xl transform -rotate-6 block mb-2 font-bold">
                Next Project I Built
              </span>
              <svg className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-12 text-[#F1C865]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20 Q 50 50, 90 20" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
              </svg>
            </div>
            
            <Link href={`/work-gallery/${nextProject.id}`} className="group">
              <div className="bg-[#E9E0C8]/30 hover:bg-[#E9E0C8] transition-colors rounded-2xl p-8 border border-[#D8CEB3]/50 flex items-center gap-8 w-full max-w-md">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: nextProject.primaryColor }}>
                  <span className="text-white font-bold">{nextProject.number}</span>
                </div>
                <div className="text-left">
                  <h3 className="font-serif text-2xl font-bold text-[#30231D] group-hover:text-[#D32F2F] transition-colors">{nextProject.title}</h3>
                  <span className="text-[#30231D]/60 text-sm font-bold">{nextProject.type}</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      <Contact />
    </article>
  );
}

function Section({ title, subtitle, content }: { title: string; subtitle: string; content: string }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
      <div className="lg:col-span-3">
        <h3 className="text-sm font-bold text-[#30231D] tracking-widest relative inline-block">
          {title}
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#F1C865]" />
        </h3>
      </div>
      <div className="lg:col-span-9">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#30231D] mb-6 leading-tight">
          {subtitle}
        </h2>
        <p className="text-[#30231D]/80 leading-relaxed md:text-lg">
          {content}
        </p>
      </div>
    </div>
  );
}
