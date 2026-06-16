"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import { X, ExternalLink, Code } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header / Accent bar */}
            <div className="h-32 bg-gradient-to-br from-emerald-500/20 to-zinc-900/50 w-full relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 cursor-pointer bg-black/40 hover:bg-black/60 rounded-full text-zinc-300 transition-colors backdrop-blur-sm"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 md:p-10 flex-1 overflow-y-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-2">
                {project.title}
              </h2>
              <p className="text-emerald-400 font-medium text-lg mb-8">
                {project.tagline}
              </p>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                  Deep Dive
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  {project.deepDive}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-zinc-900 text-zinc-300 text-sm rounded-lg border border-zinc-800 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-zinc-800/50">
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="flex items-center justify-center cursor-pointer gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 font-medium rounded-xl hover:bg-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                  <Code size={18} />
                  View Source
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="flex items-center justify-center cursor-pointer gap-2 px-6 py-3 bg-transparent text-zinc-300 font-medium rounded-xl border border-zinc-800 hover:bg-zinc-900 transition-all duration-300 hover:border-zinc-700"
                >
                  <ExternalLink size={18} />
                  Live Demo (if available)
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
