import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import styles from "./layout.module.css";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LeftNavigation from "@/components/layout/LeftNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Brand Aura",
    template: "%s | Brand Aura",
  },
  description: "Creative Digital Agency",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className={styles.body}>
        <Header />

        <LeftNavigation />

        <div className={styles.siteContent}>
          <main className={styles.siteMain}>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}