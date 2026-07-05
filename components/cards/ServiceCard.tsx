"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Service } from "@/constants/services";

type Props = {
  item: Service;
  index: number;
};

export default function ServiceCard({ item, index }: Props) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -10,
      }}
      className="
        group
        card
        relative
        flex
        flex-col
        rounded-[28px]
        p-6
        md:p-8
      "
    >
      {/* Arrow */}
      <div
        className="
          absolute
          right-5
          top-5
          opacity-30
          transition
          group-hover:rotate-45
          group-hover:opacity-100
        "
      >
        <ArrowUpRight size={20} />
      </div>

      {/* Icon */}
      <div
        className="
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-violet-600
          to-cyan-500
          md:mb-8
          md:h-16
          md:w-16
        "
      >
        <Icon className="text-white" size={26} />
      </div>

      {/* Title */}
      <h3
        className="
          mb-3
          text-xl
          font-bold
          md:mb-4
          md:text-2xl
        "
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        className="
          mb-6
          text-sm
          leading-7
          text-slate-400
          md:mb-8
          md:text-base
          md:leading-8
        "
      >
        {item.description}
      </p>

      {/* Features */}
      <div className="space-y-3 md:space-y-4">
        {item.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <div
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-cyan-500/10
                md:h-6
                md:w-6
              "
            >
              <Check
                size={12}
                className="text-cyan-400 md:h-[14px] md:w-[14px]"
              />
            </div>

            <span
              className="
                text-sm
                text-slate-300
              "
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Gradient */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-1
          scale-x-0
          bg-gradient-to-r
          from-violet-600
          via-blue-600
          to-cyan-500
          transition
          duration-300
          group-hover:scale-x-100
        "
      />
    </motion.div>
  );
}
