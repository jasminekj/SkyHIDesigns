"use client"

import Link from "next/link"
import { Instagram, Linkedin, Twitter, Mail, Heart } from "lucide-react"

const navigation = {
  main: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Website Design", href: "#services" },
    { name: "WordPress", href: "#services" },
    { name: "SEO Optimization", href: "#services" },
    { name: "Website Redesign", href: "#services" },
  ],
  social: [
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Email", href: "mailto:hello@skyhidesign.com", icon: Mail },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-[#FA5DBE] via-[#FF8AD0] to-[#FA5DBE]" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-serif font-semibold">
                Sky <span className="text-[#FA5DBE]">HI</span> Design
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed max-w-md">
              Boutique web design studio specializing in beautiful, custom-coded websites 
              and SEO optimization. Helping businesses elevate their online presence with 
              elegance and strategy.
            </p>
            <div className="flex gap-3">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#FA5DBE]/30 transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[#FA5DBE] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[#FA5DBE] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-white/70">
                Ready to get started?
              </p>
              <a 
                href="#contact" 
                className="text-[#FA5DBE] font-medium hover:underline"
              >
                Book a consultation →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Sky HI Designs. All rights reserved.
            </p>
            <p className="text-sm text-white/60 flex items-center gap-1">
              Crafted with <Heart className="w-4 h-4 text-[#FA5DBE] fill-[#FA5DBE]" /> for businesses that dream big
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
