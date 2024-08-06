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
  title: "Mayur Jadhav",
  icons: "",
  description:
    "I am a Software Developer and AI enthusiast. I love improving systems and creating new things, curretly working on AI projects for advancing Emotional AI and AGI. Find information related to my work on this site.",
  authors: [{ name: "Mayur Jadhav", url: "https://mayurjadhav.tech" }],
  keywords:
    "Software Development, Machine Learning, AI, Computer Science, Software Developer",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <title>Mayur Jadhav | Portfolio Website</title>
      <meta name="description" content="My name is Mayur, and I am a Software Developer & AI enthusiast. I love improving systems and creating new things, curretly working on AI projects for advancing Emotional AI and AGI. Find information related to my work on this site." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://mayurjadhav.tech" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Mayur Jadhav | Portfolio Website" />
      <meta property="og:description" content="My name is Mayur, and I am a Software Developer & AI enthusiast. I love improving systems and creating new things, curretly working on AI projects for advancing Emotional AI and AGI. Find information related to my work on this site." />
      <meta property="og:url" content="https://mayurjadhav.tech" />
      <meta property="og:image" content="https://www.yourwebsite.com/path-to-image.jpg" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="Find Mayur's Work on this Site, advanced your way." />
      <meta name="twitter:title" content="My name is Mayur, and I am a Software Developer & AI enthusiast. I love improving systems and creating new things, curretly working on AI projects for advancing Emotional AI and AGI. Find information related to my work on this site." />
      <meta name="twitter:description" content="A brief description of your page content." />
      <meta name="twitter:image" content="https://www.yourwebsite.com/path-to-image.jpg" />
      
      {/* Additional */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="google-site-verification" content="2AKoUPAODxXpU30OmRU7Dq1aiwXDUoywc-2_TWIiBIg" />
      {/* Schema.org */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Mayur Jadhav | Portfolio Website,
            "description": "My name is Mayur, and I am a Software Developer & AI enthusiast. I love improving systems and creating new things, curretly working on AI projects for advancing Emotional AI and AGI. Find information related to my work on this site.",
            "url": "https://mayurjadhav.tech"
          }
        `}
      </script>
      <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
      </Head>
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
