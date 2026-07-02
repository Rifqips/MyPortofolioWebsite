"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, BriefcaseBusiness, Smartphone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 lg:pt-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[170px]" />
      </div>

      <div className="container-layout grid items-center gap-16 lg:grid-cols-2">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}

          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

            <span className="text-sm text-slate-300">
              Available for Freelance Projects
            </span>
          </div>

          {/* Title */}

          <h1 className="title-xl mb-8">
            Crafting
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Products
            </span>
            <br />
            That Scale.
          </h1>

          <p className="subtitle max-w-xl mb-10">
            I build modern Android, Web and Backend applications focused on
            performance, clean architecture and delightful user experiences.
          </p>

          {/* CTA */}

          <div className="flex flex-wrap gap-5">
            <Link href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={18} className="ml-2" />
            </Link>

            <Link href="#contact" className="btn-secondary">
              Let's Talk
            </Link>
          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-3 gap-5">
            <div className="card p-6">
              <h2 className="text-4xl font-bold text-white">10+</h2>

              <p className="mt-2 text-sm text-slate-400">Projects</p>
            </div>

            <div className="card p-6">
              <h2 className="text-4xl font-bold text-white">3+</h2>

              <p className="mt-2 text-sm text-slate-400">Years</p>
            </div>

            <div className="card p-6">
              <h2 className="text-4xl font-bold text-white">15+</h2>

              <p className="mt-2 text-sm text-slate-400">Technologies</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative"
        >
          {/* Laptop */}

          <div className="glass mx-auto max-w-xl rounded-[36px] p-5">
            <div className="rounded-[28px] bg-[#09090B] p-6">
              {/* Header */}

              <div className="mb-6 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              {/* Fake Dashboard */}

              <div className="space-y-5">
                <div className="h-52 rounded-3xl bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-900 p-5">
                    <Code2 className="mb-4 text-violet-400" />

                    <p className="font-semibold">Clean Code</p>

                    <span className="text-sm text-slate-400">
                      Modern Architecture
                    </span>
                  </div>

                  <div className="rounded-2xl bg-slate-900 p-5">
                    <BriefcaseBusiness className="mb-4 text-cyan-400" />

                    <p className="font-semibold">Business</p>

                    <span className="text-sm text-slate-400">
                      Enterprise Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="
              glass
              absolute
              -left-10
              top-12
              rounded-3xl
              p-5
            "
          >
            <Smartphone className="mb-3 text-cyan-400" />

            <p className="font-semibold">Android</p>

            <span className="text-xs text-slate-400">Kotlin • Compose</span>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
              glass
              absolute
              -right-6
              bottom-10
              rounded-3xl
              p-5
            "
          >
            <Code2 className="mb-3 text-violet-400" />

            <p className="font-semibold">Fullstack</p>

            <span className="text-xs text-slate-400">Next.js</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
