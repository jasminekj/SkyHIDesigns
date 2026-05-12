"use client"

import { 
  Sparkles, 
  Code, 
  Search, 
  Smartphone, 
  Palette, 
  MessageSquare, 
  Eye, 
  Heart, 
  LifeBuoy 
} from "lucide-react"

const reasons = [
  {
    icon: Code,
    title: "Custom-Coded Websites",
    description: "No templates here. Every website is hand-crafted with clean, efficient code tailored to your unique needs."
  },
  {
    icon: Search,
    title: "SEO-Focused Strategy",
    description: "Every design decision is made with search visibility in mind, ensuring your website gets found."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "Beautiful, seamless experiences across all devices with mobile-first responsive design."
  },
  {
    icon: Palette,
    title: "Elegant Modern Design",
    description: "Sophisticated aesthetics that elevate your brand and captivate your audience."
  },
  {
    icon: MessageSquare,
    title: "Fast Communication",
    description: "Responsive, clear communication throughout every stage of your project."
  },
  {
    icon: Eye,
    title: "Google Visibility Expert",
    description: "Specialized knowledge in getting your website indexed and ranking on Google."
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "A dedicated, boutique approach where your project receives the attention it deserves."
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    description: "Continued assistance and maintenance to keep your website performing at its best."
  }
]

export function WhyChoose() {
  return (
    <section className="py-24 md:py-32 bg-[#FFF5FB] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#FA5DBE]/10 blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#FFECF8] blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#FFD6EE]">
              <Sparkles className="w-4 h-4 text-[#FA5DBE]" />
              <span className="text-sm font-medium text-[#FA5DBE]">Why Sky HI Designs</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-[#1a1a2e] text-balance">
              The <span className="text-[#FA5DBE]">Sky HI</span> Difference
            </h2>
            
            <p className="text-lg text-[#64607d] leading-relaxed">
              Choosing the right web designer is crucial for your business success. 
              Here&apos;s what sets Sky HI Designs apart and why clients choose to work with me.
            </p>

            {/* Highlight card */}
            <div className="bg-white rounded-2xl p-6 inline-block shadow-lg shadow-[#FA5DBE]/5 border border-[#FFD6EE]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFECF8] flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <div className="font-semibold text-[#1a1a2e]">Premium Quality</div>
                  <div className="text-sm text-[#64607d]">Boutique attention to every detail</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-5 shadow-lg shadow-[#FA5DBE]/5 border border-[#FFD6EE]/50 hover:shadow-xl hover:shadow-[#FA5DBE]/10 hover:border-[#FA5DBE]/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFECF8] flex items-center justify-center mb-4 group-hover:bg-[#FA5DBE]/20 transition-colors">
                  <reason.icon className="w-5 h-5 text-[#FA5DBE]" />
                </div>
                <h3 className="font-semibold text-[#1a1a2e] mb-2 group-hover:text-[#FA5DBE] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-[#64607d] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
