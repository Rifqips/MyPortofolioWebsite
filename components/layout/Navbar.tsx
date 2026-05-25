"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import useActiveSection from "@/hooks/useActiveSection";

const navItems = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const activeSection = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed left-0 right-0 top-0 z-[9999]
        border-b transition-all duration-300
        ${
          isScrolled || isOpen
            ? "border-slate-800 bg-slate-950/95 shadow-lg backdrop-blur-xl"
            : "border-transparent bg-slate-950/40 backdrop-blur-md"
        }
      `}
    >
      <div className="container-layout flex h-16 items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-wide text-white">
          Rifqi Padi
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={`#${item.href}`}
                className={`text-sm transition duration-300 ${
                  isActive ? "text-sky-400" : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          className="
            relative
            z-[10000]
            flex
            h-10
            w-10
            cursor-pointer
            items-center
            justify-center
            rounded-xl
            border
            border-slate-700
            bg-slate-900
            text-white
            md:hidden
          "
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="
              absolute left-0 right-0 top-16 z-[9999]
              border-t border-slate-800 bg-slate-950 md:hidden
            "
          >
            <nav className="container-layout flex flex-col py-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <a
                    key={item.href}
                    href={`#${item.href}`}
                    onClick={() => setIsOpen(false)}
                    className={`py-4 text-sm transition duration-300 ${
                      isActive
                        ? "text-sky-400"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
