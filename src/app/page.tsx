// src/app/page.tsx
'use client';
import './globals.css'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faPaintBrush, faCode } from '@fortawesome/free-solid-svg-icons';

const HomePage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 计算3D变换样式 - 轻微动效版本
  const get3DTransform = (elementX: number, elementY: number, depth: number = 20, isHeroArea: boolean = false) => {
    // 只有在英雄区域且鼠标在区域内才应用动效
    if (!isHeroArea && (Math.abs(mousePosition.x) < 0.1 && Math.abs(mousePosition.y) < 0.1)) {
      return { transform: 'none', transition: 'transform 0.3s ease-out' };
    }
    
    // 轻微动效：减少旋转角度和移动距离
    const sensitivity = isHeroArea ? 0.3 : 0.5; // 英雄区域更敏感
    const rotateX = mousePosition.y * depth * sensitivity;
    const rotateY = -mousePosition.x * depth * sensitivity;
    const translateZ = Math.abs(mousePosition.x + mousePosition.y) * 5; // 减少深度移动
    
    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
      transition: 'transform 0.2s ease-out'
    };
  };
  return (
    <div className="w-full">
      {/* 首页内容 */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <section className="relative min-h-[600px] bg-transparent overflow-hidden mt-6">
            {/* 背景装饰元素 */}
            <div className="absolute inset-0">
              {/* 几何装饰 */}
              <div className="absolute top-10 left-10 w-32 h-32 bg-red-200 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute bottom-20 right-16 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200 rounded-full opacity-15 blur-xl"></div>
              
              {/* 网格背景 */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-[600px] py-12">
              {/* 左侧文字内容 */}
              <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
                
                
                {/* 主标题 */}
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  积分墙变现
                  <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent"> SDK</span>
                </h1>
                
                {/* 副标题 */}
                <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
                  全端覆盖・积分墙领先｜亘元有量，变现更简单
                </p>
                
                {/* 行动按钮 */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="/doc" className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    立即开始
                  </a>
                  <a href="/doc" className="inline-flex items-center justify-center bg-white text-gray-800 px-8 py-4 text-lg font-semibold rounded-xl border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    查看文档
                  </a>
                </div>
                
                
              </div>
              <div className="flex justify-center items-center h-full" ref={containerRef}>
                <Image
                  src="/images/hero/bg_hero_right.svg"
                  alt="Hero Illustration"
                  width={500}
                  height={400}
                  className="h-auto object-contain transform-gpu"
                  style={get3DTransform(0, 0, 30, true) as React.CSSProperties}
                  priority
                />
              </div>
            
            </div>
          </section>

          {/* Features Section */}
          <section className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="text-red-600 text-3xl mb-4">
                  <FontAwesomeIcon icon={faRocket} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">快速集成</h3>
                <p className="text-gray-700">
                  5分钟完成SDK接入，支持Android、iOS、鸿蒙等多平台，降低开发成本。
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="text-red-600 text-3xl mb-4">
                  <FontAwesomeIcon icon={faPaintBrush} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">高转化率</h3>
                <p className="text-gray-700">
                  智能广告匹配算法，优化用户体验，提升广告转化率和收益。
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <div className="text-red-600 text-3xl mb-4">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">数据透明</h3>
                <p className="text-gray-700">
                  实时数据报表，收益明细一目了然，支持自定义数据导出。
                </p>
              </div>
            </div>
          </section>

          {/* Latest Updates Section */}
          <section className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">最新动态</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">版本 2.4.0 发布</h3>
                <p className="text-gray-700 mb-2">新增了 12 个组件，优化了主题系统性能。</p>
                <p className="text-sm text-gray-500">2026-02-28</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">设计资源更新</h3>
                <p className="text-gray-700 mb-2">新增 Figma 设计模板和图标库下载。</p>
                <p className="text-sm text-gray-500">2026-02-15</p>
              </div>
            </div>
          </section>

          {/* Quick Start Section */}
          <section className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">快速开始</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 第一步：下载 */}
              <div className="bg-gray-50 rounded-lg p-6 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 pl-4">下载 SDK</h3>
                <p className="text-gray-700 mb-4">获取最新版 SDK 开发包</p>
                <a 
                  href="https://cdn02.aso.igenyuan.com/sdk/gysdk-v0.1.aar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  下载 gysdk-v0.1.aar
                </a>
              </div>
              {/* 第二步：配置 */}
              <div className="bg-gray-50 rounded-lg p-6 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 pl-4">配置初始化</h3>
                <p className="text-gray-700 mb-4">在 Application 中初始化 SDK</p>
                <pre className="bg-gray-900 text-gray-100 px-3 py-2 rounded text-sm overflow-x-auto whitespace-pre-wrap break-all">
                  <code>{`GYSdk.init(context, "YOUR_APP_ID");`}</code>
                </pre>
              </div>
              {/* 第三步：启动 */}
              <div className="bg-gray-50 rounded-lg p-6 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 pl-4">启动积分墙</h3>
                <p className="text-gray-700 mb-4">调用接口展示积分墙</p>
                <pre className="bg-gray-900 text-gray-100 px-3 py-2 rounded text-sm overflow-x-auto whitespace-pre-wrap break-all">
                  <code>{`GYSdk.showOfferWall(context);`}</code>
                </pre>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a href="/doc/quick-start" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
                查看完整接入文档
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;