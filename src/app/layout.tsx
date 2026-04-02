import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSansSc = Noto_Sans_SC({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LogiPlatform | 物流数字化平台体系",
  description:
    "面向物流企业的数字化平台型官方网站，展示平台能力、技术架构、业务场景与合作方式。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSansSc.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
