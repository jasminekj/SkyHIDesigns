import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant"
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: 'Sky HI Design | Luxury Web Design & SEO Agency',
  description: 'Premium custom-coded websites, WordPress solutions, and SEO optimization. Beautiful websites designed to elevate your brand and grow your business.',
  keywords: ['web design', 'SEO', 'custom websites', 'WordPress', 'web development', 'luxury web design', 'branding'],
  authors: [{ name: 'Sky HI Design' }],
  openGraph: {
    title: 'Sky HI Design | Luxury Web Design & SEO Agency',
    description: 'Premium custom-coded websites and SEO optimization to elevate your brand.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
