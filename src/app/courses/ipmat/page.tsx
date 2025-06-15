"use client";
import { DataTable } from "@/app/components/data-table";
import { motion } from "framer-motion";
import Image from "next/image";

// Define variants outside the component to prevent recreation on every render
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

 // IPMAT Introduction
  const ipmatIntro = {
    title: "IPMAT : (Eligibility: Inter)",
    description: "IPMAT – Integrated Programme in Management Admission Test is an entrance test for 5 year integrated BBA+MBA at IIMs (Indian Institute of Management), India's Top central government colleges. If you do this degree, you can get above 25 lakhs per annum in all corporate companies/MNCs, etc",
    telugu: "ఇంటర్ తరువాత , 'ఇండియాస్ ఇన్స్టిట్యూట్ ఆఫ్ మేనేజ్ మెంట్ అనే కేంద్ర ప్రభుత్వం కాలేజీ లలో 5 సంవత్సరం ఇంటెగ్రేడ్ BBA డిగ్రీ + MBA చేయడానికి ఇంటెరెన్స్ టెస్ట్",
    note: "IPMAT exams are conducted in July every year"
  };

  // IPMAT Indore Pattern
  const ipmatIndorePatternHeaders = ["S.No", "Section (4 marks per each qn)", "No. of qns", "Duration"];
  const ipmatIndorePatternData = [
    { no: "1", section: "Quantitative Ability (SA)", qns: "15", duration: "40 minutes" },
    { no: "2", section: "Quantitative Ability (MCQ)", qns: "30", duration: "40 minutes" },
    { no: "3", section: "Verbal Ability", qns: "45", duration: "40 minutes" },
    { no: "Total", section: "Total", qns: "90 (360 marks)", duration: "2 hours" },
  ];

  // IPMAT Indore Cutoff
  const ipmatIndoreCutoffHeaders = ["Category", "Quantitative Ability (SA)", "Quantitative Ability (MCQ)", "Verbal Ability", "Total cut off marks out of 360"];
  const ipmatIndoreCutoffData = [
    { category: "General", sa: "20", mcq: "43", verbal: "112", total: "175" },
    { category: "EWS", sa: "8", mcq: "29", verbal: "86", total: "123" },
    { category: "NC-OBC", sa: "8", mcq: "21", verbal: "70", total: "99" },
    { category: "SC", sa: "4", mcq: "14", verbal: "50", total: "68" },
    { category: "ST", sa: "4", mcq: "8", verbal: "34", total: "46" },
  ];

  // IPMAT Rohtak Pattern
  const ipmatRohtakPatternHeaders = ["S.No", "Section (4 marks per each qn)", "No. of qns", "Duration"];
  const ipmatRohtakPatternData = [
    { no: "1", section: "Quantitative Ability", qns: "40", duration: "40 minutes" },
    { no: "2", section: "Logical Reasoning", qns: "40", duration: "40 minutes" },
    { no: "3", section: "Verbal Ability", qns: "40", duration: "40 minutes" },
    { no: "Total", section: "Total", qns: "120", duration: "2 hours" },
  ];

  // IPMAT Rohtak Cutoff
  const ipmatRohtakCutoffHeaders = ["Category", "Total cut off Marks out of 480"];
  const ipmatRohtakCutoffData = [
    { category: "General", cutoff: "306" },
    { category: "EWS", cutoff: "261" },
    { category: "NC-OBC", cutoff: "219" },
    { category: "SC", cutoff: "154" },
    { category: "ST", cutoff: "66" },
    { category: "PWD", cutoff: "185" },
  ];

  // JIPMAT Pattern
  const jipmatPatternHeaders = ["S.No", "Section (4 marks per each qn)", "No. of qns"];
  const jipmatPatternData = [
    { no: "1", section: "Quantitative Ability", qns: "33" },
    { no: "2", section: "Logical Reasoning", qns: "33" },
    { no: "3", section: "Verbal Ability", qns: "34" },
    { no: "Total", section: "Total", qns: "100" },
  ];

  // JIPMAT Expected Cutoff
  const jipmatCutoffHeaders = ["Category", "Total cut off Marks out of 400"];
  const jipmatCutoffData = [
    { category: "General", cutoff: "395-305" },
    { category: "EWS", cutoff: "270-275" },
    { category: "NC-OBC", cutoff: "255-260" },
    { category: "SC", cutoff: "200-210" },
    { category: "ST", cutoff: "155-160" },
  ];

