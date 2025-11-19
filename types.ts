export type Language = 'en' | 'tr';

export interface Project {
  id: string;
  title: string;
  description: string; // We will treat this as a key for translation or store multi-lang here, but for simplicity we will fetch from constants based on lang
  tech: string[];
  status: 'Classified' | 'Public' | 'In Progress' | 'Gizli' | 'Halka Açık' | 'Geliştiriliyor';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export enum ViewState {
  HERO = 'hero',
  ABOUT = 'about',
  PROJECTS = 'projects',
  EXPERIENCE = 'experience',
  CONTACT = 'contact'
}