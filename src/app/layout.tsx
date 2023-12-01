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
    <html  lang="en">
      <body className={`${inter.className} bg-gradient-to-bl from-cyan-200 via-slate-600 to-zinc-800 m-0 p-0`}>{children}</body>
    </html>
  )
}
