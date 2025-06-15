"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Briefcase, GraduationCap, Award, BookOpen, Mic, Newspaper } from "lucide-react"

export default function DirectorPage() {
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
        <motion.div className="max-w-5xl mx-auto" initial="hidden" animate="visible" variants={containerVariants}>
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <Image src="/assets/home/faculty1.png" alt="Director" fill className="object-contain" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Sridhar</h1>
              <p className="text-xl text-primary mb-6">Director, Kautilya</p>
              <p className="text-muted-foreground max-w-2xl">
                Sridhar is a motivational speaker, mentor and Verbal Ability trainer for many national level competitive exams like the CAT, GRE, IBPS Banks & SSC exams with 18+ years of teaching and counselling experience. He has trained over 20000 students in the off-line mode in the class rooms for the above exams and mentored thousands of students (intermediate-PG) for higher education and placements since 2005. His passion is to enable students to reach their potential and make their career dreams come true through motivation.
              </p>
            </div>
          </motion.div>

          {/* Qualifications */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Qualifications & Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>M.A (English)</li>
                      <li>M.A (Economics)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Post Graduate Certificate in Teaching of English (EFLU, Hyderabad)</li>
                      <li>Post Graduate Diploma in Communicative English (HCU, Hyderabad)</li>
                      <li>P.G.Diploma in Functional English (S.V.University)</li>
                      <li>NELTS Certificate at CIEFL, Hyderabad</li>
                      <li>AIELTA Certificate, EFLU, Hyderabad</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">National Achievements</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Appreciated by former Chief Minister of A.P &apos; Sri Nara Chandra Babu Naidu in 2016</li>
                      <li>Helped hundreds of SV University Engineering students achieve placements in INFOSYS, TCS and WIPRO</li>
                      <li>Guided many students to IIM MBA admissions and MS admissions at top universities in USA, Germany</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>18+ years teaching Verbal Ability and English for CAT, GRE, GMAT, Bank PO & SSC</li>
                      <li>Specialized in Soft Skills training for placement tests</li>
                      <li>Started Career Launcher branch in Tirupati in 2008</li>
                      <li>Founded own company &apos;Kautilya&apos; in 2011</li>
                      <li>Conducted training programmes for A.P. government</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Books Written</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Advanced Communicative Grammar:</strong> Covers grammar for CAT, IBPS Bank exams, SSC with daily life examples</li>
                      <li><strong>Advanced Vocabulary:</strong> Covers Idioms, Phrasal verbs, One word substitutes for SSC CGL, Bank exams, CAT, GRE</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Newspaper className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Media Contributions</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Columnist for Eenadu, Sakshi newspapers on CAT, GRE, CLAT, Placements</li>
                      <li>Created Mnemonic aids for English Vocabulary learning</li>
                      <li>Regular appearances on E TV and Sakshi TV</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Vision & Philosophy */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Vision & Teaching Philosophy</h2>
            <div className="bg-muted p-8 rounded-xl">
              <blockquote className="text-foreground text-lg italic mb-6">
                &quot;My core competency is motivational public speeches with a lot of energy and enthusiasm for youth. I have inspired thousands of students in hundreds of college campuses on &apos;Personality development and employability skills&apos; at several universities including IIT-Tirupati.&quot;
              </blockquote>
              <p className="text-muted-foreground mb-4">
                Sridhar&apos;s teaching philosophy centers around these core principles:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-5 rounded-lg shadow-sm border border-border">
                  <h3 className="font-semibold mb-2">Motivational Approach</h3>
                  <p className="text-muted-foreground text-sm">
                    Delivering high-energy public speeches to inspire youth and help them realize their potential.
                  </p>
                </div>
                <div className="bg-card p-5 rounded-lg shadow-sm border border-border">
                  <h3 className="font-semibold mb-2">Exam-focused Training</h3>
                  <p className="text-muted-foreground text-sm">
                    Specializing in Grammar, Vocabulary, and Reading for CAT, GRE, Bank PO and SSC exams.
                  </p>
                </div>
                <div className="bg-card p-5 rounded-lg shadow-sm border border-border">
                  <h3 className="font-semibold mb-2">Practical Techniques</h3>
                  <p className="text-muted-foreground text-sm">
                    Developing mnemonic aids to make vocabulary learning engaging and effective.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Media Section */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Media Appearances</h2>
            <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">YouTube & TV Videos</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Personality Development</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li><a href="https://bit.ly/3ENTlCV" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">&apos;Fighting spirit for youth&apos;</a></li>
                        <li><a href="http://bit.ly/2RVie8F" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Personality development video</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">English Learning</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li><a href="http://bit.ly/36izwjF" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">How to learn English vocabulary</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Sakshi TV Interviews</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li><a href="https://bit.ly/3ZvHUcL" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">With IIM MBA admission achievers</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">E Tv Interviews</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li><a href="https://bit.ly/45XsPTw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">International affairs on crude oil prices</a></li>
                        <li><a href="https://bit.ly/3EPk8id" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">National affairs on Gujarat Elections</a></li>
                        <li><a href="https://bit.ly/3ZH7Xxy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Effect of crude oil prices on India</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Photo Gallery */}
          {/* <motion.section variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="relative h-48 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-300 border border-border"
                >
                  <Image
                    src={``}
                    alt={`Gallery image ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.section> */}
        </motion.div>
      </div>
    </main>
  )
}