
'use client'
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectSection";

export default function Home() {
  return (
    <div className="font-sans min-h-screen w-screen">
      <main className="flex flex-col">
        <Hero />
        <h2 className="text-center text-2xl text-blue-900 font-bold p-6">Project Before and Afters</h2>
        <ProjectsSection />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
