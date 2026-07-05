import {
  Globe,
  LayoutDashboard,
  Smartphone,
  DatabaseZap,
} from "lucide-react";

export type Service = {
  id: number;
  title: string;
  description: string;
  icon: typeof Globe;
  features: string[];
};

export const services: Service[] = [
  {
    id: 1,
    title: "Website Development",
    icon: Globe,
    description:
      "Modern, responsive, and SEO-friendly websites built to strengthen your business and online presence.",
    features: [
      "Landing Page",
      "Company Profile",
      "Portfolio Website",
      "SEO Friendly",
    ],
  },
  {
    id: 2,
    title: "CMS Development",
    icon: LayoutDashboard,
    description:
      "Custom admin dashboards that allow you to manage your content without technical knowledge.",
    features: [
      "Admin Dashboard",
      "CRUD System",
      "Authentication",
      "Role Management",
    ],
  },
  {
    id: 3,
    title: "Android Development",
    icon: Smartphone,
    description:
      "Native Android applications built with Kotlin and Jetpack Compose for high performance.",
    features: [
      "Native Kotlin",
      "Jetpack Compose",
      "REST API",
      "Firebase",
    ],
  },
  {
    id: 4,
    title: "Backend Development",
    icon: DatabaseZap,
    description:
      "Secure and scalable backend services designed for both web and mobile applications.",
    features: [
      "JWT Authentication",
      "MongoDB / MySQL",
      "Cloudinary",
      "Deployment",
    ],
  },
];