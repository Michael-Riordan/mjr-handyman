
'use client'
import { MapPin } from "lucide-react";

import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection"
import ProjectsSection from "./components/ProjectSection";

export default function Home() {
  return (
    <div className="font-sans min-h-screen w-screen">
      <main className="flex flex-col">
        <Hero />
        <h2 className="text-center text-2xl text-blue-900 font-bold p-6">What We Offer</h2>
        <ServicesSection />
        <h2 className="text-center text-2xl text-blue-900 font-bold p-6">Project Before and Afters</h2>
        <ProjectsSection />
      </main>
      <footer className="row-start-3 flex flex-col gap-2 justify-center bg-gray-50 p-5">
        <p className="flex flex-row text-blue-900 text-xl font-bold justify-center">
          <MapPin className="w-5 h-5 text-blue-900 self-center" />
          Phoenix, AZ
        </p>
        <p className="flex flex-col justify-center items-center gap-2 text-blue-900 text-lg font-bold">
          <a
            href="https://www.facebook.com/mjrsquaredllc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-900 w-5 h-8 flex flex-row"
          >
          <svg role="img" viewBox="0 0 24 24" className="fill-blue-900" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
          </svg>
          </a>
            © {new Date().getFullYear()} MJR² Handyman Services
        </p>
      </footer>
    </div>
  );
}
