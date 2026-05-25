import SectionHeading from "../ui/SectionHeading";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-spacing border-t border-slate-800"
    >
      <div className="container-layout text-center">
        <SectionHeading
          title="Let's Work Together"
          subtitle="Contact"
        />

        <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400">
          Interested in collaborating or discussing
          technology, Android development, or fullstack
          engineering? Feel free to reach out.
        </p>

        <a
          href="mailto:rifqipadi99@gmail.com"
          className="
            inline-flex
            rounded-2xl
            bg-sky-500
            px-8
            py-4
            font-medium
            text-white
            transition
            hover:bg-sky-400
          "
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}