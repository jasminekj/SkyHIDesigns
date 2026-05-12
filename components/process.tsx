"use client"

import { Sparkles, Phone, Palette, Code, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery Call",
    description:
      "We start with a friendly conversation to understand your vision, goals, and business needs. This helps create a tailored strategy specifically for you.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Strategy",
    description:
      "I craft a beautiful custom design alongside a strategic SEO foundation to ensure your website looks stunning and performs brilliantly.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development & SEO",
    description:
      "Your design comes to life with clean, hand-coded development. Every page is optimized for search engines and built for speed.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Optimization",
    description:
      "We launch your website and continue to monitor, optimize, and support your growth as your business expands online.",
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#FFECF8]/60 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFD6EE] bg-[#FFECF8] px-4 py-2">
            <Sparkles className="h-4 w-4 text-[#FA5DBE]" />

            <span className="text-sm font-medium text-[#FA5DBE]">
              How It Works
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-serif font-semibold leading-tight text-[#1a1a2e] md:text-5xl lg:text-6xl">
            A Seamless <span className="text-[#FA5DBE]">Journey</span>
          </h2>

          <p className="text-lg leading-relaxed text-[#64607d]">
            From our first conversation to your website launch, every step is
            designed to feel smooth, collaborative, and exciting.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[68%] top-20 hidden h-[2px] w-full bg-[#FFD6EE] lg:block">
                    <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#FA5DBE]/50" />
                  </div>
                )}

                {/* Card */}
                <div className="relative rounded-3xl border border-[#FFD6EE] bg-white p-8 shadow-lg shadow-[#FA5DBE]/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FA5DBE]/10">
                  {/* Number */}
                  <div className="mb-6">
                    <span className="font-serif text-5xl font-semibold text-[#FA5DBE]/35">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#FFD6EE] bg-[#FFECF8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FA5DBE]/15">
                    <step.icon className="h-7 w-7 text-[#FA5DBE]" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 font-serif text-2xl font-semibold text-[#1a1a2e]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="leading-relaxed text-[#64607d]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#FA5DBE] px-8 py-4 font-medium text-white shadow-xl shadow-[#FA5DBE]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E84AAD] hover:shadow-2xl hover:shadow-[#FA5DBE]/35"
          >
            Start Your Journey
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}