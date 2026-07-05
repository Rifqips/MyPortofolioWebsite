"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { PricingPackage } from "@/constants/pricing";

type Props = {
  item: PricingPackage;
  index: number;
};

const WHATSAPP =
  "https://wa.me/6285155055472?text=Halo%20Rifqi,%20saya%20tertarik%20dengan%20layanan%20Anda.";

export default function PricingCard({ item, index }: Props) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      whileHover={{ y: -12 }}
      className="group relative h-full"
    >
      {" "}
      {/* Glow */}{" "}
      <div
        className={` absolute -inset-[1px] rounded-[26px] opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 md:rounded-[30px] ${item.popular ? "bg-gradient-to-r from-violet-600/50 via-blue-500/50 to-cyan-500/50" : "bg-white/10"} `}
      />{" "}
      <div
        className={` relative flex h-full flex-col overflow-hidden rounded-[26px] border backdrop-blur-2xl transition-all duration-300 md:rounded-[30px] ${item.popular ? "border-violet-500/40 bg-gradient-to-b from-violet-500/10 to-white/[0.03]" : "border-white/10 bg-white/[0.03]"} `}
      >
        {" "}
        {/* Popular Badge */}{" "}
        {item.popular && (
          <div className="absolute right-4 top-4 md:right-5 md:top-5">
            {" "}
            <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 px-3 py-1.5 text-[10px] font-semibold text-white shadow-xl md:gap-2 md:px-4 md:py-2 md:text-xs">
              {" "}
              <Sparkles size={12} /> Most Popular{" "}
            </div>{" "}
          </div>
        )}{" "}
        {/* Header */}{" "}
        <div className="p-6 md:p-8">
          {" "}
          <div
            className={` mb-5 flex h-14 w-14 items-center justify-center rounded-2xl md:mb-6 md:h-16 md:w-16 ${item.popular ? "bg-gradient-to-br from-violet-600 to-cyan-500" : "bg-white/5"} `}
          >
            {" "}
            <Icon
              size={26}
              className={item.popular ? "text-white" : "text-cyan-400"}
            />{" "}
          </div>{" "}
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-slate-500 md:text-sm md:tracking-[0.35em]">
            {" "}
            {item.subtitle}{" "}
          </p>{" "}
          <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl">
            {" "}
            {item.title}{" "}
          </h3>{" "}
          <div className="mb-5 md:mb-6">
            {" "}
            <h2 className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
              {" "}
              {item.price}{" "}
            </h2>{" "}
          </div>{" "}
          <p className="text-sm leading-7 text-slate-400 md:text-base md:leading-8">
            {" "}
            {item.description}{" "}
          </p>{" "}
        </div>{" "}
        {/* Divider */} <div className="mx-6 h-px bg-white/10 md:mx-8" />{" "}
        {/* Features */}{" "}
        <div className="flex-1 p-6 md:p-8">
          {" "}
          <div className="space-y-4 md:space-y-5">
            {" "}
            {item.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 md:gap-4">
                {" "}
                <div
                  className={` mt-1 flex h-5 w-5 items-center justify-center rounded-full md:h-6 md:w-6 ${item.popular ? "bg-violet-500/20" : "bg-cyan-500/10"} `}
                >
                  {" "}
                  <Check
                    size={12}
                    className={
                      item.popular ? "text-violet-300" : "text-cyan-400"
                    }
                  />{" "}
                </div>{" "}
                <span className="text-sm leading-6 text-slate-300 md:leading-7">
                  {" "}
                  {feature}{" "}
                </span>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        {/* Footer */}{" "}
        <div className="p-6 pt-0 md:p-8 md:pt-0">
          {" "}
          <Link
            href={WHATSAPP}
            target="_blank"
            className={` flex w-full items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300 md:py-4 ${item.popular ? "bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 text-white hover:scale-[1.03]" : "border border-white/10 bg-white/5 hover:bg-white/10"} `}
          >
            {" "}
            {item.button}{" "}
            <ArrowRight
              size={18}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </motion.div>
  );
}
