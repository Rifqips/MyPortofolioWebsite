"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const menus = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current > lastScroll && current > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setLastScroll(current);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -120 }}
        animate={{
          y: hidden ? -120 : 0,
        }}
        transition={{
          duration: 0.35,
        }}
        className="fixed inset-x-0 top-5 z-50"
      >
        <div className="container-layout">
          <div className="glass flex h-16 items-center justify-between rounded-full px-6">
            {/* LOGO */}

            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 shadow-lg shadow-violet-600/20">
                <Image src="/favicon.ico" alt="Logo" width={24} height={24} />
              </div>

              <div className="hidden md:block">
                <p className="font-semibold tracking-wide">Rifqi Padi S</p>

                <p className="text-xs text-slate-400">
                  Freelancer Software Developer
                </p>
              </div>
            </Link>

            {/* DESKTOP */}

            <nav className="hidden items-center gap-8 md:flex">
              {menus.map((menu) => (
                <Link
                  key={menu.name}
                  href={menu.href}
                  className="
                  text-sm
                  text-slate-400
                  transition
                  hover:text-white
                  "
                >
                  {menu.name}
                </Link>
              ))}
            </nav>

            {/* RIGHT */}

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="https://www.linkedin.com/in/rifqips/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                LinkedIn
              </a>
            </div>

            {/* MOBILE */}

            <button className="md:hidden" onClick={() => setMobileOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-[#050816]"
        >
          <div className="flex h-20 items-center justify-between px-6">
            <p className="font-semibold">Menu</p>

            <button onClick={() => setMobileOpen(false)}>
              <X />
            </button>
          </div>

          <div className="mt-10 flex flex-col items-center gap-8">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                onClick={() => setMobileOpen(false)}
                className="
                text-2xl
                font-semibold
                text-slate-300
                transition
                hover:text-white
                "
              >
                {menu.name}
              </Link>
            ))}

            <a href="/resume.pdf" className="btn-primary mt-8">
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
