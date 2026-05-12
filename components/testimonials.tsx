"use client"

import { useState, useEffect } from "react"
import { Sparkles, Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Sarah Mitchell",
    business: "Bloom Beauty Studio",
    role: "Owner",
    content: "Working with Sky HI Design was an absolute dream. My new website not only looks stunning but has completely transformed my business. Bookings have increased by over 250% since launch!",
    rating: 5,
    image: "SM"
  },
  {
    name: "Michael Chen",
    business: "Sterling Law Firm",
    role: "Managing Partner",
    content: "The attention to detail and professionalism exceeded our expectations. Our website now ranks #1 in local searches, and we've seen a significant increase in quality client inquiries.",
    rating: 5,
    image: "MC"
  },
  {
    name: "Emily Rodriguez",
    business: "Serenity Wellness Center",
    role: "Founder",
    content: "From the initial consultation to launch, the entire process was seamless. The redesign perfectly captures our brand essence and our clients constantly compliment our beautiful new site.",
    rating: 5,
    image: "ER"
  },
  {
    name: "James Thompson",
    business: "Urban Properties",
    role: "CEO",
    content: "Finally, a designer who truly understands both aesthetics and SEO. Our website traffic has doubled, and we're now consistently appearing on the first page of Google for our target keywords.",
    rating: 5,
    image: "JT"
  },
  {
    name: "Amanda Foster",
    business: "Grace Interiors",
    role: "Creative Director",
    content: "The transformation of our website was incredible. Sky HI Design took our outdated site and turned it into a modern, elegant showcase that truly represents our design philosophy.",
    rating: 5,
    image: "AF"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const next = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#FFECF8] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#FA5DBE]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/50 blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#FFD6EE] mb-6">
            <Sparkles className="w-4 h-4 text-[#FA5DBE]" />
            <span className="text-sm font-medium text-[#FA5DBE]">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-[#1a1a2e] mb-6 text-balance">
            Client <span className="text-[#FA5DBE]">Stories</span>
          </h2>
          <p className="text-lg text-[#64607d] leading-relaxed text-pretty">
            {"Don't just take my word for it, hear from the amazing businesses "}
            {"I've had the pleasure of working with."}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-[#FA5DBE]/10 relative overflow-hidden border border-[#FFD6EE]">
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-[#FA5DBE]/10" />
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FA5DBE] text-[#FA5DBE]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-[#1a1a2e] leading-relaxed mb-8 font-serif italic">
                  {`"${testimonials[currentIndex].content}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#FFECF8] flex items-center justify-center text-[#FA5DBE] font-semibold border-2 border-[#FA5DBE]/20">
                    {testimonials[currentIndex].image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e]">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-[#64607d]">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].business}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full bg-white shadow-xl shadow-[#FA5DBE]/10 flex items-center justify-center hover:bg-[#FFF5FB] transition-colors border border-[#FFD6EE]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-[#1a1a2e]" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 rounded-full bg-white shadow-xl shadow-[#FA5DBE]/10 flex items-center justify-center hover:bg-[#FFF5FB] transition-colors border border-[#FFD6EE]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-[#1a1a2e]" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(index)
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "w-8 bg-[#FA5DBE]" 
                    : "bg-[#FA5DBE]/30 hover:bg-[#FA5DBE]/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
          <div className="bg-white rounded-2xl p-6 min-w-[150px] shadow-lg shadow-[#FA5DBE]/5 border border-[#FFD6EE]">
            <div className="text-3xl font-serif font-bold text-[#FA5DBE] mb-1">50+</div>
            <div className="text-sm text-[#64607d]">Projects Delivered</div>
          </div>
          <div className="bg-white rounded-2xl p-6 min-w-[150px] shadow-lg shadow-[#FA5DBE]/5 border border-[#FFD6EE]">
            <div className="text-3xl font-serif font-bold text-[#FA5DBE] mb-1">100%</div>
            <div className="text-sm text-[#64607d]">Client Satisfaction</div>
          </div>
          <div className="bg-white rounded-2xl p-6 min-w-[150px] shadow-lg shadow-[#FA5DBE]/5 border border-[#FFD6EE]">
            <div className="text-3xl font-serif font-bold text-[#FA5DBE] mb-1">5★</div>
            <div className="text-sm text-[#64607d]">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
