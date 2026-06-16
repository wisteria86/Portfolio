"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Layers, Cpu, Cloud } from "lucide-react";

const getIconForCategory = (title: string) => {
  if (title.includes("Languages")) return <Layers className="text-emerald-400 mb-4" size={32} />;
  if (title.includes("AI")) return <Cpu className="text-cyan-400 mb-4" size={32} />;
  return <Cloud className="text-indigo-400 mb-4" size={32} />;
};

export default function SkillsGrid() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative z-10" id="skills">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
          Technical Arsenal
        </h2>
        <div className="h-1 w-20 bg-emerald-500/50 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 50, damping: 20, mass: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md overflow-hidden hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300"
          >
            {/* Subtle Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {getIconForCategory(category.title)}
              <h3 className="text-xl font-semibold text-zinc-200 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-zinc-800/50 text-zinc-300 text-sm rounded-lg border border-zinc-700/50 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
