import Image from "next/image";
import Link from "next/link";

import Project from "@/models/Project";
import { connectMongoDB } from "@/lib/mongodb";

import DeleteProjectButton from "@/components/admin/DeleteProjectButton";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminDashboardPage() {
  await connectMongoDB();

  const projects = await Project.find({})
    .sort({ createdAt: -1 })
    .lean();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-10 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-sm font-mono text-sky-400">
                Admin Dashboard
              </p>

              <h1 className="text-3xl font-bold md:text-4xl">
                Project Management
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
                Manage portfolio projects, images, tech stack,
                publication status, and featured projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/admin/dashboard/create"
                className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-400"
              >
                Add Project
              </Link>

              <LogoutButton />
            </div>
          </div>
        </div>

        {/* EMPTY */}
        {projects.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/40 p-10 text-center">
            <h2 className="text-2xl font-semibold">
              No projects yet
            </h2>

            <p className="mt-3 text-sm text-slate-400">
              Start by creating your first project.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {projects.map((project: any) => (
              <div
                key={project._id.toString()}
                className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 transition hover:border-sky-500/40"
              >
                <div className="grid gap-0 lg:grid-cols-[320px_1fr]">
                  {/* IMAGE */}
                  <div className="relative h-[240px] w-full bg-slate-900 lg:h-full">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    {/* TOP */}
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                      <div>
                        {/* BADGES */}
                        <div className="mb-3 flex flex-wrap gap-2">
                          <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs capitalize text-sky-300">
                            {project.category}
                          </span>

                          <span
                            className={`rounded-full px-3 py-1 text-xs ${
                              project.isPublished
                                ? "bg-emerald-500/10 text-emerald-300"
                                : "bg-red-500/10 text-red-300"
                            }`}
                          >
                            {project.isPublished
                              ? "Published"
                              : "Draft"}
                          </span>

                          {project.isFeatured && (
                            <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300">
                              Featured
                            </span>
                          )}
                        </div>

                        {/* TITLE */}
                        <h2 className="text-2xl font-bold">
                          {project.title}
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
                          {project.description}
                        </p>

                        {/* LONG DESCRIPTION */}
                        <p className="mt-4 text-sm leading-relaxed text-slate-500">
                          {project.longDescription}
                        </p>
                      </div>

                      {/* ACTIONS */}
                      <div className="flex flex-wrap gap-2">
                        <Link
                          href={`/admin/dashboard/edit/${project._id.toString()}`}
                          className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-500 hover:text-sky-400"
                        >
                          Edit
                        </Link>

                        <DeleteProjectButton
                          id={project._id.toString()}
                        />
                      </div>
                    </div>

                    {/* TECH STACK */}
                    {project.techStack?.length > 0 && (
                      <div className="mt-6">
                        <h3 className="mb-3 text-sm font-semibold text-slate-300">
                          Tech Stack
                        </h3>

                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech: string) => (
                            <span
                              key={tech}
                              className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs text-sky-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* FEATURES */}
                    {project.features?.length > 0 && (
                      <div className="mt-6">
                        <h3 className="mb-3 text-sm font-semibold text-slate-300">
                          Features
                        </h3>

                        <div className="grid gap-2 md:grid-cols-2">
                          {project.features.map(
                            (feature: string) => (
                              <div
                                key={feature}
                                className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300"
                              >
                                • {feature}
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    )}

                    {/* SECTIONS */}
                    {project.sections?.length > 0 && (
                      <div className="mt-6">
                        <h3 className="mb-3 text-sm font-semibold text-slate-300">
                          Sections
                        </h3>

                        <div className="grid gap-4 md:grid-cols-2">
                          {project.sections.map(
                            (section: any) => (
                              <div
                                key={section.title}
                                className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4"
                              >
                                <p className="mb-3 font-medium text-white">
                                  {section.title}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                  {section.items?.map(
                                    (item: string) => (
                                      <span
                                        key={item}
                                        className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                                      >
                                        {item}
                                      </span>
                                    ),
                                  )}
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    )}

                    {/* LINKS */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-white hover:text-white"
                        >
                          Github
                        </a>
                      )}

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-400"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}