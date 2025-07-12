
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "@/features/teacher/components/Sidebar";
import TopBar from "@/features/teacher/components/TopBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teacher Management",
  description: "Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global layout with Sidebar + TopBar */}
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar for all pages */}
          <aside className="w-60 bg-gray-900 text-white shrink-0">
            <Sidebar />
          </aside>

          {/* Main content with TopBar */}
          <div className="flex flex-col flex-1">
            <TopBar />
            <main className="flex-1 overflow-y-auto px-8 py-6 bg-gray-100 dark:bg-gray-800">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

