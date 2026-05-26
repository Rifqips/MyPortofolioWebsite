export interface Skill {
  name: string;
}

export type ProjectCategory =
  | "web"
  | "android"
  | "backend"
  | "fullstack"
  | "design"
  | "other";

export interface ProjectSection {
  title: string;
  items: string[];
}

export interface Project {
  _id?: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  techStack: string[];
  imageUrl: string;
  features: string[];
  sections: ProjectSection[];
  isPublished?: boolean;
  isFeatured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
}
