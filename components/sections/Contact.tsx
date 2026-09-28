"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";
import { CtaButton } from "@/components/ui/CtaButton";

export function Contact() {
  return (
    <section id="contact" className="relative mt-24">
      {/* Torn Paper Top Edge */}
      <div className="absolute -top-3 left-0 w-full h-6 bg-background z-10" style={{ clipPath: "polygon(0 100%, 2% 40%, 4% 100%, 6% 30%, 8% 100%, 10% 50%, 12% 100%, 14% 30%, 16% 100%, 18% 60%, 20% 100%, 22% 40%, 24% 100%, 26% 30%, 28% 100%, 30% 70%, 32% 100%, 34% 40%, 36% 100%, 38% 30%, 40% 100%, 42% 50%, 44% 100%, 46% 40%, 48% 100%, 50% 60%, 52% 100%, 54% 30%, 56% 100%, 58% 50%, 60% 100%, 62% 40%, 64% 100%, 66% 30%, 68% 100%, 70% 70%, 72% 100%, 74% 40%, 76% 100%, 78% 30%, 80% 100%, 82% 50%, 84% 100%, 86% 40%, 88% 100%, 90% 60%, 92% 100%, 94% 30%, 96% 100%, 98% 40%, 100% 100%, 100% 0, 0 0)" }}></div>
      
      <div className="bg-[#3B312A] text-[#FCF9EC] pt-24 pb-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Building Something?</h2>
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-[2px] w-12 bg-[#F1C865]" />
              <h3 className="font-serif text-3xl md:text-5xl font-bold text-[#FCF9EC]">Let's Talk.</h3>
              <div className="h-[2px] w-12 bg-[#F1C865]" />
            </div>
            
            <CtaButton href={`mailto:${portfolioData.contact.email}`} variant="light" withArrow className="mt-4">
              Book A Call
            </CtaButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
