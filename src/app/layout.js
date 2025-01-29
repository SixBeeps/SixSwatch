import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'sixswatch',
  description: 'Quickly create and store color palettes right in your browser.',
  authors: [{ name: 'SixBeeps', url: 'https://sixbeeps.com/' }],
  creator: 'SixBeeps',
  openGraph: {
    title: 'sixswatch',
    description: 'Quickly create and store color palettes right in your browser.',
    url: 'https://sixswatch.sixbeeps.com/',
    site_name: 'sixswatch',
    images: [{
      url: 'https://sixswatch.sixbeeps.com/icon.png',
      width: 512,
      height: 512,
      alt: 'sixswatch',
    }],
  },
  twitter: {
    card: 'summary',
    title: 'sixswatch',
    description: 'Quickly create and store color palettes right in your browser.',
    creator: '@sixbeeps',
    images: ['https://sixswatch.sixbeeps.com/icon.png'],
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.className}>{children}</body>
    </html>
  )
}
