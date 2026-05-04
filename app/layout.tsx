import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://isaacmoura.dev'),
  title: {
    default: "Isaac Moura — Full Stack Developer",
    template: "%s | Isaac Moura",
  },
  description:
    "Full Stack Developer especializado em Java (Spring Boot), Angular e Node.js. Soluções escaláveis, APIs RESTful, microsserviços e muito mais. Fortaleza, CE.",
  keywords: ["Full Stack Developer", "Java", "Spring Boot", "Angular", "Node.js", "API RESTful", "Docker", "Microsserviços", "Freelancer", "Fortaleza"],
  authors: [{ name: "Isaac Moura", url: "https://github.com/isaacmoura23" }],
  creator: "Isaac Moura",
  publisher: "Isaac Moura",
  generator: "Next.js",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: "Isaac Moura — Full Stack Developer",
    description: "Full Stack Developer especializado em Java (Spring Boot), Angular e Node.js. Disponível para projetos freelance.",
    siteName: "Isaac Moura",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Isaac Moura — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Moura — Full Stack Developer",
    description: "Full Stack Developer especializado em Java, Angular e Node.js. Disponível para projetos freelance.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
