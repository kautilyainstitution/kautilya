"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, BookOpen, Users, Award, Clock, Calendar, CheckCircle2, BarChart3, Building } from "lucide-react"
import { DataTable } from "@/app/components/data-table"

export default function GovtJobsPage() {
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
                src="/assets/banner.png"
                alt="Government Jobs Preparation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
                <div className="px-6 md:px-12 max-w-3xl">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Government Jobs Preparation</h1>
                  <p className="text-white/90 text-lg md:text-xl">
                    Comprehensive coaching for SSC, Banking, Railways, and Civil Services exams to secure your dream
                    government job.
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
                  Our Government Jobs preparation program is designed to provide comprehensive coaching for various
                  competitive exams including SSC CGL, CHSL, CPO, Banking exams, and Railways. With a
                  structured curriculum, expert faculty, and regular mock tests, we ensure that you are well-prepared to
                  excel in these competitive exams.
                </p>
                <p className="text-muted-foreground mb-6">
                  The program covers all sections of the exams including Quantitative Aptitude, Reasoning, English
                  Language, General Awareness, and subject-specific topics, with special focus on the specific
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
                    <p>Interview preparation for final rounds</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Exam Tabs */}
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Exam-Specific Programs</h2>

            <Tabs defaultValue="ssc" className="mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 w-full mb-8">
                <TabsTrigger value="ssc">SSC Exams</TabsTrigger>
                <TabsTrigger value="banking">Banking</TabsTrigger>
                <TabsTrigger value="railways">Railways</TabsTrigger>
              </TabsList>

              <TabsContent value="ssc">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Staff Selection Commission (SSC) Exams</h3>
                  </div>
                  <p className="mb-6">
                    Our SSC exam preparation program covers all major SSC exams including CGL, CHSL, CPO, and more. We
                    provide comprehensive coaching for all tiers of these exams to help you secure a government job.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Exams Covered</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span> SSC CGL (Combined Graduate Level)
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> SSC CHSL (Combined Higher Secondary Level)
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> SSC CPO (Central Police Organization)
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> SSC MTS (Multi-Tasking Staff)
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> SSC Stenographer
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Comprehensive coverage of all subjects
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Tier-wise preparation strategy
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Regular mock tests for all tiers
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Special focus on Descriptive Paper
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Interview preparation for final selection
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="banking">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Banking Exams</h3>
                  </div>
                  <p className="mb-6">
                    Our Banking exam preparation program covers all major banking exams including IBPS PO, IBPS Clerk,
                    SBI PO, SBI Clerk, RBI Grade B, and more. We provide comprehensive coaching to help you secure a job
                    in the banking sector.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Exams Covered</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span> IBPS PO (Probationary Officer)
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> IBPS Clerk
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> SBI PO (Probationary Officer)
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> SBI Clerk
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> RBI Grade B
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> NABARD, SIDBI, and other banking exams
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Comprehensive coverage of all subjects
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Special focus on Banking Awareness
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Regular mock tests for Prelims and Mains
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Interview preparation for final selection
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Current Affairs updates
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Duration: 4-6 months</span>
                    </div>
                    {/* <Button>Explore Banking Programs</Button> */}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="railways">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Railways Exams</h3>
                  </div>
                  <p className="mb-6">
                    Our Railways exam preparation program covers all major railway recruitment exams including RRB NTPC,
                    RRB Group D, RRB JE, and more. We provide comprehensive coaching to help you secure a job in the
                    railway sector.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Exams Covered</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span> RRB NTPC (Non-Technical Popular Categories)
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> RRB Group D
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> RRB JE (Junior Engineer)
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> RRB ALP (Assistant Loco Pilot)
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> RRB Technician
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Comprehensive coverage of all subjects
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Special focus on Technical subjects for JE and ALP
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Regular mock tests for all stages
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Skill test preparation for relevant posts
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span> Current Affairs updates
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Duration: 3-6 months</span>
                    </div>
                    {/* <Button>Explore Railways Programs</Button> */}
                  </div>
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
                  Learn from experienced faculty members who are former civil servants, bank officers, and SSC toppers
                  with proven track records of producing top results.
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
                  Comprehensive guidance for interview rounds including mock interviews, personality development, and
                  resume building workshops.
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
                <h3 className="text-xl font-bold mb-2">Current Affairs Updates</h3>
                <p className="text-muted-foreground">
                  Stay updated with daily current affairs, monthly magazines, and special sessions on important events
                  relevant to your exam.
                </p>
              </div>
            </div>
          </motion.section>
        </motion.div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">SSC CGL Tier-1: Pattern</h2>
                <section title="Low cut-offs of the CAT for the ‘Academic diversity’ students (Non-B.Tech):">
                      <DataTable
        headers={["Subject", "Questions", "Marks"]}
        data={[
  { subject: "General Intelligence", questions: "25", marks: "50" },
  { subject: "General Awareness", questions: "25", marks: "50" },
  { subject: "Quantitative Aptitude", questions: "25", marks: "50" },
  { subject: "English", questions: "25", marks: "50" },
  { subject: "Total Questions", questions: "100", marks: "" },
  { subject: "Negative Marking", questions: "0.50", marks: "" }
]}
        renderRow={(item) => (
          <>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.subject}</td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.questions}</td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.marks}</td>
          </>
        )}
      />
                </section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">SSC CGL Tier-1 Cut-off 2023</h2>
