import FadeIn from "../animations/FadeIn";

export default function HeroSection() {
  return (
    <section className="section-spacing flex min-h-screen items-center">
      <div className="container-layout">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-sm text-sky-400">
              Android Developer
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
              Building clean{" "}
              <span className="animate-gradient bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-300 bg-[length:200%_200%] bg-clip-text text-transparent">
                mobile experiences
              </span>{" "}
              and scalable systems.
            </h1>

            <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              I specialize in Android development using Kotlin, Jetpack Compose,
              and modern architecture patterns. Currently exploring fullstack
              development with Next.js and TypeScript.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-xl bg-blue-500 px-6 py-3 text-center font-medium text-white transition hover:bg-blue-400"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-medium text-slate-300 transition hover:border-slate-500"
              >
                Contact Me
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
