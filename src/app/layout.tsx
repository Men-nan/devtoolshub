import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: {
    default: "DevToolsHub - 免费在线开发者工具",
    template: "%s | DevToolsHub",
  },
  description:
    "免费在线开发者工具集合：JSON格式化、Base64编解码、正则测试、哈希生成等。无需注册，即开即用，数据本地处理。",
  keywords: ["开发者工具", "在线工具", "JSON格式化", "Base64", "正则表达式", "哈希", "devtools"],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "DevToolsHub",
  },
};

// Bing Webmaster 验证
declare global {
  interface Window {
    MSBingAsyncInit?: () => void;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: 'light' }}
    >
      <head>
        <meta name="msvalidate.01" content="F7A3875FF6BF44319CD8FCC299196B6C" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
