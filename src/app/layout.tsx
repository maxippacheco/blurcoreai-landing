import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/theme-toggler"
import Navbar from "@/components"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BlurcoreAI",
  description: "BlurcoreAI is an AI agency that provides solutions for companies.",
  icons: {
    icon: {
      url: "./Png-vectorizado.png",
      type: "image/png",
    }
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>

      <body className={inter.className}>
        <link rel="icon" href="/Png-vectorizado.png" />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			    <Navbar SwitchTheme={() => <ModeToggle /> } />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}