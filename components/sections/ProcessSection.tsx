"use client";

import { motion } from "framer-motion";
import ProcessCard from "../cards/ProcessCard";
import { processSteps } from "@/constants/process";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="section-spacing section-anchor relative overflow-hidden"
    >
      <div className="absolute left-20 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="container-layout">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-cyan-300">
            Work Process
          </span>

          <h2 className="title-lg mb-6">
            From Idea
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Into Reality
            </span>
          </h2>

          <p className="subtitle">
            A streamlined development process keeps communication transparent,
            timelines predictable, and delivers high-quality results from start
            to finish.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Line */}

          <div className="absolute left-0 right-0 top-10 hidden h-[2px] bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 lg:block" />

          <div className="grid gap-10 lg:grid-cols-5">
            {processSteps.map((item, index) => (
              <ProcessCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
