import Link from "next/link";

import Project from "@/models/Project";
import { connectMongoDB } from "@/lib/mongodb";
import DeleteProjectButton from "@/components/admin/DeleteProjectButton";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminDashboardPage() {
  await connectMongoDB();

  const projects = await Project.find({}).sort({ createdAt: -1 }).lean();

  const toChips = (items?: string[]) => {
    return items
      ?.flatMap((item) => item.split(","))
      .map((item) => item.trim())
      .filter(Boolean);
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 font-mono text-sm text-sky-400">
                Admin Dashboard
              </p>

              <h1 className="text-3xl font-bold md:text-4xl">
                Project Management
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
                Manage portfolio projects, categories, images, sections, and
                publication status.
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

        {projects.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/40 p-10 text-center">
            <h2 className="text-2xl font-semibold">No projects yet</h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
              Start by creating your first portfolio project. After publishing,
              it will appear on your homepage.
            </p>

            <Link
              href="/admin/dashboard/create"
              className="mt-6 inline-flex rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-400"
            >
              Create First Project
            </Link>
          </div>
        ) : (
          <div className="grid gap-5">
            {projects.map((project: any) => (
              <div
                key={project._id.toString()}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-sky-500/50"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="inline-flex rounded-full bg-sky-500/10 px-3 py-1 text-xs capitalize text-sky-300">
                        {project.category}
                      </span>

                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs ${
                          project.isPublished
                            ? "bg-emerald-500/10 text-emerald-300"
                            : "bg-red-500/10 text-red-300"
                        }`}
                      >
                        {project.isPublished ? "Published" : "Draft"}
                      </span>

                      {project.isFeatured && (
                        <span className="inline-flex rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300">
                          Featured
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-semibold">{project.title}</h2>

                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={`/admin/dashboard/edit/${project._id.toString()}`}
                      className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-500 hover:text-sky-400"
                    >
                      Edit
                    </Link>

                    <DeleteProjectButton id={project._id.toString()} />
                  </div>
                </div>

                {project.sections?.length > 0 && (
                  <div className="mt-5 border-t border-slate-800 pt-4">
                    <div className="grid gap-3 md:grid-cols-2">
                      {project.sections.map((section: any) => (
                        <div
                          key={section.title}
                          className="rounded-xl bg-slate-950/60 p-4 text-sm"
                        >
                          <p className="font-medium text-slate-200">
                            {section.title}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {toChips(section.items)?.map((item) => (
                              <span
                                key={item}
                                className="
                                  rounded-full
                                  border
                                  border-slate-700
                                  bg-slate-900/70
                                  px-3
                                  py-1
                                  text-xs
                                  text-slate-300
                                "
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
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
