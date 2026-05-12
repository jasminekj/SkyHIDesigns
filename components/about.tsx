"use client"

import { Sparkles, Code, Search, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Hand-crafted, pixel-perfect code",
  },
  {
    icon: Search,
    title: "SEO Focused",
    description: "Built for visibility & growth",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Lightning-fast load times",
  },
]

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      {/* Background accent */}
      <div className="absolute right-0 top-0 h-full w-1/2 origin-top-right -skew-x-12 bg-[#FFECF8]/50" />

      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#FA5DBE]/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD6EE] bg-[#FFECF8] px-4 py-2">
              <Sparkles className="h-4 w-4 text-[#FA5DBE]" />

              <span className="text-sm font-medium text-[#FA5DBE]">
                About Sky HI Design
              </span>
            </div>

            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[#1a1a2e] md:text-5xl lg:text-6xl">
              Crafting Digital Experiences That{" "}
              <span className="text-[#FA5DBE]">Inspire</span>
            </h2>

            <div className="space-y-6 leading-relaxed text-[#64607d]">
              <p className="text-lg">
                Sky HI Design is a boutique web design and SEO-focused creative
                studio dedicated to helping businesses establish a stunning
                online presence. I specialize in creating custom-coded websites
                and solutions that are as beautiful as they are
                functional.
              </p>

              <p>
                Every project begins with understanding your unique vision and
                business goals. From there, I craft tailored solutions that
                combine elegant design with strategic SEO optimization,
                ensuring your website not only looks exceptional but also
                performs brilliantly on Google.
              </p>

              <p>
                Whether you need a brand new website, a complete redesign, or
                help getting found on search engines, I bring a personalized,
                detail-oriented approach to every project. My focus is on
                creating mobile-first, user-friendly experiences that engage
                visitors and convert them into customers.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative rounded-3xl border border-[#FFD6EE] bg-white p-8 shadow-2xl shadow-[#FA5DBE]/10 md:p-10">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFECF8]">
                    <span className="text-3xl">✨</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#1a1a2e]">
                      The Sky HI Difference
                    </h3>

                    <p className="text-sm text-[#64607d]">
                      Where creativity meets strategy
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-4 rounded-xl border border-transparent bg-[#FFF5FB] p-4 transition-all duration-300 hover:border-[#FFD6EE] hover:bg-[#FFECF8]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm transition-colors group-hover:bg-[#FA5DBE]/10">
                        <item.icon className="h-5 w-5 text-[#FA5DBE]" />
                      </div>

                      <div>
                        <h4 className="font-medium text-[#1a1a2e]">
                          {item.title}
                        </h4>

                        <p className="text-sm text-[#64607d]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#FFD6EE] pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#64607d]">
                      Projects Completed
                    </span>

                    <span className="font-semibold text-[#FA5DBE]">
                      50+
                    </span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#FFECF8]">
                    <div className="h-full w-4/5 rounded-full bg-[#FA5DBE]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 left-8 z-20 hidden md:block">
              <div className="rounded-2xl border border-[#FFD6EE] bg-white px-5 py-3 shadow-xl shadow-[#FA5DBE]/10">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-green-400" />

                  <span className="text-sm font-medium text-[#1a1a2e]">
                    Available for Projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}