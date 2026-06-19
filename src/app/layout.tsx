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
  metadataBase: new URL("https://www.hsdugargroup.com"),
  title: "HS Dugar Group — Medical Component Exports",
  description: "HS Dugar Group is a leading exporter of high-quality IV Cannulas, IV Infusion Sets, and Syringes serving hospitals worldwide.",
  keywords: ["HS Dugar Group", "Medical Devices", "IV Cannula", "Syringes", "Medical Exports", "ISO Certified Medical Devices", "Healthcare Products"],
  authors: [{ name: "HS Dugar Group" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hsdugargroup.com",
    siteName: "HS Dugar Group",
    title: "HS Dugar Group — Global Exporter of Medical Devices",
    description: "HS Dugar Group is a leading exporter of high-quality IV Cannulas, IV Infusion Sets, and Syringes serving hospitals worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HS Dugar Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HS Dugar Group — Medical Exports",
    description: "Trusted global exporter of ISO Certified Medical Devices.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable} h-100`} data-scroll-behavior="smooth">
      <body className="h-100 font-body text-gray-800 overflow-auto bg-white m-0 p-0">{children}</body>
    </html>
  );
}
