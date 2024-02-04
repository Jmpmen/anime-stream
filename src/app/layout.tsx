import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <Header />
        <main className="w-full xl:max-w-4xl 2xl:max-w-6xl mx-auto flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
