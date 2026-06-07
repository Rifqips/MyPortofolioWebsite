import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

// ======================================================
// GET ALL PROJECTS
// ======================================================

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const admin = searchParams.get("admin");

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "6");

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = supabase
      .from("projects")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, to);

    if (admin !== "true") {
      query = query.eq("is_published", true);
    }

    if (featured === "true") {
      query = query.eq("is_featured", true);
    }

    if (category && category !== "all") {
      query = query.eq("category", category);
    }

    const { data, error, count } = await query;

    if (error) {
      throw error;
    }

    return NextResponse.json({
      data,
      pagination: {
        total: count || 0,
        page,
        limit,
        totalPages: Math.ceil((count || 0) / limit),
      },
    });
  } catch (error: any) {
    console.error("GET_PROJECTS_ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to get projects",
        error: error?.message,
        details: error,
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

    if (
      !title ||
      !slug ||
      !category ||
      !description ||
      !longDescription ||
      !imageUrl
    ) {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    const { data: existingProject, error: checkError } = await supabase
      .from("projects")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();

    if (checkError) {
      throw checkError;
    }

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

    const { data, error } = await supabase
      .from("projects")
      .insert({
        title,
        slug,
        category,
        description,
        long_description: longDescription,
        image_url: imageUrl,
        tech_stack: techStack || [],
        features: features || [],
        sections: sections || [],
        is_published: isPublished ?? false,
        is_featured: isFeatured ?? false,
        github_url: githubUrl || "",
        demo_url: demoUrl || "",
      })
      .select("*")
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json(
      {
        message: "Project created successfully",
        data,
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

    if (
      !id ||
      !title ||
      !slug ||
      !category ||
      !description ||
      !longDescription ||
      !imageUrl
    ) {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    const { data: existingSlug, error: checkError } = await supabase
      .from("projects")
      .select("id")
      .eq("slug", slug)
      .neq("id", id)
      .maybeSingle();

    if (checkError) {
      throw checkError;
    }

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

    const { data, error } = await supabase
      .from("projects")
      .update({
        title,
        slug,
        category,
        description,
        long_description: longDescription,
        image_url: imageUrl,
        tech_stack: techStack || [],
        features: features || [],
        sections: sections || [],
        is_published: isPublished ?? false,
        is_featured: isFeatured ?? false,
        github_url: githubUrl || "",
        demo_url: demoUrl || "",
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
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
      data,
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
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id)
      .select("id")
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
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
