import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reliable Manpower Supply & Contractors | LABOUR COMPANY",
  description:
    "Find skilled construction, factory, & industrial workers fast. We're your one-stop shop for temporary & permanent staffing solutions. Get a Free Quote Today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/hero-bg.webp" as="image" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// #ffe101 (Original color)
// #fff2cc (Slightly lighter shade)
// #fded9b (Lighter shade)
// #fce98c (Even lighter shade)
// #fde47c (Very light shade)
// #fcd96c (Light shade with a touch more yellow)
// #fdc45c (Lighter shade with a touch more yellow)
// #fcab4c (Even lighter shade with a touch more yellow)
// #fca03c (Very light shade with a touch more yellow)
// #f9972c (Lightest shade with a significant amount of yellow)