<section title="Cut-off for posts other than AAO & JSO">
  <DataTable
    headers={["Category", "Cut-off"]}
    data={[
      { subject: "General", questions: "114.27" },
      { subject: "EWS", questions: "114.27" },
      { subject: "OBC", questions: "114.27" },
      { subject: "SC", questions: "89.08" },
      { subject: "ST", questions: "77.57" },
    ]}
    renderRow={(item) => (
      <>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.subject}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.questions}</td>
      </>
    )}
  />
</section>

  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">SSC CGL Tier-2: Pattern</h2>
<section title="SSC CGL Tier-2 Paper-1 Details">
  <DataTable
    headers={["Section", "Module", "Subject", "No. of Questions", "Marks", "Duration"]}
    data={[
      { subject: "Section-1", questions: "Module-1", marks: "Mathematical Abilities", duration: 30, section: 90, module: "1 hour" },
      { subject: "Section-1", questions: "Module-2", marks: "Reasoning and General Intelligence", duration: 30, section: 90, module: "1 hour" },
      { subject: "Section-2", questions: "Module-1", marks: "English Language and Comprehension", duration: 45, section: 135, module: "1 hour" },
      { subject: "Section-2", questions: "Module-2", marks: "General Awareness", duration: 25, section: 75, module: "1 hour" },
      { subject: "Section-3", questions: "Module-1", marks: "Computer Knowledge Test", duration: 20, section: 60, module: "15 minutes" },
      { subject: "Section-3", questions: "Module-2", marks: "Data Entry Speed Test", duration: "1 task", section: "", module: "15 minutes" },
    ]}
    renderRow={(item) => (
      <>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.subject}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.questions}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.marks}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.duration}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.section}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.module}</td>
      </>
    )}
  />
</section>


<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">SSC CGL Tier-2 Cut-off 2022</h2>
<section title="Paper 1 of Tier-2 Cut-off out of 450 marks">
  <DataTable
    headers={["Category", "Cut-off", "Candidates Available"]}
    data={[
      { subject: "General", questions: "270.36", marks: "27008" },
      { subject: "EWS", questions: "228.63", marks: "32535" },
      { subject: "OBC", questions: "242.79", marks: "57083" },
      { subject: "SC", questions: "213.27", marks: "33013" },
      { subject: "ST", questions: "192.23", marks: "15817" },
    ]}
    renderRow={(item) => (
      <>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.subject}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.questions}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.marks}</td>
      </>
    )}
  />
</section>

<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">SSC CHSL Tier-1: Pattern</h2>
<section title="SSC CHSL Tier-1 Exam Pattern">
  <DataTable
    headers={["Subject", "Questions", "Marks"]}
    data={[
      { subject: "General Intelligence and Reasoning", questions: 25, marks: 50 },
      { subject: "General Awareness", questions: 25, marks: 50 },
      { subject: "Quantitative Aptitude", questions: 25, marks: 50 },
      { subject: "English Comprehension", questions: 25, marks: 50 },
    ]}
    renderRow={(item) => (
      <>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.subject}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.questions}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.marks}</td>
      </>
    )}
  />
</section>


