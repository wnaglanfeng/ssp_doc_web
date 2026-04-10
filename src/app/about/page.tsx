// src/app/about/page.tsx
'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faRocket, faShieldAlt, faCode, faUsers, faComment } from '@fortawesome/free-solid-svg-icons';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
            <span className="text-4xl font-bold text-red-600">亘</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            关于亘元有量
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            河北亘元网络科技有限公司旗下品牌，专注于移动应用积分墙变现解决方案
          </p>
        </div>

        {/* 公司简介 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-1 h-6 bg-red-600 rounded-full mr-3"></span>
            公司简介
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              亘元有量是河北亘元网络科技有限公司的核心产品，我们是一支专注于移动应用变现技术的专业团队。
              致力于为开发者提供稳定、高效、易集成的积分墙变现SDK解决方案，助力应用实现商业价值最大化。
            </p>
            <p>
              我们的产品覆盖 Android、iOS、鸿蒙等主流平台，采用先进的广告匹配算法和数据分析技术，
              为开发者和广告主搭建高效、透明的合作桥梁。
            </p>
          </div>
        </div>

        {/* 核心优势 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                <FontAwesomeIcon icon={faRocket} className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">快速集成</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  5分钟完成SDK接入，提供完整的接入文档和示例代码，降低开发成本，快速上线变现。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">稳定可靠</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  99.9%服务可用性保障，多重容灾备份机制，确保变现服务持续稳定运行。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                <FontAwesomeIcon icon={faCode} className="text-green-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">技术领先</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  智能广告匹配算法，实时数据报表，支持自定义事件追踪和深度数据分析。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                <FontAwesomeIcon icon={faUsers} className="text-purple-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">专业服务</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  7×24小时技术支持，专属客户经理对接，提供从接入到运营的全流程服务。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 联系我们 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-1 h-6 bg-red-600 rounded-full mr-3"></span>
            联系我们
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">商务合作</p>
                <a href="mailto:service@igenyuan.com" className="text-gray-900 hover:text-red-600 transition-colors">
                  service@igenyuan.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                <FontAwesomeIcon icon={faPhone} className="text-gray-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">客服热线</p>
                <p className="text-gray-900">400-888-8888</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                <FontAwesomeIcon icon={faComment} className="text-gray-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">微信咨询</p>
                <p className="text-gray-900">niwalet999</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <a href="/doc" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
              查看技术文档
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}