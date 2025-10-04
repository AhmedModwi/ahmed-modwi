import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A.Modwi | The Salesman Who Builds Systems",
  description: "Personal storytelling website for Ahmed Modwi - Learning the real market to build intelligent systems",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23000000'/><circle cx='50' cy='50' r='45' fill='%23000000' stroke='%233b82f6' stroke-width='2'/><text x='50' y='60' font-family='Arial,sans-serif' font-size='36' font-weight='bold' text-anchor='middle' fill='%233b82f6'>AM</text></svg>",
    shortcut: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23000000'/><circle cx='50' cy='50' r='45' fill='%23000000' stroke='%233b82f6' stroke-width='2'/><text x='50' y='60' font-family='Arial,sans-serif' font-size='36' font-weight='bold' text-anchor='middle' fill='%233b82f6'>AM</text></svg>",
    apple: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23000000'/><circle cx='50' cy='50' r='45' fill='%23000000' stroke='%233b82f6' stroke-width='2'/><text x='50' y='60' font-family='Arial,sans-serif' font-size='36' font-weight='bold' text-anchor='middle' fill='%233b82f6'>AM</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
          link[rel="icon"] {
            border-radius: 50% !important;
          }
        `}</style>
      </head>
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {children}
        </div>
      </body>
    </html>
  );
}