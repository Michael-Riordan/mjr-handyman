'use client';
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectSection() {
  const servicesLeft = [
    "Custom Decorative Moldings",
    "Smart Lock Installations",
    "Mirror Hanging",
    "Shelf Installation",
    "Gate Repair",
    "Picture Hanging",
    "Outlet Replacement",
  ];

  const servicesRight = [
    "Sink Replacement/Repair",
    "Toilet Replacement/Repair",
    "TV Mounting",
    "Shower/Bath Repair",
    "Garbage Disposal Installation/Repair",
    "Light Fixture/Fan Replacement",
    "Starlink Installation"
  ];

  // Animation variant for each service
  const serviceVariants: any = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: [1, 1.05, 1], // subtle grow/shrink
      transition: {
        duration: 1.2,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          What We Can Help With
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
          {/* Left column */}
          <ul className="space-y-4">
            {servicesLeft.map((service, idx) => (
              <motion.li
                key={idx}
                className="flex items-center gap-3 text-lg font-medium text-blue-900 hover:text-blue-700 transition-colors"
                variants={serviceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ originY: 0.5 }}
              >
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                {service}
              </motion.li>
            ))}
          </ul>

          {/* Right column */}
          <ul className="space-y-4">
            {servicesRight.map((service, idx) => (
              <motion.li
                key={idx}
                className="flex items-center gap-3 text-lg font-medium text-blue-900 hover:text-blue-700 transition-colors"
                variants={serviceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ originY: 0.5 }}
              >
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                {service}
              </motion.li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-blue-800 text-xl font-semibold italic">
          ...and much more. If it needs fixing, we’ve got you covered!
        </p>
      </div>
    </section>
  );
}