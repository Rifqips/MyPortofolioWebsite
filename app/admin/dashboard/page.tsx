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
      <div className="mx-auto max-w-5xl">
        <section className="mb-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 font-mono text-xs text-sky-400">
                Admin Dashboard
              </p>

              <h1 className="text-2xl font-bold md:text-3xl">
                Project Management
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
                Manage portfolio projects, images, tech stack, publication
                status, and featured projects.
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
          <div className="space-y-5">
            {projects.map((project: any) => (
              <article
                key={project._id.toString()}
                className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/10 transition hover:border-sky-500/40"
              >
                <div className="grid md:grid-cols-[260px_1fr]">
                  <div className="relative h-52 bg-slate-900 md:h-full md:min-h-[300px]">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="min-w-0">
                        <div className="mb-3 flex flex-wrap gap-2">
                          <Badge color="sky">{project.category}</Badge>

                          <Badge color={project.isPublished ? "green" : "red"}>
                            {project.isPublished ? "Published" : "Draft"}
                          </Badge>

                          {project.isFeatured && (
                            <Badge color="yellow">Featured</Badge>
                          )}
                        </div>

                        <h2 className="text-xl font-bold leading-snug md:text-2xl">
                          {project.title}
                        </h2>

                        <p className="mt-1 text-sm text-sky-300">
                          {project.year || "2026"}
                        </p>
                      </div>

                      <div className="flex shrink-0 gap-2">
                        <Link
                          href={`/admin/dashboard/edit/${project._id.toString()}`}
                          className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-500 hover:text-sky-400"
                        >
                          Edit
                        </Link>

                        <DeleteProjectButton id={project._id.toString()} />
                      </div>
                    </div>

                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>

                    {project.longDescription && (
                      <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-slate-500">
                        {project.longDescription}
                      </p>
                    )}

                    {project.techStack?.length > 0 && (
                      <InfoBlock title="Tech Stack">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech: string) => (
                            <span
                              key={tech}
                              className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs text-sky-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </InfoBlock>
                    )}

                    {project.features?.length > 0 && (
                      <InfoBlock title="Features">
                        <div className="grid gap-2 md:grid-cols-2">
                          {project.features.slice(0, 4).map((feature: string) => (
                            <div
                              key={feature}
                              className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm leading-relaxed text-slate-300"
                            >
                              {feature}
                            </div>
                          ))}
                        </div>
                      </InfoBlock>
                    )}

                    {project.sections?.length > 0 && (
                      <InfoBlock title="Sections">
                        <div className="grid gap-3 md:grid-cols-2">
                          {project.sections.map((section: any) => (
                            <div
                              key={section.title}
                              className="rounded-xl border border-slate-800 bg-slate-950/50 p-4"
                            >
                              <p className="mb-2 text-sm font-semibold text-white">
                                {section.title}
                              </p>

                              <div className="flex flex-wrap gap-2">
                                {section.items?.map((item: string) => (
                                  <span
                                    key={item}
                                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </InfoBlock>
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
    sky: "bg-sky-500/10 text-sky-300",
    green: "bg-emerald-500/10 text-emerald-300",
    red: "bg-red-500/10 text-red-300",
    yellow: "bg-yellow-500/10 text-yellow-300",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${styles[color]}`}
    >
      {children}
    </span>
  );
}

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5">
      <h3 className="mb-3 text-sm font-semibold text-slate-300">{title}</h3>
      {children}
    </div>
  );
}