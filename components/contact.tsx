"use client"

import { useState } from "react"
import {
  Sparkles,
  Mail,
  Send,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const services = [
  "Custom Website Design",
  "Website Development",
  "SEO Optimization",
  "Website Redesign",
  "Website Maintenance",
  "Other",
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `
Business: ${formData.business}

Phone: ${formData.phone}

Budget: ${formData.budget}

Message:
${formData.message}
          `,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send")
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#FFECF8] relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#FA5DBE]/15 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white/50 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#FFD6EE] mb-6">
            <Sparkles className="w-4 h-4 text-[#FA5DBE]" />
            <span className="text-sm font-medium text-[#FA5DBE]">
              Get in Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-[#1a1a2e] mb-6">
            {"Let's Build Something"}{" "}
            <span className="text-[#FA5DBE]">Beautiful</span> Together
          </h2>

          <p className="text-lg text-[#64607d] leading-relaxed">
            Ready to elevate your online presence? Fill out the form below and
            let&apos;s start creating your dream website.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-[#FA5DBE]/5 border border-[#FFD6EE]">
                <h3 className="font-serif text-xl font-semibold text-[#1a1a2e] mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:skyhidesignsinfo@gmail.com"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#FFF5FB] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FFECF8] flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#FA5DBE]" />
                    </div>

                    <div>
                      <div className="text-sm text-[#64607d]">Email</div>

                      <div className="font-medium text-[#1a1a2e]">
                        skyhidesignsinfo@gmail.com
                      </div>
                    </div>
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-[#FFD6EE]">
                  <p className="text-sm text-[#64607d] mb-4">
                    Follow along
                  </p>

                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-xl bg-[#FFECF8] flex items-center justify-center"
                    >
                      <Instagram className="w-5 h-5 text-[#FA5DBE]" />
                    </a>

                    <a
                      href="#"
                      className="w-10 h-10 rounded-xl bg-[#FFECF8] flex items-center justify-center"
                    >
                      <Linkedin className="w-5 h-5 text-[#FA5DBE]" />
                    </a>

                    <a
                      href="#"
                      className="w-10 h-10 rounded-xl bg-[#FFECF8] flex items-center justify-center"
                    >
                      <Twitter className="w-5 h-5 text-[#FA5DBE]" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-[#FA5DBE]/5 border border-[#FFD6EE]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                  <span className="font-medium text-[#1a1a2e]">
                    Currently accepting projects
                  </span>
                </div>

                <p className="text-sm text-[#64607d] mt-2">
                  Typical response time: 24-48 hours
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-[#FA5DBE]/10 border border-[#FFD6EE]">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-[#FFECF8] flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl">✨</span>
                    </div>

                    <h3 className="text-2xl font-serif font-semibold text-[#1a1a2e] mb-3">
                      Message Sent!
                    </h3>

                    <p className="text-[#64607d]">
                      Thank you for reaching out. We&apos;ll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>

                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="bg-[#FFF5FB] border-[#FFD6EE] rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="business">
                          Business Name
                        </Label>

                        <Input
                          id="business"
                          value={formData.business}
                          onChange={handleChange}
                          placeholder="Your business name"
                          className="bg-[#FFF5FB] border-[#FFD6EE] rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>

                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="bg-[#FFF5FB] border-[#FFD6EE] rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>

                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className="bg-[#FFF5FB] border-[#FFD6EE] rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Service Needed</Label>

                        <Select>
                          <SelectTrigger className="bg-[#FFF5FB] border-[#FFD6EE] rounded-xl">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>

                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem
                                key={service}
                                value={service}
                              >
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">
                          Budget{" "}
                          <span className="text-[#64607d]">
                            (Optional)
                          </span>
                        </Label>

                        <Input
                          id="budget"
                          type="text"
                          value={formData.budget}
                          onChange={handleChange}
                          placeholder="Enter your estimated budget"
                          className="bg-[#FFF5FB] border-[#FFD6EE] rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>

                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        className="bg-[#FFF5FB] border-[#FFD6EE] rounded-xl resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#FA5DBE] hover:bg-[#E84AAD] text-white rounded-full py-6 text-base font-medium"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}