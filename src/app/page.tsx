
'use client'

import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection"
import ProjectsSection from "./components/ProjectSection";

export default function Home() {
  return (
    <div className="font-sans min-h-screen w-screen">
      <main className="flex flex-col text-center">
        <Hero />
        <h2 className="text-center text-3xl text-blue-900 font-bold p-6">What We Offer</h2>
        <ServicesSection />
        <h2 className="text-center text-3xl text-blue-900 font-bold p-6">Project Before and Afters</h2>
        <ProjectsSection />
      </main>
    </div>
  );
}
