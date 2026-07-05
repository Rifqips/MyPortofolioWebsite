"use client";

import { motion } from "framer-motion";
import { ProcessStep } from "@/constants/process";

type Props = {
  item: ProcessStep;
  index: number;
};

export default function ProcessCard({
  item,
  index,
}: Props) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * .15,
      }}
      className="relative"
    >
      <div className="card h-full p-8 text-center group">

        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 shadow-xl shadow-violet-500/20 transition group-hover:scale-110">

          <Icon
            size={34}
            className="text-white"
          />

        </div>

        <div className="mb-5 text-5xl font-black text-white/10">
          0{item.id}
        </div>

        <h3 className="mb-4 text-2xl font-bold">
          {item.title}
        </h3>

        <p className="leading-8 text-slate-400">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}