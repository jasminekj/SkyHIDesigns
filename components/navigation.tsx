"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-white/95 backdrop-blur-md py-3 shadow-lg shadow-[#FA5DBE]/5 border-b border-[#FFD6EE]" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-[#1a1a2e]">
              Sky <span className="text-[#FA5DBE]">HI</span> Design
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#64607d] hover:text-[#FA5DBE] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FA5DBE] after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-[#FA5DBE] hover:bg-[#E84AAD] text-white rounded-full px-6 py-2 font-medium transition-all duration-300 shadow-lg shadow-[#FA5DBE]/20 hover:shadow-xl hover:shadow-[#FA5DBE]/30"
            >
              <Link href="#contact">Book a Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#1a1a2e] hover:text-[#FA5DBE] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isOpen ? "max-h-[500px] mt-6" : "max-h-0"
          )}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 space-y-4 border border-[#FFD6EE] shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-[#1a1a2e] hover:text-[#FA5DBE] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-[#FA5DBE] hover:bg-[#E84AAD] text-white rounded-full mt-4"
            >
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
