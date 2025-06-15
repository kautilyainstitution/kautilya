"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Award, Target, Clock, BookOpen } from "lucide-react"

export default function AboutKautilyaPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" animate="visible" variants={containerVariants}>
          {/* Hero Section */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src="/assets/home/kautilyacampus.png"
                alt="Kautilya Campus"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
                <div className="px-6 md:px-12 max-w-3xl">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">About Kautilya</h1>
                  <p className="text-white/90 text-lg md:text-xl">
                    Empowering students to achieve excellence through knowledge, guidance, and innovation since 2005.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Legacy of Excellence</h2>
                <p className="text-muted-foreground mb-4">
                  Named after the ancient Indian philosopher and royal advisor Chanakya (also known as Kautilya), our
                  institution embodies his principles of strategic thinking, practical wisdom, and ethical leadership.
                </p>
                <p className="text-muted-foreground mb-4">
                  Founded in 2005 by Dr. Rajesh Kumar, Kautilya Educational Consultancy has grown from a small coaching
                  center to one of India&apos;s premier training institutes for competitive examinations and career
                  development.
                </p>
                <p className="mb-6">
                  Today, we stand as a beacon of educational excellence with over 15 centers across India, having guided
                  more than 50,000 students toward successful careers in various fields.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button>Our Courses</Button>
                  <Button variant="outline">View Results</Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/assets/home/kautilyaabout.png"
                  alt="Kautilya Building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.section>

          {/* Mission & Vision */}
          <motion.section variants={itemVariants} className="mb-16 bg-muted p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  To provide high-quality education and guidance that empowers students to realize their full potential
                  and achieve their career goals through personalized mentoring, innovative teaching methodologies, and
                  comprehensive study resources.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Deliver excellence in education through continuous innovation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Provide personalized guidance to address individual learning needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Foster a supportive learning environment that encourages growth</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  To be recognized globally as a center of educational excellence that transforms students&apos; lives by
                  equipping them with the knowledge, skills, and confidence needed to succeed in an increasingly
                  competitive world.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Become the most trusted name in educational consultancy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Expand our reach to help students across diverse backgrounds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Set new standards in educational methodologies and outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Key Statistics */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Impact in Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">50,000+</h3>
                <p className="text-muted-foreground">Students Trained</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">15,000+</h3>
                <p className="text-muted-foreground">Success Stories</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">25+</h3>
                <p className="text-muted-foreground">Awards & Recognitions</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">18+</h3>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </motion.section>

          {/* Our Approach */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">The Kautilya Approach</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-4">Personalized Learning</h3>
                <p className="text-muted-foreground mb-4">
                  We recognize that each student has unique learning needs and styles. Our approach involves customized
                  study plans, regular assessments, and one-on-one mentoring sessions to address individual strengths
                  and areas for improvement.
                </p>
                {/* <div className="h-40 relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Personalized Learning"
                    fill
                    className="object-cover"
                  />
                </div> */}
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-4">Comprehensive Resources</h3>
                <p className="text-muted-foreground mb-4">
                  Our students gain access to meticulously crafted study materials, extensive question banks, regular
                  mock tests, and a digital learning platform that complements classroom teaching with interactive
                  content and practice exercises.
                </p>
                {/* <div className="h-40 relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Comprehensive Resources"
                    fill
                    className="object-cover"
                  />
                </div> */}
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-4">Expert Faculty</h3>
                <p className="text-muted-foreground mb-4">
                  Our teaching team comprises experienced educators, industry professionals, and exam toppers who bring
                  practical insights and proven strategies to the classroom, ensuring students receive guidance from
                  those who truly understand the path to success.
                </p>
                {/* <div className="h-40 relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Expert Faculty"
                    fill
                    className="object-cover"
                  />
                </div> */}
              </div>
            </div>
          </motion.section>

          {/* Facilities */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-[250px] rounded-xl overflow-hidden">
                <Image
                src="/assets/home/facility1.png"
                alt="Modern Classrooms"
                fill
                className="object-cover"
              />
                <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">Modern Classrooms</h3>
                </div>
              </div>
              <div className="relative h-[250px] rounded-xl overflow-hidden">
                <Image
                  src="/assets/home/facility2.png"
                  alt="Digital Library"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">Digital Library</h3>
                </div>
              </div>
              <div className="relative h-[250px] rounded-xl overflow-hidden">
                <Image   src="/assets/home/facility3.png"
                alt="Computer Lab" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">Computer Lab</h3>
                </div>
              </div>
              <div className="relative h-[250px] rounded-xl overflow-hidden">
                <Image
                  src="/assets/home/facility4.png"
                  alt="Discussion Rooms"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">Discussion Rooms</h3>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  )
}
