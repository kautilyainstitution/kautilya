"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full flex items-center justify-center opacity-0">
        <Sun className="h-5 w-5" />
      </div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shadow-sm hover:shadow transition-all duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative w-5 h-5"
      >
        {theme === "dark" ? (
          <Moon className="absolute inset-0 h-5 w-5 text-blue-400" />
        ) : (
          <Sun className="absolute inset-0 h-5 w-5 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  )
}
