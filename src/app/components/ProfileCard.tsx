import Image from "next/image";

type ProfileCardProps = {
  name: string;
  image: string;
  description: string;
};

export default function ProfileCard({ name, image, description }: ProfileCardProps) {
  return (
    <div className="rounded-2xl shadow-lg p-6 bg-white w-full max-w-sm mb-10 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      {/* Name */}
      <h3 className="text-2xl font-extrabold mb-4 text-center text-blue-900 tracking-tight">
        {name}
      </h3>

      {/* Image */}
      <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full border-4 border-blue-200 shadow-md">
        <Image 
          src={image}
          alt={`${name} Profile Photo`}
          fill
          className="object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-base text-blue-800 font-medium text-center leading-relaxed px-2">
        {description}
      </p>
    </div>
  );
}