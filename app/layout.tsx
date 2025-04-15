import "@/styles/globals.css"
import clsx from "clsx"
import { Metadata, Viewport } from "next"

import { Providers } from "./providers"

import { Footer, Header } from "@/components"
import { fontSans } from "@/config/fonts"
import { baseUrl } from "@/constants"
import { MemeProvider } from "@/context/MemeContext"

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   icons: {
//     icon: "/favicon.ico",
//   },
// }

export async function generateMetadata(): Promise<Metadata> {
  const title = "Memasic Mania"
  const description =
    "Watch memes, create your own, and share them with the world."

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    themeColor: "#ffffff",
    icons: {
      icon: "/favicon/favicon.ico",
      apple: "/favicon/apple-icon.png",
      shortcut: "/favicon/favicon.ico",
      other: [
        {
          rel: "mask-icon",
          url: "/favicon/mask-icon.svg",
          color: "#f2e9f2",
        },
      ],
    },
    manifest: "/favicon/manifest.json",
    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: "Beautica",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/favicon/main.jpg",
          width: 1200,
          height: 630,
          alt: "",
        },
      ],
    },
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <MemeProvider>
            <div className="relative flex flex-col h-screen">
              <Header />
              <main className="container mx-auto max-w-7xl pt-16 px-4  md:px-6 flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </MemeProvider>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
