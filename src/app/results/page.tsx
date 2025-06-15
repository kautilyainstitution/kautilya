"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

const results = [
  { name: "Bank", href: "/results/bank" },
  {
    name: "CAT",
    href: "/results/cat",
    submenu: [
      { name: "CAT 1 (2022)", href: "/results/cat/2022" },
      { name: "CAT 2 (2021)", href: "/results/cat/2021" },
      { name: "CAT 3 (2020)", href: "/results/cat/2020" },
      { name: "CAT 4 (2019)", href: "/results/cat/2019" },
      { name: "CAT 5 (2018)", href: "/results/cat/2018" },
      { name: "CAT 6 (2017)", href: "/results/cat/2017" },
      { name: "CAT 7 (2016)", href: "/results/cat/2016" },
      { name: "CAT 8 (2015)", href: "/results/cat/2015" },
      { name: "CAT 9 (2014)", href: "/results/cat/2014" },
      { name: "CAT 10 (2013)", href: "/results/cat/2013" },
      { name: "CAT 11 (2012)", href: "/results/cat/2012" },
    ],
  },
  { name: "CLAT", href: "/results/clat" },
  { name: "CRT", href: "/results/crt" },
  { name: "GRE", href: "/results/gre" },
  { name: "ICET", href: "/results/icet" },
  {
    name: "IIM",
    href: "/results/iim",
    submenu: [
      { name: "CAT 1 (2022)", href: "/results/iim/2022" },
      { name: "CAT 2 (2021)", href: "/results/iim/2021" },
      { name: "CAT 3 (2020)", href: "/results/iim/2020" },
      { name: "CAT 4 (2019)", href: "/results/iim/2019" },
      { name: "CAT 5 (2018)", href: "/results/iim/2018" },
      { name: "CAT 6 (2017)", href: "/results/iim/2017" },
      { name: "CAT 7 (2016)", href: "/results/iim/2016" },
      { name: "CAT 8 (2015)", href: "/results/iim/2015" },
      { name: "CAT 9 (2014)", href: "/results/iim/2014" },
      { name: "CAT 10 (2013)", href: "/results/iim/2013" },
      { name: "CAT 11 (2012)", href: "/results/iim/2012" },
    ],
  },
  { name: "Internship", href: "/results/internship" },
  { name: "SSC", href: "/results/ssc" },
];

export default function ResultsLandingPage() {
   const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const totalImages = 6; // Update this based on your actual number of images

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
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (name: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
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
                src="/assets/home/resultsbanner.png"
                alt="Our Achievements"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
                <div className="px-6 md:px-12 max-w-3xl">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Our Remarkable Results
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl">
                    Celebrating the achievements of our students across various competitive exams and programs.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Results Grid */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Exam Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((result, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6 h-full">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-semibold">{result.name}</h3>
                      {result.submenu && (
                        <button 
                          onClick={() => toggleItem(result.name)}
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <ChevronDown className={`h-5 w-5 transition-transform ${expandedItems[result.name] ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    
                    {!result.submenu && (
                      <Link href={result.href} className="flex items-center text-primary">
                        <span className="mr-2">View results</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                    
                    {result.submenu && expandedItems[result.name] && (
                      <div className="mt-4 space-y-2">
                        {result.submenu.map((subitem, subindex) => (
                          <Link 
                            key={subindex} 
                            href={subitem.href}
                            className="block py-2 px-3 rounded-md hover:bg-secondary/50 transition-colors"
                          >
                            <div className="flex items-center">
                              <span className="mr-2">•</span>
                              <span>{subitem.name}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="bg-secondary/50 rounded-xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Success Metrics</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Consistent Performance",
                    description: "Year after year, our students achieve top ranks in competitive exams"
                  },
                  {
                    title: "Comprehensive Support",
                    description: "From study materials to interview preparation, we cover all aspects"
                  },
                  {
                    title: "Personalized Guidance",
                    description: "Tailored mentorship that addresses individual strengths and weaknesses"
                  }
                ].map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Gallery Section */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Success Stories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item,index) => (
                <motion.div
                  key={item}
                  className="relative h-40 md:h-48 rounded-lg overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                >
                  <Image
                    src={`/assets/home/coursessuccess${item}.png`}
                    alt={`Success story ${item}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    onClick={()=>openImage(index)}
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
              src={`/assets/home/coursessuccess${currentImageIndex + 1}.png`}
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

          {/* CTA Section */}
          <motion.section variants={itemVariants}>
  <div className="
    bg-gradient-to-r 
    from-primary to-primary/90 
    dark:from-primary/90 dark:to-primary/70 
    rounded-xl p-8 md:p-12 text-center
    border border-primary/20
    dark:border-primary/30
    shadow-lg
  ">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
      Be Our Next Success Story
    </h2>
    <p className="text-white/90 dark:text-white/80 mb-6 max-w-2xl mx-auto">
      Join our programs and get the expert guidance you need to ace your exams and achieve your career goals.
    </p>
    <Link href="/contact">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          bg-white dark:bg-background 
          text-primary dark:text-primary 
          font-semibold 
          px-8 py-3 
          rounded-full 
          hover:bg-white/90 dark:hover:bg-background/90 
          transition-colors duration-300 
          flex items-center mx-auto
          border border-primary/20 dark:border-primary/30
          shadow-sm
        "
      >
        Enquire Now
        <ArrowRight className="h-4 w-4 ml-2" />
      </motion.button>
    </Link>
  </div>
</motion.section>
        </motion.div>
      </div>
    </main>
  );
}