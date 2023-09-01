import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Abel } from 'next/font/google'

const abel = Abel({ subsets: ["latin"], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Moxied AI',
  description: 'All in one Creative Tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={abel.className}>{children}</body>
    </html>
    </ClerkProvider>
    
  )
}
