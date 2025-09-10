import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mounika Karri - Full Stack Developer',
  description: '3rd-year B.Tech Student | Full Stack Web Developer | Passionate about coding and building modern web applications',
  keywords: 'Mounika Karri, Full Stack Developer, Web Developer, B.Tech Student, React, JavaScript, Python, Java',
  authors: [{ name: 'Mounika Karri' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
