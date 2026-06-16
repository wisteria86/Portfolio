"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Code, ChevronDown } from "lucide-react";
import Link from "next/link";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 text-center max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20, mass: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-10">
            <span className="text-zinc-100">Abdul</span>
            <span className="text-emerald-400">Rehman</span>
          </h1>

          <h2 className="text-xl md:text-3xl font-medium mb-8 leading-relaxed">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-emerald-400">
              Software Engineer & AI Specialist
            </span>
            <br className="hidden md:block" />
            <span className="text-zinc-400 text-lg md:text-2xl mt-6 block">
              Crafting production backend systems and cutting-edge Agentic AI frameworks.
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20, mass: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <motion.button
            onClick={() => setIsContactModalOpen(true)}
            whileHover={{ scale: 1.02, y: -4 }}
            className="flex items-center gap-2 px-8 py-4 cursor-pointer bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-300 backdrop-blur-md font-medium"
          >
            <Mail size={20} />
            Contact Me
          </motion.button>

          <motion.a
            href="https://github.com/wisteria86"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -4 }}
            className="flex items-center gap-2 px-8 py-4 cursor-pointer bg-zinc-900/50 text-zinc-300 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all duration-300 backdrop-blur-md font-medium"
          >
            <Code size={20} />
            GitHub
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  );
}
