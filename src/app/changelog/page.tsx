// src/app/changelog/page.tsx
'use client';

import React, { useState } from 'react';

interface Version {
  version: string;
  date: string;
  type: 'major' | 'minor' | 'patch';
  features: string[];
  fixes: string[];
  improvements: string[];
  breakingChanges?: string[];
}

export default function ChangelogPage() {
  const [selectedVersion, setSelectedVersion] = useState<string>('2.4.0');

  const versions: Version[] = [
    {
      version: '2.4.0',
      date: '2026-03-05',
      type: 'minor',
      features: [
        '新增组件库路由导航系统，支持单页应用导航',
        '添加技术文档动态路由支持，每个文档都有独立URL',
        '实现Header和Footer组件全局共享，提升用户体验',
        '新增响应式设计改进，优化移动端体验'
      ],
      fixes: [
        '修复主题切换时的样式闪烁问题',
        '修复移动端导航菜单显示异常',
        '修复代码复制功能在某些浏览器中的兼容性问题'
      ],
      improvements: [
        '优化页面加载性能，减少首次渲染时间',
        '改进导航菜单的交互体验',
        '提升代码高亮显示效果'
      ]
    },
    {
      version: '2.3.1',
      date: '2026-02-28',
      type: 'patch',
      features: [
        '新增国际化支持基础框架',
        '添加深色模式主题切换功能'
      ],
      fixes: [
        '修复组件库在IE浏览器中的兼容性问题',
        '修复某些组件样式在特定分辨率下的显示问题',
        '修复文档页面中的链接跳转错误'
      ],
      improvements: [
        '优化组件库打包体积，减少30%的包大小',
        '改进TypeScript类型定义，提供更好的开发体验',
        '提升组件库的测试覆盖率'
      ]
    },
    {
      version: '2.3.0',
      date: '2026-02-15',
      type: 'minor',
      features: [
        '新增12个基础UI组件',
        '添加主题定制系统，支持自定义配色方案',
        '实现组件库按需加载功能',
        '新增无障碍访问支持'
      ],
      fixes: [
        '修复表单组件验证逻辑错误',
        '修复导航组件在移动端的触摸事件问题',
        '修复图标库加载性能问题'
      ],
      improvements: [
        '优化组件动画性能',
        '改进文档网站搜索功能',
        '提升组件库的整体稳定性'
      ]
    },
    {
      version: '2.2.0',
      date: '2026-01-20',
      type: 'minor',
      features: [
        '新增数据可视化图表组件',
        '添加富文本编辑器组件',
        '实现文件上传组件',
        '新增图片裁剪组件'
      ],
      fixes: [
        '修复日期选择器时区问题',
        '修复表格组件排序功能异常',
        '修复模态框组件层级问题'
      ],
      improvements: [
        '优化组件库文档结构',
        '改进组件API设计一致性',
        '提升开发工具集成体验'
      ]
    },
    {
      version: '2.1.0',
      date: '2025-12-10',
      type: 'minor',
      features: [
        '新增表单验证系统',
        '添加数据表格组件',
        '实现树形控件组件',
        '新增步骤条组件'
      ],
      fixes: [
        '修复下拉菜单定位问题',
        '修复输入框焦点状态异常',
        '修复分页组件页码计算错误'
      ],
      improvements: [
        '优化组件库性能基准测试',
        '改进组件样式定制灵活性',
        '提升移动端适配效果'
      ]
    },
    {
      version: '2.0.0',
      date: '2025-11-01',
      type: 'major',
      features: [
        '全新设计的组件库架构',
        '基于React 18重构所有组件',
        '添加TypeScript完整支持',
        '实现模块化主题系统'
      ],
      fixes: [
        '修复所有已知的兼容性问题',
        '解决组件间样式冲突问题',
        '修复构建工具配置错误'
      ],
      improvements: [
        '完全重写组件库文档',
        '优化组件库打包策略',
        '提升开发体验和调试效率'
      ],
      breakingChanges: [
        '移除对React 16的支持，要求React 18+',
        '组件API全面重构，请参考迁移指南',
        '主题配置方式变更，需要更新配置'
      ]
    }
  ];

  const selectedVersionData = versions.find(v => v.version === selectedVersion) || versions[0];

  const getVersionBadgeColor = (type: string) => {
    switch (type) {
      case 'major': return 'bg-red-100 text-red-800 border-red-200';
      case 'minor': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'patch': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getVersionBadgeText = (type: string) => {
    switch (type) {
      case 'major': return '重大更新';
      case 'minor': return '功能更新';
      case 'patch': return '修复更新';
      default: return '其他更新';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* 全屏背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-100/20 via-transparent to-orange-100/20"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* 页面标题 - 固定在顶部 */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
                更新日志
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                了解 亘元有量 组件库的最新功能、改进和修复。我们持续优化产品，为您提供更好的开发体验。
              </p>
            </div>
          </div>
        </div>

        {/* 主要内容区域 - 全屏滚动 */}
        <div className="flex-1 flex">
          {/* 版本列表侧边栏 - 固定在左侧 */}
          <div className="w-80 bg-white/90 backdrop-blur-sm border-r border-gray-200 sticky top-20 self-start h-[calc(100vh-80px)] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">版本历史</h2>
              <div className="space-y-2">
                {versions.map((version) => (
                  <button
                    key={version.version}
                    onClick={() => setSelectedVersion(version.version)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                      selectedVersion === version.version
                        ? 'bg-gradient-to-r from-red-50 to-red-100 border border-red-200 shadow-sm'
                        : 'bg-white/50 border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-gray-900 text-lg">v{version.version}</span>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${getVersionBadgeColor(version.type)}`}>
                        {getVersionBadgeText(version.type)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{version.date}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 版本详情 - 占据剩余空间 */}
          <div className="flex-1 p-8 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              {/* 版本标题卡片 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 mb-8">
                <div className="p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-2">v{selectedVersionData.version}</h2>
                      <p className="text-lg text-gray-500">发布于 {selectedVersionData.date}</p>
                    </div>
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-base font-medium mt-4 sm:mt-0 ${getVersionBadgeColor(selectedVersionData.type)}`}>
                      {getVersionBadgeText(selectedVersionData.type)}
                    </span>
                  </div>
                </div>
              </div>

              {/* 版本内容 */}
              <div className="space-y-6">
                {/* 新功能 */}
                {selectedVersionData.features.length > 0 && (
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-8">
                    <h3 className="text-2xl font-semibold text-red-600 mb-6 flex items-center">
                      <i className="fas fa-plus-circle mr-3 text-2xl"></i>
                      新功能
                    </h3>
                    <ul className="space-y-4">
                      {selectedVersionData.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <i className="fas fa-check text-red-500 mt-1 mr-4 text-lg"></i>
                          <span className="text-gray-700 text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 修复 */}
                {selectedVersionData.fixes.length > 0 && (
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-8">
                    <h3 className="text-2xl font-semibold text-orange-600 mb-6 flex items-center">
                      <i className="fas fa-bug mr-3 text-2xl"></i>
                      修复
                    </h3>
                    <ul className="space-y-4">
                      {selectedVersionData.fixes.map((fix, index) => (
                        <li key={index} className="flex items-start">
                          <i className="fas fa-wrench text-orange-500 mt-1 mr-4 text-lg"></i>
                          <span className="text-gray-700 text-lg">{fix}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 改进 */}
                {selectedVersionData.improvements.length > 0 && (
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-8">
                    <h3 className="text-2xl font-semibold text-red-600 mb-6 flex items-center">
                      <i className="fas fa-rocket mr-3 text-2xl"></i>
                      改进
                    </h3>
                    <ul className="space-y-4">
                      {selectedVersionData.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start">
                          <i className="fas fa-star text-red-500 mt-1 mr-4 text-lg"></i>
                          <span className="text-gray-700 text-lg">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 重大变更 */}
                {selectedVersionData.breakingChanges && selectedVersionData.breakingChanges.length > 0 && (
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-red-200 p-8">
                    <h3 className="text-2xl font-semibold text-red-600 mb-6 flex items-center">
                      <i className="fas fa-exclamation-triangle mr-3 text-2xl"></i>
                      重大变更
                    </h3>
                    <div className="bg-orange-50/50 border border-orange-200 rounded-xl p-6">
                      <p className="text-orange-800 font-medium text-lg mb-4">
                        此版本包含不兼容的变更，升级前请仔细阅读：
                      </p>
                      <ul className="space-y-4">
                        {selectedVersionData.breakingChanges.map((change, index) => (
                          <li key={index} className="flex items-start">
                            <i className="fas fa-exclamation text-orange-500 mt-1 mr-4 text-lg"></i>
                            <span className="text-orange-800 text-lg">{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* 版本说明 */}
              <div className="mt-8 bg-blue-50/50 border border-blue-200 rounded-xl p-8">
                <div className="flex items-start">
                  <i className="fas fa-info-circle text-blue-600 mt-1 mr-4 text-2xl"></i>
                  <div>
                    <h4 className="font-semibold text-blue-900 text-xl mb-3">版本说明</h4>
                    <p className="text-blue-800 text-lg">
                      每个版本都经过严格测试，确保稳定性和兼容性。
                      建议在生产环境升级前，先在测试环境验证。
                      如遇问题，请参考文档或联系技术支持。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}