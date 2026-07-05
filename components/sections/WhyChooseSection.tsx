"use client";

import { motion } from "framer-motion";
import WhyChooseCard from "../cards/WhyChooseCard";
import { whyChooseItems } from "@/constants/whyChoose";

export default function WhyChooseSection() {
  return (
    <section
      id="why"
      className="section-spacing section-anchor relative overflow-hidden"
    >
      <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="absolute -right-20 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />

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
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-5 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            Why Choose Me
          </span>

          <h2 className="title-lg mb-6">
            More Than
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Just Writing Code
            </span>
          </h2>

          <p className="subtitle">
            I don't just build websites and applications—I create scalable,
            secure, and high-performance digital solutions designed to support
            your business growth.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseItems.map((item, index) => (
            <WhyChooseCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
          }}
          className="glass mt-20 rounded-[36px] p-12"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="mb-5 text-4xl font-bold">
                Let's Build Something Amazing Together.
              </h3>

              <p className="leading-8 text-slate-400">
                Whether you need a business website, a native Android
                application, a custom admin dashboard, or a complete software
                solution, I can help bring your ideas to life.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-5">
              <div
                className="
      card
      rounded-[20px]
      p-4
      text-center
      md:rounded-[24px]
      md:p-6
    "
              >
                <h3 className="text-3xl font-bold text-cyan-400 md:text-5xl">
                  10+
                </h3>

                <p className="mt-2 text-xs text-slate-400 md:mt-3 md:text-base">
                  Projects
                </p>
              </div>

              <div
                className="
      card
      rounded-[20px]
      p-4
      text-center
      md:rounded-[24px]
      md:p-6
    "
              >
                <h3 className="text-3xl font-bold text-violet-400 md:text-5xl">
                  3+
                </h3>

                <p className="mt-2 text-xs text-slate-400 md:mt-3 md:text-base">
                  Years
                </p>
              </div>

              <div
                className="
      card
      rounded-[20px]
      p-4
      text-center
      md:rounded-[24px]
      md:p-6
    "
              >
                <h3 className="text-3xl font-bold text-cyan-400 md:text-5xl">
                  15+
                </h3>

                <p className="mt-2 text-xs text-slate-400 md:mt-3 md:text-base">
                  Tech Stack
                </p>
              </div>

              <div
                className="
      card
      rounded-[20px]
      p-4
      text-center
      md:rounded-[24px]
      md:p-6
    "
              >
                <h3 className="text-3xl font-bold text-violet-400 md:text-5xl">
                  100%
                </h3>

                <p className="mt-2 text-xs text-slate-400 md:mt-3 md:text-base">
                  Source Code
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
