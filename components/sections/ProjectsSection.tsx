"use client";

import { projects } from "@/constants/portfolio";
import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../animations/FadeIn";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-anchor section-spacing border-t border-slate-800"
    >
      <div className="container-layout">
        <SectionHeading title="Featured Projects" subtitle="Portfolio" />

        <FadeIn>
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
              <SwiperSlide key={project.slug} className="h-auto">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeIn>
      </div>
    </section>
  );
}