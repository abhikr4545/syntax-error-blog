import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syntax Error",
  description: "A blog post dedicated for software engineers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="scroll-pt-[3.5rem]">
      <body 
        className={cn(
          "min-h-screen antialiased relative bg-[#F8F8FF]",
          inter.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
