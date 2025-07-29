'use client';
import Link from "next/link";
import Image from "next/image";


export default function Nav() {
    return (
        <header className="bg-white">
            <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                <Link href={"/"} className="text-xl font-bold">
                    <Image 
                        src="/logo.png"
                        alt="MJR Squared Logo"
                        width={140}
                        height={40}
                        priority
                    />
                </Link>

                <ul className="flex space-x-6">
                    <li><Link href={"/who-we-are"} className=" text-xl text-blue-900 hover:underline">Who We Are</Link></li>
                </ul>
            </nav>
        </header>
    );
}