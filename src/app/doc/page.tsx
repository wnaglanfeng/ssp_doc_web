'use client';

import React from 'react';
import Link from 'next/link';
import { getDocsByCategory } from '@/lib/markdown';

export default function DocPage() {
  const docsByCategory = getDocsByCategory();
  const [copiedCode, setCopiedCode] = React.useState<number | null>(null);

  const handleCopyCode = (index: number) => {
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = [
    {
      title: '完整引入',
      code: `import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')`
    },
    {
      title: '按需引入',
      code: `import { ElButton } from 'element-plus'

export default {
  components: {
    ElButton,
  },
}`
    }
  ];

  return (
    <div className="flex flex-1 w-full">
      {/* 左侧导航 */}
      <aside className="w-72 bg-white border-r border-gray-200 h-[calc(100vh-80px)] overflow-y-auto sticky top-20">
        <div className="pl-4 pr-2 py-4">
          {Object.entries(docsByCategory).map(([category, docs]) => (
            <div key={category} className="mb-6">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2 pl-2 border-b border-gray-200 pb-2">
                {category}
              </h3>
              <ul className="space-y-1">
                {docs.map((doc) => (
                  <li key={doc.slug}>
                    <Link
                      href={`/doc/${doc.slug}`}
                      className="w-full text-left px-3 py-2 rounded transition-colors flex items-center text-sm hover:bg-gray-100 text-gray-700"
                    >
                      <span className="truncate">{doc.title}</span>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">快速开始</h1>
          <p className="text-gray-600 mb-8">本节将介绍如何在项目中使用亘元有量组件库。</p>
          
          <div className="space-y-8">
            <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">用法</h2>
              <p className="text-gray-700 mb-4">
                要在您的项目中使用亘元有量，您需要先安装它。您可以使用 npm 或 yarn 来安装。
              </p>
              
              {codeExamples.map((example, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-yellow-200 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-gray-900">{example.title}</h3>
                    <button
                      onClick={() => handleCopyCode(index)}
                      className="!rounded-button whitespace-nowrap px-3 py-1 text-sm bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      {copiedCode === index ? '已复制!' : '复制代码'}
                    </button>
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
                    <code>{example.code}</code>
                  </pre>
                </div>
              ))}
            </section>

            <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start">
                <i className="fas fa-info-circle text-blue-600 mt-1 mr-3"></i>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">重要提示</h3>
                  <p className="text-blue-800">
                    请确保您的项目环境满足亘元有量的依赖要求。推荐使用 React 18.x 版本以获得最佳体验。
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}