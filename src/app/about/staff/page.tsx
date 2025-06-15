"use client"

import { motion } from "framer-motion"
import Image from "next/image"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, BookOpen, Users } from "lucide-react"

// Define staff member type
interface StaffMember {
  id: number
  name: string
  role: string
  // department: string
  image: string
  experience: string
  education: string
  // achievements?: string[]
  bio: string
}

export default function StaffPage() {
  // State for active department filter
  // const [activeTab, setActiveTab] = useState("all")

  // Staff data
  const staffMembers: StaffMember[] = [
    {
      id: 1,
      name: "Sridhar",
      role: "Director",
      // department: "mba",
      image: "/assets/home/faculty1.png",
      experience: "17+ years",
      education: "MA(Eng), MA(Eco),PGDFE, PGDCE(HGU), PGCTE(EFL Uni)",
      // achievements: ["Best Teacher Award 2021", "Published 15+ research papers"],
      bio: "Dr. Priya Sharma is a seasoned educator with expertise in Quantitative Aptitude and Data Interpretation. Her teaching methodology focuses on simplifying complex concepts and providing strategic approaches to problem-solving.",
    },
    {
      id: 2,
      name: "Amasa Radhika Reddy",
      role: "Director (Admin)",
      // department: "mba",
      image: "/assets/home/faculty2.png",
      experience: "15+ years",
      education: "MA.,(Eco), PGDFE",
      // achievements: ["Author of 'Mastering Verbal Ability'", "Trained 5000+ CAT aspirants"],
      bio: "Prof. Vikram Singh is known for his innovative techniques in teaching Verbal Ability and Reading Comprehension. His sessions are interactive and focus on building strong fundamentals.",
    },
    {
      id: 3,
      name: "N.S.Reddy",
      role: "SR.Manager, Kautilya Career Counsellor",
      // department: "international",
      image: "/assets/home/faculty3.png",
      experience: "18+ years",
      education: "BTech and MBA",
      // achievements: ["Perfect GRE Score (340/340)", "Certified ETS Trainer"],
      bio: "Ms. Ananya Patel specializes in preparing students for international exams. Her personalized coaching has helped hundreds of students secure admissions in top universities worldwide.",
    },
  ]

  // Filter staff based on active tab
  // const filteredStaff =
    // activeTab === "all" ? staffMembers : staffMembers.filter((member) => member.department === activeTab)

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
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Expert Faculty</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet our team of experienced educators and industry professionals dedicated to helping you achieve your
              academic and career goals.
            </p>
          </motion.div>

          {/* Department Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            {/* <Tabs defaultValue="all" onValueChange={setActiveTab}> */}
              {/* <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 w-full mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="mba">MBA Prep</TabsTrigger>
                <TabsTrigger value="government">Govt Exams</TabsTrigger>
                <TabsTrigger value="international">Study Abroad</TabsTrigger>
                <TabsTrigger value="undergraduate">UG Programs</TabsTrigger>
                <TabsTrigger value="crt">CRT</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
              </TabsList> */}
{/* 
              <TabsContent value="all" className="mt-0">
                <StaffGrid staffMembers={filteredStaff} />
              </TabsContent>
              <TabsContent value="mba" className="mt-0">
                <StaffGrid staffMembers={filteredStaff} />
              </TabsContent>
              <TabsContent value="government" className="mt-0">
                <StaffGrid staffMembers={filteredStaff} />
              </TabsContent>
              <TabsContent value="international" className="mt-0">
                <StaffGrid staffMembers={filteredStaff} />
              </TabsContent>
              <TabsContent value="undergraduate" className="mt-0">
                <StaffGrid staffMembers={filteredStaff} />
              </TabsContent>
              <TabsContent value="crt" className="mt-0">
                <StaffGrid staffMembers={filteredStaff} />
              </TabsContent>
              <TabsContent value="research" className="mt-0">
                <StaffGrid staffMembers={filteredStaff} />
              </TabsContent>
            </Tabs> */}
           <StaffGrid staffMembers={staffMembers} />
          </motion.div>

          {/* Team Values Section */}
          <motion.section variants={itemVariants} className="mt-16 bg-muted p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Teaching Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Conceptual Clarity</h3>
                <p className="text-muted-foreground">
                  We focus on building strong fundamentals and ensuring students truly understand concepts rather than
                  memorizing them.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Attention</h3>
                <p className="text-muted-foreground">
                  Our low student-to-teacher ratio ensures that each student receives individualized guidance and
                  support.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Result-Oriented Approach</h3>
                <p className="text-muted-foreground">
                  We continuously adapt our teaching methods based on exam patterns and student feedback to maximize
                  success rates.
                </p>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  )
}

// Staff Grid Component
function StaffGrid({ staffMembers }: { staffMembers: StaffMember[] }) {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {staffMembers.map((member) => (
        <motion.div
          key={member.id}
          variants={itemVariants}
          className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border"
        >
          <div className="relative h-64">
            <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-contain" />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </div>
              <div className="bg-primary/10 px-3 py-1 rounded-full text-xs font-medium text-primary">
                {member.experience}
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">{member.education}</p>
            <p className="mb-4">{member.bio}</p>
            {/* {member.achievements && (
              <div>
                <h4 className="text-sm font-semibold mb-2 flex items-center">
                  <Award className="h-4 w-4 mr-1 text-primary" /> Achievements
                </h4>
                <ul className="text-sm text-muted-foreground">
                  {member.achievements.map((achievement, index) => (
                    <li key={index} className="mb-1 flex items-start">
                      <span className="mr-2">•</span> {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
