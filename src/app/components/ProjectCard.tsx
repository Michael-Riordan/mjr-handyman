"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectCardProps = {
  images: string[];
  title?: string;
  description: string;
};

export default function ProjectCard({ images, description, title }: ProjectCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const total = images.length;

  const prevSlide = () => setCurrentImage((currentImage - 1 + total) % total);
  const nextSlide = () => setCurrentImage((currentImage + 1) % total);

  return (
    <div className="rounded-2xl shadow-lg p-5 bg-white w-full max-w-md mb-10 border border-blue-100 hover:shadow-2xl transition-transform duration-300 hover:scale-105">
      {/* Title */}
      <h3 className="text-2xl font-bold mb-4 text-center text-blue-900 tracking-tight">
        {title}
      </h3>

      {/* Image Carousel */}
      <div className="relative h-72 w-full mb-6 overflow-hidden rounded-xl">
        <Image
          key={currentImage} // forces transition
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          fill
          className="object-cover rounded-xl transition-opacity duration-500 ease-in-out"
        />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-blue-100 shadow-md transition"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-blue-900" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-blue-100 shadow-md transition"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6 text-blue-900" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-3 w-full flex justify-center gap-2">
          {images.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                idx === currentImage ? "bg-blue-700" : "bg-white/70 border border-blue-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="bg-blue-50 rounded-lg p-4">
        <p className="text-md text-blue-900 font-medium text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}