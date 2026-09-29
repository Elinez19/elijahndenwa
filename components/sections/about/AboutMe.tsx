import { Polaroid } from "@/components/ui/polaroid";

export function AboutMe() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 md:px-20 pt-32 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="space-y-6">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">About Me</h1>
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#F1C865] rounded-full opacity-80 -z-10 transform -rotate-1" />
          </div>
          <div className="prose prose-lg text-foreground/80 space-y-6 font-medium max-w-xl">
            <p>
              I'm Elijah Ndenwa, a Software Developer specializing in Next.js, React, and Full-Stack Engineering.
            </p>
            <p>
              My journey in tech started around 2020, teaching frontend development and mentoring over 100 students to build real-world projects.
            </p>
            <p>
              That experience gave me a solid foundation. From there, I transitioned into building full-stack applications, leading the development of platforms like BimBeddings and healthcare ERP systems like EIMPACT CHART.
            </p>
            <p>
              Currently, I'm a Software Developer at Purplebee Technologies, building solutions like the Grace For Impact website that help improve global outreach.
            </p>
            <p>
              Whether it's designing a complex backend architecture or crafting a responsive user interface, I love turning ideas into elegant, accessible software solutions.
            </p>
          </div>
        </div>

        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full flex justify-center items-center mt-12 lg:mt-0">
          <div className="absolute w-[70%] sm:w-[60%] top-10 z-20">
            <Polaroid
              src="/profile.jpg"
              alt="Elijah Ndenwa"
              rotation={2}
              tapeTopRight
              caption="Building software that works."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
