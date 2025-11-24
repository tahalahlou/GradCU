import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "GradCU | Columbia Course Planner & Registration Guide",
  description:
    "An interactive tool to plan your Columbia University academic journey. Visualize course prerequisites, track requirements, and optimize your graduation path.",
  keywords: [
    "Columbia University",
    "course planner",
    "Columbia courses",
    "degree requirements",
    "computer science",
    "engineering",
    "prerequisites",
    "academic planning",
    "college courses",
    "graduation requirements",
  ],
  creator: "Columbia University Students",
  authors: [{ name: "GradCU Team" }],
  metadataBase: new URL("https://gradcu.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gradcu.vercel.app",
    title: "GradCU | Columbia University Course Planner",
    description:
      "Interactive visualization of Columbia University course requirements and prerequisites to help you plan your academic journey.",
    siteName: "GradCU",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GradCU - Columbia University Course Planner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GradCU | Columbia Course Planner",
    description: "Plan your Columbia academic journey visually",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://gradcu.vercel.app" />
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
