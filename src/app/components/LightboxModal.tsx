"use client";

import ProjectCard from "./ProjectCard";
import { X } from "lucide-react";

type Project = {
  title?: string;
  images: string[];
  description: string;
};

type LightboxModalProps = {
  card: Project;
  currentImage: number;
  onClose: () => void;
};

export default function LightboxModal({ card, currentImage, onClose }: LightboxModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 text-white p-3 rounded-full bg-black/50 hover:bg-black/70 z-50 shadow-lg"
      >
        <X className="w-7 h-7" />
      </button>

      {/* Modal card container */}
      <div
        className="relative w-[95vw] max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <ProjectCard {...card} initialImage={currentImage} isModal />
      </div>
    </div>
  );
}