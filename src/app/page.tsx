"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, GraduationCap, Briefcase, Globe, Award, BookOpen, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "./lib/utils"
// Define types for our data
interface SliderImage {
  url: string
  alt: string
  title: string
  subtitle: string
}

interface Achievement {
  icon: React.ReactNode
  count: string
  title: string
}

interface CourseCategory {
  title: string
  icon: React.ReactNode
  courses: {
    name: string
    href: string
  }[]
}

interface Testimonial {
  id: number
  name: string
  exam: string
  videoId: string
  thumbnail: string
}

interface Faculty {
  id: number
  name: string
  role: string
  image: string
  qualification: string
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonialPage, setCurrentTestimonialPage] = useState(0)
  const [autoplayEnabled, setAutoplayEnabled] = useState(true)


  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  // const [videoPlaying, setVideoPlaying] = useState<Boolean>(false);
  const openVideo = (videoId: string ) => {
    // setVideoPlaying(true);
    setSelectedVideo(videoId);
  };

const closeVideo = () => {
  // setVideoPlaying(false);
  setSelectedVideo(null);
};

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Slider images data
  const sliderImages: SliderImage[] = [
    {
      url: "/assets/home/slider1.png",
      alt: "Students celebrating success",
      title: "Achieve Excellence",
      subtitle: "Join our specialized exam preparation programs",
    },
    {
      url: "/assets/home/slider2.png",
      alt: "Classroom learning environment",
      title: "Expert Guidance",
      subtitle: "Learn from industry professionals",
    },
    {
      url: "/assets/home/slider3.png",
      alt: "Student receiving award",
      title: "Proven Results",
      subtitle: "Our students consistently achieve top scores",
    },
        {
      url: "/assets/home/slider4.png",
      alt: "Student receiving award",
      title: "Years of Experience",
      subtitle: "Our expert teachers are best in the market",
    },
        {
      url: "/assets/home/slider5.png",
      alt: "Student receiving award",
      title: "Industry Aligned",
      subtitle: "Curriculum designed for real-world demands",
    },
        {
      url: "/assets/home/slider6.png",  
      alt: "Personalized Approach",
      title: "Tailored training for your unique needs",
      subtitle: "Our students consistently achieve top scores",
    },
  ]

  // Achievements data
  const achievements: Achievement[] = [
    { icon: <Award className="h-8 w-8 text-primary" />, count: "1000+", title: "Placements- Govt Bank & SSC Jobs + MNCs" },
    { icon: <Globe className="h-8 w-8 text-primary" />, count: "1000+", title: "IIM & Top B School MBA Admissions" },
    { icon: <Briefcase className="h-8 w-8 text-primary" />, count: "500+", title: "M.S. Admissions (Abroad)" },
    { icon: <GraduationCap className="h-8 w-8 text-primary" />, count: "50+", title: "NLU (Law admissions)" },
  ]

  // Course categories data
  const courseCategories: CourseCategory[] = [
    {
      title: "MBA @IIMs/ B Schools",
      icon: <GraduationCap className="h-6 w-6" />,
      courses: [
        { name: "CAT", href: "/courses/mba/" },
        { name: "XAT", href: "/courses/mba/" },
        { name: "MAT & CMAT", href: "/courses/mba" },
        { name: "ICET", href: "/courses/mba" },
      ],
    },
    {
      title: "Government Jobs",
      icon: <Briefcase className="h-6 w-6" />,
      courses: [
        { name: "Banks – IBPS & SBI", href: "/courses/bank-govt" },
        { name: "SSC CGL & CHSL", href: "/courses/govt-jobs" },
        { name: "Civils – IAS / IPS", href: "/courses/civils" },
        { name: "Railways & others", href: "/courses/govt-jobs" },
      ],
    },
    {
      title: "Study Abroad",
      icon: <Globe className="h-6 w-6" />,
      courses: [
        { name: "GRE", href: "/courses/gre" },
        { name: "IELTS", href: "/courses/ielts-toefl" },
        { name: "GMAT & SAT", href: "/courses/gmat-sat" },
        { name: "M.S. Admission Consultancy", href: "/courses/ms" },
      ],
    },
    {
      title: "After 10th & inter",
      icon: <BookOpen className="h-6 w-6" />,
      courses: [
        { name: "CLAT", href: "/courses/courses/clat" },
        { name: "IPMAT", href: "/courses/courses/ipmat" },
        { name: "CUET", href: "/courses/courses/cuet" },
        { name: "UG in USA / UK / Canada", href: "/courses/gmat-sat" },
      ],
    },
  ]

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Maheshwar",
      exam: "2023 CAT 99.8 percentile",
      videoId: "9mbO8DLaxlE",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 2,
      name: "Bhargavi",
      exam: "IIM Kashipur",
      videoId: "ceJN6Uiro5g",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 3,
      name: "Murari",
      exam: "IIM Kashipur",
      videoId: "zLVwnWCDeQc",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 4,
      name: "Hemanth",
      exam: "TISS Hyderabad",
      videoId: "I_mbdSQ56JQ",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 5,
      name: "Parents Word",
      exam: "GRE & IELTS",
      videoId: "lhbbUgppAWQ",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 6,
      name: "CAT Toppers Media Coverage",
      exam: "CAT",
      videoId: "kmiErIazVFM",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
  ]

  // Faculty data
  const faculty: Faculty[] = [
    {
      id: 1,
      name: "Sridhar",
      role: "Director, Kautilya, Tirupati career coach, 17 Yr Exp",
      image: "/assets/home/faculty1.png",
      qualification: "MA(Eng), MA(Eco),PGDFE, PGDCE(HGU), PGCTE(EFL Uni)",
    },
    {
      id: 2,
      name: "Amasa Radhika Reddy",
      role: "Director (Admin)",
      image: "/assets/home/faculty2.png",
      qualification: "MA.,(Eco), PGDFE",
    },
    {
      id: 3,
      name: "N.S.Reddy",
      role: "SR.Manager, Kautilya Career Counsellor, 18Yr exp.",
      image: "/assets/home/faculty3.png",
      qualification: "B.Tech, MBA",
    }
  ]

  // Press coverage data
  const pressCoverage = [
    "/assets/home/1.jpg",
    "/assets/home/2.jpg",
    "/assets/home/3.jpg",
    "/assets/home/4.jpg",
     "/assets/home/5.jpg",
      "/assets/home/6.jpg",
       "/assets/home/7.jpg",
        "/assets/home/8.jpg",
         "/assets/home/9.jpg",
          "/assets/home/10.jpg",
           "/assets/home/12.jpg",
            "/assets/home/13.jpg",
             "/assets/home/14.jpg",
              "/assets/home/15.jpg",
               "/assets/home/16.jpg"
  ]

  // Auto-advance slider
  useEffect(() => {
    if (!mounted || !autoplayEnabled) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [sliderImages.length, autoplayEnabled, mounted])

  // Auto-advance testimonials
  useEffect(() => {
    if (!mounted || !autoplayEnabled) return

    const interval = setInterval(() => {
      setCurrentTestimonialPage((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    }, 8000)

    return () => clearInterval(interval)
  }, [testimonials.length, autoplayEnabled, mounted])

  // Animation controls
  const controls = useAnimation()

  // Animate on mount
  useEffect(() => {
    if (mounted) {
      controls.start("visible")
    }
  }, [controls, mounted])

  // Animation variants
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1,
  //     },
  //   },
  // }

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.5,
  //     },
  //   },
  // }

  if (!mounted) {
    return null // Avoid hydration mismatch
  }

  // Handle slider navigation
  const nextSlide = () => {
    setAutoplayEnabled(false)
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
  }

  const prevSlide = () => {
    setAutoplayEnabled(false)
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
  }

  // Handle testimonial navigation
  // const nextTestimonialPage = () => {
  //   setAutoplayEnabled(false)
  //   setCurrentTestimonialPage((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
  // }

  // const prevTestimonialPage = () => {
  //   setAutoplayEnabled(false)
  //   setCurrentTestimonialPage(
  //     (prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3),
  //   )
  // }

  // Get current testimonials page
  const getCurrentTestimonials = () => {
    const startIdx = currentTestimonialPage * 3
    return testimonials.slice(startIdx, startIdx + 3)
  }

  return (
    <div className="pt-16">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {sliderImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={slide.url || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-contain"
                priority={index === 0}
              />
              {/* <div className="absolute inset-0 bg-black/40"></div> */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                {/* <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl md:text-5xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h1> */}
                {/* <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-xl md:text-2xl max-w-2xl"
                >
                  {slide.subtitle}
                </motion.p> */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-8"
                >
                  {/* <Link href="/courses">
                  <Button size="lg" className="rounded-full">
                  Explore Courses
                  </Button>
                  </Link> */}
                </motion.div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/40 transition-colors duration-300 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/40 transition-colors duration-300 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplayEnabled(false)
                setCurrentSlide(index)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Achievements Banner */}
        <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Since  <span className="text-5xl">2008</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
             over <span className="text-2xl font-bold">20000</span> students trained by Kautilya in Tirupati
            </p>
          </motion.div>
      <section className="bg-muted py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="mb-3">{achievement.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">{achievement.count}</h3>
                <p className="text-muted-foreground">{achievement.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
      </section>

      {/* Course Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialized Courses/Coaching</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive preparation programs designed by experts to help you excel in competitive examinations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {category.courses.map((course, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        <Link href={course.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {course.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/courses`}>
                    <Button variant="outline" className="w-full">
                      View All Courses
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Coverage */}
   <section className="py-16 bg-muted">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Latest Results in MEDIA</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Our achievements and success stories featured in leading newspapers and media
      </p>
    </motion.div>

    {/* Press Images - Horizontal Auto-slider with Modal */}
    <div className="relative h-96 w-full overflow-hidden group">
      <motion.div
        className="absolute top-0 left-0 flex h-full gap-8"
        animate={{
          x: [0, -100 * (pressCoverage.length * 2)], // Adjust based on number of images
        }}
        transition={{
          duration: 40, // Adjust speed
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {pressCoverage.map((image, index) => (
          <div 
            key={index} 
            className="relative h-full w-96 shrink-0 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Press coverage ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
        {/* Duplicates for seamless looping */}
        {pressCoverage.map((image, index) => (
          <div 
            key={`dup-${index}`} 
            className="relative h-full w-96 shrink-0 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Press coverage ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  </div>

  {/* Image Modal */}
  {selectedImage !== null && (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <button 
        className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
        onClick={() => setSelectedImage(null)}
      >
        <X className="h-8 w-8" />
      </button>
      
      <button 
        className="absolute left-4 text-white hover:text-primary transition-colors"
        onClick={() => setSelectedImage((prev) => {
          if (prev === null) return 0;
          return prev === 0 ? pressCoverage.length - 1 : prev - 1;
        })}
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      
      <div className="relative h-full w-full max-w-4xl max-h-[90vh]">
        <Image
          src={pressCoverage[selectedImage] || "/placeholder.svg"}
          alt={`Press coverage ${selectedImage + 1}`}
          fill
          className="object-contain"
        />
      </div>
      
      <button 
        className="absolute right-4 text-white hover:text-primary transition-colors"
        onClick={() => setSelectedImage((prev) => {
          if (prev === null) return 0;
          return prev === pressCoverage.length - 1 ? 0 : prev + 1;
        })}
      >
        <ChevronRight className="h-8 w-8" />
      </button>
      
      <div className="absolute bottom-4 left-0 right-0 text-center text-white">
        {selectedImage + 1} / {pressCoverage.length}
      </div>
    </div>
  )}
</section>

      {/* Testimonials - Video Slider */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What our students / All India Toppers say about Kautliya?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our students who achieved their dreams with our guidance
            </p>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getCurrentTestimonials().map((testimonial, index) => (
                <motion.div
  key={testimonial.id}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  className="bg-card rounded-xl overflow-hidden shadow-md border border-border cursor-pointer"
  onClick={() => openVideo(testimonial.videoId)}
>
  <div className="relative aspect-video">
    <Image
      src={`https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`}
      alt={`${testimonial.name} testimonial`}
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  </div>
  <div className="p-4">
    <h3 className="font-bold text-lg">{testimonial.name}</h3>
    <p className="text-primary">{testimonial.exam}</p>
  </div>
</motion.div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {/* <button
              onClick={prevTestimonialPage}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-md text-foreground flex items-center justify-center hover:bg-muted transition-colors duration-300 z-10"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-6 w-6" />
            </button> */}

            {/* <button
              onClick={nextTestimonialPage}
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-md text-foreground flex items-center justify-center hover:bg-muted transition-colors duration-300 z-10"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-6 w-6" />
            </button> */}

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplayEnabled(false)
                    setCurrentTestimonialPage(index)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentTestimonialPage ? "bg-primary scale-125" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Showcase */}
      <section className="py-16 bg-muted">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Management</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Learn from industry experts with decades of experience in their respective fields
      </p>
    </motion.div>

    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl">
        {faculty.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border"
          >
            <div className="relative h-64">
              <Image 
                src={member.image || "/placeholder.svg"} 
                alt={member.name} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.qualification}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Join thousands of successful students who transformed their careers with our expert guidance
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/courses" passHref>
              <Button size="lg" variant="secondary" className="rounded-full">
                Explore Courses
              </Button>
              </Link>
                 <Link href="/contact" passHref>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Us
              </Button>
             </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Dialog open={!!selectedVideo} onOpenChange={closeVideo}>
  <DialogContent className={
    cn(
      "fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]", 
      "w-[95vw] max-w-[900px]",
      "max-h-[90vh] h-auto",
      "p-0 bg-transparent border-none", 
      "flex items-center justify-center"
    )
  }>
        <VisuallyHidden asChild>
      <DialogTitle>
        {selectedVideo && `Video testimonial from ${testimonials.find(t => t.videoId === selectedVideo)?.name}`}
      </DialogTitle>
    </VisuallyHidden>
    {selectedVideo && (
      <div className="aspect-video w-full">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    )}
  </DialogContent>
</Dialog>
    </div>
  )
}