export default function IPMATPage() {
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
                src="/assets/ms/msbanner.png"
                alt="Government Jobs Preparation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
                <div className="px-6 md:px-12 max-w-3xl">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    IPMAT EXamination
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl">
                    A lot of our students excelled in these exams
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">{ipmatIntro.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2">{ipmatIntro.description}</p>
        <p className="text-gray-700 dark:text-gray-300 font-medium">{ipmatIntro.telugu}</p>
        <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-300">{ipmatIntro.note}</p>
      </div>

      {/* IPMAT Exams Overview */}
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">There are 3 IPMAT exams every year:</h4>
        <ol className="list-decimal pl-5 space-y-1">
          <li>IPMAT-1 : IIM-Indore (150 seats) - score also accepted by IIM-Ranchi (160 seats)</li>
          <li>IPMAT-2 : IIM-Rohtak (160 seats)</li>
          <li>IPMAT-3 : JIPMAT (for IIM-Jammu & IIM-Bodhgaya, 120 seats total)</li>
        </ol>
      </div>

      {/* IPMAT Indore Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold">(1) IPMAT-1 : IIM-Indore : Pattern</h3>
        
        {/* Pattern Table */}
        <DataTable
          headers={ipmatIndorePatternHeaders}
          data={ipmatIndorePatternData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.no}</td>
              <td className="px-4 py-3 font-medium">{item.section}</td>
              <td className="px-4 py-3">{item.qns}</td>
              <td className="px-4 py-3">{item.duration}</td>
            </>
          )}
        />
        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <p>• Negative marking: -1</p>
          <p>• IPMAT Indore exam date is conducted in July every year</p>
          <p>• Application fee: Rs.4130/-</p>
        </div>

        {/* Cutoff Table */}
        <h4 className="text-lg font-semibold mt-6">IPMAT-Indore-2023- cut off out of 360:</h4>
        <DataTable
          headers={ipmatIndoreCutoffHeaders}
          data={ipmatIndoreCutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3">{item.sa}</td>
              <td className="px-4 py-3">{item.mcq}</td>
              <td className="px-4 py-3">{item.verbal}</td>
              <td className="px-4 py-3 font-medium">{item.total}</td>
            </>
          )}
        />

        {/* Syllabus Sections */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {/* Quantitative Ability Syllabus */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold mb-2">IPMAT-Indore syllabus: Section-1: Quantitative Ability</h5>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Number System</li>
              <li>Arithmetic Problem</li>
              <li>Algebra</li>
              <li>Geometry</li>
              <li>Modern Maths</li>
              <li>HCF & LCM</li>
              <li>Average</li>
              <li>Algebraic Formula</li>
              <li>Lines</li>
              <li>Sequence & Series</li>
            </ul>
          </div>

          {/* Verbal Ability Syllabus */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold mb-2">Section-2: Verbal Ability</h5>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Grammar</li>
              <li>Verbal Ability</li>
              <li>Vocabulary</li>
              <li>Reading Comprehension</li>
              <li>Noun, Pronoun, Adverb, Verb, Tenses</li>
              <li>Error Spotting</li>
              <li>Synonym & Antonym</li>
              <li>Direct & Indirect Speech</li>
              <li>Fill in the blanks</li>
              <li>Idioms & Phrases, Spelling Errors</li>
            </ul>
          </div>

          {/* Topic-wise Weightage */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold mb-2">Topic-wise weightage for Quantitative Ability (MCQ)</h5>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Number System - 4 questions</li>
              <li>Arithmetic - 8 questions</li>
              <li>Algebra - 6 questions</li>
              <li>Geometry & Mensuration - 5 questions</li>
              <li>Permutation combination and Probability - 5 questions</li>
              <li>Set Theory - 4 questions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* IPMAT Rohtak Section */}
      <div className="space-y-6 mt-8">
        <h3 className="text-xl font-bold">(2) IPMAT-2 : IIM-Rohtak- Pattern</h3>
        
        {/* Pattern Table */}
        <DataTable
          headers={ipmatRohtakPatternHeaders}
          data={ipmatRohtakPatternData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.no}</td>
              <td className="px-4 py-3 font-medium">{item.section}</td>
              <td className="px-4 py-3">{item.qns}</td>
              <td className="px-4 py-3">{item.duration}</td>
            </>
          )}
        />
        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <p>• Negative marking: -1</p>
          <p>• IPMAT-Rohtak exam is conducted in May every year</p>
          <p>• Application fee: Rs.3890</p>
          <p>• IIM-Rohtak has 160 seats</p>
        </div>

        {/* Cutoff Table */}
        <h4 className="text-lg font-semibold mt-6">Cut-offs of IPMAT-Rohtak in 2023</h4>
        <DataTable
          headers={ipmatRohtakCutoffHeaders}
          data={ipmatRohtakCutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3 font-medium">{item.cutoff}</td>
            </>
          )}
        />

        {/* Syllabus Sections */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {/* Quantitative Ability Syllabus */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold mb-2">IPMAT-Rohtak syllabus: Quantitative Ability</h5>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Class 10 Mathematics</li>
              <li>Simple Equations</li>
              <li>Numbers</li>
              <li>Percentage</li>
              <li>Profit, Loss & Discount</li>
              <li>HCF-LCM</li>
              <li>Square Root and Cube Root</li>
              <li>Geometry</li>
            </ul>
          </div>

          {/* Logical Reasoning Syllabus */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold mb-2">Logical Reasoning</h5>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Inferences & Judgments</li>
              <li>Logical Sequence Series</li>
              <li>Coding & Decoding</li>
              <li>Arrangements</li>
              <li>Cubes and Dices</li>
              <li>Blood Relations</li>
              <li>Input & Output</li>
              <li>Venn Diagrams</li>
            </ul>
          </div>

          {/* Verbal Ability Syllabus */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold mb-2">Verbal Ability</h5>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Etymology & Roots</li>
              <li>Idioms & Phrases</li>
              <li>Analogies</li>
              <li>Antonyms-Synonyms</li>
              <li>Foreign Words</li>
              <li>Noun & Pronoun Errors</li>
              <li>Subject-Verb Agreement</li>
              <li>Prepositions & Conjunctions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* JIPMAT Section */}
      <div className="space-y-6 mt-8">
        <h3 className="text-xl font-bold">(3) IPMAT-3: JIPMAT (for IIM-Jammu & IIM-Bodhgaya)</h3>
        <p className="text-gray-600 dark:text-gray-400">Joint Integrated Programme in Management Admission Test - May</p>
        
        {/* Pattern Table */}
        <DataTable
          headers={jipmatPatternHeaders}
          data={jipmatPatternData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.no}</td>
              <td className="px-4 py-3 font-medium">{item.section}</td>
              <td className="px-4 py-3">{item.qns}</td>
            </>
          )}
        />
        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <p>• Negative marking: -1</p>
          <p>• Duration: 2 ½ hours</p>
          <p>• JIPMAT exam is conducted in May every year</p>
          <p>• Application fee: Rs.2000/-</p>
          <p>• IIM-Jammu & IIM-Bodhgaya have 120 seats (60+60) for JIPMAT</p>
        </div>

        {/* Expected Cutoff Table */}
        <h4 className="text-lg font-semibold mt-6">Expected Cut-offs of IPMAT -2023</h4>
        <DataTable
          headers={jipmatCutoffHeaders}
          data={jipmatCutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3 font-medium">{item.cutoff}</td>
            </>
          )}
        />
      </div>
        </motion.div>
      </div>
    </main>
  );
}