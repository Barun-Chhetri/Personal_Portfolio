export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  role: string;
  featured: boolean;
  liveUrl: string;
  githubUrl: string;
  image: string;
  tags: string[];
  category: 'Full-Stack / AI' | 'Full-Stack / Web';
  metrics: { label: string; value: string }[];
  keyHighlights: string[];
  architecture: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Hands-on';
    description: string;
  }[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  credentialId: string;
  verificationUrl?: string;
  skills: string[];
  icon: string;
  accentColor: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  gpa: string;
  graduation: string;
  honors: string[];
  involvement: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
}
