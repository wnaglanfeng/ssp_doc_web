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
      date: '2026-03-15',
      type: 'minor',
      features: [
        '新增鸿蒙HarmonyOS SDK支持，全面覆盖国产操作系统',
        '添加智能广告预加载机制，提升广告展示速度30%',
        '新增多维度数据分析报表，支持自定义事件追踪',
        '添加开发者调试模式，支持实时日志输出和性能监控'
      ],
      fixes: [
        '修复Android 14系统上积分墙偶尔无法关闭的问题',
        '修复iOS 17后台任务回调延迟的兼容性问题',
        '修复部分机型广告视频播放完成后回调丢失的问题'
      ],
      improvements: [
        '优化SDK初始化速度，减少50%的启动时间',
        '改进广告匹配算法，提升填充率和eCPM',
        '降低SDK包体积，Android AAR减少20%，iOS Framework减少15%'
      ]
    },
    {
      version: '2.3.1',
      date: '2026-02-20',
      type: 'patch',
      features: [
        '新增服务端回调签名验证，增强数据安全性',
        '添加支持自定义积分墙主题颜色'
      ],
      fixes: [
        '修复特定网络环境下HTTPS请求超时问题',
        '修复积分墙列表在某些分辨率下显示错位',
        '修复重复快速点击导致的重复计费问题'
      ],
      improvements: [
        '优化网络请求重试机制，提升弱网环境下的稳定性',
        '改进用户隐私合规检测，自动适配GDPR和个保法',
        '增强防作弊检测能力，识别更精准的异常行为'
      ]
    },
    {
      version: '2.3.0',
      date: '2026-01-25',
      type: 'minor',
      features: [
        '全新积分墙UI设计，支持列表/宫格双模式切换',
        '添加激励视频广告类型，支持全屏视频奖励',
        '新增用户等级体系，支持差异化奖励策略',
        '添加A/B测试功能，支持多广告策略对比'
      ],
      fixes: [
        '修复iPad横屏模式下积分墙布局异常',
        '修复部分广告源加载失败时的崩溃问题',
        '修复用户积分同步偶尔延迟的问题'
      ],
      improvements: [
        '优化广告缓存策略，减少流量消耗',
        '改进积分发放确认机制，确保100%准确到账',
        '提升SDK在低端设备上的运行性能'
      ]
    },
    {
      version: '2.2.0',
      date: '2025-12-18',
      type: 'minor',
      features: [
        '新增服务端S2S回调方式，支持更安全的积分发放',
        '添加用户行为分析功能，支持留存、活跃等关键指标',
        '新增多语言支持，内置中英日韩等8种语言',
        '添加支持Flutter、React Native、UniApp跨平台框架'
      ],
      fixes: [
        '修复Android ProGuard混淆后的反射调用失败',
        '修复iOS应用从后台恢复时积分墙状态异常',
        '修复部分广告平台SDK冲突问题'
      ],
      improvements: [
        '优化SDK内存占用，降低峰值内存30%',
        '改进广告加载优先级策略',
        '完善接入文档，新增更多代码示例'
      ]
    },
    {
      version: '2.1.0',
      date: '2025-11-10',
      type: 'minor',
      features: [
        '新增插屏广告类型，丰富变现形式',
        '添加Banner广告支持，支持多种尺寸',
        '新增用户画像功能，支持精准广告投放',
        '添加支持Android 15和iOS 18新系统'
      ],
      fixes: [
        '修复部分设备上WebView加载广告白屏问题',
        '修复积分墙关闭按钮在某些主题下不可见',
        '修复服务端时间校验偶尔失败的问题'
      ],
      improvements: [
        '优化广告加载超时处理逻辑',
        '改进错误提示信息，更友好的开发者体验',
        '提升广告展示转化率'
      ]
    },
    {
      version: '2.0.0',
      date: '2025-10-01',
      type: 'major',
      features: [
        '全新SDK架构设计，模块化拆分，按需集成',
        '支持Android、iOS、鸿蒙三端统一API',
        '添加实时数据看板，支持分钟级数据更新',
        '新增聚合广告能力，支持多平台广告源竞价'
      ],
      fixes: [
        '重构网络层，解决旧版本所有已知网络问题',
        '修复积分墙内存泄漏问题',
        '修复多线程并发导致的积分重复发放'
      ],
      improvements: [
        '完全重写开发者文档，结构更清晰',
        '优化SDK启动流程，减少主线程阻塞',
        '提升整体稳定性，崩溃率降低至0.01%以下'
      ],
      breakingChanges: [
        '初始化API变更，请参考v2迁移指南更新代码',
        '移除已废弃的回调接口，请使用新的Listener方式',
        '最低支持版本提升至Android 5.0和iOS 12'
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
                了解亘元有量SDK的最新版本更新，包括新功能、性能优化和问题修复。我们持续迭代，助力您的应用变现更高效。
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