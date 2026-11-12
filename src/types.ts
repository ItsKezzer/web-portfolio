export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  domain: string;
  url: string;
  status: 'active' | 'degraded' | 'offline';
}

export interface ExperienceItem {
  id: string;
  role: string;
  period: string;
  organization: string;
  description: string;
  tags: string[];
}

export interface PersonalProfile {
  name: string;
  handle: string;
  tagline: string;
  bioTemplate: string;
  birthDate: string; // 'YYYY-MM-DD'
  location: string;
  email: string;
  github: {
    username: string;
    url: string;
  };
  linkedin: {
    username: string;
    url: string;
  };
}

export interface CvOption {
  code: 'EN' | 'FR';
  title: string;
  subtitle: string;
  url: string;
}
