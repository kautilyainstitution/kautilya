"use client"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, GraduationCap, Brain } from "lucide-react"
import { motion } from "framer-motion";

// GMAT Data
const gmatIntro = {
  title: "GMAT (Graduate Management Admission Test)",
  description: "GMAT is a standardized test for MBA admissions in foreign countries, particularly the USA. It assesses analytical, quantitative, verbal, and writing skills.",
  note: "GMAT Score is valid for 5 years & has NO Negative marking. GMAT is conducted on all days in a year."
};

const gmatPatternHeaders = ["S.No", "Section", "Duration & No. of qns", "Types of qns", "Score range"];
const gmatPatternData = [
  { 
    no: "1", 
    section: "Analytical Writing Assessment", 
    duration: "30 minutes, 1 question", 
    types: "Analysis of an Argument (50%), Issue Essay (50%)", 
    score: "0-6 (in 0.5-point increments)" 
  },
  { 
    no: "2", 
    section: "Integrated Reasoning", 
    duration: "30 minutes, 12 questions", 
    types: "Graphics Interpretation, Table Analysis, Multisource Reasoning, Two-part Analysis", 
    score: "1-8 (in 1-point increments)" 
  },
  { 
    no: "3", 
    section: "Quantitative Reasoning", 
    duration: "62 minutes, 31 questions", 
    types: "Data Sufficiency (50%), Problem Solving (50%)", 
    score: "6-51 (in 1-point increments)" 
  },
  { 
    no: "4", 
    section: "Verbal Reasoning", 
    duration: "65 minutes, 36 questions", 
    types: "Reading Comprehension (60%), Critical Reasoning (20%), Sentence Correction (20%)", 
    score: "6-51 (in 1-point increments)" 
  },
];

// Digital SAT Data
const satIntro = {
  title: "Digital SAT (Scholastic Aptitude Test)",
  description: "Standardized test for undergraduate admissions (B.Tech) in USA. The test has transitioned to a digital format with adaptive testing.",
  note: "Digital SAT is held in March, May, June, August, October, November and December"
};

const satPatternHeaders = ["S.No", "SAT Sections", "No. of Questions", "Total duration"];
const satPatternData = [
  { no: "1", section: "Reading & Writing", questions: "54", duration: "64 minutes" },
  { no: "2", section: "Mathematics", questions: "44", duration: "70 minutes" },
  { no: "Total", section: "TOTAL", questions: "98", duration: "134 minutes (2 hour 14 minutes)" },
];

