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
    longDescription:
      "Sangu is a personal finance application designed to help users manage income, expenses, and balance tracking with a clean mobile experience.",
    techStack: ["Kotlin", "Jetpack Compose", "MVVM"],
    imageUrl: "/projects/placeholder.png",
    features: [
      "Transaction tracking",
      "Income and expense summary",
      "Modern Jetpack Compose UI",
      "MVVM-based architecture",
    ],
  },
  {
    slug: "work-order-management",
    title: "Work Order Management",
    description:
      "Android-based work order management application with filtering and pagination.",
    longDescription:
      "Work Order Management is an Android application focused on managing operational work orders with local database support, filtering, searching, and pagination.",
    techStack: ["Android", "Room", "Retrofit"],
    imageUrl: "/projects/placeholder2.png",
    features: [
      "Work order listing",
      "Search and filtering",
      "Pagination support",
      "Local data persistence using Room",
    ],
  },
];
