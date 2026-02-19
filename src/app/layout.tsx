import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BackyardChickens Guide - Raising Happy, Healthy Chickens',
  description: 'Everything you need to know about raising backyard chickens. Breed guides, coop plans, feeding tips, and gear reviews from real chicken keepers.',
  keywords: ['backyard chickens', 'raising chickens', 'chicken breeds', 'chicken coop', 'egg laying hens', 'beginner chickens'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-farm-50 text-gray-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
