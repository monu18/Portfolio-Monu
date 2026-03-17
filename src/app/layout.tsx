import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monu Kumar | Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in distributed systems, real-time data pipelines, and high-scale backend infrastructure. Building systems that process millions of events per second.",
  keywords: [
    "Software Engineer",
    "Distributed Systems",
    "Kafka",
    "Java",
    "Scala",
    "Backend Engineer",
    "InfoEdge",
    "UIC",
    "Microservices",
    "AWS",
  ],
  authors: [{ name: "Monu Kumar" }],
  creator: "Monu Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Monu Kumar | Senior Software Engineer",
    description:
      "Building distributed systems at scale. 1M+ users. 99.99% uptime. <200ms latency.",
    siteName: "Monu Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monu Kumar | Senior Software Engineer",
    description:
      "Building distributed systems at scale. 1M+ users. 99.99% uptime. <200ms latency.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="noise-bg antialiased">{children}</body>
    </html>
  );
}
