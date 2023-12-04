import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arafat Mannan',
  description: 'Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className=' ' lang="en">
      <body className={`${inter.className} bg-black scrollbar-hide`}>{children}</body>
    </html>
  )
}
