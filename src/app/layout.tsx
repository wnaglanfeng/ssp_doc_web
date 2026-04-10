// src/app/layout.tsx
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// 配置 Font Awesome
config.autoAddCss = false

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: '亘元有量 - 积分墙流量变现解决方案',
    template: '%s | 亘元有量'
  },
  description: '高性能SDK集成，支持多平台积分墙接入与智能流量变现。提供Android、iOS、鸿蒙等多平台SDK，助力应用商业化成功。',
  keywords: '积分墙,流量变现,广告聚合,SDK,API,亘元有量,Android SDK,iOS SDK,鸿蒙SDK,广告变现',
  authors: [{ name: '亘元有量' }],
  creator: '亘元有量科技有限公司',
  publisher: '亘元有量科技有限公司',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.genyuan.com',
    siteName: '亘元有量',
    title: '亘元有量 - 积分墙流量变现解决方案',
    description: '高性能SDK集成，支持多平台积分墙接入与智能流量变现',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: '亘元有量 - 积分墙流量变现解决方案',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '亘元有量 - 积分墙流量变现解决方案',
    description: '高性能SDK集成，支持多平台积分墙接入与智能流量变现',
    images: ['/images/og-image.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://www.genyuan.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
      {/* <body>  className={inter.className}> */}
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}