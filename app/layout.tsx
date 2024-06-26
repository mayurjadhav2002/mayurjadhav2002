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

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mayur Jadhav",
  icons: "",
  description:
    "Hi! I'm Mayur, a final-year CS student passionate about software dev & machine learning. Let's connect & learn together!",
  authors: [{ name: "Mayur Jadhav", url: "https://mayurjadhav.me" }],
  keywords:
    "Software Development, Machine Learning, Computer Science, Mumbai University",
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
