import Image from "next/image";

type ProfileCardProps = {
    name: string,
    image: string,
    description: string,
}

export default function ProfileCard({name, image, description }: ProfileCardProps) {
    return (
        <div className="rounded-2xl shadow-md p-4 bg-gray-50 w-full max-w-md mb-10">
            <h3 className="text-xl font-bold mb-2 text-center text-blue-900">{name}</h3>
            <div className="relative h-100 w-full mb-4 overflow-hidden rounded-lg">
                <Image 
                    src={image}
                    alt={`Profile Photo`}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
            <div className=" w-full">
                <p className="text-sm text-blue-900 font-semibold md:text-center">
                    {description}
                </p>
            </div>
        </div>
    );
}