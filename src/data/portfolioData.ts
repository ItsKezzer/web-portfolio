import { PersonalProfile, ServiceItem, ExperienceItem, CvOption } from '../types';

export const personalProfile: PersonalProfile = {
  name: 'Kavan T.',
  handle: 'kavan.it',
  tagline: 'DevOps Engineer & Python Specialist',
  bioTemplate: "I'm Kavan, a {age} years old developer based in France with a specialty in Python, Docker, and everything related to DevOps.",
  birthDate: '1999-08-10',
  location: 'France',
  email: 'kavanthomson@gmail.com',
  github: {
    username: 'ItsKezzer',
    url: 'https://github.com/ItsKezzer',
  },
  linkedin: {
    username: 'kavan-t',
    url: 'https://linkedin.com/in/kavan-t',
  },
};

export const servicesData: ServiceItem[] = [
  {
    id: 'browser',
    title: 'Browser',
    description: 'Private, lightweight search engine powered by SearXNG. Aggregates results from multiple sources without tracking your queries.',
    domain: 'browser.kezzer.dev',
    url: 'https://browser.kezzer.dev',
    status: 'active',
  },
  {
    id: 'cloud',
    title: 'Cloud',
    description: 'Personal cloud storage, real-time sync & persistent infrastructure assets.',
    domain: 'cloud.kezzer.dev',
    url: 'https://cloud.kezzer.dev',
    status: 'active',
  },
  {
    id: 'passwords',
    title: 'Passwords',
    description: 'Zero-knowledge password vault & encrypted identity authority.',
    domain: 'passwords.kezzer.dev',
    url: 'https://passwords.kezzer.dev',
    status: 'active',
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'DevOps utilities, payload encoders, formatters & debug console.',
    domain: 'tools.kezzer.dev',
    url: 'https://tools.kezzer.dev',
    status: 'active',
  },
  {
    id: 'stream',
    title: 'Streaming',
    description: 'A private media streaming platform delivering high-definition movies and TV shows on demand across all devices.',
    domain: 'watch.kezzer.dev',
    url: 'https://watch.kezzer.dev',
    status: 'active',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'sogeti',
    role: 'DevOps Engineer & Consultant',
    period: '2026 - PRESENT',
    organization: 'Sogeti - Rennes',
    description:
      'Working as a DevOps Engineer and consultant, helping clients automate infrastructure and build reliable deployment pipelines.',
    tags: ['Python', 'Ansible', 'Docker', 'Jenkins', 'Gitlab CI']
  },
  {
    id: 'nexguard',
    role: 'DevOps & Automation Engineer',
    period: '2025 — 2026',
    organization: 'Nagravision - Rennes',
    description:
      'DevOps Engineer managing Python internal tools, Terraform/Ansible GitLab Runner deployments, hybrid AWS deep-archive solutions, Docker isolated services, and secure package transfer systems.',
    tags: ['Python', 'Terraform', 'Ansible', 'AWS', 'Docker', 'Gitlab CI'],
  },
  {
    id: 'ateme',
    role: 'Junior Research Engineer',
    period: '2022 — 2024',
    organization: 'Ateme - Rennes',
    description:
      'Developing Python tools for dynamic video encoder resource allocation on Docker and Kubernetes with zero downtime, alongside multi-terabyte client CDN log analysis.',
    tags: ['Python', 'Docker', 'Kubernetes', 'MongoDB', 'Prometheus', 'Grafana'],
  },
];

export const cvOptions: CvOption[] = [
  {
    code: 'EN',
    title: 'English (US/UK)',
    subtitle: 'English version',
    url: 'https://cloud.kezzer.dev/public/cv-eng-kavan',
  },
  {
    code: 'FR',
    title: 'Français',
    subtitle: 'Version française',
    url: 'https://cloud.kezzer.dev/public/cv-kavan-thomson',
  },
];
