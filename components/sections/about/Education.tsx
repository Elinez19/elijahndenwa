import { Polaroid } from "@/components/ui/polaroid";
import { GraduationCap, Award, Briefcase, Users } from "lucide-react";

export function Education() {
  return (
    <section className="relative w-full py-24 bg-[#3E2F26]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-20 mix-blend-overlay"></div>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-background leading-tight">
                Full-Stack Engineer.<br />
                Tech Educator.
              </h2>
              <div className="w-48 h-2 bg-[#F1C865] rounded-full transform -rotate-1" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex items-start gap-4">
                <Briefcase className="w-8 h-8 text-[#F1C865] mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-background text-xl font-serif">5+ Years Experience</h3>
                  <p className="text-background/70 font-medium">Frontend & Backend</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-[#F1C865] mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-background text-xl font-serif">100+ Students</h3>
                  <p className="text-background/70 font-medium">Mentored in Web Dev</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-[80%] sm:w-[60%] lg:w-[70%]">
              <Polaroid
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=600&fit=crop"
                alt="Workspace"
                rotation={5}
                tapeTopLeft
                tapeBottomRight
                caption="Building the next big thing"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
