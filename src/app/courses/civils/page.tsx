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


export default function CivilsPage() {
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
                    Civil Services EXamination
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl">
                    A lot of our students excelled in these exams
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

    
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">UPSC Civils Prelims: Pattern</h2>
<section title="UPSC Civil Services Preliminary Exam">
  <DataTable
    headers={["Paper", "Type", "No. of Questions", "Marks", "Duration"]}
    data={[
      { subject: "General Studies I", questions: "Objective", marks: 100, duration: 200, module: "2 hours" },
      { subject: "General Studies II (CSAT)", questions: "Objective", marks: 80, duration: 200, module: "2 hours" },
    ]}
    renderRow={(item) => (
      <>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.subject}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.questions}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.marks}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.duration}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.module}</td>
      </>
    )}
  />
  <p className="mt-4 text-gray-600 dark:text-gray-400 italic">
    Note: GS Paper II is qualifying in nature with minimum qualifying marks fixed at 33%. Negative marking: 1/3 per wrong answer.
  </p>
</section>


        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">UPSC Civils Mains: Pattern</h2>
<section title="UPSC Mains Exam Structure">
  <DataTable
    headers={["Paper", "Subject", "Duration", "Marks"]}
    data={[
      { subject: "Paper A", questions: "Compulsory Indian Language (Qualifying)", marks: "3 hours", duration: 300 },
      { subject: "Paper B", questions: "English (Qualifying)", marks: "3 hours", duration: 300 },
      { subject: "Paper I", questions: "Essay", marks: "3 hours", duration: 250 },
      { subject: "Paper II", questions: "General Studies I", marks: "3 hours", duration: 250 },
      { subject: "Paper III", questions: "General Studies II", marks: "3 hours", duration: 250 },
      { subject: "Paper IV", questions: "General Studies III", marks: "3 hours", duration: 250 },
      { subject: "Paper V", questions: "General Studies IV", marks: "3 hours", duration: 250 },
      { subject: "Paper VI", questions: "Optional I", marks: "3 hours", duration: 250 },
      { subject: "Paper VII", questions: "Optional II", marks: "3 hours", duration: 250 },
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
  <p className="mt-4 text-gray-600 dark:text-gray-400 italic">
    Total: 1750 marks. Minimum 25% score required in each paper to be considered for final evaluation.
  </p>
</section>


    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">UPSC General Studies Paper Topics</h2>
<section title="General Studies Paper Syllabus">
  <DataTable
    headers={["General Studies I", "General Studies II", "General Studies III", "General Studies IV"]}
    data={[
      {
        subject: "Indian Heritage and Culture",
        questions: "Governance",
        marks: "Technology",
        duration: "Ethics",
      },
      {
        subject: "History and Geography of the World",
        questions: "Constitution",
        marks: "Economic Development",
        duration: "Integrity",
      },
      {
        subject: "Society",
        questions: "Polity",
        marks: "Bio-diversity",
        duration: "Aptitude",
      },
      {
        subject: "",
        questions: "Social Justice",
        marks: "Environment",
        duration: "",
      },
      {
        subject: "",
        questions: "International Relations",
        marks: "Security and Disaster Management",
        duration: "",
      },
    ]}
    renderRow={(item) => (
      <>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.subject || "-"}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.questions || "-"}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.marks || "-"}</td>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item.duration || "-"}</td>
      </>
    )}
  />
</section>

<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center pt-3">UPSC Interview (Personality Test)</h2>
<section title="275 Marks – Final Stage">
  <p className="text-gray-700 dark:text-gray-300 mb-4">
    The interview stage evaluates overall personality, mental clarity, judgment, and leadership potential.
  </p>
  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
    <li>Mental acuity</li>
    <li>Critical and analytical thinking</li>
    <li>Risk assessment and crisis management skills</li>
    <li>Leadership potential</li>
    <li>Intellectual and moral integrity</li>
  </ul>

  <h3 className="text-xl font-semibold mt-6">Common Areas of Questions:</h3>
  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
    <li>Personal background (family, education, native place)</li>
    <li>Your optional subject and why you chose it</li>
    <li>Preferred service: IAS/IPS/IFS – reasons and motivation</li>
    <li>Hobbies and personal interests</li>
    <li>Situational questions to test decision-making and ethics</li>
    <li>Vision and ideologies for public service</li>
  </ul>
</section>


        
        </motion.div>
      </div>
    </main>
  );
}