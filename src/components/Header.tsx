// src/components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLanguage, faMoon, faSun, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import type { NavItem } from '@/types';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();
  
  const menuItems: NavItem[] = [
    { label: '首页', href: '/' },
    { label: '技术文档', href: '/doc/quick-start' },
    { label: '更新日志', href: '/changelog' },
    { label: '关于我们', href: '/about' },
    { label: '官网', href: 'https://www.fastobe.com', external: true },
    { label: '后台', href: 'https://admin.genyuan.com', external: true }
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    // 精确匹配或路径前缀匹配（但排除子路径的误匹配）
    if (href === '/doc/quick-start') {
      // 技术文档需要精确匹配或匹配/doc下的其他路径
      return pathname === href || pathname.startsWith('/doc/') && pathname !== '/doc';
    }
    return pathname === href || (href !== '/doc/quick-start' && pathname.startsWith(href));
  };

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-8 flex items-center justify-between sticky top-0 z-50 h-16">
      {/* Logo 区域 */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/images/logo.svg"
          alt="亘元有量 Logo"
          width={40}
          height={40}
          className="rounded-full object-cover"
          priority
        />
        <span className="text-xl font-bold text-red-600">亘元有量</span>
        <span className="text-gray-500 text-sm ml-2">2.4.0</span>
      </Link>

      {/* 导航菜单 */}
      <div className="flex items-center space-x-8">
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => {
            if (item.external) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!rounded-button whitespace-nowrap px-1 h-16 flex items-center text-sm font-medium transition-colors text-gray-700 hover:text-red-600"
                >
                  {item.label}
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1 text-xs" />
                </a>
              );
            } else {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`!rounded-button whitespace-nowrap px-1 h-16 flex items-center text-sm font-medium transition-colors relative ${
                    isActive(item.href)
                      ? 'header-tab-active'
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {item.label}
                </Link>
              );
            }
          })}
        </nav>

        {/* 右侧工具区域 */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-red-600 text-lg"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <button className="text-gray-700 hover:text-red-600 text-lg">
            <FontAwesomeIcon icon={faLanguage} />
          </button>
          <button
            onClick={toggleTheme}
            className="text-gray-700 hover:text-red-600 text-lg"
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;