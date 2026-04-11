'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, faDownload, faLaptopCode, faHistory, faTerminal, 
  faChartLine, faBug, faChartBar, faBlog, faEnvelope, faPhone, faMapMarkerAlt,
  faBullhorn, faPlug, faWallet, faHome, faBook, faInfoCircle, faGlobe, faCog
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faStackOverflow, faDiscord, faWeixin } from '@fortawesome/free-brands-svg-icons';
import type { FooterLink } from '@/types';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import CSDNIcon from './icons/CSDNIcon';
import ZhihuIcon from './icons/ZhihuIcon';
import JuejinIcon from './icons/JuejinIcon';
import SegmentFaultIcon from './icons/SegmentFaultIcon';
import DouyinIcon from './icons/DouyinIcon';
import XiaohongshuIcon from './icons/XiaohongshuIcon';
import BaijiahaoIcon from './icons/BaijiahaoIcon';
import SohuIcon from './icons/SohuIcon';

interface FooterProps {
  activeSection?: string;
}

// 图标映射
const iconMap: Record<string, IconDefinition> = {
  'fa-code': faCode,
  'fa-download': faDownload,
  'fa-laptop-code': faLaptopCode,
  'fa-history': faHistory,
  'fa-terminal': faTerminal,
  'fa-chart-line': faChartLine,
  'fa-bug': faBug,
  'fa-chart-bar': faChartBar,
  'fa-blog': faBlog,
  'fa-envelope': faEnvelope,
  'fa-phone': faPhone,
  'fa-map-marker-alt': faMapMarkerAlt,
  'fa-github': faGithub,
  'fa-stack-overflow': faStackOverflow,
  'fa-discord': faDiscord,
  'fa-bullhorn': faBullhorn,
  'fa-plug': faPlug,
  'fa-wallet': faWallet,
  'fa-home': faHome,
  'fa-book': faBook,
  'fa-info-circle': faInfoCircle,
  'fa-globe': faGlobe,
  'fa-cog': faCog,
};

