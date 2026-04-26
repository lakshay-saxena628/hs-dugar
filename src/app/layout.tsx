import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HS Dugar — Medical Component Exports",
  description: "HS Dugar is a leading exporter of high-quality IV Cannulas, IV Infusion Sets, and Syringes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable} h-100`}>
      <body className="h-100 font-body text-gray-800 overflow-auto bg-white m-0 p-0">{children}</body>
    </html>
  );
}
