"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { galleryProjects, ProjectType } from "@/data/work-gallery";
import { ProjectCard } from "./ProjectCard";

const filters: ("All" | ProjectType)[] = ["All", "Mobile", "UI Design", "Website"];

export function WorkGallery() {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectType>("All");

  const filteredProjects = galleryProjects.filter((project) => 
    activeFilter === "All" || project.type === activeFilter
  );

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-24 relative z-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-[#30231D]">
            Work<br />Gallery
          </h1>
          <p className="text-[#30231D]/70 font-medium max-w-xs text-sm md:text-base border-l-2 border-[#D8CEB3] pl-4 py-1">
            A collection of Things I have helped to build.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 bg-[#E9E0C8] p-1.5 rounded-full">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                activeFilter === filter
                  ? "bg-[#FCF9EC] text-[#30231D] shadow-sm"
                  : "text-[#6A5B53] hover:text-[#30231D]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-12 md:gap-20">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
