"use client"

import { useState } from "react"
import Image from "next/image"
import { Sparkles, ExternalLink, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  "All",
  "Restaurant & Food",
  "Real Estate & Mortgages",
  "Professional Services",
]

const projects = [
  {
    title: "CT Shawarma",
    category: "Restaurant & Food",
    description:
      "Modern shawarma restaurant website featuring online ordering, interactive menu browsing, and seamless delivery integration.",
    metrics: "+180% Online Orders",
    color: "bg-[#FA5DBE]/20",
    link: "https://ctshawarma.com/",
    image: "/W1.png",
  },
  {
    title: "Real Estate Page",
    category: "Real Estate & Mortgages",
    description:
      "Modern real estate and mortgage website featuring property listings, mortgage solutions, lead generation, and client consultation booking.",
    metrics: "+220% Qualified Leads",
    color: "bg-[#FA5DBE]/20",
    link: "https://www.sellorbuywithyourguy.com/",
    image: "/W2.png",
  },
  {
    title: "Sky HI Designs",
    category: "Professional Services",
    description:
      "Modern web design agency website showcasing custom development, SEO services, portfolio projects, and streamlined client consultations.",
    metrics: "+150% Client Inquiries",
    color: "bg-[#FFF5FB]",
    link: "https://skyhidesigns.com/",
    image: "/W3.png",
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFD6EE] bg-[#FFECF8] px-4 py-2">
            <Sparkles className="h-4 w-4 text-[#FA5DBE]" />
            <span className="text-sm font-medium text-[#FA5DBE]">
              Portfolio
            </span>
          </div>

          <h2 className="mb-6 text-balance font-serif text-4xl font-semibold leading-tight text-[#1a1a2e] md:text-5xl lg:text-6xl">
            Featured <span className="text-[#FA5DBE]">Projects</span>
          </h2>

          <p className="text-pretty text-lg leading-relaxed text-[#64607d]">
            A curated selection of websites designed to inspire, engage, and
            convert. Each project is crafted with care and optimized for
            success.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-[#FA5DBE] text-white shadow-lg shadow-[#FA5DBE]/25"
                  : "border border-[#FFD6EE]/50 bg-[#FFF5FB] text-[#64607d] hover:bg-[#FFECF8] hover:text-[#1a1a2e]"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-[#FFD6EE]/50 bg-white shadow-lg shadow-[#FA5DBE]/5 transition-all duration-500 hover:-translate-y-2 hover:border-[#FA5DBE]/30 hover:shadow-xl hover:shadow-[#FA5DBE]/15"
            >
              <div className={cn("relative aspect-[4/3] overflow-hidden", project.color)}>
                <Image
                  src={project.image}
                  alt={`${project.title} website preview`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a2e]/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/30">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#FFECF8] px-3 py-1 text-xs font-medium text-[#FA5DBE]">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-1 whitespace-nowrap text-xs font-medium text-green-600">
                    <TrendingUp className="h-3 w-3" />
                    {project.metrics}
                  </div>
                </div>

                <h3 className="mb-2 font-serif text-lg font-semibold text-[#1a1a2e] transition-colors group-hover:text-[#FA5DBE]">
                  {project.title}
                </h3>

                <p className="line-clamp-2 text-sm text-[#64607d]">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-4 text-[#64607d]">
            Have questions about your project? I’d love to hear from you.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#FA5DBE] px-8 py-3 font-medium text-white shadow-lg shadow-[#FA5DBE]/25 transition-all duration-300 hover:bg-[#E84AAD] hover:shadow-xl hover:shadow-[#FA5DBE]/35"
          >
            {"Let's Create Something Beautiful"}
          </a>
        </div>
      </div>
    </section>
  )
}