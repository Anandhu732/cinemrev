import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CinemRev - Movie Reviews & Ratings",
  description: "Discover, review, and rate your favorite movies with CinemRev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
