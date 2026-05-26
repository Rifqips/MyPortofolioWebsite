import Image from "next/image";
import Link from "next/link";

import { Project } from "@/types/portfolio";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/40
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-sky-500
        hover:shadow-[0_0_40px_rgba(56,189,248,0.08)]
      "
    >
      <div className="relative h-52 overflow-hidden bg-slate-900">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-8">
        <span className="mb-4 inline-flex w-fit rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium capitalize text-sky-300">
          {project.category}
        </span>

        <h3 className="mb-4 text-2xl font-semibold transition duration-300 group-hover:text-sky-400">
          {project.title}
        </h3>

        <p className="mb-6 leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}