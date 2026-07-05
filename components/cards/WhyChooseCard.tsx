"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WhyChoose } from "@/constants/whyChoose";

type Props = {
  item: WhyChoose;
  index: number;
};

export default function WhyChooseCard({
  item,
  index,
}: Props) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: .5,
        delay: index * .1,
      }}
      whileHover={{
        y: -8,
      }}
      className="group card relative p-8"
    >
      <ArrowUpRight
        className="absolute right-6 top-6 text-white/20 transition group-hover:rotate-45 group-hover:text-cyan-400"
        size={20}
      />

      <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 shadow-lg shadow-violet-500/20">
        <Icon
          size={30}
          className="text-white"
        />
      </div>

      <h3 className="mb-4 text-2xl font-bold">
        {item.title}
      </h3>

      <p className="leading-8 text-slate-400">
        {item.description}
      </p>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 transition-all duration-300 group-hover:w-full" />
    </motion.div>
  );
}