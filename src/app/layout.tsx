import type { Metadata } from "next";
// @ts-ignore
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Manoj R | Full Stack Developer & UI/UX Designer",
    template: "%s | Manoj R"
  },
  description: "I Build AI Solutions, SaaS Platforms, Enterprise Software & Smart Automation Systems. Turning complex problems into elegant solutions.",
  keywords: ["Manoj R", "Full Stack Developer", "Software Engineer", "UI/UX Designer", "AI Solutions", "SaaS Platforms", "Next.js", "React", "Node.js", "Portfolio"],
  authors: [{ name: "Manoj R" }],
  creator: "Manoj R",
  metadataBase: new URL("https://itsmanoj.me"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itsmanoj.me",
    title: "Manoj R | Full Stack Developer & UI/UX Designer",
    description: "I Build AI Solutions, SaaS Platforms, Enterprise Software & Smart Automation Systems.",
    siteName: "Manoj R Portfolio",
    images: [
      {
        url: "/og-image.png", // We'll assume an og-image will be placed here
        width: 1200,
        height: 630,
        alt: "Manoj R Portfolio",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manoj R | Full Stack Developer & UI/UX Designer",
    description: "I Build AI Solutions, SaaS Platforms, Enterprise Software & Smart Automation Systems.",
    images: ["/og-image.png"],
    creator: "@itsmanoj",
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
};

import { ThemeProvider } from "@/components/ThemeProvider";
import AuthProvider from "@/components/AuthProvider";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans scroll-smooth", geist.variable)}>
      <body className="antialiased min-h-screen bg-background text-foreground overflow-x-hidden">
        <SmoothScroll>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
            <CustomCursor />
            <CommandPalette />
            <Navbar />
            <main className="relative z-10 flex-grow pt-24">
              {children}
            </main>
            <Footer />
            <Toaster position="bottom-right" />
          </ThemeProvider>
        </AuthProvider>
        </SmoothScroll>
      </body>
    </html>

  );
}
