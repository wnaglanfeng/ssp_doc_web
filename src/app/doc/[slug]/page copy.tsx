// src/app/doc/[slug]/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const navigationItems = [
  { category: '设计', items: [
    { slug: 'quick-start', title: '快速开始' },
    { slug: 'design-principles', title: '设计原则' },
    { slug: 'color-system', title: '色彩系统' },
    { slug: 'typography', title: '字体排版' }
  ]},
  { category: '进阶', items: [
    { slug: 'internationalization', title: '国际化' },
    { slug: 'theme-customization', title: '主题定制' },
    { slug: 'accessibility', title: '无障碍访问' }
  ]},
  { category: '开发', items: [
    { slug: 'installation', title: '安装' },
    { slug: 'contribution', title: '贡献指南' },
    { slug: 'changelog', title: '更新日志' },
    { slug: 'api-reference', title: 'API参考' }
  ]}
];

const docContent = {
  'quick-start': {
    title: '快速开始',
    sections: [
      { id: 'installation', title: '安装', content: '安装组件库的详细步骤...' },
      { id: 'basic-usage', title: '基本用法', content: '组件库的基本使用方法...' },
      { id: 'advanced-features', title: '高级功能', content: '组件库的高级功能特性...' },
      { id: 'customization', title: '自定义配置', content: '如何自定义组件样式和配置...' }
    ]
  },
  'design-principles': {
    title: '设计原则',
    sections: [
      { id: 'consistency', title: '一致性', content: '保持设计语言的一致性...' },
      { id: 'accessibility', title: '可访问性', content: '确保所有用户都能使用...' },
      { id: 'performance', title: '性能优化', content: '优化组件性能的最佳实践...' }
    ]
  },
  'color-system': {
    title: '色彩系统',
    sections: [
      { id: 'primary-colors', title: '主色调', content: '定义和使用主色调...' },
      { id: 'secondary-colors', title: '辅助色', content: '辅助色彩的使用规范...' },
      { id: 'semantic-colors', title: '语义色', content: '语义化色彩的应用...' }
    ]
  },
  // ... 其他文档内容
};

export default function DocDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [copiedCode, setCopiedCode] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleCopyCode = (index: number) => {
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const currentDoc = docContent[slug as keyof typeof docContent] || {
    title: '文档未找到',
    sections: [{ id: 'not-found', title: '文档未找到', content: '该文档不存在或已被移除。' }]
  };

  const isActive = (itemSlug: string) => itemSlug === slug;

  // 滚动监听，高亮当前可见的章节
  useEffect(() => {
    const handleScroll = () => {
      const sections = currentDoc.sections || [];
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = sectionRefs.current[section.id];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.3) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始检查

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentDoc.sections]);

  // 平滑滚动到指定章节
  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offsetTop = element.offsetTop - 100; // 减去一些偏移量
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-1 w-full">
      {/* 左侧导航 */}
      <aside className="w-72 bg-white border-r border-gray-200 h-[calc(100vh-80px)] overflow-y-auto sticky top-20">
        <div className="pl-4 pr-2 py-4">
          {navigationItems.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2 pl-2 border-b border-gray-200 pb-2">
                {category.category}
              </h3>
              <ul className="space-y-1">
                {category.items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/doc/${item.slug}`}
                      className={`w-full text-left px-3 py-2 rounded transition-colors flex items-center text-sm ${
                        isActive(item.slug)
                          ? 'bg-red-50 text-red-600'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span className="truncate">{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      {/* 主要内容 */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="w-full px-4 mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentDoc.title}</h1>
          <p className="text-gray-600 mb-8">本节将介绍{currentDoc.title}相关内容。</p>
          
          <div className="space-y-8">
            {currentDoc.sections?.map((section, index) => (
              <section 
                key={section.id}
                id={section.id}
                ref={(el) => sectionRefs.current[section.id] = el}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-700 mb-4">
                  {section.content}
                </p>
                
                {/* 示例代码块 */}
                {index === 0 && (
                  <div className="bg-gray-50 rounded-lg p-4 border border-yellow-200 mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-gray-900">安装示例</h3>
                      <button
                        onClick={() => handleCopyCode(0)}
                        className="!rounded-button whitespace-nowrap px-3 py-1 text-sm bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
                      >
                        {copiedCode === 0 ? '已复制!' : '复制代码'}
                      </button>
                    </div>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
                      <code>{'npm install 亘元有量'}</code>
                    </pre>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* 右侧目录菜单 */}
      <aside className="w-64 bg-white border-l border-gray-200 sticky top-20 self-start h-[calc(100vh-80px)] overflow-y-auto">
        <div className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">本页目录</h3>
          <ul className="space-y-2">
            {currentDoc.sections?.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left text-sm transition-colors hover:text-red-600 ${
                    activeSection === section.id 
                      ? 'text-red-600 font-medium' 
                      : 'text-gray-700'
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}