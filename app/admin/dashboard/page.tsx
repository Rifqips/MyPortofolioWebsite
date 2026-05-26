import Link from "next/link";

import Project from "@/models/Project";
import { connectMongoDB } from "@/lib/mongodb";
import DeleteProjectButton from "@/components/admin/DeleteProjectButton";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminDashboardPage() {
  await connectMongoDB();

  const projects = await Project.find({}).sort({ createdAt: -1 }).lean();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="font-mono text-sm text-sky-400">Admin</p>
            <h1 className="text-3xl font-bold">Project Dashboard</h1>
          </div>

          <Link
            href="/admin/dashboard/create"
            className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-white"
          >
            Add Project
          </Link>
          <LogoutButton />
        </div>

        <div className="grid gap-5">
          {projects.map((project: any) => (
            <div
              key={project._id.toString()}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="mb-3 inline-flex rounded-full bg-sky-500/10 px-3 py-1 text-xs capitalize text-sky-300">
                    {project.category}
                  </span>

                  <h2 className="text-xl font-semibold">{project.title}</h2>

                  <p className="mt-2 text-sm text-slate-400">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/admin/dashboard/edit/${project._id.toString()}`}
                    className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300"
                  >
                    Edit
                  </Link>

                  <DeleteProjectButton id={project._id.toString()} />
                </div>
              </div>

              {project.sections?.length > 0 && (
                <div className="mt-4 space-y-2 text-sm text-slate-400">
                  {project.sections.map((section: any) => (
                    <p key={section.title}>
                      <span className="text-slate-200">{section.title}:</span>{" "}
                      {section.items.join(", ")}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
