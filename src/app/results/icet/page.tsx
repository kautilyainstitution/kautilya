"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
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

export default function ICETResultsPage() {
   const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const totalImages = 15; // Update this based on your actual number of images

  const openImage = (index: number) => {
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeImage = () => {
    setCurrentImageIndex(null);
    document.body.style.overflow = 'auto'; // Re-enable background scrolling
  };

  const goToPrev = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((prev) => (prev === 0 ? totalImages - 1 : (prev as number) - 1));
    }
  };

  const goToNext = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((prev) => ((prev as number) + 1) % totalImages);
    }
  };
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
                src="/assets/our-results/icet/banner.png"
                alt="Cat Latest Results"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
                <div className="px-6 md:px-12 max-w-3xl">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Our Students made their mark
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl">
                    Our students have brought laurels
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/*Gallery */}
          <motion.section variants={itemVariants} className="mb-16">
  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Gallery</h2>
  <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item,index) => (
      <motion.div
        key={item}
        className="relative h-64 md:h-80 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-300 border border-border"
        whileHover={{ scale: 1.02 }}
      >
        <Image
          src={`/assets/our-results/icet/icet${item}.png`}
          alt={`MS Admission ${item}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          onClick={()=>{openImage(index)}}
        />
      </motion.div>
    ))}
  </div>
  {/* Modal Popup */}
     {currentImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 text-white text-4xl z-50 hover:text-gray-300 transition-colors"
            aria-label="Close gallery"
          >
            &times;
          </button>

          <button
            onClick={goToPrev}
            className="absolute left-4 md:left-8 text-white text-4xl z-50 hover:text-gray-300 transition-colors p-4"
            aria-label="Previous image"
          >
            &#8592;
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center p-4">
            <Image
              src={`/assets/our-results/icet/icet${currentImageIndex + 1}.png`}
              alt={`MBA activity ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 text-white text-4xl z-50 hover:text-gray-300 transition-colors p-4"
            aria-label="Next image"
          >
            &#8594;
          </button>

          {/* Indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {totalImages}
            </div>
          </div>
        </div>
      )}
</motion.section>
        </motion.div>
      </div>
    </main>
  );
}