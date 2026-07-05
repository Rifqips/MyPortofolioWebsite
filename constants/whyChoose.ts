import {
  Code2,
  Rocket,
  ShieldCheck,
  Headset,
  Layers3,
  FolderGit2,
} from "lucide-react";

export type WhyChoose = {
  id: number;
  title: string;
  description: string;
  icon: any;
};

export const whyChooseItems: WhyChoose[] = [
  {
    id: 1,
    title: "Clean Architecture",
    description:
      "Maintainable, scalable, and well-structured code following modern development practices.",
    icon: Code2,
  },
  {
    id: 2,
    title: "Modern Technologies",
    description:
      "Built with Next.js, Kotlin, Jetpack Compose, TypeScript, MongoDB, and other modern technologies.",
    icon: Rocket,
  },
  {
    id: 3,
    title: "Optional Source Code",
    description:
      "Source code is available as an optional add-on for clients who require ownership or future development flexibility.",
    icon: FolderGit2,
  },
  {
    id: 4,
    title: "Secure & Scalable",
    description:
      "Applications are built with security, performance, and future scalability in mind.",
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: "Reliable Support",
    description:
      "Free bug fixes and technical support after project delivery through a support queue.",
    icon: Headset,
  },
  {
    id: 6,
    title: "Tailored Solutions",
    description:
      "Every project is designed around your business needs instead of using generic templates.",
    icon: Layers3,
  },
];