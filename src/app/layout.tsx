import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Echo - Master the art of music",
  description:
    "Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.",
  authors: {
    name: "Mohammad Bilal Mansuri",
    url: "https://www.linkedin.com/in/mohammadbilalmansuri",
  },
  keywords: [
    "music",
    "echo",
    "learn music",
    "music courses",
    "echo music",
    "music learning",
    "music education",
    "echo music academy",
    "music academy",
    "music school",
  ],
  icons: [
    {
      url: "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1740273142/echomusicacademy/favicon.svg",
      rel: "icon",
      type: "image/svg+xml",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full relative`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
