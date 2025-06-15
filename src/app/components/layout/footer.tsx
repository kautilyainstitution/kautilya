import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { ModernMapEmbed } from "../map-embed"

export default function Footer() {
  return (
    <footer className="bg-muted/50 pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"> {/* Changed to 5 columns */}
          
          {/* Building Image Section - New Column */}
          <div className="hidden lg:block">
            <div className="h-full w-full relative rounded-lg overflow-hidden">
              <Image
                src="/assets/campus/campus1.jpg" // Update with your building image path
                alt="Kautilya Institution Building"
                width={400}
                height={500}
                className="object-full h-full w-full"
              />
            </div>
          </div>

          {/* About Section */}
          <div>
            <Image
              src="/assets/home/kautilyawhite.png"
              alt="Kautilya Training & Consultancy Logo"
              className="h-12 w-auto mb-4 px-20"
              width={500}
              height={300}
            />
            <p className="text-muted-foreground mb-4">
              Empowering students to achieve excellence in competitive examinations through expert guidance,
              comprehensive study materials, and personalized mentoring.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/director" className="text-muted-foreground hover:text-primary transition-colors">
                  About Director
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-muted-foreground hover:text-primary transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-15 w-15 mr-2 mt-0.5 text-primary" />
                <span className="text-muted-foreground">Kautilya Institution, Dr.No:23-9-78/3, Above DCB Bank,
                Near M.R.Palli circle,
                Landmark: West Church, Tirupati -517502
                Andhra Pradesh</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <a href="tel:+919698123456" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 96 98 1 2 3 4 5 6
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <a href="tel:+918772222212" className="text-muted-foreground hover:text-primary transition-colors">
                  0877-2222212
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <a
                  href="mailto:kautilyainstitution@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  kautilyainstitution@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="md:col-span-2 lg:col-span-1"> {/* Adjusted column span */}
            <h3 className="text-xl font-bold mb-4 text-foreground">Find Us</h3>
            <div className="h-48 bg-muted rounded-lg overflow-hidden">
              <ModernMapEmbed/>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Kautilya Institution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}