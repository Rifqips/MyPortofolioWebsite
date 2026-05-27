"use client";

import { motion } from "framer-motion";

const techStacks = [
  "Modern Digital Solutions",
  "Scalable System Design",
  "Secure Application Development",
  "Responsive User Interface",
  "Performance Optimization",
  "Business Automation",
];

export default function FloatingTechStack() {
  return (
    <div className="relative hidden min-h-[420px] lg:block">
      {techStacks.map((tech, index) => (
        <motion.div
          key={tech}
          animate={{
            y: [0, -14, 0],
          }}
          transition={{
            duration: 3 + index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`
            absolute
            rounded-2xl
            border
            border-slate-700
            bg-slate-900/70
            px-5
            py-3
            text-sm
            font-medium
            text-slate-200
            shadow-[0_0_30px_rgba(56,189,248,0.08)]
            backdrop-blur-md
            ${index === 0 ? "left-8 top-8" : ""}
            ${index === 1 ? "right-4 top-20" : ""}
            ${index === 2 ? "left-20 top-40" : ""}
            ${index === 3 ? "right-16 top-56" : ""}
            ${index === 4 ? "left-4 top-72" : ""}
            ${index === 5 ? "right-8 bottom-8" : ""}
          `}
        >
          {tech}
        </motion.div>
      ))}
    </div>
  );
}