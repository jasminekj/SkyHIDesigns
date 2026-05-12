import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Sky HI Designs | Custom Web Designs & SEO Agency in Toronto',
  
  description:
    'Luxury custom websites, WordPress development, SEO optimization, branding, and digital experiences crafted to help businesses grow online in Toronto and the GTA.',

  keywords: [
    'Toronto web design',
    'web design Toronto',
    'SEO agency Toronto',
    'custom websites',
    'WordPress development',
    'luxury web design',
    'branding',
    'website development',
    'SEO optimization',
    'small business websites',
  ],

  authors: [{ name: 'Sky HI Design' }],

  openGraph: {
    title: 'Sky HI Designs | Custom Web Design & SEO Agency in Toronto',

    description:
      'Luxury custom websites and SEO-focused digital experiences designed to elevate your brand and grow your business.',

    type: 'website',

    url: 'https://www.skyhidesigns.com',

    siteName: 'Sky HI Designs',
  },

  metadataBase: new URL('https://www.skyhidesigns.com'),
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