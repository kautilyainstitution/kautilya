"use client";

import { BankingExamCutoffData } from "@/app/components/baking-exam-cutoff-data";
import GovtJobNotifications from "@/app/components/govt-job-notifications";
import { IbpsPoCutoffData } from "@/app/components/ibps-cutoff-data";
import IbpsExamDetails from "@/app/components/ibps-exam-details";
import { IbpsRrbSoExamData } from "@/app/components/ibps-rrb-exam-data";
import IbpsSbiClerkMains from "@/app/components/ibps-sbi-clerk-mains";
import { LicFciExamData } from "@/app/components/lic-fic-exam-data";
import { RbiAssistantsExamData } from "@/app/components/rbi-assistants-exam-data";
import { RbiGradeBExamData } from "@/app/components/rbi-grade-exam-data";
import { RbiLicExamData } from "@/app/components/rbi-lic-exam-data";
import { SbiPoCutoffData } from "@/app/components/sbi-po-cutoff-data";
import { SpecialistOfficerExamData } from "@/app/components/specail-list-officer-exam-data";
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

export default function SnapPage() {
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
                    Bank Exams and Govt Jobs
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl">
                    A lot of our students excelled in these exams
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        <GovtJobNotifications/>
        <IbpsExamDetails/>
        <IbpsSbiClerkMains/>
        <IbpsPoCutoffData/>
        <SbiPoCutoffData/>
        <BankingExamCutoffData/>
        <IbpsRrbSoExamData/>
        <SpecialistOfficerExamData />
        <RbiGradeBExamData/>
        <RbiAssistantsExamData/>
        <RbiLicExamData/>
        <LicFciExamData/>
        </motion.div>
      </div>
    </main>
  );
}