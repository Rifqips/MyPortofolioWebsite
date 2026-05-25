import FadeIn from "../animations/FadeIn";
import SectionHeading from "../ui/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="section-anchor section-spacing border-t border-slate-800">
      <div className="container-layout">
        <SectionHeading title="About Me" subtitle="Introduction" />

        <div className="grid gap-12 md:grid-cols-2">
          <FadeIn direction="left">
            <div>
              <p className="text-lg leading-relaxed text-slate-400">
                I am an Android Developer focused on building scalable and
                maintainable mobile applications using Kotlin and modern Android
                technologies.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="space-y-6 text-slate-400">
              <p>
                My main expertise includes Jetpack Compose, MVVM architecture,
                modularization, and clean architecture principles.
              </p>

              <p>
                Currently, I am exploring fullstack web development using
                Next.js, TypeScript, TailwindCSS, and MongoDB.
              </p>

              <p>
                I also have strong interests in financial markets, investing,
                and technology-driven systems.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
