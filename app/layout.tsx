import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "600", "700", "900"] });

export const metadata: Metadata = {
  title: "Elijah Ndenwa | Software Developer",
  description: "Portfolio of Elijah Ndenwa, a Software Developer specializing in Next.js, React, and Full-Stack Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary`}>
        {/* Global Notebook Pattern Background */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          {/* Horizontal lines */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to bottom, transparent 31px, #30231D 31px)", backgroundSize: "100% 32px" }} />
          {/* Vertical notebook margins */}
          <div className="absolute left-6 md:left-20 top-0 bottom-0 w-px bg-red-400/20" />
          <div className="absolute left-8 md:left-[5.5rem] top-0 bottom-0 w-px bg-red-400/20" />
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
