import './globals.css'
import type { Metadata } from 'next'
import { Martian_Mono } from 'next/font/google'

const martian = Martian_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-martian-mono',
})

export const metadata: Metadata = {
  title: 'Rocko\'s Page',
  description: 'Rocko\'s Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={martian.className}>{children}</body>
    </html>
  )
}
