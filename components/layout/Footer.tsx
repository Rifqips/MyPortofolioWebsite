import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="container-layout flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-slate-500">
          © 2026 Rifqi Padi. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/Rifqips"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-400 transition hover:border-sky-500 hover:text-sky-400"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/rifqips/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-400 transition hover:border-sky-500 hover:text-sky-400"
          >
            LinkedIn
          </Link>
        </div>

        <p className="font-mono text-sm text-slate-500">
          Built with Next.js & TailwindCSS
        </p>
      </div>
    </footer>
  );
}