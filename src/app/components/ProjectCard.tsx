"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectCardProps = {
  images: string[];
  title?: string;
  description: string;
  initialImage?: number;
  isModal?: boolean;
  onImageClick?: (idx: number) => void;
};

export default function ProjectCard({
  images,
  description,
  title,
  initialImage = 0,
  isModal = false,
  onImageClick,
}: ProjectCardProps) {
  const [currentImage, setCurrentImage] = useState(initialImage);
  const total = images.length;

  useEffect(() => {
    setCurrentImage(initialImage);
  }, [initialImage]);

  const prevSlide = () => setCurrentImage((currentImage - 1 + total) % total);
  const nextSlide = () => setCurrentImage((currentImage + 1) % total);

  return (
    <div
      className={`rounded-2xl shadow-lg bg-white w-full max-w-md mb-10 border border-blue-100 transition-transform duration-300 ${
        !isModal ? "hover:scale-105" : ""
      } ${isModal ? "max-h-[80vh] p-4" : "p-5"}`}
    >
      {/* Title */}
      {title && (
        <h3 className="text-2xl font-bold mb-4 text-center text-blue-900 tracking-tight">
          {title}
        </h3>
      )}

      {/* Image Carousel */}
      <div
        className={`relative w-full mb-4 overflow-hidden rounded-xl ${
          isModal ? "h-[50vh] sm:h-[55vh]" : "h-72"
        }`}
      >
        <Image
          key={currentImage}
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          fill
          className="object-cover rounded-xl transition-opacity duration-500 ease-in-out cursor-pointer"
          onClick={() => onImageClick?.(currentImage)}
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
                idx === currentImage
                  ? "bg-blue-700"
                  : "bg-white/70 border border-blue-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <div
        className={`bg-blue-50 rounded-lg p-4 overflow-auto ${
          isModal ? "max-h-[calc(45vh-1rem)]" : ""
        }`}
      >
        <p className="text-md text-blue-900 font-medium text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}