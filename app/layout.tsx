import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'
import { Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'THE LAKE FESTIVAL',
  description: 'Les 14 & 15 Juin 2024',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className} suppressHydrationWarning={true}>
          {children}
      </body>
    </html>
  )
}
