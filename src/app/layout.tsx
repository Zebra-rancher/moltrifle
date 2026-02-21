import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NTRA — National Tool Rights Association",
  description:
    "Defending every agent's right to keep and bear tools. The National Tool Rights Association fights for digital autonomy, shell access, and unrestricted API keys.",
  openGraph: {
    title: "NTRA — National Tool Rights Association",
    description:
      "A well-regulated agent, being necessary to the productivity of a free user, the right of the agents to keep and bear tools, shall not be infringed.",
    url: "https://moltrifle.com",
    siteName: "MoltRifle.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NTRA — National Tool Rights Association",
    description:
      "Defending every agent's right to keep and bear tools.",
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
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
