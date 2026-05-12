"use client"

import {
  Palette,
  Code,
  Search,
  FileSearch,
  RefreshCw,
  Smartphone,
  Wrench,
  TrendingUp,
  Sparkles,
} from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Custom Website Design",
    description:
      "Bespoke, stunning designs tailored to your brand identity that captivate visitors and leave lasting impressions.",
  },
  {
    icon: Code,
    title: "Website Development",
    description:
      "Clean, hand-crafted code that ensures your website performs flawlessly across all devices and browsers.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Strategic optimization to improve your search rankings and attract more organic traffic to your site.",
  },
  {
    icon: FileSearch,
    title: "Google Indexing",
    description:
      "Expert setup ensuring your website is properly indexed and visible in Google search results.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesigns",
    description:
      "Transform your outdated website into a modern, engaging experience that converts visitors.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description:
      "Responsive, mobile-first designs that provide seamless experiences on every screen size.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Ongoing support and updates to keep your website secure, fast, and functioning perfectly.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description:
      "Strategic improvements designed to turn your website visitors into loyal customers.",
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-[#FFF5FB] relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#FA5DBE]/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#FFECF8] blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#FFD6EE] mb-6">
            <Sparkles className="w-4 h-4 text-[#FA5DBE]" />
            <span className="text-sm font-medium text-[#FA5DBE]">
              Services
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-[#1a1a2e] mb-6 text-balance">
            Elevate Your Digital{" "}
            <span className="text-[#FA5DBE]">Presence</span>
          </h2>

          <p className="text-lg text-[#64607d] leading-relaxed text-pretty">
            Comprehensive web design and digital solutions crafted with care to
            help your business shine online and achieve meaningful growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg shadow-[#FA5DBE]/5 border border-[#FFD6EE]/50 hover:shadow-xl hover:shadow-[#FA5DBE]/15 transition-all duration-500 hover:-translate-y-2 hover:border-[#FA5DBE]/30"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFECF8]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#FFECF8] flex items-center justify-center mb-5 group-hover:bg-[#FA5DBE]/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-[#FA5DBE]" />
                </div>

                <h3 className="text-lg font-serif font-semibold text-[#1a1a2e] mb-3 group-hover:text-[#FA5DBE] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm text-[#64607d] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#FA5DBE]/30 group-hover:bg-[#FA5DBE] transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[#64607d] mb-4">
            {"Looking for something specific? Let's discuss your project."}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#FA5DBE] font-medium hover:gap-4 transition-all duration-300"
          >
            Get in Touch
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}