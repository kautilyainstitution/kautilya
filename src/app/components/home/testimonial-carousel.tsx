"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  exam: string
  image: string
  text: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlayInterval?: number
}

export default function TestimonialCarousel({ testimonials, autoPlayInterval = 6000 }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, autoPlayInterval)
    }

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length, autoPlayInterval])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-10"
        >
          <Quote className="h-12 w-12 text-blue-100 dark:text-blue-900 mb-6" />

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-4">
                {testimonials[currentIndex].text}
              </p>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-blue-600 dark:text-blue-400">{testimonials[currentIndex].exam}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={handlePrevious}
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrentIndex(index)
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
