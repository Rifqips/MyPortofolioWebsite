"use client";

import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  Cloud,
} from "lucide-react";

import FadeIn from "../animations/FadeIn";
import SectionHeading from "../ui/SectionHeading";

const skillGroups = [
  {
    title: "Android",
    icon: Smartphone,
    skills: ["Kotlin", "Jetpack Compose", "XML", "MVVM", "Clean Architecture"],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Spring Boot", "REST API", "JWT", "Ktor"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Room", "Supabase"],
  },
  {
    title: "Tools",
    icon: Code2,
    skills: ["Git", "GitHub", "Figma", "Postman", "Android Studio", "VS Code"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["Cloudinary", "Vercel", "Docker", "Cloudflare", "CI/CD"],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-anchor section-spacing relative overflow-hidden border-t border-white/5"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="container-layout">
        <SectionHeading title="Skills & Technologies" subtitle="Tech Stack" />

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <FadeIn key={group.title} delay={index * 0.08}>
                <div
                  className="
                    group
                    h-full
                    rounded-[30px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-violet-500/30
                    hover:shadow-[0_20px_60px_rgba(124,58,237,.15)]
                  "
                >
                  <div
                    className="
                      mb-6
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
                    <Icon size={26} />
                  </div>

                  <h3 className="mb-6 text-2xl font-semibold">{group.title}</h3>

                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
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
                          duration-300
                          hover:border-cyan-400/40
                          hover:bg-cyan-500/10
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
