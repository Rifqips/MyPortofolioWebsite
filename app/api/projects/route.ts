import { NextResponse } from "next/server";

import { connectMongoDB } from "@/lib/mongodb";
import Project from "@/models/Project";

// ======================================================
// GET ALL PROJECTS
// ======================================================

export async function GET(req: Request) {
  try {
    await connectMongoDB();

    const { searchParams } = new URL(req.url);

    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const admin = searchParams.get("admin");

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "6");

    // ======================================================
    // FILTER
    // ======================================================

    const filter: Record<string, unknown> = {};

    // PUBLIC ONLY
    // kalau bukan admin -> tampilkan published saja
    if (admin !== "true") {
      filter.isPublished = true;
    }

    // FEATURED
    if (featured === "true") {
      filter.isFeatured = true;
    }

    // CATEGORY
    if (category && category !== "all") {
      filter.category = category;
    }

    // ======================================================
    // QUERY
    // ======================================================

    const projects = await Project.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    // TOTAL COUNT
    const total = await Project.countDocuments(filter);

    return NextResponse.json({
      data: projects,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("GET_PROJECTS_ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to get projects",
      },
      {
        status: 500,
      },
    );
  }
}

// ======================================================
// CREATE PROJECT
// ======================================================

export async function POST(req: Request) {
  try {
    await connectMongoDB();

    const body = await req.json();

    const {
      title,
      slug,
      category,
      description,
      longDescription,
      imageUrl,
      techStack,
      features,
      sections,
      isPublished,
      isFeatured,
      githubUrl,
      demoUrl,
    } = body;

    // ======================================================
    // VALIDATION
    // ======================================================

    if (
      !title ||
      !slug ||
      !category ||
      !description ||
      !longDescription ||
      !imageUrl
    ) {
      return NextResponse.json(
        {
          message: "Invalid input",
        },
        {
          status: 400,
        },
      );
    }

    // CHECK SLUG
    const existingProject = await Project.findOne({ slug });

    if (existingProject) {
      return NextResponse.json(
        {
          message: "Slug already exists",
        },
        {
          status: 400,
        },
      );
    }

    // ======================================================
    // CREATE
    // ======================================================

    const newProject = await Project.create({
      title,
      slug,
      category,
      description,
      longDescription,
      imageUrl,

      techStack: techStack || [],
      features: features || [],
      sections: sections || [],

      isPublished: isPublished ?? false,
      isFeatured: isFeatured ?? false,

      githubUrl: githubUrl || "",
      demoUrl: demoUrl || "",
    });

    return NextResponse.json(
      {
        message: "Project created successfully",
        data: newProject,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("POST_PROJECT_ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to create project",
      },
      {
        status: 500,
      },
    );
  }
}

// ======================================================
// UPDATE PROJECT
// ======================================================

export async function PUT(req: Request) {
  try {
    await connectMongoDB();

    const body = await req.json();

    const {
      id,
      title,
      slug,
      category,
      description,
      longDescription,
      imageUrl,
      techStack,
      features,
      sections,
      isPublished,
      isFeatured,
      githubUrl,
      demoUrl,
    } = body;

    // ======================================================
    // VALIDATION
    // ======================================================

    if (
      !id ||
      !title ||
      !slug ||
      !category ||
      !description ||
      !longDescription ||
      !imageUrl
    ) {
      return NextResponse.json(
        {
          message: "Invalid input",
        },
        {
          status: 400,
        },
      );
    }

    // CHECK SLUG DUPLICATE
    const existingSlug = await Project.findOne({
      slug,
      _id: { $ne: id },
    });

    if (existingSlug) {
      return NextResponse.json(
        {
          message: "Slug already exists",
        },
        {
          status: 400,
        },
      );
    }

    // ======================================================
    // UPDATE
    // ======================================================

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        title,
        slug,
        category,
        description,
        longDescription,
        imageUrl,

        techStack: techStack || [],
        features: features || [],
        sections: sections || [],

        isPublished: isPublished ?? false,
        isFeatured: isFeatured ?? false,

        githubUrl: githubUrl || "",
        demoUrl: demoUrl || "",
      },
      {
        new: true,
      },
    );

    if (!updatedProject) {
      return NextResponse.json(
        {
          message: "Project not found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json({
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (error) {
    console.error("PUT_PROJECT_ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to update project",
      },
      {
        status: 500,
      },
    );
  }
}

// ======================================================
// DELETE PROJECT
// ======================================================

export async function DELETE(req: Request) {
  try {
    await connectMongoDB();

    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid input",
        },
        {
          status: 400,
        },
      );
    }

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json(
        {
          message: "Project not found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("DELETE_PROJECT_ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to delete project",
      },
      {
        status: 500,
      },
    );
  }
}