"use client"
import Image from "next/image"
// import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Button } from "@/components/ui/button"
import { DataTable } from "@/app/components/data-table";
import { motion } from "framer-motion";

  // TCS NQT Data
  const tcsNqtPatternHeaders = ["Section", "Duration (minutes)"];
  const tcsNqtPatternData = [
    { section: "Part A - Foundation Section", duration: "" },
    { section: "Traits", duration: "1" },
    { section: "Numerical Ability", duration: "25" },
    { section: "Verbal Ability", duration: "25" },
    { section: "Reasoning Ability", duration: "25" },
    { section: "Part B - Advanced Section", duration: "" },
    { section: "Advanced Quantitative Ability", duration: "20" },
    { section: "Advanced Reasoning Ability", duration: "15" },
    { section: "Advanced Coding", duration: "55" },
    { section: "Total Duration", duration: "166" },
  ];

  const tcsVerbalSyllabus = [
    "Synonyms", "Antonyms", "Prepositions", "Sentence Completion",
    "Active and Passive Voice", "Spelling Test", "Spotting Errors",
    "Passage Completion", "Substitution", "Sentence Arrangement",
    "Transformation", "Idioms and Phrases", "Sentence Improvement",
    "Para Completion", "Joining Sentences", "Error Correction"
  ];

  const tcsReasoningSyllabus = [
    "Meaningful Word Creation", "Number Series", "Data Sufficiency",
    "Blood Relations", "Coding-Decoding", "Odd Man Out", "Clocks & Calendar",
    "Distance and Directions", "Statement and Conclusion", "Seating Arrangement",
    "Analogy", "Mathematical Operational Arrangement", "Symbols & Notation"
  ];

  const tcsNumericalSyllabus = [
    "Averages", "Percentages", "Number System", "LCM & HCF",
    "Ratios & Proportion", "Allegations and Mixtures", "Probability",
    "Time & Work", "Time, Speed & Distance", "Geometry", "Divisibility",
    "Ages", "Profit & Loss", "Equations", "Series and Progressions",
    "Area, Shapes & Perimeter"
  ];

  const tcsProgrammingSyllabus = [
    "Data Types", "Functions and Scope", "Command Line Programming",
    "Pointers", "Iteration", "Input-Output", "Variables and Registers",
    "Inbuilt Libraries", "Call by value/reference", "Recursion"
  ];

  // Infosys Data
  const infosysPatternHeaders = ["Section", "Skill Tested", "No of Questions", "Time Allocated"];
  const infosysPatternData = [
    { section: "Section I", skill: "Reasoning Ability", questions: "15", time: "25 minutes" },
    { section: "Section II", skill: "Technical Ability", questions: "10", time: "35 minutes" },
    { section: "Section III", skill: "Verbal Ability", questions: "20", time: "20 minutes" },
    { section: "Section IV", skill: "Pseudo-code", questions: "5", time: "10 minutes" },
    { section: "Section V", skill: "Numerical Puzzle", questions: "4", time: "10 minutes" },
  ];

  const infosysReasoningSyllabus = [
    "Puzzle", "Arrangements", "Clocks & Calendar", "Coding Decoding",
    "Crypt arithmetic", "Data Sufficiency", "Logical Deduction",
    "Most logical choice", "Number series", "Syllogisms"
  ];

  const infosysQuantitativeSyllabus = [
    "Areas", "Shapes", "Perimeter", "Data Interpretation",
    "Divisibility", "Number Decimal & Fractions", "Permutation & Combination",
    "Percentages", "Probability", "Problem on Ages", "Profit and Loss",
    "Mixtures and Allegation", "Time, Speed & Distance", "Boats and Streams",
    "Time and Work"
  ];

  const infosysVerbalSyllabus = [
    "Analogy", "Fill in the Blanks", "One Word Substitution", "Spotting error",
    "Para Jumbles", "Sentence selection", "Sentence Correction",
    "Sentence Completion", "Reading Comprehension"
  ];

  const infosysPuzzleSyllabus = [
    "Number Based Patterns", "Visual Reasoning", "Word Puzzles",
    "Sudoku", "Grid Based Puzzles"
  ];

  // Wipro Data
  const wiproPatternHeaders = ["Section", "Questions", "Time"];
  const wiproPatternData = [
    { section: "Online Test (Quants + Logical)", questions: "30", time: "30 Minutes" },
    { section: "Online Test English", questions: "22", time: "18 Minutes" },
    { section: "Essay Writing", questions: "1", time: "20 Minutes" },
    { section: "Coding", questions: "2", time: "60 minutes" },
    { section: "Total", questions: "", time: "128 Minutes" },
  ];

  // Amazon Data
  const amazonPatternHeaders = ["Section", "Topics"];
  const amazonPatternData = [
    { section: "Aptitude and Technical (20 qns)", topics: "Quantitative aptitude, Logical Reasoning, Programming, Data Structures, OS, Networking, DBMS" },
    { section: "Programming (2 qns)", topics: "Algorithms & Data Structures" },
    { section: "Coding", topics: "On-line coding test" },
  ];

  // Accenture Data
  const accenturePatternHeaders = ["Assessment", "Topics", "Questions", "Time"];
  const accenturePatternData = [
    { assessment: "Assessment 1", topics: "Cognitive and Technical (Verbal, Critical thinking, Problem solving, Abstract reasoning, Technical skills)", questions: "50 + 40", time: "90 Minutes" },
    { assessment: "Assessment 2", topics: "Coding assessment", questions: "2", time: "45 Minutes" },
    { assessment: "Assessment 3", topics: "Communication assessment", questions: "", time: "30 Minutes" },
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


export default function CRTPage() {
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
                    Prepare for Your Dream Job 
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl">
                    Our comprehensive CRT program equips students with the skills and confidence needed to excel in campus placements and secure top-tier job offers.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
          </motion.div>

                <section className="bg-muted py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-3xl font-bold mb-8 text-center">IT Company Recruitment Patterns</h1>

    <Tabs defaultValue="tcs" className="w-full">
      <div className="overflow-x-auto pb-2">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 mb-8 gap-2">
          <TabsTrigger value="tcs">TCS NQT</TabsTrigger>
          <TabsTrigger value="infosys">Infosys</TabsTrigger>
          <TabsTrigger value="wipro">Wipro</TabsTrigger>
          <TabsTrigger value="amazon">Amazon</TabsTrigger>
          <TabsTrigger value="accenture">Accenture</TabsTrigger>
        </TabsList>
      </div>

      {/* TCS NQT Tab */}
      <TabsContent value="tcs" className="space-y-8 px-2">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">TCS NQT 2023</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p><strong>Eligibility:</strong> BE, B.Tech, Any graduate, Post graduate, Diploma</p>
              <p><strong>Batch:</strong> 2024</p>
            </div>
            <div>
              <p><strong>Experience:</strong> 0-2 Years</p>
              <p><strong>Location:</strong> Across India</p>
            </div>
            <div>
              <p><strong>CTC:</strong> 3.6-7 LPA</p>
            </div>
          </div>
        </div>

        <div className="px-2">
          <h3 className="text-xl font-semibold mb-4">Test Pattern</h3>
          <div className="overflow-x-auto">
            <DataTable
              headers={tcsNqtPatternHeaders}
              data={tcsNqtPatternData}
              renderRow={(item) => (
                <>
                  <td className="px-4 py-3 font-medium">{item.section}</td>
                  <td className="px-4 py-3">{item.duration}</td>
                </>
              )}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 px-2">
          <div>
            <h3 className="text-xl font-semibold mb-4">Verbal Ability Syllabus</h3>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
              <ul className="columns-2 gap-4">
                {tcsVerbalSyllabus.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Reasoning Ability Syllabus</h3>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
              <ul className="columns-2 gap-4">
                {tcsReasoningSyllabus.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Numerical Ability Syllabus</h3>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
              <ul className="columns-2 gap-4">
                {tcsNumericalSyllabus.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Programming Logic Syllabus</h3>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
              <ul className="columns-2 gap-4">
                {tcsProgrammingSyllabus.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      {/* Infosys Tab */}
      <TabsContent value="infosys" className="space-y-8 px-2">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Infosys Recruitment</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p><strong>Eligibility:</strong> B.E/B.Tech/M.E/M.Tech/MCA/M.Sc</p>
              <p><strong>Batch:</strong> 2024</p>
            </div>
            <div>
              <p><strong>Experience:</strong> 0-3 Years</p>
              <p><strong>Location:</strong> Across India</p>
            </div>
            <div>
              <p><strong>CTC:</strong> 3.60-9.50 LPA</p>
            </div>
          </div>
        </div>

        <div className="px-2">
          <h3 className="text-xl font-semibold mb-4">Test Pattern</h3>
          <div className="overflow-x-auto">
            <DataTable
              headers={infosysPatternHeaders}
              data={infosysPatternData}
              renderRow={(item) => (
                <>
                  <td className="px-4 py-3 font-medium">{item.section}</td>
                  <td className="px-4 py-3">{item.skill}</td>
                  <td className="px-4 py-3">{item.questions}</td>
                  <td className="px-4 py-3">{item.time}</td>
                </>
              )}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 px-2">
          <div>
            <h3 className="text-xl font-semibold mb-4">Reasoning Ability Syllabus</h3>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
              <ul className="columns-2 gap-4">
                {infosysReasoningSyllabus.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quantitative Ability Syllabus</h3>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
              <ul className="columns-2 gap-4">
                {infosysQuantitativeSyllabus.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Verbal Ability Syllabus</h3>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
              <ul className="columns-2 gap-4">
                {infosysVerbalSyllabus.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Puzzle Solving Topics</h3>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border">
              <ul className="columns-2 gap-4">
                {infosysPuzzleSyllabus.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      {/* Wipro Tab */}
      <TabsContent value="wipro" className="space-y-8 px-2">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Wipro National Talent Hunt Exam</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p><strong>Eligibility:</strong> Engineering Graduates</p>
              <p><strong>Batch:</strong> 2024</p>
            </div>
            <div>
              <p><strong>Experience:</strong> Freshers</p>
              <p><strong>Location:</strong> Across India</p>
            </div>
          </div>
        </div>

        <div className="px-2">
          <h3 className="text-xl font-semibold mb-4">Test Pattern</h3>
          <div className="overflow-x-auto">
            <DataTable
              headers={wiproPatternHeaders}
              data={wiproPatternData}
              renderRow={(item) => (
                <>
                  <td className="px-4 py-3 font-medium">{item.section}</td>
                  <td className="px-4 py-3">{item.questions}</td>
                  <td className="px-4 py-3">{item.time}</td>
                </>
              )}
            />
          </div>
        </div>
      </TabsContent>

      {/* Amazon Tab */}
      <TabsContent value="amazon" className="space-y-8 px-2">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Amazon Recruitment</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p><strong>Eligibility:</strong> Engineering Graduates</p>
            </div>
            <div>
              <p><strong>Experience:</strong> 0-2 Years</p>
            </div>
          </div>
        </div>

        <div className="px-2">
          <h3 className="text-xl font-semibold mb-4">Test Pattern</h3>
          <div className="overflow-x-auto">
            <DataTable
              headers={amazonPatternHeaders}
              data={amazonPatternData}
              renderRow={(item) => (
                <>
                  <td className="px-4 py-3 font-medium">{item.section}</td>
                  <td className="px-4 py-3">{item.topics}</td>
                </>
              )}
            />
          </div>
        </div>
      </TabsContent>

      {/* Accenture Tab */}
      <TabsContent value="accenture" className="space-y-8 px-2">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Accenture Recruitment</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p><strong>Eligibility:</strong> Engineering Graduates</p>
            </div>
            <div>
              <p><strong>Experience:</strong> 0-2 Years</p>
            </div>
          </div>
        </div>

        <div className="px-2">
          <h3 className="text-xl font-semibold mb-4">Test Pattern</h3>
          <div className="overflow-x-auto">
            <DataTable
              headers={accenturePatternHeaders}
              data={accenturePatternData}
              renderRow={(item) => (
                <>
                  <td className="px-4 py-3 font-medium">{item.assessment}</td>
                  <td className="px-4 py-3">{item.topics}</td>
                  <td className="px-4 py-3">{item.questions}</td>
                  <td className="px-4 py-3">{item.time}</td>
                </>
              )}
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  </div>
</section>
   </div>
    </main>
  )
}
