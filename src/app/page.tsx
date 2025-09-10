
'use client'

import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection"
import ProjectsSection from "./components/ProjectSection";
import Facebook from "./components/Facebook";

export default function Home() {
  return (
    <div className="font-sans min-h-screen w-screen">
      <main className="flex flex-col text-center">
        <Hero />
        <ServicesSection />
        <ProjectsSection />
        <Facebook />
      </main>
    </div>
  );
}
