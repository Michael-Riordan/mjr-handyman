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
                <h1 className="text-5xl sm:text-4xl md:text-5xl font-bold pt-20 pb-6">
                    A Father Son Team You Can Trust
                </h1>
                <p className="text-3xl sm:text-2xl md:text-3xl font-bold pb-8">
                    Reliable. Affordable. Local.
                </p>
                <a href="tel:+6316171415">
                    <button className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-950 hover:cursor-pointer transition">
                    Call Now
                    </button>
                </a>
            </div>
        </div>
    );
}