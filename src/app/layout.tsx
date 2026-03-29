import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "VOGS Treasury",
  description: "AI-powered institutional treasury management on Solana",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>
        <div className="app-layout">
          <Sidebar />
          <div className="app-main">
            <Header />
            <main className="app-content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
