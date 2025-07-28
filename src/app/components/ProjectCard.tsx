import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectCardProps = {
    images: string[];
    title: string;
    description: string;
  };

export default function ProjectCard({ images, title, description }: ProjectCardProps) {

    const [currentImage, setCurrentImage] = useState(0);
    const total = images.length;

    const prevSlide = () => setCurrentImage((currentImage - 1 + total) % total);
    const nextSlide = () => setCurrentImage((currentImage + 1) % total);

    return (
        <div className="rounded-2xl shadow-md p-4 bg-white w-full max-w-md mb-10">
            <h3 className="text-xl font-bold mb-2 text-center text-blue-900">{title}</h3>
            
            <div className="relative h-60 w-full mb-4 overflow-hidden rounded-lg">
                <Image 
                    src={images[currentImage]}
                    alt={`Slide ${currentImage + 1}`}
                    fill
                    className="object-cover rounded-lg"
                />

                {/* Left Arrow */}
                <button 
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white shadow z-10"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-5 h-5 text-blue-900" />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white shadow z-10"
                    aria-label="Next Image"
                >
                    <ChevronRight className="w-5 h-5 text-blue-900"/>
                </button>
            </div>
            <div className=" w-full">
                <p className="text-sm text-blue-900 font-semibold md:text-center">
                    {description}
                </p>
            </div>
        </div>
    )
}