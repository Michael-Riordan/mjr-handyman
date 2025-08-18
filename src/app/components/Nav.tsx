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
                <div className="flex flex-row gap-8">
                    <p className="flex flex-col justify-center items-center gap-2 text-blue-900 text-lg font-bold">
                        <a
                            href="https://www.facebook.com/mjrsquaredllc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-900 w-5 h-8 flex items-center"
                        >
                            <svg role="img" viewBox="0 0 24 24" className="fill-blue-900" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
                            </svg>
                        </a>
                    </p>
                    <ul className="flex space-x-6">
                        <li><Link href={"/who-we-are"} className=" text-xl text-blue-900 hover:underline">Who We Are</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}