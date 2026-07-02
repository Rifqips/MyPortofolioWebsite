"use client";

import { Briefcase, Code2, MapPin, Sparkles } from "lucide-react";

import FadeIn from "../animations/FadeIn";
import SectionHeading from "../ui/SectionHeading";

const technologies = [
  "Kotlin",
  "Jetpack Compose",
  "Next.js",
  "Spring Boot",
  "MongoDB",
  "Supabase",
  "Docker",
  "Git",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-anchor section-spacing relative overflow-hidden border-t border-white/5"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="container-layout">
        <SectionHeading subtitle="Introduction" title="About Me" />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <FadeIn direction="left">
            <div className="space-y-8">
              <div
                className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-500/20
                bg-emerald-500/10
                px-4
                py-2
                text-sm
                text-emerald-300
                "
              >
                <Sparkles size={16} />
                Available for Freelance
              </div>

              <h2
                className="
                text-5xl
                font-bold
                leading-tight
                tracking-tight
                lg:text-6xl
                "
              >
                Software Engineer
                <br />
                crafting digital
                <br />
                experiences.
              </h2>

              <p
                className="
                max-w-xl
                text-lg
                leading-8
                text-slate-400
                "
              >
                Passionate software engineer focused on Android, Web, and
                Backend development. I enjoy building scalable applications with
                clean architecture, modern technologies, and exceptional user
                experiences.
              </p>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                    text-sm
                    text-slate-300
                    transition
                    hover:border-violet-500/30
                    hover:bg-violet-500/10
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* RIGHT */}

          <FadeIn direction="right">
            <div className="grid gap-6">
              <div
                className="
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-violet-600
                    via-blue-600
                    to-cyan-500
                    "
                  >
                    <Briefcase size={26} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">Experience</h3>

                    <p className="text-slate-400">
                      Building scalable business applications.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-violet-600
                    via-blue-600
                    to-cyan-500
                    "
                  >
                    <Code2 size={26} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      Clean Architecture
                    </h3>

                    <p className="text-slate-400">
                      Modern, maintainable and scalable codebase.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-violet-600
                    via-blue-600
                    to-cyan-500
                    "
                  >
                    <MapPin size={26} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      Based in Jakarta, Indonesia
                    </h3>

                    <p className="text-slate-400">
                      Open to remote collaboration worldwide.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-5">
                <div
                  className="
                  rounded-[24px]
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  text-center
                  "
                >
                  <h3 className="text-4xl font-bold">10+</h3>

                  <p className="mt-2 text-sm text-slate-400">Projects</p>
                </div>

                <div
                  className="
                  rounded-[24px]
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  text-center
                  "
                >
                  <h3 className="text-4xl font-bold">3+</h3>

                  <p className="mt-2 text-sm text-slate-400">Years</p>
                </div>

                <div
                  className="
                  rounded-[24px]
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  text-center
                  "
                >
                  <h3 className="text-4xl font-bold">15+</h3>

                  <p className="mt-2 text-sm text-slate-400">Technologies</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
