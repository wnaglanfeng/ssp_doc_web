'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, faDownload, faLaptopCode, faHistory, faTerminal, 
  faChartLine, faBug, faChartBar, faBlog, faEnvelope, faPhone, faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faStackOverflow, faDiscord } from '@fortawesome/free-brands-svg-icons';
import type { FooterLink } from '@/types';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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
};

const Footer: React.FC<FooterProps> = ({ activeSection = '首页' }) => {
  // 技术资源链接
  const techResources: FooterLink[] = [
    { name: 'API文档', href: '/doc/quick-start', icon: 'fa-code' },
    { name: 'SDK下载', href: '/doc/quick-start', icon: 'fa-download' },
    { name: '示例代码', href: '/doc/quick-start', icon: 'fa-laptop-code' },
    { name: '更新日志', href: '/changelog', icon: 'fa-history' },
  ];

  // 开发工具链接
  const devTools: FooterLink[] = [
    { name: '在线调试', href: '#', icon: 'fa-terminal' },
    { name: '性能测试', href: '#', icon: 'fa-chart-line' },
    { name: '错误监控', href: '#', icon: 'fa-bug' },
    { name: '数据统计', href: '#', icon: 'fa-chart-bar' },
  ];

  // 社区链接
  const communityLinks: FooterLink[] = [
    { name: 'GitHub', href: 'https://github.com', icon: 'fa-github' },
    { name: 'Stack Overflow', href: 'https://stackoverflow.com', icon: 'fa-stack-overflow' },
    { name: 'Discord', href: 'https://discord.com', icon: 'fa-discord' },
    { name: '技术博客', href: '/blog', icon: 'fa-blog' },
  ];

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
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">亘</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">亘元有量</h3>
                <p className="text-gray-400 text-sm">积分墙变现SDK专家</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              专注于为开发者提供高性能、易集成的积分墙变现解决方案，
              助力应用商业化成功。
            </p>
            
            {/* 技术资源链接 */}
            <div className="space-y-2">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">技术资源</h4>
              <div className="grid grid-cols-2 gap-2">
                {techResources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors text-sm"
                  >
                    <FontAwesomeIcon icon={iconMap[resource.icon || 'fa-code']} className="w-4 text-center" />
                    <span>{resource.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 中间 - 开发工具 */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">开发工具</h4>
            <div className="space-y-3">
              {devTools.map((tool, index) => (
                <a
                  key={index}
                  href={tool.href}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all group"
                >
                  <div className="w-8 h-8 rounded-md bg-red-600 flex items-center justify-center">
                    <FontAwesomeIcon icon={iconMap[tool.icon || 'fa-terminal']} className="text-white text-sm" />
                  </div>
                  <div>
                    <span className="text-white group-hover:text-red-300 transition-colors font-medium">
                      {tool.name}
                    </span>
                    <p className="text-gray-400 text-xs mt-1">在线工具和调试平台</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 右侧 - 社区和联系 */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">加入社区</h4>
            <div className="grid grid-cols-2 gap-4">
              {communityLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-2 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
                >
                  <FontAwesomeIcon icon={iconMap[link.icon || 'fa-github']} className="text-red-400" />
                  <span className="text-white font-medium">{link.name}</span>
                </a>
              ))}
            </div>
            
            {/* 联系信息 */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">联系我们</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-red-400" />
                  <span className="text-gray-400">contact@genyuan.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faPhone} className="text-red-400" />
                  <span className="text-gray-400">400-888-8888</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-400" />
                  <span className="text-gray-400">北京市朝阳区科技园区</span>
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
            <p className="text-gray-500 text-xs">© 2023 亘元有量科技有限公司. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-xs text-gray-500">
              <a 
                href="http://beian.miit.gov.cn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                京ICP备XXXXXXXX号-X
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                增值电信业务许可证：京B2-XXXXXXXX
              </a>
              <span>公安备案号：XXXXXXXXXX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;