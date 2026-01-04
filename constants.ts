
import { Project, Skill, Language } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Chakra Automation Suite",
    description: "High-performance Python scripts for complex workflow automation and data processing.",
    tags: ["Python", "Automation", "Optimization"],
    link: "#"
  },
  {
    title: "Jutsu API Bridge",
    description: "Robust API integration layer for seamless communication between legacy systems and modern microservices.",
    tags: ["Node.js", "API", "Architecture"],
    link: "#"
  },
  {
    title: "Shinobi Bot Framework",
    description: "Multi-platform bot framework optimized for low latency and high concurrency.",
    tags: ["TypeScript", "Bots", "Real-time"],
    link: "#"
  },
  {
    title: "Hidden Leaf Optimizer",
    description: "Debugging tool suite that identifies bottlenecks in massive codebases using AI analysis.",
    tags: ["AI", "Debugging", "Tools"],
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "Automation", level: 95, category: 'code' },
  { name: "Debugging", level: 90, category: 'code' },
  { name: "API Integration", level: 85, category: 'code' },
  { name: "Adobe Photoshop", level: 80, category: 'design' },
  { name: "Adobe Illustrator", level: 75, category: 'design' },
  { name: "Adobe Premiere Pro", level: 80, category: 'design' },
  { name: "Bot Development", level: 92, category: 'tools' }
];

export const LANGUAGES: Language[] = [
  { name: "Persian", proficiency: "Fluent", symbol: "ف" },
  { name: "English", proficiency: "Fluent", symbol: "E" },
  { name: "Arabic", proficiency: "Fluent", symbol: "ع" },
  { name: "Swahili", proficiency: "Fluent", symbol: "S" }
];
