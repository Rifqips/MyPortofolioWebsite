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
    title: "Sangu",
    description:
      "Personal finance application built using Kotlin and Jetpack Compose.",
    techStack: ["Kotlin", "Compose", "MVVM"],
  },
  {
    title: "Work Order Management",
    description:
      "Android-based work order management application with filtering and pagination.",
    techStack: ["Android", "Room", "Retrofit"],
  },
];