"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface Course {
  id: number
  title: string
  image: string
  description: string
}

interface CourseGridProps {
  courses: Course[]
}

export default function CourseGrid({ courses }: CourseGridProps) {
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
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {courses.map((course) => (
        <motion.div
          key={course.id}
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative h-48">
            <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{course.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
            <Link
              href={`/courses/${course.id}`}
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Explore
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
