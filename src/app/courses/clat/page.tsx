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

// CLAT data
const clatIntro = {
  title: "CLAT : (Eligibility: Inter)",
  description: "CLAT – Common Law Admission (entrance) Test is for 5 year Law degree (B.A- LLB) after your Inter at National Law Universities (23 NLUs- India's central government top law colleges)- NALSAR (Hyd), NLSIU (Bengaluru), DSNLU (Vizag), etc. If you do this degree, you can get jobs as corporate legal advisors in top companies/ MNCs, public prosecutors (Court Judge), etc with around Rs.25 lakhs",
  telugu: "క్లాట్ (కామన్ లా అడ్మిషన్ టెస్ట్ ) - ఇంటర్ తర్వాత 'నేషనల్ లా యూనివర్సిటీ ' లా లో 5 సంవత్సరాల నాయ్య విద్య డిగ్రీ చేయడానికి ఇది ఒక జాతీయ స్థాయి ప్రవేశ పరీక్ష / ఎంట్రన్స్ టెస్ట్ . ఈ కాలేజీ లా లో లా డిగ్రీ చేస్తే 20 లక్షలకు పైగా సంవత్సర జీతాలు కో ఆపరేట్ కంపెనీ లా లో గారంటీ గా వస్తాయి",
  note: "CLAT is conducted in December every year"
};

const clatPatternHeaders = ["S.No", "Section", "No. of qns"];
const clatPatternData = [
  { no: "1", section: "English Language (6 RC passages)", qns: "33" },
  { no: "2", section: "GK with Current Affairs (7 passages)", qns: "35" },
  { no: "3", section: "Legal Reasoning (5 passages)", qns: "40" },
  { no: "4", section: "Quantitative Techniques (3 sets)", qns: "15" },
  { no: "5", section: "Logical Reasoning (5 passages)", qns: "30" },
  { no: "Total", section: "Total", qns: "150 qns" },
];

const clatScoringNote = "Each qn: 1 mark; Negative marking: 0.25. The usual cut-off in the CLAT is 90+ qns";

const nluRankingsHeaders = ["Rank", "Name of the NLU (National Law University)"];
const nluRankingsData = [
  { rank: "1", name: "National Law School of Indian University (NLSIU)" },
  { rank: "2", name: "National Academy of Legal Studies and Research University (NALSAR), Hyd" },
  { rank: "3", name: "National Law University, Delhi (thru AILET exam)" },
  { rank: "4", name: "The WB National University of Juridical Sciences (WBNUJS), Kolkata" },
  { rank: "5", name: "National Law Institute University (NLUJ), Jodhpur" },
  { rank: "6", name: "National Law Institute University (NLIU), Bhopal" },
  { rank: "7", name: "Gujarat National Law University (GNLU), Gadhinagar" },
  { rank: "8", name: "Hidayatullah National Law University (HNLU), Raipur" },
  { rank: "9", name: "Maharashtra National Law University, Mumbai (MNLU)" },
  { rank: "10", name: "Dr. Ram Manohar Lohiya National Law Uni., Lucknow (RMLNLU)" },
  { rank: "11", name: "National Law University, Orissa (NLUO)" },
  { rank: "12", name: "Rajiv Gandhi National University of Law (RGNUL), Patiala" },
  { rank: "13", name: "The National University of Advanced Legal Studies (NUALS), Kochi" },
  { rank: "14", name: "Chanakya National Law University, Patna (CNLU)" },
  { rank: "15", name: "National University of Study & Research in Law, Ranchi (NUSRL)" },
  { rank: "16", name: "National Law University, Nagpur (MNLU)" },
  { rank: "17", name: "Damodaram Sanjivayya National Law University, Vizag (DSNLU)" },
  { rank: "18", name: "National Law University and Judicial Academy (NLUJA), Assam" },
  { rank: "19", name: "Tamil Nadu National Law School, Trichy (TNNLS)" },
  { rank: "20", name: "Maharashtra National Law University, Aurangabad (MNLU)" },
  { rank: "21", name: "H.P. National Law University (HPNLU), Shimla" },
  { rank: "22", name: "Dharmashtra National Law University, Jabalpur (MPDNLU)" },
  { rank: "23", name: "Dr. B.R. Ambedkar National Law University (DBRANLU), Haryana" },
];

const clatCutoffHeaders = ["Category", "Cut-off"];
const clatCutoffData = [
  { category: "General", cutoff: "75-80" },
  { category: "EWS", cutoff: "70-75" },
  { category: "OBC", cutoff: "70-75" },
  { category: "SC", cutoff: "60-65" },
  { category: "ST", cutoff: "60-65" },
  { category: "PWD", cutoff: "50-55" },
];

const clatScoreRankHeaders = ["Score Range", "Rank Range"];
const clatScoreRankData = [
  { score: "125-150", rank: "1" },
  { score: "120-125", rank: "2-3" },
  { score: "115-120", rank: "4-5" },
  { score: "110-115", rank: "6" },
  { score: "105-110", rank: "7-9" },
  { score: "100-105", rank: "10-19" },
  { score: "95-100", rank: "20-57" },
  { score: "90-95", rank: "58-173" },
  { score: "85-90", rank: "174-362" },
  { score: "80-85", rank: "363-743" },
  { score: "75-80", rank: "744-1411" },
  { score: "70-75", rank: "1412-2318" },
  { score: "60-70", rank: "2319-3572" },
  { score: "60-65", rank: "3573-5200" },
  { score: "55-60", rank: "5201-7284" },
  { score: "50-55", rank: "7285-9841" },
  { score: "45-50", rank: "9842-12994" },
  { score: "40-45", rank: "12995-16746" },
  { score: "35-40", rank: "16747-21135" },
  { score: "30-35", rank: "21136-26442" },
  { score: "25-30", rank: "26443-32188" },
  { score: "20-25", rank: "32189-38320" },
  { score: "15-20", rank: "38321-44066" },
  { score: "10-15", rank: "44067-48884" },
  { score: "5-10", rank: "48885-51683" },
  { score: "0-5", rank: "51684-52956" },
  { score: "0.25 to (-5)", rank: "52957-53208" },
];

