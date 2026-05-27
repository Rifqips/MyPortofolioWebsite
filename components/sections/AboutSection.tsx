import FadeIn from "../animations/FadeIn";
import SectionHeading from "../ui/SectionHeading";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-anchor section-spacing border-t border-slate-800"
    >
      <div className="container-layout">
        <SectionHeading title="About Me" subtitle="Introduction" />

        <div className="grid gap-12 md:grid-cols-2">
          <FadeIn direction="left">
            <div>
              <p className="text-lg leading-relaxed text-slate-400">
                I am a software developer focused on building scalable, modern,
                and maintainable digital solutions for web and mobile platforms.
                I enjoy creating systems that are efficient, user-friendly, and
                designed to solve real-world problems for businesses and
                individuals.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="space-y-6 text-slate-400">
              <p>
                I focus on building modern, scalable, and user-friendly digital
                solutions that help businesses and individuals turn ideas into
                real products.
              </p>

              <p>
                My approach emphasizes clean design, efficient systems, and
                reliable experiences across web and mobile platforms.
              </p>

              <p>
                I am passionate about technology, digital innovation, and
                creating impactful systems that provide real value for users and
                businesses.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
