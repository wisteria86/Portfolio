import Hero from "@/components/Hero";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950">
      <Hero />
      <SkillsGrid />
      <ProjectsGrid />
      
      <footer className="py-8 text-center text-zinc-500 text-sm mt-12 border-t border-zinc-900">
        <p>© {new Date().getFullYear()} AbdulRehman. Built with Next.js, Tailwind & Framer Motion.</p>
      </footer>
    </main>
  );
}
