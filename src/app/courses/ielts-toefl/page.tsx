"use client"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Globe, Headphones, BookOpen, Edit, Mic } from "lucide-react"
import { motion } from "framer-motion";

// IELTS Data
const ieltsIntro = {
  title: "IELTS (International English Language Testing System)",
  description: "IELTS is accepted by USA, Germany, Australia, Canada, New Zealand, and UK for study, work, and migration purposes.",
  note: "IELTS Score is valid for 2 years. Test is conducted 4 times per month (Thu & Sat)"
};

const ieltsPatternHeaders = ["S.No", "Sections", "No of questions", "Section Time"];
const ieltsPatternData = [
  { 
    no: "1", 
    section: "Listening", 
    questions: "4 Sections, 40 Items", 
    time: "30 minutes" 
  },
  { 
    no: "2", 
    section: "Reading", 
    questions: "3 sections, 40 items", 
    time: "60 minutes" 
  },
  { 
    no: "3", 
    section: "Writing", 
    questions: "2 tasks (150 & 250 words)", 
    time: "60 minutes" 
  },
  { 
    no: "4", 
    section: "Speaking", 
    questions: "3 parts (Introduction, Cue Card, Discussion)", 
    time: "11-14 minutes" 
  },
  { 
    no: "Total", 
    section: "Total", 
    questions: "", 
    time: "2 hours 45 minutes" 
  },
];

// TOEFL Data
const toeflIntro = {
  title: "TOEFL (Test of English as a Foreign Language)",
  description: "TOEFL is accepted by more than 11,000 universities and other institutions in over 150 countries.",
  note: "TOEFL score is valid for 2 years. Test is conducted 30-40 times per year (Fri, Sat, Sun)"
};

