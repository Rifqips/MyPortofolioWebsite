import { NextResponse } from "next/server";

import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(_request: Request, { params }: Props) {
  await dbConnect();

  const { id } = await params;
  const project = await Project.findById(id);

  if (!project) {
    return NextResponse.json(
      { message: "Project not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(project);
}

export async function PUT(request: Request, { params }: Props) {
  await dbConnect();

  const { id } = await params;
  const body = await request.json();

  const project = await Project.findByIdAndUpdate(id, body, {
    new: true,
  });

  return NextResponse.json(project);
}

export async function DELETE(_request: Request, { params }: Props) {
  await dbConnect();

  const { id } = await params;

  await Project.findByIdAndDelete(id);

  return NextResponse.json({
    message: "Project deleted successfully",
  });
}