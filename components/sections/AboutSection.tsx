import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../animations/FadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing border-t border-slate-800">
      <div className="container-layout">
        <SectionHeading title="About Me" subtitle="Introduction" />
        <FadeIn>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed text-slate-400">
                I am an Android Developer focused on building scalable and
                maintainable mobile applications using Kotlin and modern Android
                technologies.
              </p>
            </div>

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
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
