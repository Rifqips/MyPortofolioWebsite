import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(_request: Request, { params }: Props) {
  try {
    const { slug } = await params;

    const { data: project, error } = await supabase
      .from("projects")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("GET_PROJECT_BY_SLUG_ERROR:", error);

    return NextResponse.json(
      { message: "Failed to get project" },
      { status: 500 },
    );
  }
}
