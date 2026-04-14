import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ngô Hồ Tấn Toàn | CTK46PM",
  description:
    "Trang giới thiệu cá nhân của Ngô Hồ Tấn Toàn, MSSV 2212473, lớp CTK46PM.",
  keywords: ["Ngô Hồ Tấn Toàn", "2212473", "CTK46PM", "Next.js", "Lab 01"],
  authors: [{ name: "Ngô Hồ Tấn Toàn" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}