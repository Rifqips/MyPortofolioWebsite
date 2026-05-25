export interface Skill {
  name: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  imageUrl: string;
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
}