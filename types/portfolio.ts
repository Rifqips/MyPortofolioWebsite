export interface Skill {
  name: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
}