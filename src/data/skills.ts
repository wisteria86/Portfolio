export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Backends",
    skills: ["Python", "Flask", "FastAPI", "OOP", "Data Structures"]
  },
  {
    title: "AI & Engineering",
    skills: ["Agentic AI", "AI Fine-Tuning", "RAG", "System Design"]
  },
  {
    title: "Tools & Cloud",
    skills: ["AWS Fundamentals", "LangGraph", "Chainlit", "LlamaIndex", "Vector Databases"]
  }
];
