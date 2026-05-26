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
  // =========================
  // ANDROID PROJECTS
  // =========================

  {
    slug: "sangu",
    title: "Sangu",
    category: "android",
    description:
      "Personal finance application built using Kotlin and Jetpack Compose.",

    longDescription:
      "Sangu is a modern personal finance application designed to help users manage income, expenses, and balance tracking with a smooth mobile experience.",

    techStack: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Retrofit"],

    imageUrl: "/projects/placeholder.png",

    features: [
      "Transaction tracking",
      "Income and expense summary",
      "Modern Jetpack Compose UI",
      "MVVM-based architecture",
    ],

    sections: [
      {
        title: "Platform",
        items: ["Android", "Mobile Application"],
      },

      {
        title: "Architecture",
        items: ["MVVM", "Clean Architecture", "Repository Pattern"],
      },

      {
        title: "Core Features",
        items: [
          "Transaction tracking",
          "Expense management",
          "Income summary",
          "Balance monitoring",
        ],
      },
    ],

    githubUrl: "https://github.com/example/sangu",
  },

  {
    slug: "work-order-management",
    title: "Work Order Management",
    category: "android",

    description:
      "Operational work order management application with filtering and pagination.",

    longDescription:
      "Work Order Management is an Android application focused on managing operational work orders with local database support, searching, filtering, and pagination.",

    techStack: ["Android", "Room", "Retrofit", "Paging", "Coroutines"],

    imageUrl: "/projects/placeholder2.png",

    features: [
      "Work order listing",
      "Search and filtering",
      "Pagination support",
      "Offline local database",
    ],

    sections: [
      {
        title: "Platform",
        items: ["Android", "Enterprise Mobile App"],
      },

      {
        title: "Database",
        items: [
          "Room Database",
          "Offline persistence",
          "Local synchronization",
        ],
      },

      {
        title: "Main Features",
        items: [
          "Work order list",
          "Search by RBM",
          "Pagination",
          "Filter dialog",
        ],
      },
    ],

    githubUrl: "https://github.com/example/work-order",
  },

  // =========================
  // WEB PROJECTS
  // =========================

  {
    slug: "rifqi-portfolio",
    title: "Developer Portfolio",
    category: "web",

    description:
      "Modern animated portfolio website built with Next.js and Framer Motion.",

    longDescription:
      "Developer Portfolio is a modern fullstack portfolio website featuring animations, project showcase, dynamic routing, and MongoDB integration.",

    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "MongoDB",
      "Framer Motion",
    ],

    imageUrl: "/projects/placeholder2.png",

    features: [
      "Dynamic project pages",
      "Animated UI",
      "Responsive layout",
      "Admin dashboard integration",
    ],

    sections: [
      {
        title: "Frontend",
        items: [
          "Next.js App Router",
          "Responsive design",
          "Framer Motion animation",
        ],
      },

      {
        title: "Backend",
        items: [
          "MongoDB integration",
          "REST API routes",
          "CRUD project management",
        ],
      },

      {
        title: "UI Features",
        items: [
          "Swiper carousel",
          "Glassmorphism design",
          "Animated transitions",
        ],
      },
    ],

    githubUrl: "https://github.com/example/portfolio",

    demoUrl: "https://portfolio-demo.vercel.app",
  },

  {
    slug: "task-management-dashboard",
    title: "Task Management Dashboard",
    category: "web",

    description:
      "Collaborative task management dashboard for productivity teams.",

    longDescription:
      "Task Management Dashboard is a web application for managing tasks, project progress, and team collaboration with real-time UI interactions.",

    techStack: ["React", "Next.js", "TailwindCSS", "Node.js", "MongoDB"],

    imageUrl: "/projects/placeholder.png",

    features: [
      "Task creation and assignment",
      "Kanban board interface",
      "Authentication system",
      "Realtime dashboard UI",
    ],

    sections: [
      {
        title: "Frontend",
        items: [
          "React components",
          "Responsive dashboard",
          "Interactive kanban board",
        ],
      },

      {
        title: "Backend",
        items: [
          "REST API",
          "MongoDB database",
          "Authentication and authorization",
        ],
      },

      {
        title: "Productivity Features",
        items: [
          "Task tracking",
          "Team collaboration",
          "Project progress monitoring",
        ],
      },
    ],

    githubUrl: "https://github.com/example/task-dashboard",

    demoUrl: "https://task-dashboard.vercel.app",
  },
];
