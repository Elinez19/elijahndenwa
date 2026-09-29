import { AboutMe } from "@/components/sections/about/AboutMe";
import { Education } from "@/components/sections/about/Education";
import { OutsideCode } from "@/components/sections/about/OutsideCode";
import { CTA } from "@/components/sections/about/CTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <AboutMe />
      <ScrollReveal>
        <Education />
      </ScrollReveal>
      <ScrollReveal>
        <OutsideCode />
      </ScrollReveal>
      <ScrollReveal>
        <CTA />
      </ScrollReveal>
    </main>
  );
}
