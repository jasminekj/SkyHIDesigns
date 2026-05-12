import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { Process } from "@/components/process"
import { WhyChoose } from "@/components/why-choose"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <WhyChoose />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