const toeflPatternHeaders = ["S.No", "Section", "Time Limit", "Questions", "Tasks"];
const toeflPatternData = [
  { 
    no: "1", 
    section: "Writing", 
    time: "29 minutes", 
    questions: "2 tasks", 
    tasks: "Integrated Task (20 min), Academic Discussion (10 min)" 
  },
  { 
    no: "2", 
    section: "Reading", 
    time: "35 minutes", 
    questions: "20 qns", 
    tasks: "2 Reading passages (each 10 qns)" 
  },
  { 
    no: "3", 
    section: "Listening", 
    time: "36 minutes", 
    questions: "28 qns", 
    tasks: "3-4 lectures (each 6 qns), 2-3 conversations (each 5 qns)" 
  },
  { 
    no: "4", 
    section: "Speaking", 
    time: "16 minutes", 
    questions: "4 tasks", 
    tasks: "Express opinion, speak based on reading/listening" 
  },
  { 
    no: "Total", 
    section: "Total", 
    time: "1 hour 56 minutes", 
    questions: "", 
    tasks: "" 
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


export default function EnglishTestsPage() {
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
              We offer specialized coaching for IELTS and TOEFL, helping students achieve competitive scores for academic and professional purposes.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600 w-fit">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">IELTS</h3>
              <p className="text-muted-foreground">
                Comprehensive preparation for the International English Language Testing System accepted by universities and immigration authorities worldwide.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Listening Comprehension",
                  "Academic & General Reading",
                  "Writing Task Strategies",
                  "Speaking Test Practice",
                  "Vocabulary Building",
                  "Regular Mock Tests & Feedback",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600 w-fit">
                <Headphones className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">TOEFL</h3>
              <p className="text-muted-foreground">
                Expert coaching for the Test of English as a Foreign Language required for academic admissions in North America and other countries.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Reading Comprehension",
                  "Listening Skills Development",
                  "Integrated Writing Tasks",
                  "Speaking Test Strategies",
                  "Academic Vocabulary",
                  "Computer-based Test Practice",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
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
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Program Details</h2>

          <Tabs defaultValue="ielts" className="w-full">
            <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="ielts">IELTS</TabsTrigger>
              <TabsTrigger value="toefl">TOEFL</TabsTrigger>
            </TabsList>

            <TabsContent value="ielts" className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">IELTS Exam Structure</h3>
                  <p className="mb-6 text-muted-foreground">
                    IELTS assesses English language proficiency across four skills: Listening, Reading, Writing, and Speaking.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <div>
                        <span className="font-medium">Listening:</span> Tests your ability to understand spoken English in various contexts.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <div>
                        <span className="font-medium">Reading:</span> Evaluates comprehension of written English through academic or general texts.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <div>
                        <span className="font-medium">Writing:</span> Assesses ability to write responses in formal, semi-formal, and neutral styles.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <div>
                        <span className="font-medium">Speaking:</span> Measures spoken English through face-to-face interview with an examiner.
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-2xl font-bold">Our IELTS Program</h3>
                  <p className="mb-6 text-muted-foreground">
                    Our IELTS preparation program is designed to help you achieve your target band score through comprehensive training.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Full coverage of Academic & General Training modules",
                      "Personalized study plans based on initial assessment",
                      "Listening strategies for different accents",
                      "Reading techniques for time management",
                      "Writing templates for Task 1 and Task 2",
                      "Speaking mock tests with examiner feedback",
                      "Vocabulary for common IELTS topics",
                      "Regular practice tests with band score estimation",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="toefl" className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">TOEFL Exam Structure</h3>
                  <p className="mb-6 text-muted-foreground">
                    TOEFL measures academic English skills needed for university-level study in English-speaking environments.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <div>
                        <span className="font-medium">Reading:</span> Tests comprehension of academic texts similar to those in university courses.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <div>
                        <span className="font-medium">Listening:</span> Evaluates understanding of lectures and conversations in academic settings.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <div>
                        <span className="font-medium">Speaking:</span> Assesses ability to speak effectively in academic situations.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <div>
                        <span className="font-medium">Writing:</span> Measures ability to write in an academic style, integrating reading and listening.
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-2xl font-bold">Our TOEFL Program</h3>
                  <p className="mb-6 text-muted-foreground">
                    Our TOEFL preparation program helps you master the skills needed to excel in this computer-based test.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Comprehensive coverage of all TOEFL sections",
                      "Academic reading strategies",
                      "Note-taking techniques for listening",
                      "Integrated writing task practice",
                      "Speaking response templates",
                      "Computer-based test simulations",
                      "Time management strategies",
                      "Score improvement guarantee",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
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

          {/* IELTS Detailed Pattern */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">IELTS Exam Pattern</h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-semibold mb-2">{ieltsIntro.title}</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{ieltsIntro.description}</p>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-300">{ieltsIntro.note}</p>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-800 text-left">
                  <tr>
                    {ieltsPatternHeaders.map((header, index) => (
                      <th key={index} className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {ieltsPatternData.map((item, index) => (
                    <tr key={index} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-4 py-3">{item.no}</td>
                      <td className="px-4 py-3 font-medium">{item.section}</td>
                      <td className="px-4 py-3">{item.questions}</td>
                      <td className="px-4 py-3">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 className="text-xl font-semibold mb-4">IELTS Syllabus</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Headphones className="h-5 w-5 text-blue-600" />
                  <h5 className="font-semibold">Listening</h5>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>4 sections with 10 questions each</li>
                  <li>Monologues and conversations</li>
                  <li>Various English accents</li>
                  <li>Multiple question types (MCQ, matching, etc.)</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <h5 className="font-semibold">Reading</h5>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Academic: 3 long texts from books/journals</li>
                  <li>General Training: extracts from books/magazines/newspapers</li>
                  <li>Various question types</li>
                  <li>Tests reading for gist, main ideas, details</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Edit className="h-5 w-5 text-blue-600" />
                  <h5 className="font-semibold">Writing</h5>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Task 1 (Academic): Describe visual information</li>
                  <li>Task 1 (General): Write a letter</li>
                  <li>Task 2: Essay on given topic</li>
                  <li>Assessed on task achievement, coherence, vocabulary, grammar</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Mic className="h-5 w-5 text-blue-600" />
                  <h5 className="font-semibold">Speaking</h5>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Part 1: Introduction & interview</li>
                  <li>Part 2: Long turn (cue card topic)</li>
                  <li>Part 3: Discussion</li>
                  <li>Assessed on fluency, vocabulary, grammar, pronunciation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* TOEFL Detailed Pattern */}
          <div>
            <h3 className="text-2xl font-bold mb-6">TOEFL Exam Pattern</h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-semibold mb-2">{toeflIntro.title}</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{toeflIntro.description}</p>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-300">{toeflIntro.note}</p>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-800 text-left">
                  <tr>
                    {toeflPatternHeaders.map((header, index) => (
                      <th key={index} className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {toeflPatternData.map((item, index) => (
                    <tr key={index} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-4 py-3">{item.no}</td>
                      <td className="px-4 py-3 font-medium">{item.section}</td>
                      <td className="px-4 py-3">{item.time}</td>
                      <td className="px-4 py-3">{item.questions}</td>
                      <td className="px-4 py-3">{item.tasks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 className="text-xl font-semibold mb-4">TOEFL Syllabus</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <h5 className="font-semibold">Reading</h5>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>3-4 academic passages (700 words each)</li>
                  <li>10 questions per passage</li>
                  <li>Tests understanding of main ideas, vocabulary, inference</li>
                  <li>Multiple question types</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Headphones className="h-5 w-5 text-blue-600" />
                  <h5 className="font-semibold">Listening</h5>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>3-4 lectures (3-5 minutes each)</li>
                  <li>2-3 conversations (3 minutes each)</li>
                  <li>Tests understanding of main ideas, details, attitude</li>
                  <li>Note-taking is essential</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Mic className="h-5 w-5 text-blue-600" />
                  <h5 className="font-semibold">Speaking</h5>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>1 independent task (express opinion)</li>
                  <li>3 integrated tasks (combine reading/listening/speaking)</li>
                  <li>Responses recorded and evaluated</li>
                  <li>Assessed on delivery, language use, topic development</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Edit className="h-5 w-5 text-blue-600" />
                  <h5 className="font-semibold">Writing</h5>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Integrated task (read/listen/write)</li>
                  <li>Academic discussion task</li>
                  <li>Assessed on organization, grammar, vocabulary</li>
                  <li>Typed responses on computer</li>
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