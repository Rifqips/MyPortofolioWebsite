"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import useActiveSection from "@/hooks/useActiveSection";

const navItems = [
  {
    label: "About",
    href: "about",
  },
  {
    label: "Skills",
    href: "skills",
  },
  {
    label: "Projects",
    href: "projects",
  },
  {
    label: "Contact",
    href: "contact",
  },
];

export default function Navbar() {
  const activeSection =
    useActiveSection();

  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-slate-800
        bg-slate-950/80
        backdrop-blur-md
      "
    >
      <div
        className="
          container-layout
          flex
          h-16
          items-center
          justify-between
        "
      >
        <a
          href="#"
          className="
            text-lg
            font-semibold
            tracking-wide
          "
        >
          Rifqi Padi
        </a>

        {/* Desktop Nav */}
        <nav
          className="
            hidden
            items-center
            gap-8
            md:flex
          "
        >
          {navItems.map((item) => {
            const isActive =
              activeSection === item.href;

            return (
              <a
                key={item.href}
                href={`#${item.href}`}
                className={`
                  text-sm
                  transition
                  ${
                    isActive
                      ? "text-sky-400"
                      : "text-slate-300 hover:text-white"
                  }
                `}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className="
            flex
            items-center
            justify-center
            md:hidden
          "
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            border-t
            border-slate-800
            bg-slate-950
            md:hidden
          "
        >
          <nav
            className="
              container-layout
              flex
              flex-col
              py-6
            "
          >
            {navItems.map((item) => {
              const isActive =
                activeSection === item.href;

              return (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className={`
                    py-4
                    text-sm
                    transition
                    ${
                      isActive
                        ? "text-sky-400"
                        : "text-slate-300"
                    }
                  `}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}