import "@/styles/globals.css"

import { type Metadata } from "next"
import { DM_Serif_Display } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import { Analytics } from "@vercel/analytics/react"
import { env } from "@/env.mjs"
import Image from "next/image"

export const metadata: Metadata = {
  title: "charliee.dev",
  description:
    "I'm charliee, a UK-based Software Developer and Designer. I started with HTML and CSS 2 years ago, and now I use React, Next.js, Tailwind CSS, and more to blend design and code for clean, modern websites.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    url: "https://charliee.dev",
    title: "charliee.dev",
    description:
      "I'm charliee, a UK-based Software Developer and Designer. I started with HTML and CSS 2 years ago, and now I use React, Next.js, Tailwind CSS, and more to blend design and code for clean, modern websites.",
    images: "/ogimage.gif",
  },
  twitter: {
    card: "summary",
    creator: "@notchxrliee",
    description:
      "I'm charliee, a UK-based Software Developer and Designer. I started with HTML and CSS 2 years ago, and now I use React, Next.js, Tailwind CSS, and more to blend design and code for clean, modern websites.",
    images: "/ogimage.gif",
  },
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
}

const DMSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`font-geist-sans ${GeistSans.variable} ${DMSerifDisplay.variable} bg-purple-main bg-main`}
      >
        <Image
          src={"/radial-gradient.svg"}
          width={0}
          height={0}
          alt=""
          className="fixed z-0 h-full w-full min-w-[1000px] animate-slide-down select-none opacity-0 animation-delay-150 max-[1000px]:left-1/2 max-[1000px]:ml-[-500px]"
        ></Image>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
