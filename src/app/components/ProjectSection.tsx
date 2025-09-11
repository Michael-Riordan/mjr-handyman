"use client";

import ProjectCard from "./ProjectCard";
import { useState } from "react";
import LightboxModal from "./LightboxModal";

type Project = {
  title?: string;
  images: string[];
  description: string;
};

export default function ProjectsSection() {
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [modalImage, setModalImage] = useState(0);

  const openModal = (project: Project, imageIndex: number) => {
    setModalProject(project);
    setModalImage(imageIndex);
  };

  const closeModal = () => {
    setModalProject(null);
    setModalImage(0);
  };

  // Sample projects
  const decorativeMoldings: Project[] = [
    {
      images: [
        "/ProjectCardImages/living-room-before.jpg",
        "/ProjectCardImages/living-room-in-prog.jpg",
        "/ProjectCardImages/living-room-entire.jpeg",
        "/ProjectCardImages/living-room-moldings.jpeg",
      ],
      description:
        "Elegant moldings added to living room walls, giving the space a spacious and upscale feel.",
    },
    {
      images: [
        "/ProjectCardImages/upstairs-before-moldings.jpg",
        "/ProjectCardImages/upstairs-after-moldings.jpg",
      ],
      description:
        "Bedroom moldings installed to create depth and a refined aesthetic.",
    },
  ];

  const shelfInstallations: Project[] = [
    {
      images: [
        "/ProjectCardImages/bathroom-shelf-before.jpg",
        "/ProjectCardImages/bathroom-shelf-after.jpg",
      ],
      description: "Elegant corner shelf added for clean, space-saving storage.",
    },
    {
      images: [
        "/ProjectCardImages/room-1-before.jpg",
        "/ProjectCardImages/room-2-after.jpg",
      ],
      description: "Mounted a playful, kid-friendly shelf for books and toys.",
    },
    {
      images: [
        "/ProjectCardImages/shelf-room2-before.JPG",
        "/ProjectCardImages/shelf-room2-after.JPG",
      ],
      description: "Custom shelving installed for practical and stylish storage.",
    },
  ];

  const furnitureRestoration: Project[] = [
    {
      title: "Furniture Assembly",
      images: ["/ProjectCardImages/ikea-before.jpg", "/ProjectCardImages/ikea-after.jpg"],
      description:
        "Expertly assembled furniture, ensuring quality and durability."
    },
    {
      title: "Custom Furniture Refurbishing",
      images: ["/ProjectCardImages/dresser-before.jpeg", "/ProjectCardImages/better-dresser-after.jpeg"],
      description:
        "Sanding and painting with a stained and poly-finished top, designed to customer’s taste.",
    },
    {
      title: "Chair Fabric Replacement",
      images: ["/ProjectCardImages/chair-repair-before.jpg", "/ProjectCardImages/chair-repair-after.jpg"],
      description:
        "Replaced the worn and torn fabric on a lawn chair."
    },
  ]

  const miscProjects: Project[] = [
    {
      title: "LED Mirror Installation",
      images: ["/ProjectCardImages/before-mirror.jpg", "/ProjectCardImages/after-mirror.jpg"],
      description:
        "Installation of two LED mirrors with clean wiring for modern bathroom lighting.",
    },
    {
      title: "Gate Repair",
      images: ["/ProjectCardImages/before-fence.jpeg", "/ProjectCardImages/after-fence.jpg"],
      description:
      "Replaced rotted slats with treated wood to restore strength and appearance.",
    },
    {
      title: "Bathroom Exhaust Fan Replacement",
      images: ["/ProjectCardImages/fan-vent-before.jpg", "/ProjectCardImages/fan-vent-after.jpg"],
      description:
        "Removed and replaced a faulty bathroom exhaust fan for improved ventilation."
    },
    {
      title: "Sliding Door Window Treatment Installation",
      images: ["/ProjectCardImages/window-treatment-before.jpg", "/ProjectCardImages/window-treatments-closed.jpg", "/ProjectCardImages/window-treatment-after.jpg"],
      description:
      "Installed retractable and folding fabric window coverings.",
    },
    {
      title: "Ceiling Fan Replacement",
      images: ["/ProjectCardImages/living-room-before.jpg", "/ProjectCardImages/ceiling-fan.jpeg"],
      description: "Replacement of remote-controlled ceiling fan on 10-foot ceiling.",
    },
  ];

  const renderProjects = (projects: Project[]) =>
    projects.map((project, idx) => (
      <div key={idx} className="snap-center shrink-0 w-[90vw] max-w-xs px-2">
        <ProjectCard
          {...project}
          onImageClick={(imageIndex) => openModal(project, imageIndex)}
        />
      </div>
    ));

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 space-y-16">
      <div className="max-w-6xl mx-auto">
        {/* Decorative Moldings */}
        <div>
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8 tracking-tight">
            Decorative Moldings
          </h2>
          <div className="flex gap-6 overflow-x-auto px-2 scroll-smooth snap-x snap-mandatory hide-scrollbar">
            {renderProjects(decorativeMoldings)}
          </div>
        </div>

        {/* Furniture Restorations */}
        <div>
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8 tracking-tight">
            Furniture Assembly/Restoration
          </h2>
          <div className="flex gap-6 overflow-x-auto px-2 scroll-smooth snap-x snap-mandatory hide-scrollbar">
            {renderProjects(furnitureRestoration)}
          </div>
        </div>

        {/* Shelf Installations */}
        <div>
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8 tracking-tight">
            Shelf Installations
          </h2>
          <div className="flex gap-6 overflow-x-auto px-2 scroll-smooth snap-x snap-mandatory hide-scrollbar">
            {renderProjects(shelfInstallations)}
          </div>
        </div>

        {/* Misc Projects */}
        <div>
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8 tracking-tight">
            Miscellaneous Projects
          </h2>
          <div className="flex gap-6 overflow-x-auto px-2 scroll-smooth snap-x snap-mandatory hide-scrollbar">
            {renderProjects(miscProjects)}
          </div>
        </div>
      </div>

      {modalProject && (
        <LightboxModal card={modalProject} currentImage={modalImage} onClose={closeModal} />
      )}
    </section>
  );
}