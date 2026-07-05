import {
  MessageCircleMore,
  FileText,
  Code2,
  ClipboardCheck,
  Rocket,
} from "lucide-react";

export type ProcessStep = {
  id: number;
  title: string;
  description: string;
  icon: any;
};

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We discuss your business goals, project requirements, timeline, and estimated budget.",
    icon: MessageCircleMore,
  },
  {
    id: 2,
    title: "Planning",
    description:
      "A detailed project plan is prepared, including architecture, UI, database design, and milestones.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Development",
    description:
      "The project is developed using modern technologies with a strong focus on quality and maintainability.",
    icon: Code2,
  },
  {
    id: 4,
    title: "Review",
    description:
      "You review the product and request revisions within the agreed project scope.",
    icon: ClipboardCheck,
  },
  {
    id: 5,
    title: "Launch",
    description:
      "The final product is deployed, and ongoing support is available.",
    icon: Rocket,
  },
];