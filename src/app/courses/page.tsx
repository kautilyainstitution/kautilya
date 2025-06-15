"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

const courses = [
  { name: "M.S Admission", href: "/courses/ms" }, 
  { name: "MBA (CAT, XAT, ICET, MAT & CMAT)", href: "/courses/mba" },
  { name: "SNAP, NMAT & TISSNET", href: "/courses/snap" },
  { name: "Bank & Other Govt. Exams", href: "/courses/bank-govt" },
  { name: "Govt Jobs (SSC CGL, CHSL, CPO & RRB)", href: "/courses/govt-jobs" },
  { name: "Civils (IAS & IPS)", href: "/courses/civils" },
  { name: "CRT", href: "/courses/crt" },
  { name: "GRE", href: "/courses/gre" },
  { name: "IELTS & TOEFL", href: "/courses/ielts-toefl" },
  { name: "GMAT & SAT", href: "/courses/gmat-sat" },
  { name: "CLAT", href: "/courses/clat" },
  { name: "IPMAT", href: "/courses/ipmat" },
  { name: "CUET", href: "/courses/cuet" }
];

export default function CoursesLandingPage() {
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
                src="/assets/home/coursesbanner.png"
                alt="Comprehensive Courses"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
                <div className="px-6 md:px-12 max-w-3xl">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Our Comprehensive Courses
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl">
                    Expert-led programs designed to help you excel in competitive exams and achieve your academic and career goals.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Courses Grid */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Explore Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <Link href={course.href}>
                    <div className="p-6 h-full">
                      <h3 className="text-xl font-semibold mb-3">{course.name}</h3>
                      <div className="flex items-center text-primary">
                        <span className="mr-2">Learn more</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="bg-secondary/50 rounded-xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Why Choose Our Courses?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Expert Faculty",
                    description: "Learn from industry experts and top educators with years of experience"
                  },
                  {
                    title: "Comprehensive Material",
                    description: "Curated study materials and updated content for all exams"
                  },
                  {
                    title: "Proven Results",
                    description: "Consistent track record of successful candidates in all programs"
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
              {[1, 2, 3, 4, 5, 6].map((item) => (
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
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section - Supports light/dark theme */}
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
      Ready to Start Your Journey?
    </h2>
    <p className="text-white/90 dark:text-white/80 mb-6 max-w-2xl mx-auto">
      Get personalized guidance and take the first step towards your dream career. Our experts are here to help you choose the right course.
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
        Contact Us Now
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