"use client";

import { useEffect, useState } from "react";

import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../animations/FadeIn";
import { Project } from "@/types/portfolio";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const categories = [
  "all",
  "web",
  "android",
  "ios",
  "mobile",
  "backend",
  "fullstack",
  "design",
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setIsLoading(true);

        const res = await fetch(
          `/api/projects?limit=10&featured=true&category=${activeCategory}`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await res.json();

        setProjects(data);
      } catch (error) {
        console.error("FETCH_PROJECTS_ERROR:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="section-anchor section-spacing border-t border-slate-800"
    >
      <div className="container-layout">
        <SectionHeading title="Featured Projects" subtitle="Portfolio" />

        <FadeIn>
          <div className="mb-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm capitalize transition ${
                  activeCategory === category
                    ? "border-sky-500 bg-sky-500 text-white"
                    : "border-slate-700 text-slate-400 hover:border-sky-500 hover:text-sky-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 text-slate-400">
              Loading projects...
            </div>
          ) : projects.length === 0 ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 text-slate-400">
              No projects found.
            </div>
          ) : (
            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
              className="project-swiper pb-14"
            >
              {projects.map((project) => (
                <SwiperSlide
                  key={project._id || project.slug}
                  className="h-auto"
                >
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
