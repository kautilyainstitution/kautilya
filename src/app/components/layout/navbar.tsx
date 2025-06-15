"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/app/lib/utils"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { ChevronDown, Menu, X, GraduationCap, Briefcase, Award, BookOpen } from "lucide-react"
// import { useTheme } from "next-themes"
// Define the navigation structure with nested dropdowns
const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    icon: <BookOpen className="h-4 w-4" />,
    dropdown: [
      { name: "Staff", href: "/about/staff" },
      { name: "Director", href: "/about/director" },
      { name: "About Kautilya", href: "/about/kautilya" },
    ],
  },
  {
    name: "Our Courses",
    href: "/courses",
    icon: <GraduationCap className="h-4 w-4" />,
    dropdown: [
      { name: "Bank & Other Govt. Exams", href: "/courses/bank-govt" },
      { name: "Govt Jobs (SSC CGL, CHSL, CPO & RRB)", href: "/courses/govt-jobs" },
      { name: "MBA (CAT, XAT, ICET, MAT & CMAT)", href: "/courses/mba" },
      { name: "SNAP, NMAT & TISSNET", href: "/courses/snap" },
      { name: "M.S Admission", href: "/courses/ms" }, 
      { name: "IELTS & TOEFL", href: "/courses/ielts-toefl" },
      { name: "GRE", href: "/courses/gre" },
      { name: "GMAT & SAT", href: "/courses/gmat-sat" },
      { name: "CLAT", href: "/courses/clat" },
      { name: "IPMAT", href: "/courses/ipmat" },
      { name: "CUET", href: "/courses/cuet" },
      { name: "Civils (IAS & IPS)", href: "/courses/civils" },
      { name: "CRT", href: "/courses/crt" },
    ],
  },
  {
    name: "Our Results",
    href: "/results",
    icon: <Award className="h-4 w-4" />,
    dropdown: [
      { name: "Bank", href: "/results/bank" },
      {
        name: "CAT",
        href: "/results/cat",
        submenu: [
          { name: "CAT 1-(2022) ", href: "/results/cat/2022" },
          { name: "CAT 2-(CAT-2021)", href: "/results/cat/2021" },
          { name: "CAT 3-(CAT-2020)", href: "/results/cat/2020" },
          { name: "CAT 4-(CAT-2019)", href: "/results/cat/2019" },
          { name: "CAT 5-(CAT-2018)", href: "/results/cat/2018" },
          { name: "CAT 6-(CAT-2017)", href: "/results/cat/2017" },
          { name: "CAT 7-(CAT-2016)", href: "/results/cat/2016" },
          { name: "CAT 8-(CAT-2015)", href: "/results/cat/2015" },
          { name: "CAT 9-(CAT-2014)", href: "/results/cat/2014" },
          { name: "CAT 10-(CAT-2013)", href: "/results/cat/2013" },
          { name: "CAT 11-(CAT-2012)", href: "/results/cat/2012" },

        ],
      },
      { name: "CLAT", href: "/results/clat" },
      { name: "CRT", href: "/results/crt" },
      { name: "GRE", href: "/results/gre" },
      { name: "ICET", href: "/results/icet" },
      
      { name: "GRE", href: "/results/gre" },
      {
        name: "IIM",
        href: "/results/iim",
        submenu: [
          { name: "CAT-1 (2022)", href: "/results/iim/2022" },
          { name: "CAT-2 (2021)", href: "/results/iim/2021" },
          { name: "CAT-3 (2020)", href: "/results/iim/2020" },
          // { name: "CAT-4 (2019)", href: "/results/iim/2019" },
          { name: "CAT-5 (2018)", href: "/results/iim/2018" },
          { name: "CAT-6 (2017)", href: "/results/iim/2017" },
          { name: "CAT-7 (2016)", href: "/results/iim/2016" },
          { name: "CAT-8 (2015)", href: "/results/iim/2015" },
          { name: "CAT-9 (2014)", href: "/results/iim/2014" },
          { name: "CAT-10 (2013)", href: "/results/iim/2013" },
          { name: "CAT-11 (2012)", href: "/results/iim/2012" },
        ],
      },
      { name: "Internship", href: "/results/internship" },
      { name: "SSC", href: "/results/ssc" },
    ],
  },
  {
    name: "Latest Results",
    href: "/latest-results",
    icon: <Briefcase className="h-4 w-4" />,
    dropdown: [
      { name: "CAT", href: "/latest-results/cat" },
      { name: "Bank", href: "/latest-results/bank" },
      { name: "CRT", href: "/latest-results/crt" },
    ],
  },
  { name: "Internships", href: "/internships" },
  { name: "Our Campus", href: "/campus" },
  { name: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  // const { theme } = useTheme();
  //    const logoSrc =
  //     theme === "dark"
  //       ? "/assets/home/kautilya.png" 
  //       : "/assets/home/kautilyawhite.png";
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
    setActiveSubmenu(null)
  }, [pathname])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
        setActiveSubmenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Check if a route is active (exact match or starts with for nested routes)
  const isRouteActive = (href: string) => {
    if (href === "/") {
      return pathname === href
    }
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm py-2" : "bg-background/80 backdrop-blur-sm py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
<Link href="/">
  <div className="relative px-40 h-12 w-32"> {/* Container dimensions */}
    <Image 
      src="/assets/home/kautilyawhite.png"
      alt="Kautilya Logo"
      fill
      className="object-contain object-center" // Maintain aspect ratio, align left
      priority // Optional: if this is above-the-fold logo
    />
  </div>
</Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        className={cn(
                          "flex items-center px-3 py-2 rounded-md transition-colors duration-200",
                          isRouteActive(item.href)
                            ? "text-primary"
                            : "text-foreground hover:text-primary hover:bg-muted",
                        )}
                        onMouseEnter={() => {
                          setActiveDropdown(item.name)
                          setActiveSubmenu(null)
                        }}
                        onClick={() => {
                          if (activeDropdown === item.name) {
                            setActiveDropdown(null)
                            setActiveSubmenu(null)
                          } else {
                            setActiveDropdown(item.name)
                            setActiveSubmenu(null)
                          }
                        }}
                        aria-expanded={activeDropdown === item.name}
                        aria-haspopup="true"
                      >
                        <span className="flex items-center">
                          {item.icon && <span className="mr-1">{item.icon}</span>}
                          {item.name}
                        </span>
                        <ChevronDown
                          className="ml-1 h-4 w-4 transition-transform duration-200"
                          style={{ transform: activeDropdown === item.name ? "rotate(180deg)" : "rotate(0)" }}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-1 w-64 origin-top-left rounded-md shadow-lg bg-popover border border-border z-50"
                            onMouseLeave={() => {
                              setActiveDropdown(null)
                              setActiveSubmenu(null)
                            }}
                          >
                            <div className="py-1 rounded-md">
                              {item.dropdown.map((dropdownItem) => (
                                <div key={dropdownItem.name} className="relative">
                                  {dropdownItem.submenu ? (
                                    <>
                                      <button
                                        className={cn(
                                          "flex w-full items-center justify-between px-4 py-2 text-sm transition-colors duration-200",
                                          isRouteActive(dropdownItem.href)
                                            ? "bg-muted text-primary"
                                            : "text-popover-foreground hover:bg-muted hover:text-primary",
                                        )}
                                        onMouseEnter={() => setActiveSubmenu(dropdownItem.name)}
                                        onClick={() => {
                                          if (activeSubmenu === dropdownItem.name) {
                                            setActiveSubmenu(null)
                                          } else {
                                            setActiveSubmenu(dropdownItem.name)
                                          }
                                        }}
                                      >
                                        {dropdownItem.name}
                                        <ChevronDown
                                          className="ml-1 h-4 w-4 transition-transform duration-200"
                                          style={{
                                            transform:
                                              activeSubmenu === dropdownItem.name ? "rotate(-90deg)" : "rotate(-90deg)",
                                          }}
                                        />
                                      </button>

                                      {/* Submenu */}
                                      <AnimatePresence>
                                        {activeSubmenu === dropdownItem.name && (
                                          <motion.div
                                            initial={{ opacity: 0, x: -5 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -5 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute left-full top-0 w-48 rounded-md shadow-lg bg-popover border border-border"
                                          >
                                            <div className="py-1 rounded-md">
                                              {dropdownItem.submenu.map((submenuItem) => (
                                                <Link
                                                  key={submenuItem.name}
                                                  href={submenuItem.href}
                                                  className={cn(
                                                    "block px-4 py-2 text-sm transition-colors duration-200",
                                                    isRouteActive(submenuItem.href)
                                                      ? "bg-muted text-primary"
                                                      : "text-popover-foreground hover:bg-muted hover:text-primary",
                                                  )}
                                                >
                                                  {submenuItem.name}
                                                </Link>
                                              ))}
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </>
                                  ) : (
                                    <Link
                                      href={dropdownItem.href}
                                      className={cn(
                                        "block px-4 py-2 text-sm transition-colors duration-200",
                                        isRouteActive(dropdownItem.href)
                                          ? "bg-muted text-primary"
                                          : "text-popover-foreground hover:bg-muted hover:text-primary",
                                      )}
                                    >
                                      {dropdownItem.name}
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "px-3 py-2 rounded-md transition-colors duration-200",
                        isRouteActive(item.href) ? "text-primary" : "text-foreground hover:text-primary hover:bg-muted",
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Theme toggle - desktop */}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center lg:hidden">
            {/* Theme toggle - mobile */}
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              className="p-2 ml-2 rounded-md text-foreground hover:text-primary hover:bg-muted focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.name} className="py-1">
                  {item.dropdown ? (
                    <>
                      <button
                        className={cn(
                          "w-full flex justify-between items-center px-3 py-2 rounded-md",
                          isRouteActive(item.href)
                            ? "text-primary bg-muted"
                            : "text-foreground hover:text-primary hover:bg-muted",
                        )}
                        onClick={() => {
                          if (activeDropdown === item.name) {
                            setActiveDropdown(null)
                          } else {
                            setActiveDropdown(item.name)
                            setActiveSubmenu(null)
                          }
                        }}
                        aria-expanded={activeDropdown === item.name}
                      >
                        <span className="flex items-center">
                          {item.icon && <span className="mr-1">{item.icon}</span>}
                          {item.name}
                        </span>
                        <ChevronDown
                          className={cn(
                            "ml-1 h-4 w-4 transition-transform duration-200",
                            activeDropdown === item.name ? "rotate-180" : "",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-1 space-y-1"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <div key={dropdownItem.name}>
                                {dropdownItem.submenu ? (
                                  <>
                                    <button
                                      className={cn(
                                        "w-full flex justify-between items-center px-3 py-2 text-sm rounded-md",
                                        isRouteActive(dropdownItem.href)
                                          ? "text-primary bg-muted"
                                          : "text-foreground hover:text-primary hover:bg-muted",
                                      )}
                                      onClick={() => {
                                        if (activeSubmenu === dropdownItem.name) {
                                          setActiveSubmenu(null)
                                        } else {
                                          setActiveSubmenu(dropdownItem.name)
                                        }
                                      }}
                                      aria-expanded={activeSubmenu === dropdownItem.name}
                                    >
                                      {dropdownItem.name}
                                      <ChevronDown
                                        className={cn(
                                          "ml-1 h-4 w-4 transition-transform duration-200",
                                          activeSubmenu === dropdownItem.name ? "rotate-180" : "",
                                        )}
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <AnimatePresence>
                                      {activeSubmenu === dropdownItem.name && (
                                        <motion.div
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{ opacity: 1, height: "auto" }}
                                          exit={{ opacity: 0, height: 0 }}
                                          transition={{ duration: 0.2 }}
                                          className="pl-4 mt-1 space-y-1"
                                        >
                                          {dropdownItem.submenu.map((submenuItem) => (
                                            <Link
                                              key={submenuItem.name}
                                              href={submenuItem.href}
                                              className={cn(
                                                "block px-3 py-2 text-xs rounded-md transition-colors duration-200",
                                                isRouteActive(submenuItem.href)
                                                  ? "bg-muted text-primary"
                                                  : "text-foreground hover:bg-muted hover:text-primary",
                                              )}
                                              onClick={() => {
                                                setIsOpen(false)
                                                setActiveDropdown(null)
                                                setActiveSubmenu(null)
                                              }}
                                            >
                                              {submenuItem.name}
                                            </Link>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </>
                                ) : (
                                  <Link
                                    href={dropdownItem.href}
                                    className={cn(
                                      "block px-3 py-2 text-sm rounded-md transition-colors duration-200",
                                      isRouteActive(dropdownItem.href)
                                        ? "bg-muted text-primary"
                                        : "text-foreground hover:bg-muted hover:text-primary",
                                    )}
                                    onClick={() => {
                                      setIsOpen(false)
                                      setActiveDropdown(null)
                                    }}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-3 py-2 rounded-md transition-colors duration-200",
                        isRouteActive(item.href)
                          ? "bg-muted text-primary"
                          : "text-foreground hover:bg-muted hover:text-primary",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
