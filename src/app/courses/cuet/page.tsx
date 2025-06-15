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

const cuetPatternHeaders = ["S.No", "Sections", "Subject", "No. of qns", "Duration"];
  const cuetPatternData = [
    { 
      no: "1", 
      section: "Section-1A", 
      subject: "13 Languages", 
      qns: "50", 
      duration: "45 minutes for each language" 
    },
    { 
      no: "2", 
      section: "Section-1B", 
      subject: "20 Languages", 
      qns: "", 
      duration: "" 
    },
    { 
      no: "3", 
      section: "Section-2", 
      subject: "Domain subject (27 subjects-Science/Commerce/Economics/History...)", 
      qns: "50", 
      duration: "45 minutes for each subject" 
    },
    { 
      no: "4", 
      section: "Section-3", 
      subject: "General Test (GK, Mental Ability, Numerical Ability, Quantitative Reasoning, Logical Reasoning, Current Affairs)", 
      qns: "60", 
      duration: "40 minutes" 
    },
  ];

export default function CUETPage() {
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
                    CUET EXamination
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl">
                    A lot of our students excelled in these exams
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">CUET: (Common University Entrance Test)</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          This is a national entrance test for admissions of Degree at all 54 central universities (Central University of A.P, Anantapuramu, Hyd. Cen. Uni-HCU, EFLU, Pondicherry Cen. Uni, etc)
        </p>
        <p className="text-gray-700 dark:text-gray-300 font-medium">
          కేంద్ర ప్రభుతావనికి సంభందించిన సెంట్రల్ యూనివర్సిటీ క్యాంపు లా లో డిగ్రీ చేయాలి అంటే ఈ సి .యూ . ఈ.టి అనేది ఒక తప్పని సరి ఎంట్రన్స్ టెస్ట్
        </p>
      </div>

      {/* CUET Pattern */}
      <div>
        <h3 className="text-lg font-semibold mb-4">CUET Pattern (160 questions)</h3>
        <DataTable
          headers={cuetPatternHeaders}
          data={cuetPatternData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.no}</td>
              <td className="px-4 py-3 font-medium">{item.section}</td>
              <td className="px-4 py-3">{item.subject}</td>
              <td className="px-4 py-3">{item.qns}</td>
              <td className="px-4 py-3">{item.duration}</td>
            </>
          )}
        />
        <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <p>• Each question: 5 marks & Negative marking: -1</p>
          <p>• CUET exam is conducted in May every year.</p>
          <p className="italic">• Language (section IA & IB) - Tested through Reading Comprehension (Factual, Literary, Narrative passages and Vocabulary)</p>
        </div>
      </div>

      {/* Important Note */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">NOTE:</h4>
        <p className="text-yellow-700 dark:text-yellow-300">
          As per the CUET 2024 exam pattern, a candidate can choose a minimum of 3 and a maximum of 10 subjects from all three Sections.
        </p>
      </div>
     
        </motion.div>
      </div>
    </main>
  );
}