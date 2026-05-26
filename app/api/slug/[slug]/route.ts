import { NextResponse } from "next/server";

import { connectMongoDB } from "@/lib/mongodb";
import Project from "@/models/Project";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(_request: Request, { params }: Props) {
  try {
    await connectMongoDB();

    const { slug } = await params;

    const project = await Project.findOne({ slug }).lean();

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("GET_PROJECT_BY_SLUG_ERROR:", error);

    return NextResponse.json(
      { message: "Failed to get project" },
      { status: 500 }
    );
  }
}