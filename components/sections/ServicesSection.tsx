"use client";

import { motion } from "framer-motion";
import ServiceCard from "../cards/ServiceCard";
import { services } from "@/constants/services";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-spacing section-anchor relative overflow-hidden"
    >
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="container-layout">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-20"
        >
          <span className="mb-4 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs text-violet-300 md:px-5 md:text-sm">
            Services
          </span>

          <h2 className="title-lg mb-4 md:mb-6">
            Build Digital Products
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              That Grow Your Business
            </span>
          </h2>

          <p className="subtitle">
            I help businesses transform ideas into high-quality digital
            products, including websites, Android applications, backend APIs,
            and custom admin dashboards.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((item, index) => (
            <ServiceCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