const Footer: React.FC<FooterProps> = ({ activeSection = '首页' }) => {
  // 站点地图链接
  const sitemapLinks: FooterLink[] = [
    { name: '首页', href: '/', icon: 'fa-home' },
    { name: '技术文档', href: '/doc/quick-start', icon: 'fa-book' },
    { name: '更新日志', href: '/changelog', icon: 'fa-history' },
    { name: '关于我们', href: '/about', icon: 'fa-info-circle' },
    { name: '官网', href: 'https://www.fastobe.com', icon: 'fa-globe' },
    { name: '后台', href: 'https://admin.fastobe.com', icon: 'fa-cog' },
  ];

  // 技术资源链接
  const techResources: FooterLink[] = [
    { name: 'API文档', href: '/doc/quick-start', icon: 'fa-code' },
    { name: 'SDK下载', href: '/doc/quick-start', icon: 'fa-download' },
    { name: '示例代码', href: '/doc/quick-start', icon: 'fa-laptop-code' },
  ];

  // 社区链接（已改为直接使用 SVG 组件）
  // const communityLinks: FooterLink[] = [
  //   { name: 'CSDN', href: 'https://blog.csdn.net/berkoo?spm=1011.2124.3001.5343', icon: 'fa-code' },
  //   { name: '知乎', href: 'https://www.zhihu.com/people/educoo', icon: 'fa-question-circle' },
  // ];

  // 友情链接
  const friendLinks: FooterLink[] = [
    { name: 'React官方', href: 'https://reactjs.org' },
    { name: 'Next.js', href: 'https://nextjs.org' },
    { name: 'TypeScript', href: 'https://typescriptlang.org' },
    { name: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 主要内容区域 - 三列布局 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* 左侧 - 品牌信息和技术资源 */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 group">
              {/* Logo 高速穿越效果 - 火箭喷射 */}
              <div className="relative w-14 h-14">
                {/* 主体 Logo */}
                <img
                  src="/images/logo.svg"
                  alt="亘元有量"
                  className="w-14 h-14 relative z-20 transform group-hover:translate-x-1 group-hover:scale-105 transition-all duration-300"
                />
              </div>

              {/* 品牌文字 - 作为喷射背景 */}
              <div className="relative">
                {/* 火箭喷射气流 - 覆盖文字区域 */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-56 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-visible z-0">
                  {/* 核心火焰 - 最亮 */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-5 bg-gradient-to-r from-red-500/80 via-orange-400/60 to-transparent blur-sm animate-rocket-flame-1" />
                  {/* 中层火焰 */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-8 bg-gradient-to-r from-orange-500/50 via-yellow-400/30 to-transparent blur-md animate-rocket-flame-2" />
                  {/* 外层气流 */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-56 h-12 bg-gradient-to-r from-yellow-500/30 via-orange-300/20 to-transparent blur-lg animate-rocket-flame-3" />
                  {/* 粒子效果 */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-particle-1" />
                  <div className="absolute left-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full animate-particle-2" />
                  <div className="absolute left-12 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-400 rounded-full animate-particle-3" />
                </div>

                <h3 className="text-2xl font-bold text-white relative z-10">亘元有量</h3>
                <p className="text-gray-400 text-base relative z-10">积分墙变现SDK专家</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              专注于为开发者提供高性能、易集成的积分墙变现解决方案，
              助力应用商业化成功。
            </p>
            
            {/* 加入社区 */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">加入社区</h4>
              <div className="flex items-center space-x-3">
                <a
                  href="https://blog.csdn.net/berkoo?spm=1011.2124.3001.5343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-red-500/20"
                  title="CSDN"
                >
                  <CSDNIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://www.zhihu.com/people/educoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                  title="知乎"
                >
                  <ZhihuIcon className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-400/20"
                  title="掘金"
                >
                  <JuejinIcon className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-green-500/20"
                  title="思否"
                >
                  <SegmentFaultIcon className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-black/40"
                  title="抖音"
                >
                  <DouyinIcon className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-red-500/20"
                  title="小红书"
                >
                  <XiaohongshuIcon className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-red-600/20"
                  title="百家号"
                >
                  <BaijiahaoIcon className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/20"
                  title="搜狐"
                >
                  <SohuIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* 中间 - 站点地图和技术资源 */}
          <div className="space-y-6">
            {/* 站点地图 */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">站点地图</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {sitemapLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors text-sm py-1"
                  >
                    <FontAwesomeIcon icon={iconMap[link.icon || 'fa-code']} className="w-4 text-center" />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* 技术资源 */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">技术资源</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {techResources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors text-sm py-1"
                  >
                    <FontAwesomeIcon icon={iconMap[resource.icon || 'fa-code']} className="w-4 text-center" />
                    <span>{resource.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧 - 联系我们 */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">联系我们</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800">
                <div className="w-8 h-8 rounded-md bg-red-600 flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">邮箱</p>
                  <p className="text-white">service@igenyuan.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800">
                <div className="w-8 h-8 rounded-md bg-red-600 flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhone} className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">电话</p>
                  <p className="text-white">18931880683</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800">
                <div className="w-8 h-8 rounded-md bg-green-600 flex items-center justify-center">
                  <FontAwesomeIcon icon={faWeixin} className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">微信</p>
                  <p className="text-white">niwalet999</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 友情链接 */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <span className="text-sm font-medium text-gray-400">技术合作伙伴：</span>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-sm">
              {friendLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 底部备案信息 */}
        <div className="border-t border-gray-700 pt-4 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-500 text-xs">© 2023 河北亘元网络科技有限公司. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-xs text-gray-500">
              <a
                href="http://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                冀ICP备2022012649号-2
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                增值电信业务经营许可证: 冀B2-20230537
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;