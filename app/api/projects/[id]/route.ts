import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

function mapBodyToSupabase(body: any) {
  return {
    title: body.title,
    slug: body.slug,
    category: body.category,
    description: body.description,
    long_description: body.longDescription,
    image_url: body.imageUrl,
    tech_stack: body.techStack || [],
    features: body.features || [],
    sections: body.sections || [],
    is_published: body.isPublished ?? false,
    is_featured: body.isFeatured ?? false,
    github_url: body.githubUrl || "",
    demo_url: body.demoUrl || "",
    updated_at: new Date().toISOString(),
  };
}

export async function GET(_request: Request, { params }: Props) {
  try {
    const { id } = await params;

    const { data: project, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("GET_PROJECT_BY_ID_ERROR:", error);

    return NextResponse.json(
      { message: "Failed to get project" },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request, { params }: Props) {
  try {
    const { id } = await params;
    const body = await request.json();

    const { data: project, error } = await supabase
      .from("projects")
      .update(mapBodyToSupabase(body))
      .eq("id", id)
      .select("*")
      .single();

    if (error || !project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("PUT_PROJECT_BY_ID_ERROR:", error);

    return NextResponse.json(
      { message: "Failed to update project" },
      { status: 500 },
    );
  }
}

export async function DELETE(_request: Request, { params }: Props) {
  try {
    const { id } = await params;

    const { data: deletedProject, error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id)
      .select("id")
      .single();

    if (error || !deletedProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("DELETE_PROJECT_BY_ID_ERROR:", error);

    return NextResponse.json(
      { message: "Failed to delete project" },
      { status: 500 },
    );
  }
}