<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">SSC CHSL Tier-1 Cut-Off 2022</h2>
<section title="SSC CHSL Cut-off out of 200">
  <DataTable
    headers={["Category", "Cut-off", "Candidates Available"]}
    data={[
      { subject: "General", questions: "157.72984", marks: "5496" },
      { subject: "EWS", questions: "151.02975", marks: "7132" },
      { subject: "OBC", questions: "153.25024", marks: "12960" },
      { subject: "SC", questions: "135.46972", marks: "7414" },
      { subject: "ST", questions: "125.79702", marks: "3189" },
    ]}
    renderRow={(item) => (
      <>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.subject}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.questions}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.marks}</td>
      </>
    )}
  />
</section>
<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">SSC CHSL Tier-2: Pattern</h2>
<section title="SSC CHSL Tier-2 Exam Structure">
  <DataTable
    headers={["Section", "Module", "Subject", "No. of Questions", "Marks", "Duration"]}
    data={[
      { subject: "Section-1", questions: "Module-1", marks: "Mathematical Abilities", duration: 30, section: 90, module: "1 hour" },
      { subject: "Section-1", questions: "Module-2", marks: "Reasoning and General Intelligence", duration: 30, section: 90, module: "1 hour" },
      { subject: "Section-2", questions: "Module-1", marks: "English Language and Comprehension", duration: 40, section: 120, module: "1 hour" },
      { subject: "Section-2", questions: "Module-2", marks: "General Awareness", duration: 20, section: 60, module: "1 hour" },
      { subject: "Section-3", questions: "Module-1", marks: "Computer Knowledge Test", duration: 15, section: 45, module: "15 minutes" },
      { subject: "Section-3", questions: "Module-2", marks: "Skill/Typing Test", duration: "1 task", section: "", module: "15–10 minutes" },
    ]}
    renderRow={(item) => (
      <>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.subject}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.questions}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.marks}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.duration}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.section}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.module}</td>
      </>
    )}
  />
</section>
<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">SSC MTS: Pattern</h2>
<section title="Multi-Tasking Staff Exam Structure">
  <DataTable
    headers={["Session", "Subject", "No. of Questions", "Marks", "Duration"]}
    data={[
      { subject: "Session-1", questions: "Numerical and Mathematical Ability", marks: 20, duration: 60, module: "45 minutes" },
      { subject: "Session-1", questions: "Reasoning Ability and Problem-Solving", marks: 20, duration: 60, module: "45 minutes" },
      { subject: "Session-2", questions: "English Language and Comprehension", marks: 25, duration: 75, module: "45 minutes" },
      { subject: "Session-2", questions: "General Awareness", marks: 25, duration: 75, module: "45 minutes" },
    ]}
    renderRow={(item) => (
      <>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.subject}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.questions}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.marks}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.module}</td>
      </>
    )}
  />
</section>
<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">SSC CPO Paper-1: Pattern</h2>
<section title="Central Police Organization - Paper 1">
  <DataTable
    headers={["Subject", "Questions", "Marks", "Duration"]}
    data={[
      { subject: "General Intelligence & Reasoning", questions: 50, marks: 50, duration: "2 hours" },
      { subject: "General Knowledge", questions: 50, marks: 50, duration: "2 hours" },
      { subject: "Quantitative Aptitude", questions: 50, marks: 50, duration: "2 hours" },
      { subject: "English Comprehension", questions: 50, marks: 50, duration: "2 hours" },
    ]}
    renderRow={(item) => (
      <>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.subject}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.questions}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.marks}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.duration}</td>
      </>
    )}
  />
</section>
<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">RRB NTPC Stage-1: Pattern</h2>
<section title="Non-Technical Popular Categories CBT-1">
  <DataTable
    headers={["Subject", "No. of Questions", "Marks", "Duration"]}
    data={[
      { subject: "Mathematics", questions: 30, marks: 30, duration: "90 minutes" },
      { subject: "General Intelligence & Reasoning", questions: 30, marks: 30, duration: "90 minutes" },
      { subject: "General Awareness", questions: 40, marks: 40, duration: "90 minutes" },
    ]}
    renderRow={(item) => (
      <>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.subject}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.questions}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.marks}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.duration}</td>
      </>
    )}
  />
</section>

      </div>
    </main>
  )
}
