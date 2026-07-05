"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FaqItem from "../cards/FaqItem";
import { faqs } from "@/constants/faq";

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(1);

  return (
    <section
      id="faq"
      className="section-spacing section-anchor relative overflow-hidden"
    >
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="container-layout">
        <div className="grid items-start gap-20 lg:grid-cols-[420px_1fr]">
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
          >
            <span className="mb-5 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
              FAQ
            </span>

            <h2 className="title-lg mb-6">
              Frequently
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Asked Questions
              </span>
            </h2>

            <p className="subtitle">
              Here are some of the most frequently asked questions before
              starting a project.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {faqs.map((item) => (
              <FaqItem
                key={item.id}
                title={item.question}
                description={item.answer}
                open={active === item.id}
                onClick={() => setActive(active === item.id ? null : item.id)}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}

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
          className="glass mt-20 rounded-[36px] p-12 text-center"
        >
          <h3 className="mb-5 text-4xl font-bold">Still Have Questions?</h3>

          <p className="mx-auto mb-8 max-w-2xl leading-8 text-slate-400">
            Feel free to reach out anytime. I offer a free consultation to
            discuss your ideas, answer your questions, and help you find the
            best solution for your project.
          </p>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            className="btn-primary"
          >
            Schedule a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
