import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rifqi Padi Siliwangi | Software Engineer",
  description:
    "Portfolio website of Rifqi Padi, an Android Developer focused on Kotlin, Jetpack Compose, and scalable mobile architecture.",
  keywords: [
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],

  authors: [
    {
      name: "Rifqi Padi",
    },
  ],

  creator: "Rifqi Padi",

  openGraph: {
    title: "Rifqi Padi | Android Developer",
    description:
      "Portfolio website showcasing Android and fullstack projects.",
      
    url: "https://your-domain.vercel.app",

    siteName: "Rifqi Portfolio",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rifqi Padi | Android Developer",
    description:
      "Portfolio website showcasing Android and fullstack projects.",
  },
};

export const viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}