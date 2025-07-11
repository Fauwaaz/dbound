import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Cursor from '@/app/components/common/Cursor';

import { ReactLenis } from "@/app/utils/lenis";
import BottomNavMenu from "./components/common/Menu";
import GridContainer from "./components/common/GridContainer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dbound Media & Marketing",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* <Cursor /> */}
          <GridContainer />
          <Header />
          <BottomNavMenu />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
