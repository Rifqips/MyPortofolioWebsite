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
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  long_description: string;
  tech_stack: string[];
  image_url: string;
  features: string[];
  sections: ProjectSection[];
  is_published: boolean;
  is_featured: boolean;
  github_url?: string;
  demo_url?: string;
  created_at?: string;
  updated_at?: string;
}