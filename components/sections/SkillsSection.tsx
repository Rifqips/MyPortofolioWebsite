import { skills } from "@/constants/portfolio";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../animations/FadeIn";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-anchor section-spacing border-t border-slate-800">
      <div className="container-layout">
        <SectionHeading title="Skills & Technologies" subtitle="Tech Stack" />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map((skill, index) => (
            <FadeIn key={skill.name} delay={index * 0.05}>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-sky-500 hover:-translate-y-1">
                <p className="font-medium text-slate-200">{skill.name}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
