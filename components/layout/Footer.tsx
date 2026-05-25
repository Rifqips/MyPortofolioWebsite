export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="container-layout flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-slate-500">
          © 2026 Rifqi Padi. All rights reserved.
        </p>

        <p className="font-mono text-sm text-slate-500">
          Built with Next.js & TailwindCSS
        </p>
      </div>
    </footer>
  );
}