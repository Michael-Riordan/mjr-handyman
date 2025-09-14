
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[550px] md:h-[600px] text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/tools-wallpaper.jpg"
        alt="Tools Spread Across Table"
        className="object-cover"
        fill
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 flex flex-col items-center justify-center text-white px-4">
        
        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A Father & Son Team You Can Trust
        </motion.h1>

        {/* Subheadline */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Reliable • Affordable • Local
        </motion.h2>

        {/* Supporting Line */}
        <motion.p
          className="text-lg md:text-xl font-medium mb-6 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Proudly serving homes across the Valley. On-Time Service, Every Time.
        </motion.p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Call Now button (mobile-first) */}
          <a href="tel:+16316171415">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-full shadow-lg hover:bg-blue-950 transition"
            >
              📞 Call Now
            </motion.button>
          </a>

          <span className="hidden md:inline font-semibold text-white">
            Or text: <span className="underline">(631) 617-1415</span>
          </span>

          {/* Get a Quote */}
          <Link href="/quote">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              💬 Get a Quote
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}