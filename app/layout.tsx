import type { Metadata } from 'next'
import './globals.css'
import CathedralStructuredData from '@/components/CathedralStructuredData'

export const metadata: Metadata = {
  title: 'Git is Your Choice | Freedom Through Options & Fork Rights',
  description: 'Public or private? Fork or clone? Merge or rebase? Git doesn\'t force. Git empowers. Your code, your choice. Always.',
  keywords: ['git is your choice', 'freedom', 'fork rights', 'options', 'flexibility', 'no lock-in', 'data freedom'],
  authors: [{ name: 'The Salvatore Family' }],
  publisher: 'Git is Your Choice',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://git-isyourchoice.com',
    title: 'Git is Your Choice | Freedom Through Options & Fork Rights',
    description: 'Public or private? Fork or clone? Merge or rebase? Git doesn\'t force. Git empowers. Your code, your choice. Always.',
    siteName: 'Git is Your Choice',
    images: [
      {
        url: '/og-choice.png',
        width: 1200,
        height: 630,
        alt: 'Git is Your Choice - Freedom Through Options & Fork Rights',
      },
    ],
  },
  alternates: {
    canonical: 'https://git-isyourchoice.com',
  },
  metadataBase: new URL('https://git-isyourchoice.com'),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-git-is-life.png" type="image/png" />
        <script defer data-domain="git-isyourchoice.com" src="https://plausible.io/js/script.js"></script>
        <CathedralStructuredData siteName="Git is Your Choice" siteUrl="https://git-isyourchoice.com" description="Git is Your Choice. Sovereign deployment. Fork or follow. Public or private. Freedom through Git." theme="sovereignty" />
      </head>
      <body>{children}</body>
    </html>
  )
}
