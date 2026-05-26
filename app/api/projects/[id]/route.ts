import { NextResponse } from "next/server";

import { connectMongoDB } from "@/lib/mongodb";
import Project from "@/models/Project";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(_request: Request, { params }: Props) {
  try {
    await connectMongoDB();

    const { id } = await params;

    const project = await Project.findById(id);

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("GET_PROJECT_BY_ID_ERROR:", error);

    return NextResponse.json(
      { message: "Failed to get project" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: Props) {
  try {
    await connectMongoDB();

    const { id } = await params;
    const body = await request.json();

    const project = await Project.findByIdAndUpdate(
      id,
      {
        ...body,
        techStack: body.techStack || [],
        features: body.features || [],
        sections: body.sections || [],
      },
      {
        new: true,
      }
    );

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("PUT_PROJECT_BY_ID_ERROR:", error);

    return NextResponse.json(
      { message: "Failed to update project" },
      { status: 500 }
    );
  }
}

export async function DELETE(_request: Request, { params }: Props) {
  try {
    await connectMongoDB();

    const { id } = await params;

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("DELETE_PROJECT_BY_ID_ERROR:", error);

    return NextResponse.json(
      { message: "Failed to delete project" },
      { status: 500 }
    );
  }
}