import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brian Mwathi",
  description: "Brian Mwathi's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased grid`}>
        <header className="w-full border-black/[.08] dark:border-white/[.145] bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
            <Link href="/" className="font-semibold tracking-tight">
              Brian Mwathi
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <Link
                className="hover:underline underline-offset-4"
                href="/about"
              >
                About
              </Link>
              <Link
                className="hover:underline underline-offset-4"
                href="/portfolio"
              >
                Portfolio
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
