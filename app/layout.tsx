import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NSBE at LMU",
  description:
    "National Society of Black Engineers at Loyola Marymount University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-[family-name:var(--font-inter)] flex flex-col min-h-screen lg:grid lg:grid-cols-[auto_3fr]`}
      >
        <Nav />
        <main className="max-w-[1440px] mx-auto w-full h-full overflow-y-scroll text-md lg:text-lg transition-all">
          {children}
        </main>
      </body>
    </html>
  );
}
