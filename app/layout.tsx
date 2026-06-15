import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "OurSufiWorld — Where the Divine Meets the People",
  description:
    "Ancient Sufi wisdom applied to the urgent crises of our time — climate, war, education, and the human soul. A spiritual-activist platform rooted in love.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
