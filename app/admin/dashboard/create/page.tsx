import Link from "next/link";
import ProjectForm from "@/components/admin/ProjectForm";

export default function CreateProjectPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin/dashboard"
          className="mb-8 inline-flex text-sm text-slate-400 hover:text-sky-400"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="mb-8 text-3xl font-bold">Create Project</h1>

        <ProjectForm />
      </div>
    </main>
  );
}