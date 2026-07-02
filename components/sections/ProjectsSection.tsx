"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";

import { Project } from "@/types/portfolio";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const categories = ["all", "android", "web", "backend", "fullstack", "design"];

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);

        const res = await fetch(`/api/projects?limit=10&category=${category}`);

        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }

        const json = await res.json();

        setProjects(json.data ?? []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [category]);

  return (
    <section
      id="projects"
      className="section-anchor section-spacing relative overflow-hidden"
    >
      {/* background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="container-layout">
        <SectionHeading subtitle="Portfolio" title="Featured Projects" />

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
          subtitle
          mt-6
          max-w-3xl
          "
        >
          A collection of modern web, Android and backend applications focused
          on performance, scalability and user experience.
        </motion.p>

        {/* FILTER */}

        <div className="mt-12 flex flex-wrap gap-3">
          {categories.map((item) => {
            const active = category === item;

            return (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`
                  rounded-full
                  px-5
                  py-3
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    active
                      ? "bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 text-white shadow-xl shadow-violet-500/20"
                      : "border border-white/10 bg-white/5 text-slate-400 hover:border-violet-500/40 hover:text-white"
                  }
                `}
              >
                {item}
              </button>
            );
          })}
        </div>

        {loading ? (
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="
                h-[520px]
                animate-pulse
                rounded-[32px]
                bg-white/5
                "
              />
            ))}
          </div>
        ) : (
          <>
            <div className="relative mt-16">
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                navigation={{
                  prevEl: ".project-prev",
                  nextEl: ".project-next",
                }}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={projects.length > 1}
                centeredSlides
                grabCursor
                speed={700}
                spaceBetween={30}
                slidesPerView={1.1}
                breakpoints={{
                  768: {
                    slidesPerView: 1.35,
                  },
                  1024: {
                    slidesPerView: 1.55,
                  },
                  1440: {
                    slidesPerView: 1.8,
                  },
                }}
                className="project-swiper pb-20"
              >
                {projects.map((project, index) => (
                  <SwiperSlide
                    key={project.id ?? project.slug}
                    className="h-auto"
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 40,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.45,
                      }}
                      viewport={{
                        once: true,
                      }}
                      className="h-full"
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* NAVIGATION */}

              <div className="mt-10 flex items-center justify-center gap-4">
                <button
                  className="
      project-prev
      group
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-x-1
      hover:border-violet-500/40
      hover:bg-violet-500/10
    "
                >
                  <ChevronLeft
                    size={20}
                    className="transition-transform group-hover:scale-110"
                  />
                </button>

                <button
                  className="
      project-next
      group
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      transition-all
      duration-300
      hover:translate-x-1
      hover:border-cyan-500/40
      hover:bg-cyan-500/10
    "
                >
                  <ChevronRight
                    size={20}
                    className="transition-transform group-hover:scale-110"
                  />
                </button>
              </div>
            </div>

            {projects.length === 0 && (
              <div
                className="
        mt-16
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        p-16
        text-center
      "
              >
                <h3 className="text-3xl font-bold">No Project Found</h3>

                <p className="mt-4 text-slate-400">
                  There are no projects in this category.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
