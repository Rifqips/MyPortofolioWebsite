import Image from "next/image";
import Link from "next/link";

import Project from "@/models/Project";
import { connectMongoDB } from "@/lib/mongodb";
import DeleteProjectButton from "@/components/admin/DeleteProjectButton";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminDashboardPage() {
  await connectMongoDB();

  const projects = await Project.find({}).sort({ createdAt: -1 }).lean();

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="mb-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 font-mono text-xs text-sky-400">
                Admin Dashboard
              </p>

              <h1 className="text-2xl font-bold md:text-3xl">
                Project Management
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                Manage portfolio projects, images, tech stack, and publication status.
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/admin/dashboard/create"
                className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Add Project
              </Link>

              <LogoutButton />
            </div>
          </div>
        </section>

        {projects.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/50 p-10 text-center">
            <h2 className="text-xl font-semibold">No projects yet</h2>
            <p className="mt-2 text-sm text-slate-400">
              Start by creating your first portfolio project.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project: any) => (
              <article
                key={project._id.toString()}
                className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-sky-500/10"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <Badge color="sky">{project.category}</Badge>

                    <Badge color={project.isPublished ? "green" : "red"}>
                      {project.isPublished ? "Published" : "Draft"}
                    </Badge>

                    {project.isFeatured && (
                      <Badge color="yellow">Featured</Badge>
                    )}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="line-clamp-2 text-xl font-bold leading-snug">
                        {project.title}
                      </h2>

                      <p className="mt-1 text-sm text-sky-300">
                        {project.year || "2026"}
                      </p>
                    </div>

                    <div className="flex shrink-0 gap-2">
                      <Link
                        href={`/admin/dashboard/edit/${project._id.toString()}`}
                        className="rounded-xl border border-slate-700 px-3 py-2 text-xs text-slate-300 transition hover:border-sky-500 hover:text-sky-400"
                      >
                        Edit
                      </Link>

                      <DeleteProjectButton id={project._id.toString()} />
                    </div>
                  </div>

                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  {project.techStack?.length > 0 && (
                    <div className="mt-5">
                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Tech Stack
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 8).map((tech: string) => (
                          <span
                            key={tech}
                            className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs text-sky-300"
                          >
                            {tech}
                          </span>
                        ))}

                        {project.techStack.length > 8 && (
                          <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">
                            +{project.techStack.length - 8}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {project.features?.length > 0 && (
                    <div className="mt-5">
                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Features
                      </h3>

                      <ul className="space-y-2 text-sm text-slate-300">
                        {project.features.slice(0, 3).map((feature: string) => (
                          <li
                            key={feature}
                            className="line-clamp-1 rounded-xl border border-slate-800 bg-slate-950/50 px-3 py-2"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-800 pt-5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-white hover:text-white"
                      >
                        Github
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function Badge({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "sky" | "green" | "red" | "yellow";
}) {
  const styles = {
    sky: "bg-sky-500/15 text-sky-300",
    green: "bg-emerald-500/15 text-emerald-300",
    red: "bg-red-500/15 text-red-300",
    yellow: "bg-yellow-500/15 text-yellow-300",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold capitalize backdrop-blur ${styles[color]}`}
    >
      {children}
    </span>
  );
}