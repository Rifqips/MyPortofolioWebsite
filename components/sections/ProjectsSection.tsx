import { projects } from "@/constants/portfolio";
import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../animations/FadeIn";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-anchor section-spacing border-t border-slate-800"
    >
      <div className="container-layout">
        <SectionHeading title="Featured Projects" subtitle="Portfolio" />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
