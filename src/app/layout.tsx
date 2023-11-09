import "@/styles/globals.css"

import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"

import { env } from "@/env.mjs"

export const metadata: Metadata = {
  title: "charliee.dev",
  description:
    "hey! my name’s charliee (they/them), and i’m a full-stack web developer from the uk. i mainly work with typescript, primarily in next.js projects.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    url: "https://charliee.dev",
    title: "charliee.dev",
    description:
      "hey there! my name’s charliee (they/them), and i’m a software developer from the uk. i code in typescript, and mainly work on webdev projects using next.js.",
    images: "/ogimage.gif",
  },
  twitter: {
    card: "summary",
    creator: "@notchxrliee",
    description:
      "hey there! my name’s charliee (they/them), and i’m a software developer from the uk. i code in typescript, and mainly work on webdev projects using next.js.",
    images: "/ogimage.gif",
  },
  metadataBase: new URL(env.BASE_URL),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-geist-sans ${GeistSans.variable}`}>
        {children}
      </body>
    </html>
  )
}
