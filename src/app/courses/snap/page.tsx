"use client";

import NmatTissnetDetails from "@/app/components/nmat-tissnet-details";
import SnapExamDetails from "@/app/components/snap-exam-details";
import { motion } from "framer-motion";
import Image from "next/image";

// Define variants outside the component to prevent recreation on every render
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function SnapPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-6xl mx-auto" 
          initial="hidden" 
          animate="visible" 
          variants={containerVariants}
        >
          {/* Hero Section */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src="/assets/ms/msbanner.png"
                alt="Government Jobs Preparation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
                <div className="px-6 md:px-12 max-w-3xl">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    SNAP - NMAT - TISSNET
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl">
                    Symbiosis National Aptitude Test for SIBM-Pune, Bengaluru & Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <SnapExamDetails/>
          <NmatTissnetDetails />

          {/*Gallery */}
          {/* <motion.section variants={itemVariants} className="mb-16">
  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Gallery</h2>
  <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
      <motion.div
        key={item}
        className="relative h-64 md:h-80 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-300 border border-border"
        whileHover={{ scale: 1.02 }}
      >
        <Image
          src={`/assets/ms/ms${item}.png`}
          alt={`MS Admission ${item}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    ))}
  </div>
</motion.section> */}
        </motion.div>
      </div>
    </main>
  );
}