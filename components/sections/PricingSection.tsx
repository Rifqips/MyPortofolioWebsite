"use client";

import { motion } from "framer-motion";
import PricingCard from "@/components/cards/PricingCard";
import { pricingPackages } from "@/constants/pricing";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-spacing section-anchor relative overflow-hidden"
    >
      {" "}
      {/* Background */}{" "}
      <div className="absolute inset-0 -z-10">
        {" "}
        <div className="absolute left-0 top-32 h-64 w-64 rounded-full bg-violet-600/10 blur-[120px] md:h-80 md:w-80 md:blur-[150px]" />{" "}
        <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px] md:h-[420px] md:w-[420px] md:blur-[180px]" />{" "}
      </div>{" "}
      <div className="container-layout">
        {" "}
        {/* Heading */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-20"
        >
          {" "}
          <span className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300 md:mb-5 md:px-5 md:text-sm">
            {" "}
            Pricing{" "}
          </span>{" "}
          <h2 className="title-lg mb-4 md:mb-6">
            {" "}
            Simple Pricing, <br />{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Powerful Solutions.{" "}
            </span>{" "}
          </h2>{" "}
          <p className="subtitle">
            {" "}
            Select the package that matches your goals. Every solution is
            crafted using modern technologies, scalable architecture, responsive
            design, with optional source code licensing available.{" "}
          </p>{" "}
        </motion.div>{" "}
        {/* Pricing Grid */}{" "}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {" "}
          {pricingPackages.map((item, index) => (
            <PricingCard key={item.id} item={item} index={index} />
          ))}{" "}
        </div>{" "}
        {/* Notes */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass mt-12 rounded-[28px] p-6 md:mt-16 md:rounded-[32px] md:p-8"
        >
          {" "}
          <div className="grid gap-8 lg:grid-cols-2">
            {" "}
            {/* Left */}{" "}
            <div>
              {" "}
              <h3 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl">
                {" "}
                What's Included{" "}
              </h3>{" "}
              <ul className="space-y-3 text-sm leading-7 text-slate-300 md:space-y-4 md:text-base">
                {" "}
                <li>✅ Source code available as an optional add-on.</li>{" "}
                <li>
                  {" "}
                  ✅ Fully responsive across desktop, tablet, and mobile
                  devices.{" "}
                </li>{" "}
                <li>
                  {" "}
                  ✅ Clean, scalable architecture following best practices.{" "}
                </li>{" "}
                <li>
                  {" "}
                  ✅ Free project consultation before development begins.{" "}
                </li>{" "}
                <li> ✅ Free deployment to your hosting or server. </li>{" "}
                <li>
                  {" "}
                  ✅ Complimentary bug fixes after project delivery.{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            {/* Right */}{" "}
            <div>
              {" "}
              <h3 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl">
                {" "}
                Important Notes{" "}
              </h3>{" "}
              <ul className="space-y-3 text-sm leading-7 text-slate-400 md:space-y-4 md:text-base md:leading-8">
                {" "}
                <li>
                  {" "}
                  • Pricing may vary depending on project complexity and feature
                  requirements.{" "}
                </li>{" "}
                <li>
                  {" "}
                  • A free domain is included with selected packages.{" "}
                </li>{" "}
                <li>
                  {" "}
                  • Free maintenance covers bug fixes and technical support,
                  handled on a first-come, first-served basis.{" "}
                </li>{" "}
                <li>
                  {" "}
                  • Additional features requested after project completion will
                  be quoted separately.{" "}
                </li>{" "}
                <li>
                  {" "}
                  • Typical project delivery ranges from 1–4 weeks, depending on
                  the project scope.{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </motion.div>{" "}
        {/* CTA */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className=" mt-14 rounded-[30px] border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-cyan-500/10 p-8 text-center md:mt-20 md:rounded-[36px] md:p-12 "
        >
          {" "}
          <h3 className="mb-4 text-2xl font-bold md:mb-5 md:text-4xl">
            {" "}
            Let's Build Something Amazing Together{" "}
          </h3>{" "}
          <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-slate-300 md:mb-8 md:text-base md:leading-8">
            {" "}
            Every business has unique requirements. Whether you need a modern
            website, Android application, backend API, admin dashboard, or a
            fully custom software solution, I'll help turn your ideas into a
            reliable digital product.{" "}
          </p>{" "}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {" "}
            Free Consultation{" "}
          </a>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
