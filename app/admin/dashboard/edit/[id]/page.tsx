import Link from "next/link";
import { notFound } from "next/navigation";

import Project from "@/models/Project";
import { connectMongoDB } from "@/lib/mongodb";
import ProjectForm from "@/components/admin/ProjectForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProjectPage({ params }: Props) {
  await connectMongoDB();

  const { id } = await params;

  const project = await Project.findById(id).lean();

  if (!project) {
    notFound();
  }

  const initialData = {
    ...project,
    _id: project._id.toString(),
    createdAt: undefined,
    updatedAt: undefined,
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin/dashboard"
          className="mb-8 inline-flex text-sm text-slate-400 hover:text-sky-400"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="mb-8 text-3xl font-bold">Edit Project</h1>

        <ProjectForm initialData={initialData as any} />
      </div>
    </main>
  );
}