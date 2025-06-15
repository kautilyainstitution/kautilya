"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, BookOpen, Users, Award, Clock, CheckCircle2, BarChart3} from "lucide-react"
import { DataTable } from "@/app/components/data-table"
import { iimRankings, nonEngineerCutoffs, catSyllabus, applicationDeadlines, BSchoolData } from "@/data/catData"
import CatExamSections from "@/app/components/cat-exam-sections"
import Cat2022PercentileData from "@/app/components/cat-2022-Percentile"
import CatPercentileComparison from "@/app/components/cat-Percentile-Comparison"
import CatLrdiPercentileData from "@/app/components/cat-lrdi-Percentile"
import CatVarcPercentileData from "@/app/components/cat-varc-Percentile"
import IimCutoffData from "@/app/components/iim-cutoff-data"
import { useState } from "react"
export default function MBACoursePage() {

  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const totalImages = 3; // Update this based on your actual number of images

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
                src="/assets/mba/mbabanner.png"
                alt="MBA Preparation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
                <div className="px-6 md:px-12 max-w-3xl">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">MBA Entrance Preparation</h1>
                  <p className="text-white/90 text-lg md:text-xl">
                    Comprehensive coaching for CAT, XAT, ICET, MAT & CMAT exams to help you secure admission in top
                    B-schools.
                  </p>
                  {/* <Button className="mt-6" size="lg">
                    Enroll Now
                  </Button> */}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Course Overview */}
          <motion.section variants={itemVariants} className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Course Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Our MBA entrance preparation program is designed to provide comprehensive coaching for all major
                  management entrance exams including CAT, XAT, ICET, MAT, and CMAT. With a structured curriculum,
                  expert faculty, and regular mock tests, we ensure that you are well-prepared to excel in these
                  competitive exams.
                </p>
                <p className="text-muted-foreground mb-6">
                  The program covers all sections of the exams including Quantitative Aptitude, Verbal Ability, Data
                  Interpretation, Logical Reasoning, and General Knowledge, with special focus on the specific
                  requirements of each exam.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <p>Comprehensive coverage of all exam sections</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <p>Regular mock tests and performance analysis</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <p>Personalized mentoring and doubt clearing sessions</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <p>Interview preparation and GD practice for final rounds</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="MBA Classroom" fill className="object-cover" />
              </div>
            </div>
          </motion.section>

          {/* Exam Tabs */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Exam-Specific Programs</h2>

            <Tabs defaultValue="cat" className="mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full mb-8">
                <TabsTrigger value="cat">CAT</TabsTrigger>
                <TabsTrigger value="xat">XAT</TabsTrigger>
                <TabsTrigger value="icet">ICET</TabsTrigger>
                <TabsTrigger value="mat">MAT</TabsTrigger>
                <TabsTrigger value="cmat">CMAT</TabsTrigger>
              </TabsList>

              <TabsContent value="cat">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Common Admission Test (CAT)</h3>
                  </div>
                  <p className="mb-6">
                    CAT is the most prestigious MBA entrance exam in India, conducted by IIMs. Our CAT preparation
                    program is designed to help you achieve a high percentile and secure admission in top IIMs and other
                    premier B-schools.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Exam Pattern</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Verbal Ability & Reading Comprehension
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Data Interpretation & Logical Reasoning
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Quantitative Ability
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span> 150+ hours of classroom training
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> 30+ full-length mock tests
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Sectional tests and topic-wise practice
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Personal mentoring by CAT 99+ percentilers
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Duration: 6 months</span>
                    </div>
                    <Button>Explore CAT Program</Button>
                  </div> */}
                </div>
              </TabsContent>

              <TabsContent value="xat">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Xavier Aptitude Test (XAT)</h3>
                  </div>
                  <p className="mb-6">
                    XAT is conducted by XLRI for admission to XLRI and other Xavier Associate Management Institutes. Our
                    XAT preparation program focuses on the unique aspects of this exam, including Decision Making and
                    General Knowledge.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Exam Pattern</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Verbal & Logical Ability
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Decision Making
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Quantitative Ability & Data Interpretation
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> General Knowledge
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Special focus on Decision Making section
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> 20+ XAT-specific mock tests
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Current affairs and GK updates
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Essay writing practice
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Duration: 5 months</span>
                    </div>
                    <Button>Explore XAT Program</Button>
                  </div> */}
                </div>
              </TabsContent>

              <TabsContent value="icet">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Integrated Common Entrance Test (ICET)</h3>
                  </div>
                  <p className="mb-6">
                    ICET is conducted for admission to MBA/MCA programs in universities across Andhra Pradesh and
                    Telangana. Our ICET preparation program is designed to help you secure a top rank and get admission
                    to the best colleges.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Exam Pattern</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Analytical Ability
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Mathematical Ability
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Communication Ability
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span> 100+ hours of classroom training
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> 15+ full-length mock tests
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Previous years question analysis
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> College counseling after results
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Duration: 3 months</span>
                    </div>
                    <Button>Explore ICET Program</Button>
                  </div> */}
                </div>
              </TabsContent>

              <TabsContent value="mat">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Management Aptitude Test (MAT)</h3>
                  </div>
                  <p className="mb-6">
                    MAT is conducted by AIMA multiple times a year and is accepted by over 600 B-schools across India.
                    Our MAT preparation program helps you master all sections of the exam to secure admission in good
                    management institutes.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Exam Pattern</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Language Comprehension
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Mathematical Skills
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Data Analysis & Sufficiency
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Intelligence & Critical Reasoning
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Indian & Global Environment
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Flexible batch timings
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> 10+ MAT-specific mock tests
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Special focus on Indian & Global Environment
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> B-school selection guidance
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Duration: 2-3 months</span>
                    </div>
                    <Button>Explore MAT Program</Button>
                  </div> */}
                </div>
              </TabsContent>

              <TabsContent value="cmat">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Common Management Admission Test (CMAT)</h3>
                  </div>
                  <p className="mb-6">
                    CMAT is conducted by NTA for admission to management programs across AICTE-approved institutions.
                    Our CMAT preparation program covers all sections with special focus on General Awareness.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Exam Pattern</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Quantitative Techniques & Data Interpretation
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Logical Reasoning
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Language Comprehension
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> General Awareness
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Comprehensive study material
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> 12+ CMAT-specific mock tests
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Daily current affairs updates
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Online test series
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Duration: 3 months</span>
                    </div>
                    <Button>Explore CMAT Program</Button>
                  </div> */}
                </div>
              </TabsContent>
            </Tabs>
          </motion.section>

          {/* Course Features */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Program Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Faculty</h3>
                <p className="text-muted-foreground">
                  Learn from experienced faculty members who are alumni of IIMs and other top B-schools with proven
                  track records of producing top results.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Study Material</h3>
                <p className="text-muted-foreground">
                  Access meticulously crafted study materials, question banks, and practice sets designed to cover all
                  aspects of the exams.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Regular Mock Tests</h3>
                <p className="text-muted-foreground">
                  Take regular full-length and sectional mock tests followed by detailed analysis and personalized
                  feedback to track your progress.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Interview Preparation</h3>
                <p className="text-muted-foreground">
                  Comprehensive guidance for GD/PI rounds including mock interviews, personality development, and resume
                  building workshops.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flexible Batch Timings</h3>
                <p className="text-muted-foreground">
                  Choose from multiple batch options including weekday, weekend, and crash courses to suit your schedule
                  and preparation timeline.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">B-School Counseling</h3>
                <p className="text-muted-foreground">
                  Get expert advice on B-school selection, application process, and career planning to make informed
                  decisions about your future.
                </p>
              </div>
            </div>
          </motion.section>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">IIM-Ranking: CAT- cut off for IIM – MBA Admissions</h2>
      {/* IIM Rankings */}
      <section  title="IIM-Ranking: CAT- cut off for IIM – MBA Admissions">
        <DataTable
          headers={["Rank", "IIM", "CAT Cutoff (%ile)"]}
          data={iimRankings}
          renderRow={(item) => (
            <>
              <td className="py-3 px-10">{item.rank}</td>
              <td className="py-3 px-10 font-medium">{item.name}</td>
              <td className="py-3 px-20">{item.catCutoff}</td>
            </>
          )}
        />
      </section>

      {/* Non-Engineer Cutoffs */}
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">Low cut-offs of the CAT for the ‘Academic diversity’ students (Non-B.Tech):</h2>
      <section title="Low cut-offs of the CAT for the ‘Academic diversity’ students (Non-B.Tech):">
        <DataTable
          headers={["Rank", "IIM", "Cutoff"]}
          data={nonEngineerCutoffs}
          renderRow={(item) => (
            <>
              <td className="py-3 px-4">{item.rank}</td>
              <td className="py-3 px-4">{item.name}</td>
              <td className="py-3 px-4">{item.cutoff}</td>
            </>
          )}
        />
      </section>

            {/* B School Cutoffs */}
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">Ranking of Top B Schools and Test cut-offs</h2>
      <section title="Low cut-offs of the CAT for the ‘Academic diversity’ students (Non-B.Tech):">
        <DataTable
          headers={["Rank", "IIM", "Cutoff"]}
          data={BSchoolData}
          renderRow={(item) => (
            <>
              <td className="py-3 px-4">{item.rank}</td>
              <td className="py-3 px-4">{item.name}</td>
              <td className="py-3 px-4">{item.cutoff}</td>
            </>
          )}
        />
      </section>

      {/* Syllabus Cards */}
      {/* <section title="CAT Syllabus Breakdown">
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(catSyllabus).map(([section, topics]) => (
            <Card key={section} title={section.toUpperCase()}>
              <ul className="space-y-2">
                {topics.map((topic: boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | Key | null | undefined) => (
                  <li key={topic} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section> */}
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">CAT Syllabus</h2>
              <CatExamSections/>
             <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">CAT-QA (Quantitative Ability)- Syllabus</h2>
      <section title="Low cut-offs of the CAT for the ‘Academic diversity’ students (Non-B.Tech):">
        <DataTable
          headers={["Rank", "IIM", "Cutoff"]}
          data={catSyllabus}
          renderRow={(item) => (
            <>
              <td className="py-3 px-4">{item.key1}</td>
              <td className="py-3 px-4">{item.key2}</td>
              <td className="py-3 px-4">{item.key3}</td>
            </>
          )}
        />
      </section>

      <Cat2022PercentileData/>
      <CatPercentileComparison/>
      <CatLrdiPercentileData/>
      <CatVarcPercentileData/>
        <IimCutoffData/>
    
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">Top 30 B Schools – LAST DATES of applications</h2>
      <section title="Low cut-offs of the CAT for the ‘Academic diversity’ students (Non-B.Tech):">
           <DataTable
              headers={["Rank", "Institution", "Entrance Test", "Last Date", "Cutoff", "Fees"]}
              data={applicationDeadlines}
              renderRow={(item) => (
                <>
                  <td className=" px-5 py-3">{item.rank}</td>
                  <td className="py-3 px-3">{item.name}</td>
                  <td className="py-3 px-3">{item.entranceTest}</td>
                  <td className="py-3 px-3">{item.lastDate}</td>
                  <td className="py-3 px-3">{item.cutoff}</td>
                  <td className="py-3 px-3">{item.fees}</td>
                </>  
              )}
            />
      </section>

          {/* Success Stories */}
          {/* <motion.section variants={itemVariants} className="mb-16 bg-muted p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Student" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold">Priya Sharma</h3>
                    <p className="text-primary">CAT 99.8 percentile</p>
                    <p className="text-sm text-muted-foreground">IIM Ahmedabad</p>
                  </div>
                </div>
                <p className="italic mb-4">
                  "The structured approach and personalized attention at Kautilya helped me secure a top percentile in
                  CAT. The mock tests and analysis were particularly helpful."
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Student" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold">Rahul Verma</h3>
                    <p className="text-primary">XAT 99.2 percentile</p>
                    <p className="text-sm text-muted-foreground">XLRI Jamshedpur</p>
                  </div>
                </div>
                <p className="italic mb-4">
                  "The faculty at Kautilya are exceptional. Their guidance on the Decision Making section of XAT was
                  crucial for my success."
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Student" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold">Ananya Patel</h3>
                    <p className="text-primary">ICET Rank 3</p>
                    <p className="text-sm text-muted-foreground">ISB Hyderabad</p>
                  </div>
                </div>
                <p className="italic mb-4">
                  "I joined Kautilya with just 2 months left for ICET. Their crash course and focused approach helped me
                  secure a top rank."
                </p>
              </div>
            </div>
          </motion.section> */}

          {/* Course Packages */}
          {/* <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Course Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">Basic Package</h3>
                  <p className="text-muted-foreground mb-4">For students who need fundamental preparation</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold">₹25,000</span>
                    <span className="text-muted-foreground ml-2">/ 3 months</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>80 hours of classroom training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Basic study material</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>10 mock tests</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Online doubt clearing sessions</span>
                    </li>
                  </ul>
                </div>
                <Button className="mt-auto">Enroll Now</Button>
              </div>
              <div className="bg-card p-6 rounded-xl border-2 border-primary flex flex-col relative">
                <div className="absolute -top-3 right-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-full">
                  Most Popular
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">Premium Package</h3>
                  <p className="text-muted-foreground mb-4">Comprehensive preparation for serious aspirants</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold">₹45,000</span>
                    <span className="text-muted-foreground ml-2">/ 6 months</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>150 hours of classroom training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Comprehensive study material</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>25 mock tests with analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>One-on-one mentoring sessions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>GD/PI preparation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>B-school selection guidance</span>
                    </li>
                  </ul>
                </div>
                <Button className="mt-auto">Enroll Now</Button>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">Elite Package</h3>
                  <p className="text-muted-foreground mb-4">Personalized coaching for top results</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold">₹75,000</span>
                    <span className="text-muted-foreground ml-2">/ 9 months</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>200+ hours of classroom training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Premium study material & resources</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Unlimited mock tests with detailed analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Weekly one-on-one sessions with experts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Advanced GD/PI preparation with video recording</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Complete application assistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Access to alumni network</span>
                    </li>
                  </ul>
                </div>
                <Button className="mt-auto">Enroll Now</Button>
              </div>
            </div>
          </motion.section> */}

          {/* FAQ Section */}
          {/* <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold mb-2">When should I start preparing for MBA entrance exams?</h3>
                <p className="text-muted-foreground">
                  Ideally, you should start preparing 6-9 months before the exam. However, we also offer crash courses
                  for those with limited time.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold mb-2">Can I prepare for multiple exams simultaneously?</h3>
                <p className="text-muted-foreground">
                  Yes, our integrated programs are designed to prepare you for multiple exams like CAT, XAT, and other
                  MBA entrance exams simultaneously.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold mb-2">Do you offer online classes?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer both online and offline classes. Our online platform provides the same quality of
                  education with interactive sessions and regular assessments.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold mb-2">What is your success rate?</h3>
                <p className="text-muted-foreground">
                  Over 80% of our students score above 90 percentile in their respective exams, with many securing
                  admissions in top B-schools including IIMs, XLRI, and ISB.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold mb-2">Do you provide assistance for GD/PI rounds?</h3>
                <p className="text-muted-foreground">
                  Yes, our Premium and Elite packages include comprehensive GD/PI preparation with mock interviews,
                  personality development workshops, and resume building sessions.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold mb-2">Can I switch batches if needed?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer flexible batch switching options to accommodate changes in your schedule. You can also
                  attend missed classes with other batches.
                </p>
              </div>
            </div>
          </motion.section> */}

          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-4">MBA Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {[1, 2, 3].map((item, index) => (
                <div
                  key={item}
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-300 border border-border"
                >
                  <Image
                    src={`/assets/mba/mba${item}.png`}
                    alt={`Internship activity ${item}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                     onClick={() => openImage(index)}
                  />
                </div>
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
              src={`/assets/mba/mba${currentImageIndex + 1}.png`}
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

                {/* CTA */}
          <motion.section variants={itemVariants}>
            <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Begin Your MBA Journey?</h2>
              <p className="max-w-2xl mx-auto mb-6">
                Join our MBA entrance preparation program today and take the first step towards your dream B-school. Our
                expert faculty and comprehensive curriculum will help you achieve your goals.
              </p>
              {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="secondary" size="lg">
                  Enroll Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Schedule a Free Counseling Session
                </Button>
              </div> */}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  )
}
