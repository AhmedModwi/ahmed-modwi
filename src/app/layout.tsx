import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed Modwi - Portfolio",
  description: "Modern personal portfolio with dark glassy aesthetic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {children}
        </div>
      </body>
    </html>
  );
}