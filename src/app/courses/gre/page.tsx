"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion";
import { CheckCircle, BookText, Calculator, PencilLine, Globe } from "lucide-react"
import Image from "next/image"

const greIntro = {
  title: "GRE (Graduate Record Examination)",
  description: "Required for MS/MBA admissions in USA, UK, Singapore, Australia & Europe. Accepted by all top universities worldwide.",
  note: "GRE score is valid for 5 years. Conducted daily in two modes: Test at home & Test at center"
};

const grePatternHeaders = ["S.No", "GRE Sections", "No. of Questions", "Allotted time", "Score Range"];
const grePatternData = [
  { 
    no: "1", 
    section: "Analytical Writing", 
    questions: "1 task (Analyze an Issue)", 
    time: "30 minutes", 
    score: "0-6 scale" 
  },
  { 
    no: "2", 
    section: "Verbal Reasoning", 
    questions: "27 questions per section", 
    time: "47 minutes per section", 
    score: "130-170" 
  },
  { 
    no: "3", 
    section: "Quantitative Reasoning", 
    questions: "27 questions per section", 
    time: "47 minutes per section", 
    score: "130-170" 
  },
  { 
    no: "Total", 
    section: "Total Duration", 
    questions: "", 
    time: "1 hour 58 minutes", 
    score: "260-340" 
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

export default function GRETestPage() {
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
                        GRE 
                      </h1>
                      <p className="text-white/90 text-lg md:text-xl">
                       Comprehensive coaching for GRE to help you secure admission to top graduate schools worldwide.
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">GRE Test Overview</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The GRE General Test measures verbal reasoning, quantitative reasoning, and analytical writing skills.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-purple-100 p-3 text-purple-600 w-fit">
                <BookText className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Verbal Reasoning</h3>
              <p className="text-muted-foreground">
                Measures your ability to analyze and evaluate written material and synthesize information.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Reading Comprehension",
                  "Text Completion",
                  "Sentence Equivalence",
                  "Vocabulary in Context",
                  "Critical Reasoning"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-purple-100 p-3 text-purple-600 w-fit">
                <Calculator className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Quantitative Reasoning</h3>
              <p className="text-muted-foreground">
                Measures problem-solving ability using basic concepts of arithmetic, algebra, geometry, and data analysis.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Arithmetic Concepts",
                  "Algebra & Functions",
                  "Geometry Principles",
                  "Data Analysis",
                  "On-screen Calculator"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-purple-100 p-3 text-purple-600 w-fit">
                <PencilLine className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Analytical Writing</h3>
              <p className="text-muted-foreground">
                Measures critical thinking and analytical writing skills, specifically your ability to articulate complex ideas.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Analyze an Issue Task",
                  "Clear Thesis Development",
                  "Logical Argumentation",
                  "Effective Examples",
                  "Standard Written English"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Details */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-2">{greIntro.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{greIntro.description}</p>
              <p className="text-sm font-medium text-purple-600 dark:text-purple-300">{greIntro.note}</p>
            </div>

            <h3 className="text-2xl font-bold mb-6">GRE Exam Pattern (New Pattern from Sep 2023)</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-800 text-left">
                  <tr>
                    {grePatternHeaders.map((header, index) => (
                      <th key={index} className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {grePatternData.map((item, index) => (
                    <tr key={index} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-4 py-3">{item.no}</td>
                      <td className="px-4 py-3 font-medium">{item.section}</td>
                      <td className="px-4 py-3">{item.questions}</td>
                      <td className="px-4 py-3">{item.time}</td>
                      <td className="px-4 py-3">{item.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
              Note: No negative marking. On-screen calculator available for Quantitative Reasoning section.
            </p>

            <h3 className="text-2xl font-bold mb-6">GRE Syllabus</h3>
            
            <Tabs defaultValue="verbal" className="w-full mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="verbal">Verbal Reasoning</TabsTrigger>
                <TabsTrigger value="quant">Quantitative Reasoning</TabsTrigger>
                <TabsTrigger value="writing">Analytical Writing</TabsTrigger>
              </TabsList>

              <TabsContent value="verbal" className="rounded-xl border bg-card p-6 shadow-sm">
                <h4 className="text-xl font-semibold mb-4">Verbal Reasoning (27 questions - 47 minutes)</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Reading Comprehension</h5>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Multiple-choice questions</li>
                      <li>Select one or more answer choices</li>
                      <li>Select-in-passage questions</li>
                      <li>Tests ability to understand, interpret, and analyze texts</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Text Completion</h5>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Fill in the blanks with appropriate words</li>
                      <li>1-3 blanks per question</li>
                      <li>Tests vocabulary and comprehension</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Sentence Equivalence</h5>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Select two answer choices</li>
                      <li>Both must produce sentences with same meaning</li>
                      <li>Tests vocabulary and sentence structure understanding</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="quant" className="rounded-xl border bg-card p-6 shadow-sm">
                <h4 className="text-xl font-semibold mb-4">Quantitative Reasoning (27 questions - 47 minutes)</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Arithmetic</h5>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Properties and types of integers</li>
                      <li>Divisibility, factorization, prime numbers</li>
                      <li>Arithmetic operations, exponents, roots</li>
                      <li>Percent, ratio, rate, absolute value</li>
                      <li>Number line, decimal representation</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Algebra</h5>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Operations with exponents</li>
                      <li>Factoring and simplifying expressions</li>
                      <li>Relations, functions, equations, inequalities</li>
                      <li>Solving linear/quadratic equations</li>
                      <li>Coordinate geometry and graphs</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Geometry</h5>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Lines, circles, triangles, quadrilaterals</li>
                      <li>Congruent and similar figures</li>
                      <li>Three-dimensional figures</li>
                      <li>Area, perimeter, volume</li>
                      <li>Pythagorean theorem</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Data Analysis</h5>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Mean, median, mode, range</li>
                      <li>Standard deviation, percentiles</li>
                      <li>Interpretation of tables and graphs</li>
                      <li>Probability and distributions</li>
                      <li>Counting methods (combinations, permutations)</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="writing" className="rounded-xl border bg-card p-6 shadow-sm">
                <h4 className="text-xl font-semibold mb-4">Analytical Writing (1 task - 30 minutes)</h4>
                <div>
                  <h5 className="font-medium mb-2">Analyze an Issue Task</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Present your perspective on an issue</li>
                    <li>Develop a coherent, well-reasoned argument</li>
                    <li>Support with relevant reasons and examples</li>
                    <li>Assessed on clarity, coherence, and logical development</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Study Abroad Requirements</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    USA Admissions (MS/MBA)
                  </h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>GRE score (valid for 5 years)</li>
                    <li>TOEFL (80+) or IELTS (6.5+) for English proficiency</li>
                    <li>Undergraduate transcripts</li>
                    <li>Letters of recommendation</li>
                    <li>Statement of purpose</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    Other Countries
                  </h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>UK: GRE + IELTS (typically 6.5 overall)</li>
                    <li>Canada: GRE + IELTS/TOEFL</li>
                    <li>Australia: GRE + IELTS (typically 6.5)</li>
                    <li>Singapore: GRE + TOEFL/IELTS</li>
                    <li>Europe: Varies by country/university</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  )
}