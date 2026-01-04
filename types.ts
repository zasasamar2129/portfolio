
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'code' | 'design' | 'tools';
}

export interface Language {
  name: string;
  proficiency: string;
  symbol: string;
}
