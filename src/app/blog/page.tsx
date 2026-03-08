// src/app/blog/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 20; // 每页20篇文章（4列×5行）

  const blogPosts = [
    {
      id: 1,
      title: '积分墙SDK集成最佳实践',
      excerpt: '分享我们在积分墙SDK集成过程中的经验总结和最佳实践，帮助开发者快速完成集成。',
      date: '2026-03-08',
      category: '技术教程',
      readTime: '5分钟',
      image: '/images/blog/sdk-integration.jpg',
      author: '技术团队'
    },
    {
      id: 2,
      title: '移动应用变现策略分析',
      excerpt: '深入分析当前移动应用变现的各种策略，比较不同变现模式的优缺点。',
      date: '2026-03-01',
      category: '行业分析',
      readTime: '8分钟',
      image: '/images/blog/monetization-strategy.jpg',
      author: '产品经理'
    },
    {
      id: 3,
      title: 'React Native集成SDK指南',
      excerpt: '详细讲解如何在React Native项目中集成我们的积分墙SDK，包含常见问题解决方案。',
      date: '2026-02-22',
      category: '技术教程',
      readTime: '6分钟',
      image: '/images/blog/react-native-guide.jpg',
      author: '前端工程师'
    },
    {
      id: 4,
      title: 'SDK性能优化技巧',
      excerpt: '分享我们在SDK性能优化方面的心得，帮助开发者提升应用性能。',
      date: '2026-02-15',
      category: '技术分享',
      readTime: '4分钟',
      image: '/images/blog/performance-optimization.jpg',
      author: '架构师'
    },
    {
      id: 5,
      title: 'Android应用变现实战',
      excerpt: '通过实际案例讲解Android应用中如何有效实现积分墙变现。',
      date: '2026-02-08',
      category: '实战案例',
      readTime: '7分钟',
      image: '/images/blog/android-monetization.jpg',
      author: 'Android工程师'
    },
    {
      id: 6,
      title: 'iOS应用广告优化策略',
      excerpt: '针对iOS平台的广告展示优化技巧和用户体验提升方案。',
      date: '2026-02-01',
      category: '技术分享',
      readTime: '5分钟',
      image: '/images/blog/ios-optimization.jpg',
      author: 'iOS工程师'
    },
    {
      id: 7,
      title: '跨平台开发中的变现方案',
      excerpt: '探讨在Flutter、React Native等跨平台框架下的变现实现方案。',
      date: '2026-01-25',
      category: '技术教程',
      readTime: '6分钟',
      image: '/images/blog/cross-platform.jpg',
      author: '全栈工程师'
    },
    {
      id: 8,
      title: '用户行为分析与变现',
      excerpt: '如何通过用户行为数据分析来优化变现策略，提升收益。',
      date: '2026-01-18',
      category: '数据分析',
      readTime: '8分钟',
      image: '/images/blog/user-behavior.jpg',
      author: '数据分析师'
    },
    {
      id: 9,
      title: 'SDK安全最佳实践',
      excerpt: '保障SDK安全性的重要措施和最佳实践方案。',
      date: '2026-01-11',
      category: '安全技术',
      readTime: '5分钟',
      image: '/images/blog/security-practices.jpg',
      author: '安全工程师'
    },
    {
      id: 10,
      title: '小程序变现新思路',
      excerpt: '探索小程序生态中的变现机会和创新模式。',
      date: '2026-01-04',
      category: '行业分析',
      readTime: '6分钟',
      image: '/images/blog/mini-program.jpg',
      author: '产品经理'
    },
    {
      id: 11,
      title: 'Unity游戏集成SDK教程',
      excerpt: 'Unity游戏引擎中集成积分墙SDK的完整指南。',
      date: '2025-12-28',
      category: '技术教程',
      readTime: '7分钟',
      image: '/images/blog/unity-integration.jpg',
      author: '游戏开发工程师'
    },
    {
      id: 12,
      title: '广告填充率优化策略',
      excerpt: '提升广告填充率的关键因素和优化方法。',
      date: '2025-12-21',
      category: '技术分享',
      readTime: '5分钟',
      image: '/images/blog/fill-rate.jpg',
      author: '广告优化师'
    },
    {
      id: 13,
      title: '海外市场变现经验',
      excerpt: '面向海外市场的应用变现策略和注意事项。',
      date: '2025-12-14',
      category: '实战案例',
      readTime: '8分钟',
      image: '/images/blog/overseas-market.jpg',
      author: '海外运营'
    },
    {
      id: 14,
      title: 'SDK版本管理规范',
      excerpt: '建立规范的SDK版本管理流程和发布策略。',
      date: '2025-12-07',
      category: '技术管理',
      readTime: '4分钟',
      image: '/images/blog/version-management.jpg',
      author: '技术经理'
    },
    {
      id: 15,
      title: '用户留存与变现平衡',
      excerpt: '如何在用户留存和变现收益之间找到最佳平衡点。',
      date: '2025-11-30',
      category: '数据分析',
      readTime: '6分钟',
      image: '/images/blog/retention-monetization.jpg',
      author: '数据分析师'
    },
    {
      id: 16,
      title: 'API接口设计原则',
      excerpt: '设计易用、稳定的SDK API接口的最佳实践。',
      date: '2025-11-23',
      category: '技术教程',
      readTime: '5分钟',
      image: '/images/blog/api-design.jpg',
      author: '后端工程师'
    },
    {
      id: 17,
      title: '移动广告趋势分析',
      excerpt: '2026年移动广告行业的发展趋势和机遇。',
      date: '2025-11-16',
      category: '行业分析',
      readTime: '7分钟',
      image: '/images/blog/ad-trends.jpg',
      author: '市场分析师'
    },
    {
      id: 18,
      title: '错误监控系统搭建',
      excerpt: '构建完善的SDK错误监控和报警系统。',
      date: '2025-11-09',
      category: '技术分享',
      readTime: '6分钟',
      image: '/images/blog/error-monitoring.jpg',
      author: '运维工程师'
    },
    {
      id: 19,
      title: '电商应用变现案例',
      excerpt: '电商类应用如何通过积分墙实现额外收益。',
      date: '2025-11-02',
      category: '实战案例',
      readTime: '5分钟',
      image: '/images/blog/e-commerce.jpg',
      author: '电商运营'
    },
    {
      id: 20,
      title: 'SDK测试自动化',
      excerpt: '实现SDK自动化测试的完整流程和工具链。',
      date: '2025-10-26',
      category: '技术管理',
      readTime: '4分钟',
      image: '/images/blog/test-automation.jpg',
      author: '测试工程师'
    },
    {
      id: 21,
      title: '用户画像与变现',
      excerpt: '基于用户画像的精准变现策略实施。',
      date: '2025-10-19',
      category: '数据分析',
      readTime: '6分钟',
      image: '/images/blog/user-profile.jpg',
      author: '数据科学家'
    },
    {
      id: 22,
      title: 'Web应用集成指南',
      excerpt: 'Web应用中集成积分墙SDK的技术方案。',
      date: '2025-10-12',
      category: '技术教程',
      readTime: '5分钟',
      image: '/images/blog/web-integration.jpg',
      author: '前端工程师'
    },
    {
      id: 23,
      title: '广告合规性要求',
      excerpt: '国内外广告合规性要求和最佳实践。',
      date: '2025-10-05',
      category: '行业分析',
      readTime: '7分钟',
      image: '/images/blog/ad-compliance.jpg',
      author: '法务专员'
    },
    {
      id: 24,
      title: '性能监控指标',
      excerpt: 'SDK性能监控的关键指标和监控方法。',
      date: '2025-09-28',
      category: '技术分享',
      readTime: '4分钟',
      image: '/images/blog/performance-metrics.jpg',
      author: '性能工程师'
    },
    {
      id: 25,
      title: '教育类应用变现',
      excerpt: '教育类应用的变现特点和成功案例分享。',
      date: '2025-09-21',
      category: '实战案例',
      readTime: '6分钟',
      image: '/images/blog/education-app.jpg',
      author: '教育产品经理'
    },
    {
      id: 26,
      title: '代码审查流程',
      excerpt: '建立高效的SDK代码审查流程和规范。',
      date: '2025-09-14',
      category: '技术管理',
      readTime: '5分钟',
      image: '/images/blog/code-review.jpg',
      author: '技术主管'
    },
    {
      id: 27,
      title: 'A/B测试在变现中的应用',
      excerpt: '利用A/B测试优化变现策略的方法。',
      date: '2025-09-07',
      category: '数据分析',
      readTime: '6分钟',
      image: '/images/blog/ab-testing.jpg',
      author: '数据产品经理'
    },
    {
      id: 28,
      title: 'Flutter集成SDK详解',
      excerpt: 'Flutter框架中集成SDK的完整步骤和注意事项。',
      date: '2025-08-31',
      category: '技术教程',
      readTime: '7分钟',
      image: '/images/blog/flutter-integration.jpg',
      author: 'Flutter工程师'
    },
    {
      id: 29,
      title: '隐私保护与变现平衡',
      excerpt: '在用户隐私保护和变现收益之间找到平衡。',
      date: '2025-08-24',
      category: '行业分析',
      readTime: '5分钟',
      image: '/images/blog/privacy-balance.jpg',
      author: '隐私专家'
    },
    {
      id: 30,
      title: 'SDK文档编写规范',
      excerpt: '编写高质量SDK技术文档的标准和技巧。',
      date: '2025-08-17',
      category: '技术分享',
      readTime: '4分钟',
      image: '/images/blog/documentation.jpg',
      author: '技术文档工程师'
    },
    {
      id: 31,
      title: '游戏应用变现优化',
      excerpt: '游戏类应用的变现特点和优化策略。',
      date: '2025-08-10',
      category: '实战案例',
      readTime: '6分钟',
      image: '/images/blog/game-monetization.jpg',
      author: '游戏策划'
    },
    {
      id: 32,
      title: '团队协作工具链',
      excerpt: 'SDK开发团队的协作工具和流程优化。',
      date: '2025-08-03',
      category: '技术管理',
      readTime: '5分钟',
      image: '/images/blog/team-collaboration.jpg',
      author: '项目经理'
    },
    {
      id: 33,
      title: '数据可视化分析',
      excerpt: '变现数据可视化分析和决策支持。',
      date: '2025-07-27',
      category: '数据分析',
      readTime: '6分钟',
      image: '/images/blog/data-visualization.jpg',
      author: '数据可视化工程师'
    },
    {
      id: 34,
      title: 'Cordova集成指南',
      excerpt: 'Cordova混合应用集成SDK的完整教程。',
      date: '2025-07-20',
      category: '技术教程',
      readTime: '5分钟',
      image: '/images/blog/cordova-integration.jpg',
      author: '混合开发工程师'
    },
    {
      id: 35,
      title: '广告创意优化',
      excerpt: '提升广告创意效果的关键因素和方法。',
      date: '2025-07-13',
      category: '行业分析',
      readTime: '4分钟',
      image: '/images/blog/ad-creative.jpg',
      author: '创意设计师'
    },
    {
      id: 36,
      title: 'SDK发布流程',
      excerpt: '规范的SDK发布流程和版本控制。',
      date: '2025-07-06',
      category: '技术分享',
      readTime: '5分钟',
      image: '/images/blog/release-process.jpg',
      author: '发布工程师'
    },
    {
      id: 37,
      title: '工具类应用变现',
      excerpt: '工具类应用的变现特点和成功经验。',
      date: '2025-06-29',
      category: '实战案例',
      readTime: '6分钟',
      image: '/images/blog/tool-app.jpg',
      author: '产品运营'
    },
    {
      id: 38,
      title: '技术债务管理',
      excerpt: 'SDK开发中的技术债务识别和管理策略。',
      date: '2025-06-22',
      category: '技术管理',
      readTime: '5分钟',
      image: '/images/blog/tech-debt.jpg',
      author: '架构师'
    },
    {
      id: 39,
      title: '预测分析在变现中的应用',
      excerpt: '利用机器学习预测用户变现潜力的方法。',
      date: '2025-06-15',
      category: '数据分析',
      readTime: '7分钟',
      image: '/images/blog/predictive-analysis.jpg',
      author: '机器学习工程师'
    },
    {
      id: 40,
      title: '原生应用集成对比',
      excerpt: 'iOS和Android原生应用集成SDK的差异对比。',
      date: '2025-06-08',
      category: '技术教程',
      readTime: '6分钟',
      image: '/images/blog/native-comparison.jpg',
      author: '移动开发专家'
    }
  ];

  // 计算总页数
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  
  // 获取当前页的文章
  const currentPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // 分页按钮处理
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            技术分享、行业分析和开发经验
          </p>
        </div>

        {/* 博客文章网格 - 4列布局 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* 文章预览图 */}
              <div className="h-40 bg-red-100 relative overflow-hidden group">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // 图片加载失败时显示占位符
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="text-center">
                          <div class="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-3">
                            <i class="fas fa-newspaper text-white text-2xl"></i>
                          </div>
                          <span class="text-gray-700 font-medium">文章预览图</span>
                        </div>
                      </div>
                    `;
                  }}
                />
                
                {/* 标题蒙层 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-sm line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </div>
                
                {/* 分类标签 */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block bg-white/90 text-red-600 text-xs px-2 py-1 rounded font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              {/* 文章内容 */}
              <div className="p-6">
                {/* 分类标签和元信息 */}
                <div className="flex flex-wrap items-center justify-between mb-3">
                  <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                {/* 文章标题 */}
                <h2 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-red-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                
                {/* 文章摘要 */}
                <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                
                {/* 文章底部信息 */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                      <i className="fas fa-user text-gray-600 text-xs"></i>
                    </div>
                    <span className="text-xs text-gray-500">{post.author}</span>
                  </div>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                
                {/* 阅读更多按钮 */}
                <Link 
                  href={`/blog/${post.id}`} 
                  className="mt-3 inline-flex items-center text-red-600 hover:text-red-700 font-medium text-xs transition-colors"
                >
                  阅读全文
                  <i className="fas fa-arrow-right ml-1 text-xs"></i>
                </Link>
                
              </div>
            </article>
          ))}
        </div>

        {/* 分页组件 */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            {/* 上一页按钮 */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <i className="fas fa-chevron-left mr-2"></i>
              上一页
            </button>
            
            {/* 页码按钮 */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  currentPage === page
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            
            {/* 下一页按钮 */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              下一页
              <i className="fas fa-chevron-right ml-2"></i>
            </button>
          </div>
        )}

        {/* 文章总数和分页信息 */}
        <div className="text-center mt-8 text-sm text-gray-500">
          共 {blogPosts.length} 篇文章 • 第 {currentPage} 页 / 共 {totalPages} 页
        </div>
      </div>
    </div>
  );
}