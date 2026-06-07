import Link from "next/link";
import { notFound } from "next/navigation";

import { supabase } from "@/lib/supabase";
import ProjectForm from "@/components/admin/ProjectForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProjectPage({ params }: Props) {
  const { id } = await params;

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !project) {
    notFound();
  }

  const initialData = {
    _id: project.id,
    id: project.id,

    title: project.title,
    slug: project.slug,
    category: project.category,
    description: project.description,

    longDescription: project.long_description,
    imageUrl: project.image_url,

    techStack: project.tech_stack || [],
    features: project.features || [],
    sections: project.sections || [],

    isPublished: project.is_published,
    isFeatured: project.is_featured,

    githubUrl: project.github_url || "",
    demoUrl: project.demo_url || "",
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