import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import TelemetryBar from "@/components/TelemetryBar";
import KeyboardNav from "@/components/KeyboardNav";
import WorkstationFooter from "@/components/WorkstationFooter";
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
  themeColor: "#141716",
};

export const metadata: Metadata = {
  title: "Brian Mwathi | Full-Stack Software Engineer & Cloud Architect",
  description:
    "Full-stack engineer building enterprise-scale distributed systems on AWS and Azure, and high-trust fintech tools for African digital economies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio_theme');if(t==='hifi'){document.documentElement.setAttribute('data-theme','hifi');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <KeyboardNav />
        <TelemetryBar />
        <div className="stripe" aria-hidden="true" />
        <div className="container">
          <header className="site-header">
            <Navbar />
          </header>
          {children}
          <WorkstationFooter />
        </div>
      </body>
    </html>
  );
}
