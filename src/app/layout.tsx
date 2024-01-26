import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Stream",
  description: "Stream your favorite anime!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800 text-slate-100 flex flex-col min-h-screen`}
      >
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-slate-500/95 backdrop-blur supports-[backdrop-filter]:bg-slate-500/60">
          <div className="h-14 flex items-center xl:max-w-4xl 2xl:max-w-6xl mx-auto">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="text-lg font-thin font-mono italic">
                Anime Stream
              </span>
            </Link>
          </div>
        </header>
        <main className="xl:max-w-4xl 2xl:max-w-6xl mx-auto flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