const nluAdmissionHeaders = ["NLUs", "CLAT opening Rank", "CLAT closing Rank", "CLAT score out of 150 marks"];
const nluAdmissionData = [
  { nlu: "NLSIU – Bangalore", open: "1", close: "83", score: "103.5" },
  { nlu: "NALSAR – Hyderabad", open: "65", close: "172", score: "99" },
  { nlu: "WBNUJS – Kolkata", open: "24", close: "241", score: "96.75" },
  { nlu: "NLU – Jodhpur", open: "185", close: "356", score: "93.25" },
  { nlu: "NLIU – Bhopal", open: "176", close: "384", score: "92.75" },
];

export default function CLATPage() {
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
                    CLAT EXamination
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl">
                    A lot of our students excelled in all these exams
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Introduction Section */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{clatIntro.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{clatIntro.description}</p>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{clatIntro.telugu}</p>
              <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-300">{clatIntro.note}</p>
            </div>
          </motion.section>

          {/* CLAT Pattern Section */}
          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">CLAT Exam Pattern (Off-line)</h2>

            <DataTable
              headers={clatPatternHeaders}
              data={clatPatternData}
              renderRow={(item) => (
                <>
                  <td className="px-4 py-3">{item.no}</td>
                  <td className="px-4 py-3 font-medium">{item.section}</td>
                  <td className="px-4 py-3">{item.qns}</td>
                </>
              )}
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">{clatScoringNote}</p>
          </motion.section>

          {/* NLU Rankings Section */}
          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Rankings of NLUs through CLAT</h2>

            <DataTable
              headers={nluRankingsHeaders}
              data={nluRankingsData}
              renderRow={(item) => (
                <>
                  <td className="px-4 py-3">{item.rank}</td>
                  <td className="px-4 py-3 font-medium">{item.name}</td>
                </>
              )}
              className="mb-8"
            />

            <h3 className="text-xl font-semibold mb-4">CLAT-2022 Ranks for Top NLUs</h3>
            <DataTable
              headers={nluAdmissionHeaders}
              data={nluAdmissionData}
              renderRow={(item) => (
                <>
                  <td className="px-4 py-3">{item.nlu}</td>
                  <td className="px-4 py-3">{item.open}</td>
                  <td className="px-4 py-3">{item.close}</td>
                  <td className="px-4 py-3 font-medium">{item.score}</td>
                </>
              )}
            />
          </motion.section>

          {/* Cutoff and Score Analysis Section */}
          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">CLAT Cut-off and Score Analysis</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">CLAT-2022: Cut-off marks</h3>
                <DataTable
                  headers={clatCutoffHeaders}
                  data={clatCutoffData}
                  renderRow={(item) => (
                    <>
                      <td className="px-4 py-3">{item.category}</td>
                      <td className="px-4 py-3 font-medium">{item.cutoff}</td>
                    </>
                  )}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">CLAT-2022: Score Vs Ranks</h3>
                <div className="overflow-x-auto">
                  <DataTable
                    headers={clatScoreRankHeaders}
                    data={clatScoreRankData}
                    renderRow={(item) => (
                      <>
                        <td className="px-4 py-3">{item.score}</td>
                        <td className="px-4 py-3 font-medium">{item.rank}</td>
                      </>
                    )}
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Syllabus Section */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6">CLAT Syllabus Breakdown</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* English Language */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">English Language</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Reading comprehension passages</li>
                  <li>Grammar (Tenses, Articles, Prepositions)</li>
                  <li>Vocabulary (Synonyms, Antonyms)</li>
                  <li>Idioms and phrases</li>
                  <li>Sentence correction</li>
                  <li>Para jumbles</li>
                </ul>
              </div>

              {/* Current Affairs & GK */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Current Affairs & GK</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>National and international events</li>
                  <li>Arts and culture</li>
                  <li>Historical events</li>
                  <li>Geography</li>
                  <li>General science</li>
                  <li>Books and authors</li>
                  <li>Important awards</li>
                </ul>
              </div>

              {/* Legal Reasoning */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Legal Reasoning</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Legal propositions</li>
                  <li>Principles of law</li>
                  <li>Application of legal principles</li>
                  <li>Legal maxims</li>
                  <li>Important judgments</li>
                  <li>Constitutional law basics</li>
                </ul>
              </div>

              {/* Logical Reasoning */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Logical Reasoning</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Logical sequences</li>
                  <li>Analogies</li>
                  <li>Blood relations</li>
                  <li>Coding-decoding</li>
                  <li>Direction sense</li>
                  <li>Number series</li>
                </ul>
              </div>

              {/* Quantitative Techniques */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Quantitative Techniques</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Basic arithmetic</li>
                  <li>Number systems</li>
                  <li>Percentage and averages</li>
                  <li>Ratio and proportion</li>
                  <li>Data interpretation</li>
                  <li>Basic algebra</li>
                </ul>
              </div>

              {/* Preparation Tips */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Preparation Tips</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Focus on reading speed and comprehension</li>
                  <li>Daily newspaper reading for current affairs</li>
                  <li>Practice previous year papers</li>
                  <li>Take regular mock tests</li>
                  <li>Improve time management</li>
                  <li>Work on accuracy to minimize negative marking</li>
                </ul>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}