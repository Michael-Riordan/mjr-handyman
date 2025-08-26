'use client';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.header
      className="bg-white sticky top-0 z-50 shadow-sm"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div
          className="flex items-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Image
              src="/logo.png"
              alt="MJR Squared Logo"
              width={140}
              height={40}
              priority
            />
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/mjrsquaredllc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit us on Facebook"
            className="hover:scale-110 transition-transform"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="w-7 h-7 fill-blue-600 hover:fill-blue-900"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Facebook</title>
              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
            </svg>
          </a>

          {/* Menu Links */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                href="/who-we-are"
                className="text-lg font-semibold text-blue-800 hover:text-blue-900 hover:underline transition"
              >
                Who We Are
              </Link>
            </li>
          </ul>

          {/* CTA Button */}
          <Link href="/quote" className="hidden sm:block">
            <button className="px-4 py-2 bg-blue-900 text-white font-bold rounded-full shadow hover:bg-blue-950 transition">
              Get a Quote
            </button>
          </Link>
        </motion.div>
      </nav>
    </motion.header>
  );
}