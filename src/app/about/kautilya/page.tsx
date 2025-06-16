"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Award, Target, Clock, BookOpen } from "lucide-react"
import Link from "next/link"

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
                  This test-prep company was named after ‘Kautilya’ as this Kautilya (also called as ‘Chanakya’) is a great personality and polymath in our Indian History (300 BCE) and he is always greatly remembered as a man of intelligence, wisdom and strategies. Thus, this Kautilya Institution’ was founded by Sridhar and his wife- Radhika Reddy in 2008 in Tirupati and it has trained the largest number of students of over 25000 belonging to several parts of South India. Hundreds of students have achieved MBA admissions at IIMs and M.S. admissions in the foreign countries through the expert coaching of CAT (Common Admission Test) and GRE, IELTS, TOEFL and consultancy services at Kautilya. Very importantly, its students have been bagging A.P’s 1st rank of 99 + percentile scores in the CAT (Common Admission Test for MBA at IIMs/IITs) for the last 10 years and all these students belong to local colleges of S.V.Uni. campus, S.V.Agriculture college, SPMVV universities and other private degree colleges. Students with top academic background of IITs, NITs prefer this Kautilya for their coaching.
                </p>
              
                <div className="flex flex-wrap gap-4">
                  <Link href="/courses" passHref>
                  <Button>Our Courses</Button>
                  </Link>
                   <Link href="/results" passHref>
                  <Button variant="outline">View Results</Button>
                  </Link>
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
                  We offer rigorous training for IBPS Bank and SSC (Staff Selection Commission) exams. Hence hundreds of the students from A.P and Telangana have achieved central government jobs in the banking and other central govt. departments over the decade. Besides this, many intermediate students also achieved law degree (B.A.-LLB) admissions through CLAT coaching (Common Law Admission Test for NLUs- National Law Universities like NALSAR, etc) at this institute. This institute has tie-ups with many universities and top engineering colleges for campus placements. And the A.P. government also had tied up with Kautilya for offering many training programmes for several competitive exams and skill development. In appreciation of the decade of excellence, the former chief minister of A.P. also honored the institute in 2016. In addition to the academic coaching, the institute also conducts workshops on the subjects and also on personality development. The experts of the industry and distinguished personalities of the several disciplines from Mumbai, Hyderabad, Bengaluru have conducted hundreds of events at Kautilya, Tirupati. Over 500 students across A.P take the off-line coaching at this institute every year for the above courses. Kautilya has emerged as one of the most reputed and trusted institutes in our South India with 16 years of its glorious service with excellence in the coaching industry.

The institute attributes its enduring success in consistent high percentage of placements to top-notch and dedicated faculty from the industry with IIM and IIT backgrounds and the eminent founders with vast academic experience – Sridhar and A.Radhika Reddy, M.A., and its campus having state-of-the art infrastructure- spacious class rooms (fully air- conditioned) built in 7000 sqft area- 6 digital classrooms, computer lab with 40 computers, study hall, seminar hall etc. at M.R.Palli, Tirupati
                </p>
                {/* <ul className="space-y-2">
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
                </ul> */}
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Our Operating Model</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Kautilya offers internships to the undergraduates for the universities and other college institutions as part of National Education Policy-2020 in Andhra Pradesh. As this company has tie-ups with the Government of A.P. for skill upgradation training to the students, it also offers coaching to them. It has regular on-campus training to many university campuses – S.V.Univeristy, Sri Padmavathi Mahila University, Horticulture University, etc. And it also delivers guidance sessions to KVKs (Krishi Vignana Kendras, ICAR). And Kautilya mainly operates through Test-Prep- off-line and on-line training for several national and international entrance tests- GMAT, GRE, TOEFL, IELTS, CAT and exams of central government recruitments- SSC, IBPS, etc.

This company has the faculty members and trainers who have a background of top B schools like IIMs, XLRI, MDI, etc. and it also regularly conducts free career awareness and personality development sessions to the students to motivate the youth for realizing their career goals and FDP and training sessions for the employees of the businesses/ organizations.
                </p>
                {/* <ul className="space-y-2">
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
                </ul> */}
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
