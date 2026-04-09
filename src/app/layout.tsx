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
  title: '亘元有量 - 积分墙流量变现解决方案',
  description: '高性能SDK集成，支持多平台积分墙接入与智能流量变现',
  keywords: '积分墙,流量变现,广告聚合,SDK,API,亘元有量',
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