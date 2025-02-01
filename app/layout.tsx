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

// 🔥 Title과 Description 수정
export const metadata: Metadata = {
  title: "치앙마이 여행 가이드 🌏",
  description: "치앙마이 여행 계획을 위한 완벽한 가이드",
  icons: {
    icon: "/favicon.png", // public 폴더에 favicon.ico 또는 favicon.png 파일 추가
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko"> {/* 한국어로 변경 */}
      <head>
        <link rel="icon" href="/favicon.ico" /> {/* favicon 설정 */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}