export interface Social {
  x?: string;
  instagram?: string;
  linkedin?: string;
  email?: string;
}

export interface Profile {
  name: string;
  shortName: string;
  tagline: string;
  role: string;
  specialization: string;
  location: string;
  yearsOfExperience: number;
  bio: string;
  avatarSvg: string;
  social: Social;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Skills {
  categories: SkillCategory[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  link2?: string;
  highlight: boolean;
  image?: string;
  type?:  'reel' | 'website';
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  emoji: string;
  avatar?: string
}

export interface Service {
  title: string;
  description: string;
  deliverables: string[];
}

export interface PortfolioData {
  profile: Profile;
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  testimonials: Testimonial[];
  services: Service[];
}
