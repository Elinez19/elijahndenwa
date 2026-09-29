"use client";

import { useRef, useState, useEffect } from "react";

import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 relative"
        >
          <h2 className="font-serif text-4xl font-bold text-foreground mb-2">What People<br/>Say</h2>
          <div className="h-1 w-20 bg-[#F1C865] rounded-full mt-4" />
          
          {/* Red arrow pointing to sticky notes */}
          <svg className="absolute -bottom-16 left-1/2 w-20 h-20 text-[#E53E3E] hidden md:block transform rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
             <path d="M20,20 Q50,40 80,80" />
             <path d="M55,80 L80,80 L85,55" />
          </svg>
        </motion.div>
      </div>

      <div className="w-full">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 py-12 px-4 sm:px-6 lg:px-8 xl:px-[calc(50vw-34rem)] hide-scrollbar pb-16">
            <motion.div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-[#A7C7E7] p-8 rounded-sm shadow-xl transform md:rotate-[-2deg] relative" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}>
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 shadow-sm rotate-[4deg] backdrop-blur-sm" />
               <p className="font-medium text-[#1E3A5F] text-lg leading-relaxed mb-6 mt-4">"Elijah's work on our medical records system was outstanding. He delivered exactly what we needed with great attention to detail."</p>
               <div className="font-bold text-[#1E3A5F]">Sarah J.</div>
            </motion.div>
            <motion.div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-[#F5D17E] p-8 rounded-sm shadow-xl transform md:rotate-[3deg] relative mt-4 md:mt-12" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{delay: 0.1}}>
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 shadow-sm rotate-[-2deg] backdrop-blur-sm" />
               <p className="font-medium text-[#5C4321] text-lg leading-relaxed mb-6 mt-4">"A fantastic developer who understands both code and design. Highly recommended for any complex frontend work."</p>
               <div className="font-bold text-[#5C4321]">David M.</div>
            </motion.div>
            <motion.div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-[#FF9AAA] p-8 rounded-sm shadow-xl transform md:rotate-[-1deg] relative" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{delay: 0.2}}>
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 shadow-sm rotate-[1deg] backdrop-blur-sm" />
               <p className="font-medium text-[#5F1E2A] text-lg leading-relaxed mb-6 mt-4">"The e-commerce platform he built for us completely transformed our business operations. Fast, reliable, and looks great."</p>
               <div className="font-bold text-[#5F1E2A]">Michael B.</div>
            </motion.div>
            <motion.div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-[#B5EAD7] p-8 rounded-sm shadow-xl transform md:rotate-[2deg] relative mt-4 md:mt-8" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{delay: 0.3}}>
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 shadow-sm rotate-[3deg] backdrop-blur-sm" />
               <p className="font-medium text-[#2C5F4E] text-lg leading-relaxed mb-6 mt-4">"Super communicative and delivered ahead of schedule. The animations and UI details he added really set our app apart."</p>
               <div className="font-bold text-[#2C5F4E]">Jessica T.</div>
            </motion.div>
            <motion.div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-[#E2C2FF] p-8 rounded-sm shadow-xl transform md:rotate-[-3deg] relative" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{delay: 0.4}}>
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 shadow-sm rotate-[-4deg] backdrop-blur-sm" />
               <p className="font-medium text-[#4A2E6B] text-lg leading-relaxed mb-6 mt-4">"He has a very rare mix of engineering rigor and design sense. Our conversion rates increased by 40% after his redesign."</p>
               <div className="font-bold text-[#4A2E6B]">Robert K.</div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