const satDetailedPatternHeaders = ["Category", "Reading and Writing (RW) Section", "Math Section"];
const satDetailedPatternData = [
  { 
    category: "Format", 
    rw: "Two-stage adaptive test design: one Reading and Writing section administered via two separately timed modules", 
    math: "Two-stage adaptive test design: one Math section administered via two separately timed modules" 
  },
  { 
    category: "Test length (number of operational and pretest questions)", 
    rw: "1st module: 25 operational questions and 2 pretest questions\n2nd module: 25 operational questions and 2 pretest questions", 
    math: "1st module: 20 operational questions & 2 pretest questions\n2nd module: 20 operational questions & 2 pretest questions" 
  },
  { 
    category: "Time per stage", 
    rw: "1st module: 32 minutes\n2nd module: 32 minutes", 
    math: "1st module: 35 minutes\n2nd module: 35 minutes" 
  },
  { 
    category: "Total No. of qns & time", 
    rw: "54 questions (64 minutes)", 
    math: "44 questions (70 minutes)" 
  },
];


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
export default function GmatSatPage() {
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
                    src="/assets/banner.png"
                    alt="Government Jobs Preparation"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
                    <div className="px-6 md:px-12 max-w-3xl">
                      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                       IELTS & TOEFL
                      </h1>
                      <p className="text-white/90 text-lg md:text-xl">
                       Comprehensive preparation for international English language tests accepted by universities and employers worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>
              </motion.div>

      {/* Exam Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Programs</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer specialized coaching for GMAT and SAT, helping students achieve competitive scores and gain
              admission to prestigious institutions worldwide.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary w-fit">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">GMAT</h3>
              <p className="text-muted-foreground">
                Comprehensive preparation for the Graduate Management Admission Test required for admission to most MBA
                and business master&apos;s programs worldwide.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Verbal Reasoning & Critical Thinking",
                  "Quantitative Reasoning",
                  "Integrated Reasoning",
                  "Analytical Writing Assessment",
                  "Time Management Strategies",
                  "Regular Mock Tests & Analysis",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary w-fit">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">SAT</h3>
              <p className="text-muted-foreground">
                Expert coaching for the Scholastic Assessment Test required for undergraduate admissions to colleges and
                universities in the United States.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Evidence-Based Reading & Writing",
                  "Mathematics",
                  "Essay Writing (Optional)",
                  "Vocabulary Building",
                  "Test-Taking Strategies",
                  "Regular Practice Tests & Analysis",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Details */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Program Details</h2>

          <Tabs defaultValue="gmat" className="w-full">
            <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="gmat">GMAT</TabsTrigger>
              <TabsTrigger value="sat">SAT</TabsTrigger>
            </TabsList>

            <TabsContent value="gmat" className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">GMAT Exam Structure</h3>
                  <p className="mb-6 text-muted-foreground">
                    The GMAT is a computer-adaptive test that assesses analytical writing, integrated reasoning,
                    quantitative, and verbal skills.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <span className="font-medium">Analytical Writing Assessment:</span> Measures your ability to
                        think critically and communicate your ideas.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <span className="font-medium">Integrated Reasoning:</span> Measures your ability to analyze data
                        and evaluate information presented in multiple formats.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <span className="font-medium">Quantitative Reasoning:</span> Measures your ability to analyze
                        data and draw conclusions using reasoning skills.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <span className="font-medium">Verbal Reasoning:</span> Measures your ability to read and
                        understand written material, evaluate arguments, and correct written material.
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-2xl font-bold">Our GMAT Program</h3>
                  <p className="mb-6 text-muted-foreground">
                    Our comprehensive GMAT preparation program is designed to help you achieve your target score through
                    personalized coaching and rigorous practice.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Comprehensive coverage of all GMAT sections",
                      "Personalized study plans based on diagnostic tests",
                      "Advanced problem-solving techniques",
                      "Data sufficiency and critical reasoning strategies",
                      "Sentence correction and reading comprehension techniques",
                      "Regular mock tests with detailed analysis",
                      "One-on-one doubt clearing sessions",
                      "MBA application guidance",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sat" className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">SAT Exam Structure</h3>
                  <p className="mb-6 text-muted-foreground">
                    The SAT is a standardized test widely used for college admissions in the United States.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <span className="font-medium">Evidence-Based Reading and Writing:</span> Tests your
                        comprehension and editing skills across a range of texts.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <span className="font-medium">Mathematics:</span> Tests your ability to solve problems, model
                        real-world situations mathematically, and use algebraic structure.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <span className="font-medium">Essay Writing (Optional):</span> Tests your ability to construct a
                        clear, well-reasoned argument.
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-2xl font-bold">Our SAT Program</h3>
                  <p className="mb-6 text-muted-foreground">
                    Our SAT preparation program is tailored to help you excel in the test and secure admission to top
                    universities in the United States.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Comprehensive coverage of all SAT sections",
                      "Personalized study plans based on diagnostic tests",
                      "Advanced problem-solving techniques",
                      "Vocabulary building and grammar strategies",
                      "Essay writing guidance",
                      "Regular practice tests with detailed analysis",
                      "One-on-one doubt clearing sessions",
                      "Undergraduate application support",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Detailed Exam Patterns */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Detailed Exam Patterns</h2>

          {/* GMAT Detailed Pattern */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">GMAT Exam Pattern</h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-semibold mb-2">{gmatIntro.title}</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{gmatIntro.description}</p>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-300">{gmatIntro.note}</p>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-800 text-left">
                  <tr>
                    {gmatPatternHeaders.map((header, index) => (
                      <th key={index} className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {gmatPatternData.map((item, index) => (
                    <tr key={index} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-4 py-3">{item.no}</td>
                      <td className="px-4 py-3 font-medium">{item.section}</td>
                      <td className="px-4 py-3">{item.duration}</td>
                      <td className="px-4 py-3">{item.types}</td>
                      <td className="px-4 py-3">{item.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 className="text-xl font-semibold mb-4">GMAT Syllabus</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Analytical Writing Assessment</h5>
                <p className="text-sm">
                  This section will have topics on which the students are required to write or a passage on which the questions will be asked. The topic can be anything of interest. The main motive is to test the taker&apos;s ability to focus on the answer structure rather than the arguments presented. It would be safe to have a neutral opinion as it is a writing style more than an opinion based.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Integrated Reasoning</h5>
                <p className="text-sm mb-2">
                  This section judges the students on their ability to evaluate data presented either in the table or graph format.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Graphics Interpretations:</strong> Test capability to interpret data in graphs/images</li>
                  <li><strong>Multi-source Reasoning:</strong> Analyze combined data from graphs, tables and text</li>
                  <li><strong>Table Analysis:</strong> Analyze spreadsheet-like data</li>
                  <li><strong>Two-Part Analysis:</strong> Complex verbal and quantitative problems</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Quantitative Reasoning</h5>
                <p className="text-sm mb-2">
                  Objective questions with multiple-choice answers divided into:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Problem solving:</strong> Analyze problems with logic and reasoning</li>
                  <li><strong>Data Sufficiency:</strong> Identify importance of data and determine when enough to solve</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Verbal Reasoning</h5>
                <p className="text-sm mb-2">
                  Tests ability to comprehend written material and analyze logical relationships:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Sentence correction:</strong> Express ideas concisely and grammatically</li>
                  <li><strong>Reading Comprehension:</strong> Apply main idea, logical structure, inference</li>
                  <li><strong>Critical Reasoning:</strong> Evaluate arguments and formulate plans</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SAT Detailed Pattern */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Digital SAT Exam Pattern</h3>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-semibold mb-2">{satIntro.title}</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{satIntro.description}</p>
              <p className="text-sm font-medium text-green-600 dark:text-green-300">{satIntro.note}</p>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-800 text-left">
                  <tr>
                    {satPatternHeaders.map((header, index) => (
                      <th key={index} className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {satPatternData.map((item, index) => (
                    <tr key={index} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-4 py-3">{item.no}</td>
                      <td className="px-4 py-3 font-medium">{item.section}</td>
                      <td className="px-4 py-3">{item.questions}</td>
                      <td className="px-4 py-3">{item.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 className="text-xl font-semibold mb-4">Detailed Pattern of Digital SAT-2024</h4>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-800 text-left">
                  <tr>
                    {satDetailedPatternHeaders.map((header, index) => (
                      <th key={index} className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {satDetailedPatternData.map((item, index) => (
                    <tr key={index} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-4 py-3 font-medium">{item.category}</td>
                      <td className="px-4 py-3 whitespace-pre-line">{item.rw}</td>
                      <td className="px-4 py-3 whitespace-pre-line">{item.math}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 className="text-xl font-semibold mb-4">SAT Syllabus</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Reading & Writing Section</h5>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Craft and Structure (28-32 questions)</li>
                  <li>Information and Ideas (26-32 questions)</li>
                  <li>Standard English Conventions (11-15 questions)</li>
                  <li>Expression of Ideas (8-12 questions)</li>
                  <li>Vocabulary in Context</li>
                  <li>Rhetorical Synthesis</li>
                  <li>Textual Evidence</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Math Section</h5>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Algebra (13-15 questions)</li>
                  <li>Advanced Math (13-15 questions)</li>
                  <li>Problem-Solving and Data Analysis (5-7 questions)</li>
                  <li>Geometry and Trigonometry (5-7 questions)</li>
                  <li>Linear equations and systems</li>
                  <li>Nonlinear equations</li>
                  <li>Ratios, rates and proportions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </main>
  )
}