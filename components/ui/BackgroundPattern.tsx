"use client";

import { motion } from "framer-motion";

export function BackgroundPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[40rem] h-[40rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] rounded-full bg-primary/5 blur-3xl" />
      
      {/* Subtle geometric pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.03] text-foreground"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="pattern-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0 40V0H40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern-grid)" />
      </svg>
    </div>
  );
}
