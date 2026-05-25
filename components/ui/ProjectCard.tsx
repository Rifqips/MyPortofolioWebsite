import { Project } from "@/types/portfolio";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/40
        p-8
        transition
        duration-300
        hover:-translate-y-1
        hover:border-sky-500
        hover:shadow-[0_0_40px_rgba(56,189,248,0.08)]
      "
    >
      <h3
        className="
          mb-4
          text-2xl
          font-semibold
          transition
          duration-300
          group-hover:text-sky-400
        "
      >
        {project.title}
      </h3>

      <p className="mb-6 leading-relaxed text-slate-400">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-3">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-slate-700
              px-4
              py-2
              text-sm
              text-slate-300
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
