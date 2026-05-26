"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import ImageUpload from "./ImageUpload";
import { Project, ProjectCategory } from "@/types/portfolio";

const emptyProject: Project = {
  title: "",
  slug: "",
  category: "web",
  description: "",
  longDescription: "",
  imageUrl: "",
  techStack: [],
  features: [],
  sections: [],
  isPublished: true,
  isFeatured: true,
  githubUrl: "",
  demoUrl: "",
};

interface Props {
  initialData?: Project & {
    _id?: string;
  };
}

export default function ProjectForm({ initialData }: Props) {
  const router = useRouter();

  const [form, setForm] = useState<Project>(initialData || emptyProject);
  const isEdit = Boolean(initialData?._id);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (key: keyof Project, value: any) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const textToArray = (value: string) =>
    value
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);

  const arrayToText = (items?: string[]) => items?.join("\n") || "";

  const addSection = () => {
    handleChange("sections", [
      ...form.sections,
      {
        title: "",
        items: [],
      },
    ]);
  };

  const updateSectionTitle = (index: number, title: string) => {
    const updated = [...form.sections];

    updated[index].title = title;

    handleChange("sections", updated);
  };

  const removeSection = (index: number) => {
    handleChange(
      "sections",
      form.sections.filter((_, i) => i !== index),
    );
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setMessage("");
    setError("");

    try {
      const url = isEdit
        ? `/api/projects/${initialData?._id}`
        : "/api/projects";

      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to save project");
      }

      setMessage(
        isEdit
          ? "Project updated successfully"
          : "Project created successfully",
      );

      setTimeout(() => {
        router.push("/admin/dashboard");
        router.refresh();
      }, 700);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
      <div className="grid gap-5">
        <div className="grid gap-4 md:grid-cols-3">
          <input
            value={form.title}
            onChange={(e) => {
              const title = e.target.value;

              handleChange("title", title);

              if (!isEdit) {
                handleChange(
                  "slug",
                  title
                    .toLowerCase()
                    .trim()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, ""),
                );
              }
            }}
            placeholder="Title"
            className="input-admin"
          />

          <input
            value={form.slug}
            onChange={(e) => handleChange("slug", e.target.value)}
            placeholder="Slug"
            className="input-admin"
          />

          <select
            value={form.category}
            onChange={(e) =>
              handleChange("category", e.target.value as ProjectCategory)
            }
            className="input-admin"
          >
            <option value="web">Web</option>
            <option value="android">Android</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
            <option value="design">Design</option>
            <option value="other">Other</option>
          </select>
        </div>

        <textarea
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Short description"
          className="input-admin min-h-28 resize-none"
        />

        <textarea
          value={form.longDescription}
          onChange={(e) => handleChange("longDescription", e.target.value)}
          placeholder="Long description"
          className="input-admin min-h-40 resize-none"
        />

        <ImageUpload
          value={form.imageUrl}
          onChange={(url) => handleChange("imageUrl", url)}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <textarea
            value={arrayToText(form.techStack)}
            onChange={(e) =>
              handleChange("techStack", textToArray(e.target.value))
            }
            placeholder={`Tech Stack:
            Next.js
            TypeScript
            TailwindCSS
            MongoDB`}
            className="input-admin min-h-36 resize-none"
          />

          <textarea
            value={arrayToText(form.features)}
            onChange={(e) =>
              handleChange("features", textToArray(e.target.value))
            }
            placeholder={`Features:
            Admin dashboard
            Project CRUD
            Cloudinary upload
            Dynamic project detail`}
            className="input-admin min-h-36 resize-none"
          />

          <input
            value={form.githubUrl || ""}
            onChange={(e) => handleChange("githubUrl", e.target.value)}
            placeholder="GitHub URL"
            className="input-admin"
          />

          <input
            value={form.demoUrl || ""}
            onChange={(e) => handleChange("demoUrl", e.target.value)}
            placeholder="Demo URL"
            className="input-admin"
          />
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-800 p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Sections</h3>

            <button
              type="button"
              onClick={addSection}
              className="rounded-lg bg-sky-500 px-3 py-2 text-sm"
            >
              Add Section
            </button>
          </div>

          {form.sections.map((section, index) => (
            <div
              key={index}
              className="space-y-3 rounded-xl border border-slate-800 p-4"
            >
              <input
                value={section.title}
                onChange={(e) => updateSectionTitle(index, e.target.value)}
                placeholder="Section title"
                className="input-admin"
              />

              <textarea
                value={arrayToText(section.items)}
                onChange={(e) => {
                  const updated = [...form.sections];

                  updated[index].items = textToArray(e.target.value);

                  handleChange("sections", updated);
                }}
                placeholder={`Items:
                MVVM
                Clean Architecture
                Repository Pattern`}
                className="input-admin min-h-28 resize-none"
              />

              <button
                type="button"
                onClick={() => removeSection(index)}
                className="text-sm text-red-400"
              >
                Remove Section
              </button>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={form.isPublished}
              onChange={(e) => handleChange("isPublished", e.target.checked)}
              className="h-4 w-4"
            />
            Published
          </label>

          <label className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={form.isFeatured}
              onChange={(e) => handleChange("isFeatured", e.target.checked)}
              className="h-4 w-4"
            />
            Featured
          </label>
        </div>

        {message && (
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
            {message}
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
            {error}
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="rounded-xl bg-sky-500 px-5 py-3 font-medium text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting
            ? isEdit
              ? "Updating..."
              : "Creating..."
            : isEdit
              ? "Update Project"
              : "Create Project"}
        </button>
      </div>
    </div>
  );
}
