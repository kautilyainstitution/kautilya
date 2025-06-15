"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!mounted || !isVisible) return null

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Back to top"
    >
      <ArrowUp className="h-6 w-6 text-primary-foreground" />
    </motion.button>
  )
}
