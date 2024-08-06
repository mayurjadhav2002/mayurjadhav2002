import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mayur Jadhav | Portfolio Website",
  description:
    "I am a Software Developer and AI enthusiast. I love improving systems and creating new things, currently working on AI projects for advancing Emotional AI and AGI. Find information related to my work on this site.",
  authors: [{ name: "Mayur Jadhav", url: "https://mayurjadhav.tech" }],
  keywords:
    "Software Development, Machine Learning, AI, Computer Science, Software Developer",
    metadataBase: new URL('https://mayurjadhav.tech'),

  openGraph: {
    title: "Mayur Jadhav | Portfolio Website",
    description:
      "My name is Mayur, and I am a Software Developer & AI enthusiast. I love improving systems and creating new things, currently working on AI projects for advancing Emotional AI and AGI. Find information related to my work on this site.",
    url: "https://mayurjadhav.tech",
    images: "/assets/wesite_image.png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayur Jadhav | Portfolio Website",
    description:
      "My name is Mayur, and I am a Software Developer & AI enthusiast. I love improving systems and creating new things, currently working on AI projects for advancing Emotional AI and AGI. Find information related to my work on this site.",
      images: "/assets/wesite_image.png",
    },
  other: {
    "google-site-verification": "2AKoUPAODxXpU30OmRU7Dq1aiwXDUoywc-2_TWIiBIg",

    "canonical": "https://mayurjadhav.tech",
    "robots": "index, follow",

  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          cn(
            "min-h-screen bg-background font-sans antialiased dark:text-white",
            fontSans.variable
          )
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <GoogleAnalytics gaId="G-8BSK0VJNRH" />
      </body>
    </html>
  );
}
