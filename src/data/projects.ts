export interface Project {
  id: string;
  title: string;
  tagline: string;
  techStack: string[];
  githubLink: string;
  deepDive: string;
}

export const projects: Project[] = [
  {
    id: "stackbox-ai",
    title: "StackBox AI",
    tagline: "Agentic Warehouse Management System",
    techStack: ["Python", "Flask", "Agentic AI", "SOLID Principles"],
    githubLink: "https://github.com/wisteria86/StackBoxAI",
    deepDive: "A warehouse management and agentic platform allowing managers to control databases, trigger emails, and analyze trading data entirely via automated conversational prompts. Engineered using strict SOLID principles and clean backend architecture patterns."
  },
  {
    id: "multi-agent-orchestrator",
    title: "Multi-Agent Orchestrator",
    tagline: "Autonomous Agentic Framework",
    techStack: ["Chainlit", "Grok", "LangGraph", "Langfuse"],
    githubLink: "https://github.com/wisteria86/AgenticAI",
    deepDive: "Designed a multi-agent hierarchy solving single-agent constraints. Equipped the primary agent with browser engines, filesystem read/write tools, and automated script generation workflows, mimicking modern LLM workflows like Claude Engineers."
  },
  {
    id: "virtual-staging-ai",
    title: "Virtual Staging AI",
    tagline: "Generative Real Estate Interior Design",
    techStack: ["AI Fine-Tuning", "Flask", "FastAPI", "ControlNet", "Stable Diffusion"],
    githubLink: "https://github.com/wisteria86/VirtualStaging",
    deepDive: "Built a generative pipeline for real estate marketing that intelligently populates empty rooms with interior decor. Fused custom fine-tuned Stable Diffusion checkpoints with ControlNet pipelines to retain strict structural perspective layout."
  },
  {
    id: "multimodal-research-rag",
    title: "Researcher AI",
    tagline: "Cross-Context Knowledge Retrieval",
    techStack: ["Python", "RAG", "Vector Databases", "Multimodal Embeddings"],
    githubLink: "https://github.com/wisteria86/ResearcherAI",
    deepDive: "Developed a multi-modal context retrieval platform specialized in analyzing academic literature. Solved textual retrieval blindspots by mapping both tabular graphs/figures and prose text natively into a unified Vector Database ecosystem."
  },
  {
    id: "negotiator-bot",
    title: "Negotiator Bot",
    tagline: "Specialized Quantized LLM Trainer",
    techStack: ["QLoRA", "LLAMA-3B", "Kokoro", "Gradio"],
    githubLink: "https://github.com/wisteria86/NegotiatorAI",
    deepDive: "Quantized a raw Llama-3B model down to 4-bit representation using QLoRA. Fine-tuned the agent on custom adversarial sales scripts to build an intensely defensive, cost-minimizing negotiation simulator for corporate training environments."
  },
  {
    id: "news-scrap",
    title: "NewsScrap",
    tagline: "AI-Powered News Scraper & Analytical Assistant",
    techStack: ["Electron", "Grok API", "Web Scraping", "JavaScript"],
    githubLink: "https://github.com/wisteria86/NewsScrap",
    deepDive: "A distraction-free Electron desktop application tailored for students preparing for competitive exams. The app seamlessly scrapes daily news editorials, categorizes them into a structured syllabus notebook, and features an integrated AI Critique Panel powered by Grok to evaluate and refine users' analytical summaries."
  },

  {
    id: "recommend-ai",
    title: "RecommendAI",
    tagline: "Hybrid Recommendation System with GenAI Explainability",
    techStack: ["FAISS", "LightGBM", "Gemini API", "Streamlit", "Python"],
    githubLink: "https://github.com/wisteria86/RecommendAI",
    deepDive: "A production-grade, highly scalable recommendation engine engineered around a two-stage inference pipeline. Candidate retrieval is executed via FAISS and sentence-transformers for semantic matching, while a highly optimized LightGBM model handles tabular user-item re-ranking on the fly. Features automated data engineering with Parquet-cached vector embeddings and a generative explainability layer powered by the gemini-2.5-flash model to synthesize human-readable rationales for recommendations."
  }

];
