import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}