
'use client'
import { MapPin } from "lucide-react";

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
      <footer className="row-start-3 flex gap-2 flex-wrap justify-center bg-gray-50 p-5">
        <MapPin className="w-5 h-5 text-blue-900 self-center" />
        <p className="text-blue-900 text-xl font-bold">Phoenix, AZ</p>
      </footer>
    </div>
  );
}
