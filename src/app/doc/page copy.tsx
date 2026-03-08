// src/app/doc/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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

export default function DocPage() {
  const [copiedCode, setCopiedCode] = useState<number | null>(null);

  const handleCopyCode = (index: number) => {
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = [
    {
      title: '完整引入',
      code: `import { createApp } from 'vue'\nimport ElementPlus from 'element-plus'\nimport 'element-plus/dist/index.css'\n\nconst app = createApp(App)\napp.use(ElementPlus)\napp.mount('#app')`
    },
    {
      title: 'Volar 支持',
      code: `// tsconfig.json\n{\n  "compilerOptions": {\n    "types": ["element-plus/global"]\n  }\n}`
    },
    {
      title: '按需引入',
      code: `import { ElButton } from 'element-plus'\n\nexport default {\n  components: {\n    ElButton,\n  },\n}`
    }
  ];

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
                      className="w-full text-left px-3 py-2 rounded transition-colors flex items-center text-sm hover:bg-gray-100 text-gray-700"
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
        <div className="w-full px-4 mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">快速开始</h1>
          <p className="text-gray-600 mb-8">本节将介绍如何在项目中使用 亘元有量。</p>
          
          <div className="space-y-8">
            <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm max-w-4xl mx-auto">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">用法</h2>
              <p className="text-gray-700 mb-4">
                要在您的项目中使用 亘元有量，您需要先安装它。您可以使用 npm 或 yarn 来安装 亘元有量。
              </p>
              <div className="bg-gray-50 rounded-lg p-4 border border-yellow-200">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-900">{codeExamples[0].title}</h3>
                  <button
                    onClick={() => handleCopyCode(0)}
                    className="!rounded-button whitespace-nowrap px-3 py-1 text-sm bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    {copiedCode === 0 ? '已复制!' : '复制代码'}
                  </button>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
                  <code>{codeExamples[0].code.replace(/ElementPlus/g, '亘元有量')}</code>
                </pre>
              </div>
            </section>

            {/* 其他内容部分... */}
          </div>
        </div>
      </main>
    </div>
  );
}