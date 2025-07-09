import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Our Little Knots',
  description: 'Send love and gifts with Our Little Knots – Curated, handmade, and personalized gifts for every occasion.',
  generator: 'Our Little Knots', // You can put your brand, your name, etc.
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
