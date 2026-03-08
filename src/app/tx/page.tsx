// src/app/tx/page.tsx - 极简扁平化交易界面
'use client';

import React, { useState, useEffect } from 'react';

const TxPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 视觉差计算函数
  const getParallaxStyle = (speed: number = 0.5, baseOffset: number = 0) => {
    const translateY = scrollY * speed + baseOffset;
    return {
      transform: `translateY(${translateY}px)`,
      transition: 'transform 0.1s ease-out'
    };
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 bg-[length:20px_20px] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] overflow-hidden">
      <div className="flex items-center justify-center min-h-screen p-4 relative">
        
        {/* 背景视觉差元素 */}
        <div className="absolute inset-0 overflow-hidden">
          {/* 缓慢移动的背景圆点 */}
          <div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-20 blur-3xl"
            style={getParallaxStyle(0.2)}
          ></div>
          <div 
            className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-15 blur-3xl"
            style={getParallaxStyle(0.15)}
          ></div>
        </div>
        
        {/* 手机后方的堆叠卡片 - 视觉差效果 */}
        <div className="absolute -top-8 -left-8 transform rotate-6 z-0" style={getParallaxStyle(0.4)}>
          <div className="bg-gradient-to-br from-red-100 to-orange-100 w-64 h-40 rounded-2xl shadow-xl border border-white/50 p-4">
            <div className="text-sm font-semibold text-gray-800 mb-2">交易统计</div>
            <div className="space-y-2">
              <div className="h-4 bg-red-200 rounded-full"></div>
              <div className="h-4 bg-orange-200 rounded-full w-3/4"></div>
              <div className="h-4 bg-yellow-200 rounded-full w-1/2"></div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-12 -right-12 transform -rotate-3 z-0" style={getParallaxStyle(0.3)}>
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-56 h-32 rounded-2xl shadow-xl border border-white/50 p-4">
            <div className="text-sm font-semibold text-gray-800 mb-2">平台分布</div>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-green-300 rounded-lg"></div>
              <div className="w-8 h-8 bg-blue-300 rounded-lg"></div>
              <div className="w-8 h-8 bg-gray-400 rounded-lg"></div>
            </div>
          </div>
        </div>
        {/* 白色手机模型 - 方角设计 - 轻微视觉差 */}
        <div 
          className="relative w-80 bg-white rounded-lg shadow-2xl border-8 border-white overflow-hidden z-10 transform hover:scale-105 transition-transform duration-300"
          style={getParallaxStyle(0.1)}
        >
          
          {/* 手机左上角z维度层次卡片 */}
          <div className="absolute -top-8 -left-8 z-20">
            {/* 底层卡片 */}
            <div className="absolute -bottom-4 -right-4 w-28 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg shadow-lg border border-white/60 transform rotate-3"></div>
            
            {/* 中层卡片 */}
            <div className="absolute -bottom-2 -right-2 w-28 h-20 bg-gradient-to-br from-purple-300 to-pink-300 rounded-lg shadow-md border border-white/70 transform rotate-1"></div>
            
            {/* 顶层卡片 */}
            <div className="relative w-28 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg shadow-sm border border-white/80 p-3">
              <div className="text-sm font-semibold text-white mb-2">快捷操作</div>
              <div className="flex space-x-2">
                <div className="w-5 h-5 bg-white/30 rounded"></div>
                <div className="w-5 h-5 bg-white/30 rounded"></div>
                <div className="w-5 h-5 bg-white/30 rounded"></div>
              </div>
            </div>
          </div>

          {/* 手机状态栏 */}
          <div className="h-6 bg-gray-100 flex items-center justify-between px-4 text-xs text-gray-600">
            <span>9:41</span>
            <div className="flex space-x-1">
              <div className="w-1 h-3 bg-gray-400 rounded"></div>
              <div className="w-3 h-3 bg-gray-400 rounded"></div>
              <div className="w-5 h-3 bg-gray-400 rounded"></div>
            </div>
          </div>

          {/* 主要内容区域 */}
          <div className="p-4 space-y-4">
            {/* 4.1 顶部导航与展示区 */}
            <div className="space-y-3">
              {/* 灰色圆角矩形占位图 */}
              <div className="h-32 bg-gray-200 rounded-xl"></div>
              
              {/* 浅灰色功能按钮 */}
              <div className="h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* 4.2 核心功能与列表区 */}
            <div className="space-y-4">
              {/* 四列网格图标 */}
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  </div>
                ))}
              </div>

              {/* 分隔线 */}
              <div className="border-t border-gray-200"></div>

              {/* 底部混合列表 */}
              <div className="grid grid-cols-2 gap-3">
                {/* 左侧垂直方形图标列 */}
                <div className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-300 rounded"></div>
                    </div>
                  ))}
                </div>

                {/* 右侧椭圆形按钮列 */}
                <div className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <div className="w-20 h-6 bg-gray-300 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 右上角悬浮半透明操作窗 */}
          <div className="absolute top-16 right-4 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/50">
        
        {/* 手机前方的堆叠卡片 - 快速视觉差 */}
        <div className="absolute top-20 right-20 transform -rotate-6 z-20" style={getParallaxStyle(0.6)}>
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-48 h-24 rounded-2xl shadow-2xl border border-white/50 p-3">
            <div className="text-xs font-semibold text-gray-800">快速操作</div>
            <div className="flex space-x-1 mt-1">
              <div className="w-6 h-6 bg-green-300 rounded"></div>
              <div className="w-6 h-6 bg-emerald-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* 浮动视觉差装饰元素 */}
        <div className="absolute top-1/3 left-10 z-5" style={getParallaxStyle(0.8)}>
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full opacity-30 blur-xl"></div>
        </div>
        <div className="absolute bottom-1/4 right-20 z-5" style={getParallaxStyle(0.7)}>
          <div className="w-20 h-20 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-25 blur-xl"></div>
        </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
              </div>
              <div className="w-8 h-6 bg-gray-200 rounded flex items-center justify-center">
                <div className="w-3 h-2 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>

          {/* 左下角红色品牌标识 */}
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TxPage;