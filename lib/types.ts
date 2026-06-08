export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
  comingSoon?: boolean;
}

export interface Skill {
  name: string;
  category: "language" | "tool" | "certification";
  issuer?: string;
  year?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: "work" | "education";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
