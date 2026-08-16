export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ServiceCategory;
  image: string;
  specs: ServiceSpec[];
  features: string[];
  relatedServices: string[];
}

export type ServiceCategory =
  | "seedlings"
  | "irrigation"
  | "structures"
  | "water-storage"
  | "soil-health"
  | "training"
  | "design";

export interface ServiceSpec {
  label: string;
  value: string;
  unit?: string;
}

export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: string;
  description: string;
  images: string[];
  completedAt: string;
  clientType: "farmer" | "school" | "ngo" | "county" | "household" | "hospital";
  services: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}