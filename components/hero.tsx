"use client"

import { ArrowRight, Sparkles, Monitor, Search, Palette } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#FFF7FC] to-[#FFEAF7] pt-28"
    >
      {/* Soft background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#FA5DBE]/10 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-[#FFD6EE]/40 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[#FA5DBE]/10 blur-3xl" />

        <div className="absolute left-[10%] top-[25%] hidden h-14 w-14 rounded-2xl border border-[#FFD6EE] bg-white/70 shadow-lg shadow-[#FA5DBE]/10 backdrop-blur md:flex items-center justify-center animate-bounce">
          <Palette className="h-6 w-6 text-[#FA5DBE]" />
        </div>

        <div className="absolute right-[12%] top-[35%] hidden h-14 w-14 rounded-2xl border border-[#FFD6EE] bg-white/70 shadow-lg shadow-[#FA5DBE]/10 backdrop-blur md:flex items-center justify-center animate-pulse">
          <Search className="h-6 w-6 text-[#FA5DBE]" />
        </div>

        <div className="absolute bottom-[18%] left-[18%] hidden h-14 w-14 rounded-2xl border border-[#FFD6EE] bg-white/70 shadow-lg shadow-[#FA5DBE]/10 backdrop-blur lg:flex items-center justify-center animate-pulse">
          <Monitor className="h-6 w-6 text-[#FA5DBE]" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-6xl flex-col items-center justify-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#FFD6EE] bg-white/80 px-5 py-2 shadow-lg shadow-[#FA5DBE]/10 backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#FA5DBE]" />
            <span className="text-sm font-medium text-[#FA5DBE]">
              Luxury Web Design & SEO Agency
            </span>
          </div>

          <h1 className="max-w-5xl text-balance font-serif text-5xl font-semibold leading-tight text-[#1a1a2e] md:text-7xl lg:text-8xl">
            Websites Designed to Look Beautiful and{" "}
            <span className="text-[#FA5DBE]">Perform</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#64607d] md:text-xl">
            Custom websites, SEO optimization, and digital
            experiences crafted to help your business stand out, get found, and
            grow online.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-[#FA5DBE] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[#FA5DBE]/25 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FA5DBE]/30"
            >
              View Portfolio
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full border-2 border-[#FA5DBE] bg-white/70 px-8 py-4 text-base font-semibold text-[#FA5DBE] shadow-lg shadow-[#FA5DBE]/10 backdrop-blur transition-all hover:-translate-y-1 hover:bg-[#FA5DBE] hover:text-white"
            >
              Book a Consultation
            </a>
          </div>

          <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">
            {[
              ["50+", "Projects Delivered"],
              ["100%", "Client-Focused Design"],
              ["SEO", "Built for Visibility"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-[#FFD6EE] bg-white/75 px-8 py-6 shadow-xl shadow-[#FA5DBE]/10 backdrop-blur"
              >
                <p className="font-serif text-4xl font-semibold text-[#FA5DBE]">
                  {number}
                </p>
                <p className="mt-2 text-sm font-medium text-[#64607d]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}