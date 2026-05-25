"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: Props) {
  const variants = {
    up: {
      y: 40,
      x: 0,
    },
    left: {
      x: -40,
      y: 0,
    },
    right: {
      x: 40,
      y: 0,
    },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...variants[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}