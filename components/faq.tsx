"use client"

import { Sparkles } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does a website project typically take?",
    answer: "Most website projects take between 2-6 weeks depending on complexity. A simple business website might be ready in 1-2 weeks, while larger projects with custom features may take 4-6 weeks. I'll provide a detailed timeline during our discovery call based on your specific needs."
  },
  {
    question: "Do you offer SEO services?",
    answer: "Absolutely! SEO is built into every website I create. This includes technical SEO optimization, keyword research, meta tags, schema markup, site speed optimization, and Google indexing. I also offer ongoing SEO services to help improve your rankings over time."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes! I love helping businesses transform outdated websites into modern, high-performing sites. I'll analyze your current site, discuss your goals, and create a fresh design that better represents your brand while preserving any valuable SEO equity you've built."
  },
  {
    question: "Will my website show up on Google?",
    answer: "Every website I build is optimized for Google visibility from day one. I ensure proper indexing, implement technical SEO best practices, and set up Google Search Console. While I can't guarantee specific rankings, I optimize everything to give you the best chance of being found."
  },
  {
    question: "Do you offer ongoing website support?",
    answer: "Yes! I offer maintenance packages that include regular updates, security monitoring, backups, and technical support. Many clients choose ongoing support to ensure their website stays secure, fast, and up-to-date."
  },
  {
    question: "Are the websites you create mobile-friendly?",
    answer: "100% yes! Every website is built with a mobile-first approach. This means your site will look beautiful and function perfectly on smartphones, tablets, laptops, and desktops. Mobile optimization is also crucial for Google rankings."
  },
  {
    question: "Can you help with branding and logo design?",
    answer: "While my primary focus is web design and development, I can help with basic brand identity elements to ensure your website has a cohesive look. For comprehensive branding needs, I can recommend talented brand designers to collaborate with."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#FFECF8]/50 blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFECF8] border border-[#FFD6EE] mb-6">
            <Sparkles className="w-4 h-4 text-[#FA5DBE]" />
            <span className="text-sm font-medium text-[#FA5DBE]">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-[#1a1a2e] mb-6 text-balance">
            Common <span className="text-[#FA5DBE]">Questions</span>
          </h2>
          <p className="text-lg text-[#64607d] leading-relaxed text-pretty">
            Everything you need to know about working together. 
            {" Don't see your question? Feel free to reach out!"}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl px-6 border border-[#FFD6EE]/50 shadow-sm data-[state=open]:shadow-lg data-[state=open]:shadow-[#FA5DBE]/5 data-[state=open]:border-[#FA5DBE]/30 transition-all"
              >
                <AccordionTrigger className="text-left font-serif text-lg font-medium text-[#1a1a2e] hover:text-[#FA5DBE] transition-colors py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#64607d] leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[#64607d] mb-4">
            Still have questions? I&apos;d love to hear from you.
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
