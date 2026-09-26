"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, FileText, ShieldCheck, Zap, Rocket } from "lucide-react";

export function Hero() {
  const highlights = [
    { label: "Web & App Development", icon: Code2 },
    { label: "Product Poster Creatives", icon: Palette },
    { label: "CV Resume Design", icon: FileText },
  ];

  return (
    <section id="top" className="grid-backdrop relative overflow-hidden pb-16 pt-10 sm:pt-14 lg:pb-20">
      <div className="hero-aura" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(196,146,58,0.30)] bg-[#fdf8ee]/90 px-4 py-1.5 shadow-xs backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c4923a] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c4923a]" />
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8b6914]">
            Zynx dev — Your Tech Partner
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-6 max-w-4xl text-2xl font-extrabold tracking-tight text-bright sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]"
        >
          Web, App & Creative Solutions <br />
          <span className="bg-linear-to-r from-[#111111] via-[#c4923a] to-[#8b6914] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] inline-block">
            Built for Scalable Growth
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-copy-muted sm:text-lg md:text-xl"
        >
          A results-driven team focused on performance and growth. <br />
          Delivering custom software, product creatives & resume designs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
        >
          <Link
            className="group relative inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-[#c4923a] via-[#b8860b] to-[#8b6914] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_6px_25px_rgba(196,146,58,0.40)] active:scale-95 sm:w-auto"
            href="/contact"
          >
            <span>Book a scoping call</span>
            <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/12 bg-white/90 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-copy shadow-2xs transition-all duration-300 hover:border-[#c4923a]/60 hover:bg-[#fdf8ee] hover:text-bright active:scale-95 sm:w-auto"
            href="/work"
          >
            <span>See our work</span>
            <ArrowRight className="h-4 w-4 text-[#8b6914]" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto max-w-3xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {highlights.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="group flex items-center gap-2 rounded-full border border-black/8 bg-white/80 px-4 py-2 text-xs font-medium text-copy shadow-2xs backdrop-blur-md transition-all duration-300 hover:border-[#c4923a]/50 hover:bg-[#fdf8ee] sm:text-sm"
              >
                <Icon className="h-4 w-4 text-[#c4923a] transition-transform duration-300 group-hover:scale-110" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-5 sm:gap-6 font-mono text-[11px] uppercase tracking-wider text-copy-muted">
            <span className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-[#c4923a]" /> Fast Execution
            </span>
            <span className="text-black/20">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#8b6914]" /> Production Grade
            </span>
            <span className="text-black/20">•</span>
            <span className="flex items-center gap-1.5">
              <Rocket className="h-3.5 w-3.5 text-[#b8860b]" /> 100% Scalable
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
