import { Project, Skill } from "@/types/portfolio";

export const skills: Skill[] = [
  { name: "Kotlin" },
  { name: "Jetpack Compose" },
  { name: "MVVM" },
  { name: "Clean Architecture" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "TailwindCSS" },
  { name: "MongoDB" },
];

export const projects: Project[] = [
  {
    slug: "sangu",
    title: "Sangu",
    description:
      "Personal finance application built using Kotlin and Jetpack Compose.",
    techStack: ["Kotlin", "Compose", "MVVM"],
    imageUrl: "/projects/placeholder.png",
  },
  {
    slug: "work-order-management",
    title: "Work Order Management",
    description:
      "Android-based work order management application with filtering and pagination.",
    techStack: ["Android", "Room", "Retrofit"],
    imageUrl: "/projects/placeholder2.png",
  },
];
