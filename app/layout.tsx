import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/Navbar";

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
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
