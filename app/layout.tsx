import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Tarım Kredi Kooperatifleri",
    template: "%s | Tarım Kredi Kooperatifleri",
  },
  description:
    "Türk tarımının güvenilir ortağı. 70 yılı aşkın tecrübemizle çiftçilerimize kredi, sigorta ve tarımsal girdi hizmetleri sunuyoruz.",
  keywords: "tarım kredi, kooperatif, tarımsal kredi, tarım sigortası, çiftçi, tarımsal girdi",
  authors: [{ name: "Tarım Kredi Kooperatifleri" }],
  creator: "Tarım Kredi Kooperatifleri",
  publisher: "Tarım Kredi Kooperatifleri",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tarimkredi.org.tr",
    siteName: "Tarım Kredi Kooperatifleri",
    title: "Tarım Kredi Kooperatifleri",
    description: "Türk tarımının güvenilir ortağı",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tarım Kredi Kooperatifleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarım Kredi Kooperatifleri",
    description: "Türk tarımının güvenilir ortağı",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
