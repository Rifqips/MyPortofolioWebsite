"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

type Props = {
  title: string;
  description: string;
  open: boolean;
  onClick: () => void;
};

export default function FaqItem({
  title,
  description,
  open,
  onClick,
}: Props) {
  return (
    <div className="card overflow-hidden">

      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-7 text-left transition hover:bg-white/5"
      >
        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <div className="rounded-full bg-white/5 p-2">

          {open ? (
            <Minus className="text-cyan-400" size={18} />
          ) : (
            <Plus className="text-slate-400" size={18} />
          )}

        </div>
      </button>

      <AnimatePresence>

        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: .3,
            }}
          >
            <div className="border-t border-white/10 px-7 py-6 leading-8 text-slate-400">
              {description}
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}