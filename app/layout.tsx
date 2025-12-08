import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Alex Morgan - Frontend Developer",
  description: "Frontend Developer specializing in React, Next.js, and modern web technologies",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} relative overflow-x-hidden`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
              {/* Top left circle - teal/cyan */}
              <div
                className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal-500/20 blur-3xl animate-float"
                style={{ animationDelay: "0s" }}
              />

              {/* Bottom right circle - slate/gray */}
              <div
                className="absolute bottom-32 right-20 w-96 h-96 rounded-full bg-slate-600/15 blur-3xl animate-float-reverse"
                style={{ animationDelay: "2s" }}
              />

              {/* Middle left circle - blue */}
              <div
                className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-blue-500/15 blur-3xl animate-float animate-pulse-slow"
                style={{ animationDelay: "4s" }}
              />

              {/* Top right circle - purple */}
              <div
                className="absolute top-40 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl animate-float-reverse"
                style={{ animationDelay: "6s" }}
              />

              {/* Bottom left circle - emerald */}
              <div
                className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full bg-emerald-500/15 blur-3xl animate-float"
                style={{ animationDelay: "3s" }}
              />
            </div>

            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
