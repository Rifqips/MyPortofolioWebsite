import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Project from "@/models/Project";
import { connectMongoDB } from "@/lib/mongodb";
import { Project as ProjectType } from "@/types/portfolio";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function ProjectDetailPage({ params }: Props) {
  await connectMongoDB();

  const { slug } = await params;

  const project = await Project.findOne({ slug }).lean<ProjectType>();

  if (!project) {
    notFound();
  }

  const toChips = (items?: string[]) => {
    return items
      ?.flatMap((item) => item.split(","))
      .map((item) => item.trim())
      .filter(Boolean);
  };

  return (
    <main className="background-grid min-h-screen pt-24">
      <div className="background-glow" />

      <section className="container-layout pb-24">
        <Link
          href="/"
          className="mb-8 inline-flex text-sm text-slate-400 transition hover:text-sky-400"
        >
          ← Back to Home
        </Link>

        <div className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <p className="font-mono text-sm text-sky-400">Project Detail</p>

            <span className="inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium capitalize text-sky-300">
              {project.category}
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            {project.title}
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-400">
            {project.longDescription}
          </p>
        </div>

        <div className="relative mb-12 h-[260px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 md:h-[480px]">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-10">
            <div>
              <h2 className="mb-5 text-2xl font-semibold">Features</h2>

              <div className="flex flex-wrap gap-3">
                {toChips(project.features)?.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {project.sections?.length > 0 && (
              <div>
                <h2 className="mb-5 text-2xl font-semibold">Project Details</h2>

                <div className="space-y-5">
                  {project.sections.map((section) => (
                    <div
                      key={section.title}
                      className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
                    >
                      <h3 className="mb-4 text-lg font-semibold text-white">
                        {section.title}
                      </h3>

                      <div className="flex flex-wrap gap-3">
                        {toChips(section.items)?.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="h-fit rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="mb-5 text-xl font-semibold">Tech Stack</h2>

            <div className="mb-8 flex flex-wrap gap-3">
              {toChips(project.techStack)?.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-sky-500/30
                    bg-sky-500/10
                    px-4
                    py-2
                    text-sm
                    text-sky-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-700 px-5 py-3 text-center text-sm font-medium text-slate-300 transition hover:border-sky-500 hover:text-sky-400"
                >
                  View GitHub
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-sky-500 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-sky-400"
                >
                  Live Demo
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
