"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import { ArrowRight } from "lucide-react";

export default function ProjectsGrid() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto" id="projects">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
          Featured Work
        </h2>
        <div className="h-1 w-20 bg-emerald-500/50 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 50, damping: 20, mass: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            onClick={() => setActiveProject(project)}
            className="group cursor-pointer relative bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-8 hover:bg-zinc-800/50 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-lg mb-6 line-clamp-2">
                {project.tagline}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-mono text-zinc-500 bg-zinc-950/50 px-2 py-1 rounded border border-zinc-800/50"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs font-mono text-zinc-500 bg-zinc-950/50 px-2 py-1 rounded border border-zinc-800/50">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            </div>
            
            <div className="mt-auto flex items-center text-emerald-500 font-medium group-hover:gap-3 transition-all">
              <span>View Details</span>
              <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal 
        project={activeProject} 
        onClose={() => setActiveProject(null)} 
      />
    </section>
  );
}
