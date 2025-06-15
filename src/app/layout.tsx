import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import WhatsAppButton from "@/components/ui/whatsapp-button"
import BackToTopButton from "@/components/ui/back-to-top-button"

import { Toaster } from 'sonner';
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kautilya Training & Consultancy",
  description: "Expert guidance for competitive exams and career advancement",
  keywords: "training, consultancy, CAT, MBA, SSC, GRE, GMAT, coaching, education",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppButton />
            <BackToTopButton />
          </div>
        </ThemeProvider>
          <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
