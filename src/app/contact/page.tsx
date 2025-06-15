"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ModernMapEmbed } from "../components/map-embed";
import { toast } from 'sonner';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    course: '',
    message: '',
    contactPreference: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok){
              toast.error("Error", {
  description: "Form could not be submitted. Try again.",
});
         throw new Error('Submission failed');
      }
      // console.log("The line 52 is", response);
      // Show success toast
      toast.success("Success", {
  description: "Form sent successfully. We ll contact you shortly.",
});
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        course: '',
        message: '',
        contactPreference: 'email'
      });

    } catch (error) {
      console.error('Error submitting form:', error);
    toast.error("Error", {
  description: "Failed to send message. Please try again.",
});


    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" animate="visible" variants={containerVariants}>
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our courses or need guidance on your exam preparation? Reach out to us and our team
              will be happy to assist you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <div className="bg-card rounded-xl shadow-md p-6 md:p-8 border border-border">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Our Location</h3>
                      <p className="text-muted-foreground">
                        Kautilya Institution, Dr.No:23-9-78/3 Opp: Canara Bank, Above DCB Bank, near M.R.Palli circle, Landmark: West Church
                        <br />
                        Tirupati, Andhra Pradesh - 517502
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+919698123456" className="hover:text-primary transition-colors">
                          +91 96 98 1 2 3 4 5 6
                        </a>
                        <br />
                        <a href="tel:08772222212" className="hover:text-primary transition-colors">
                          0877-2222212
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        {/* <a href="mailto:nsreddy@kautilyainstitution.com" className="hover:text-primary transition-colors">
                          nsreddy@kautilyainstitution.com
                        </a> */}
                        {/* <br /> */}
                        <a href="mailto:kautilyainstitution@gmail.com" className="hover:text-primary transition-colors">
                          kautilyainstitution@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Working Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Sunday: 9:00 AM - 9:00 PM
                        {/* <br />
                        Sunday: Closed */}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8 h-64 bg-muted rounded-lg overflow-hidden">
                  <ModernMapEmbed/>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-card rounded-xl shadow-md p-6 md:p-8 border border-border">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Message subject"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">Interested Course</Label>
                    <Select value={formData.course} onValueChange={(value) => handleSelectChange("course", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cat">CAT Preparation</SelectItem>
                        <SelectItem value="bank">Banking Exams</SelectItem>
                        <SelectItem value="ssc">SSC Exams</SelectItem>
                        <SelectItem value="gre">GRE Preparation</SelectItem>
                        <SelectItem value="gmat">GMAT Preparation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Contact Method</Label>
                    <RadioGroup
                      value={formData.contactPreference}
                      onValueChange={(value) => handleSelectChange("contactPreference", value)}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email-preference" />
                        <Label htmlFor="email-preference">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone-preference" />
                        <Label htmlFor="phone-preference">Phone</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="whatsapp" id="whatsapp-preference" />
                        <Label htmlFor="whatsapp-preference">WhatsApp</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}