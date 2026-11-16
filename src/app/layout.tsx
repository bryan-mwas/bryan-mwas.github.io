import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FBF1E3",
};

export const metadata: Metadata = {
  title: "Brian Mwathi | Full-Stack Software Engineer",
  description:
    "Full-stack engineer building enterprise-scale web apps on AWS and Azure, and fintech tools for African digital economies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="stripe" aria-hidden="true" />
        <div className="container">
          <header className="site-header">
            <Navbar />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
