import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-geist-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Praveen Yadav | Full Stack Developer",
  description: "Elite Full Stack Engineer with 5+ years of experience building scalable, high-performance web applications using Node.js, TypeScript, React, and AWS.",
  keywords: ["Full Stack Developer", "Node.js", "TypeScript", "React", "AWS", "Software Engineer"],
  authors: [{ name: "Praveen Yadav" }],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: "Praveen Yadav | Full Stack Developer",
    description: "Elite Full Stack Engineer specializing in modern web technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

