import type { Metadata } from "next";
import { Quicksand, Mulish } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Pre-IPO Investing Email Course | Healey Pre-IPO",
  description: "Learn how to access pre-IPO investments and generate 2x-10x returns. A 5-day email course on secondary markets, SPVs, and investment strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable} ${mulish.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
