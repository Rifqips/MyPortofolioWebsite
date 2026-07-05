import {
  Globe,
  LayoutDashboard,
  Smartphone,
  Blocks,
} from "lucide-react";

export type PricingPackage = {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  icon: typeof Globe;
  popular?: boolean;
  features: string[];
  button: string;
};

export const pricingPackages: PricingPackage[] = [
  {
    id: 1,
    title: "Company Website",
    subtitle: "Perfect for Small Businesses",
    price: "Rp750K - Rp3M",
    description:
      "A modern, responsive website designed to establish your online presence and showcase your business professionally.",
    icon: Globe,
    features: [
      "Responsive Design",
      "Modern Landing Page",
      "SEO Optimization",
      "Contact Form",
      "WhatsApp Integration",
      "Free Deployment",
      "Free Domain (Selected Packages)",
      "Lifetime Bug Fixes*",
    ],
    button: "Start Your Project",
  },

  {
    id: 2,
    title: "CMS Website",
    subtitle: "Most Popular",
    price: "Rp3M - Rp7M",
    description:
      "A complete website with a custom admin dashboard, allowing you to manage your content without writing any code.",
    icon: LayoutDashboard,
    popular: true,
    features: [
      "Everything in Company Website",
      "Custom Admin Dashboard",
      "Authentication",
      "Role Management",
      "Image Upload",
      "Analytics Dashboard",
      "Cloudinary Integration",
      "Free Domain",
      "Priority Support",
    ],
    button: "Choose This Plan",
  },

  {
    id: 3,
    title: "Android Application",
    subtitle: "Native Development",
    price: "Starting from Rp3M",
    description:
      "High-performance Android applications developed with Kotlin and Jetpack Compose following modern architecture.",
    icon: Smartphone,
    features: [
      "Native Kotlin",
      "Jetpack Compose",
      "REST API Integration",
      "Firebase",
      "Authentication",
      "Push Notifications",
      "Play Store Ready",
    ],
    button: "Build My App",
  },

  {
    id: 4,
    title: "Custom Software",
    subtitle: "Tailored Solution",
    price: "Custom Quote",
    description:
      "Need something beyond a standard website or mobile app? Let's build a solution tailored to your business.",
    icon: Blocks,
    features: [
      "Requirement Analysis",
      "System Architecture",
      "Scalable Development",
      "Technical Consultation",
      "Long-Term Partnership",
    ],
    button: "Let's Talk",
  },
];