"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Code, Briefcase, Copy, Check, X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const contacts = [
    {
      label: "Email",
      value: "protocolcyberia@gmail.com",
      icon: <Mail className="text-emerald-400" size={24} />
    },
    {
      label: "GitHub",
      value: "https://github.com/wisteria86",
      icon: <Code className="text-zinc-400" size={24} />
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/abdulrehman-551a58233/",
      icon: <Briefcase className="text-indigo-400" size={24} />
    }
  ];

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/70 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-[0_0_50px_rgba(16,185,129,0.1)] overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 cursor-pointer text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-bold text-zinc-100 mb-2">Get in Touch</h2>
            <p className="text-zinc-400 mb-8">Feel free to reach out across any of these platforms.</p>

            <div className="flex flex-col gap-4">
              {contacts.map((contact, index) => (
                <div
                  key={contact.label}
                  className="flex items-center justify-between p-4 bg-zinc-950/50 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-colors group"
                >
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div className="p-3 bg-zinc-900 rounded-xl group-hover:scale-110 transition-transform">
                      {contact.icon}
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">{contact.label}</span>
                      <span className="text-zinc-200 truncate">{contact.value}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(contact.value, index)}
                    className="p-3 ml-4 cursor-pointer bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-colors text-zinc-400 flex-shrink-0"
                    title="Copy to clipboard"
                  >
                    {copiedIndex === index ? (
                      <Check size={20} className="text-emerald-500" />
                    ) : (
                      <Copy size={20} />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
