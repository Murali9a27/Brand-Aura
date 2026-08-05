import type { Metadata } from "next";
import { Geist_Mono, Geist, Poppins  } from "next/font/google";
import { csCardiaFont } from "@/fonts/fonts";

import "./globals.css";
import styles from "./layout.module.css";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LeftNavigation from "@/components/layout/LeftNavigation";
import SvgFilters from "@/components/common/SvgFilters";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-poppins",
  display: "swap",
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
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${csCardiaFont.variable}`}
      suppressHydrationWarning
    >
      <body className={styles.body}>
        {/* <SvgFilters /> */}
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