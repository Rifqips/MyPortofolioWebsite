"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types/portfolio";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const MAX_VISIBLE = 5;

  const techStacks =
    project.tech_stack
      ?.flatMap((item) => item.split(","))
      .map((item) => item.trim())
      .filter(Boolean) ?? [];

  const visible = techStacks.slice(0, MAX_VISIBLE);
  const hidden = techStacks.length - MAX_VISIBLE;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="
      group
      relative
      block
      h-full
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-violet-500/40
      hover:shadow-[0_30px_80px_rgba(124,58,237,.18)]
      "
    >
      {/* IMAGE */}

      <div className="relative h-72 overflow-hidden">
        <Image
          src={project.image_url}
          alt={project.title}
          fill
          className="
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
          "
        />

        {/* overlay */}

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#050816]
          via-[#050816]/40
          to-transparent
          "
        />

        {/* category */}

        <div className="absolute left-6 top-6">
          <span
            className="
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/10
            px-4
            py-2
            text-xs
            font-medium
            uppercase
            tracking-widest
            text-cyan-300
            "
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* CONTENT */}

      <div className="space-y-6 p-8">
        <div>
          <h3
            className="
            text-3xl
            font-bold
            tracking-tight
            transition
            group-hover:text-violet-300
            "
          >
            {project.title}
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            {project.description}
          </p>
        </div>

        {/* TECH */}

        <div className="flex flex-wrap gap-2">
          {visible.map((tech) => (
            <span
              key={tech}
              className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-3
              py-2
              text-xs
              font-medium
              text-slate-300
              transition
              hover:border-violet-500/30
              hover:bg-violet-500/10
              "
            >
              {tech}
            </span>
          ))}

          {hidden > 0 && (
            <span
              className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-3
              py-2
              text-xs
              text-slate-400
              "
            >
              +{hidden}
            </span>
          )}
        </div>

        {/* FOOTER */}

        <div
          className="
          flex
          items-center
          justify-between
          border-t
          border-white/5
          pt-6
          "
        >
          <span
            className="
            text-sm
            font-medium
            text-slate-300
            "
          >
            View Case Study
          </span>

          <div
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-violet-600
            via-blue-600
            to-cyan-500
            transition-all
            duration-300
            group-hover:rotate-45
            group-hover:scale-110
            "
          >
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>

      {/* Glow */}

      <div
        className="
        pointer-events-none
        absolute
        inset-0
        rounded-[32px]
        opacity-0
        transition
        duration-500
        group-hover:opacity-100
        "
      >
        <div
          className="
          absolute
          -right-16
          -top-16
          h-48
          w-48
          rounded-full
          bg-violet-500/20
          blur-[90px]
          "
        />

        <div
          className="
          absolute
          -bottom-20
          left-0
          h-56
          w-56
          rounded-full
          bg-cyan-500/15
          blur-[120px]
          "
        />
      </div>
    </Link>
  );
}