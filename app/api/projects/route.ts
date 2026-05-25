import { NextResponse } from "next/server";

import { connectMongoDB } from "@/lib/mongodb";
import Project from "@/models/Project";

export async function GET(req: Request) {
  try {
    await connectMongoDB();

    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "6");

    const projects = await Project.find({})
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    return NextResponse.json(projects);
  } catch (error) {
    console.error("GET_PROJECTS_ERROR:", error);

    return NextResponse.json(
      { message: "Failed to get projects" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectMongoDB();

    const {
      title,
      slug,
      description,
      longDescription,
      imageUrl,
      techStack,
      features,
      githubUrl,
      demoUrl,
    } = await req.json();

    if (!title || !slug || !description || !longDescription || !imageUrl) {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    const newProject = await Project.create({
      title,
      slug,
      description,
      longDescription,
      imageUrl,
      techStack: techStack || [],
      features: features || [],
      githubUrl,
      demoUrl,
    });

    return NextResponse.json(newProject);
  } catch (error) {
    console.error("POST_PROJECT_ERROR:", error);

    return NextResponse.json(
      { message: "Failed to create project" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    await connectMongoDB();

    const {
      id,
      title,
      slug,
      description,
      longDescription,
      imageUrl,
      techStack,
      features,
      githubUrl,
      demoUrl,
    } = await req.json();

    if (!id || !title || !slug || !description || !longDescription || !imageUrl) {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        title,
        slug,
        description,
        longDescription,
        imageUrl,
        techStack: techStack || [],
        features: features || [],
        githubUrl,
        demoUrl,
      },
      { new: true }
    );

    if (!updatedProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedProject);
  } catch (error) {
    console.error("PUT_PROJECT_ERROR:", error);

    return NextResponse.json(
      { message: "Failed to update project" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    await connectMongoDB();

    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("DELETE_PROJECT_ERROR:", error);

    return NextResponse.json(
      { message: "Failed to delete project" },
      { status: 500 }
    );
  }
}
