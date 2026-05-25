import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/constants/portfolio";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

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
          <p className="mb-4 font-mono text-sm text-sky-400">
            Project Detail
          </p>

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
          <div>
            <h2 className="mb-5 text-2xl font-semibold">Features</h2>

            <ul className="space-y-4">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-slate-300"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="mb-5 text-xl font-semibold">Tech Stack</h2>

            <div className="mb-8 flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
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