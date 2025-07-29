
import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative w-full h-[400px] sm:h-[400px] md:h-[500px] text-center">
          <Image 
            src={"/tools-wallpaper.jpg"}
            alt="Tools Spread Across Table"
            className="object-cover"
            fill
            priority
          />
        
            <div className="absolute inset-0 flex flex-col items-center text-white bg-black/40">
                <h1 className="sm:text-4xl md:text-5xl font-bold pt-20 pb-6">
                    A Father Son Team You Can Trust
                </h1>
                <h2 className="sm:text-2xl md:text-3xl font-bold pb-8">
                    Reliable. Affordable. Local.
                </h2>
                <a 
                    href="tel:+16316171415"
                    className="md:hidden"
                >
                    <button className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-950 hover:cursor-pointer transition">
                    Call Now
                    </button>
                </a>
                <span className="hidden md:inline text-white text-3xl font-semibold">
                    Call: (631) 617-1415
                </span>
            </div>
        </div>
    );
}