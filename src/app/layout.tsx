import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { SmoothScroller } from "@/components/smooth-scroller";
import Footer from "@/components/footer";
import NavigationBar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import SpaceBackground from "@/components/spacebackground";
import PageTransition from "@/components/page-transition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansChinese = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "lizj.xyz",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansChinese.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroller />
          <NavigationBar />
          {/* <PageTransition> */}
          {children}
          {/* </PageTransition> */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
