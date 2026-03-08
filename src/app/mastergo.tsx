// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果
import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
const [activeSection, setActiveSection] = useState('快速开始');
const [searchQuery, setSearchQuery] = useState('');
const [copiedCode, setCopiedCode] = useState<number | null>(null);
const [isDarkMode, setIsDarkMode] = useState(false);
const handleCopyCode = (index: number) => {
setCopiedCode(index);
setTimeout(() => setCopiedCode(null), 2000);
};
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
const navigationItems = [
{ category: '设计', items: ['快速开始', '设计原则', '色彩系统', '字体排版'] },
{ category: '进阶', items: ['国际化', '主题定制', '无障碍访问'] },
{ category: '开发', items: ['安装', '贡献指南', '更新日志', 'API参考'] }
];
const renderContent = () => {
switch(activeSection) {
case '快速开始':
return (
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
<section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
<h2 className="text-xl font-semibold text-gray-900 mb-4">Volar 支持</h2>
<p className="text-gray-700 mb-4">
如果您正在使用 Volar，请在 tsconfig.json 中添加以下配置以获得类型支持。
</p>
<div className="bg-gray-50 rounded-lg p-4 border border-yellow-200">
<div className="flex justify-between items-center mb-2">
<h3 className="font-medium text-gray-900">{codeExamples[1].title}</h3>
<button
onClick={() => handleCopyCode(1)}
className="!rounded-button whitespace-nowrap px-3 py-1 text-sm bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
>
{copiedCode === 1 ? '已复制!' : '复制代码'}
</button>
</div>
<pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
<code>{codeExamples[1].code}</code>
</pre>
</div>
</section>
<section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
<h2 className="text-xl font-semibold text-gray-900 mb-4">按需引入</h2>
<p className="text-gray-700 mb-4">
为了减小打包体积，您可以按需引入所需的组件。以下是按需引入的示例。
</p>
<div className="bg-gray-50 rounded-lg p-4 border border-yellow-200">
<div className="flex justify-between items-center mb-2">
<h3 className="font-medium text-gray-900">{codeExamples[2].title}</h3>
<button
onClick={() => handleCopyCode(2)}
className="!rounded-button whitespace-nowrap px-3 py-1 text-sm bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
>
{copiedCode === 2 ? '已复制!' : '复制代码'}
</button>
</div>
<pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
<code>{codeExamples[2].code.replace(/ElButton/g, '亘元有量Button').replace(/element-plus/g, '亘元有量')}</code>
</pre>
</div>
</section>
<section className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-4xl mx-auto">
<div className="flex items-start">
<i className="fas fa-info-circle text-blue-600 mt-1 mr-3"></i>
<div>
<h3 className="font-semibold text-blue-900 mb-1">重要提示</h3>
<p className="text-blue-800">
请确保您的项目环境满足 亘元有量 的依赖要求。推荐使用 React 18.x 版本以获得最佳体验。
</p>
</div>
</div>
</section>
</div>
);
case '指南':
return (
<div className="space-y-8">
<section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm max-w-6xl mx-auto">
<h2 className="text-2xl font-bold text-gray-900 mb-6">布局系统指南</h2>
<div className="grid grid-cols-3 gap-6">
<div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
<h3 className="text-lg font-semibold text-gray-800 mb-3">左侧导航</h3>
<p className="text-gray-700 mb-4">
左侧通常用于放置主要导航菜单，提供对整个系统的访问入口。保持导航简洁明了，层级不超过3级。
</p>
<div className="bg-white p-3 rounded border border-gray-300">
<p className="text-sm text-gray-600">示例代码：</p>
<pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs mt-2 overflow-x-auto">
{`<aside className="w-64 bg-white border-r">
{/* 导航内容 */}
</aside>`}
</pre>
</div>
</div>
<div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
<h3 className="text-lg font-semibold text-gray-800 mb-3">中间内容区</h3>
<p className="text-gray-700 mb-4">
中间区域是页面的核心内容展示区，宽度建议在800-1200px之间，保持足够的阅读空间同时避免过长的行宽。
</p>
<div className="bg-white p-3 rounded border border-gray-300">
<p className="text-sm text-gray-600">示例代码：</p>
<pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs mt-2 overflow-x-auto">
{`<main className="flex-1 p-8">
{/* 主要内容 */}
</main>`}
</pre>
</div>
</div>
<div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
<h3 className="text-lg font-semibold text-gray-800 mb-3">右侧辅助区</h3>
<p className="text-gray-700 mb-4">
右侧区域适合放置辅助信息、快捷操作或相关内容推荐。宽度建议在200-300px之间，保持页面平衡。
</p>
<div className="bg-white p-3 rounded border border-gray-300">
<p className="text-sm text-gray-600">示例代码：</p>
<pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs mt-2 overflow-x-auto">
{`<aside className="w-72 bg-white border-l">
{/* 辅助内容 */}
</aside>`}
</pre>
</div>
</div>
</div>
</section>
<section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm max-w-6xl mx-auto">
<h2 className="text-2xl font-bold text-gray-900 mb-4">最佳实践</h2>
<div className="grid grid-cols-2 gap-6">
<div className="border border-gray-200 rounded-lg p-4">
<h3 className="text-lg font-semibold text-gray-800 mb-2">响应式设计</h3>
<p className="text-gray-700">
在移动设备上，左侧导航可以折叠或转换为汉堡菜单，右侧辅助区可以下移到主要内容下方。
</p>
</div>
<div className="border border-gray-200 rounded-lg p-4">
<h3 className="text-lg font-semibold text-gray-800 mb-2">视觉层次</h3>
<p className="text-gray-700">
通过间距、颜色和字体大小建立清晰的视觉层次，帮助用户快速理解页面结构和内容优先级。
</p>
</div>
</div>
</section>
</div>
);
case '组件':
return (
<div className="space-y-8">
<section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm max-w-4xl mx-auto">
<h2 className="text-2xl font-bold text-gray-900 mb-4">组件概览</h2>
<p className="text-gray-700 mb-4">
亘元有量 提供了丰富的 UI 组件，涵盖了从基础输入控件到复杂数据展示的各种需求。每个组件都经过精心设计和测试，确保在不同场景下的稳定性和可用性。
</p>
<div className="grid grid-cols-2 gap-6">
<div className="border border-gray-200 rounded-lg p-4">
<h3 className="font-semibold text-gray-800 mb-2">基础组件</h3>
<p className="text-gray-600 text-sm">按钮、图标、输入框等基础元素</p>
</div>
<div className="border border-gray-200 rounded-lg p-4">
<h3 className="font-semibold text-gray-800 mb-2">数据展示</h3>
<p className="text-gray-600 text-sm">表格、卡片、标签等信息展示组件</p>
</div>
<div className="border border-gray-200 rounded-lg p-4">
<h3 className="font-semibold text-gray-800 mb-2">反馈组件</h3>
<p className="text-gray-600 text-sm">模态框、通知、加载等反馈组件</p>
</div>
<div className="border border-gray-200 rounded-lg p-4">
<h3 className="font-semibold text-gray-800 mb-2">导航组件</h3>
<p className="text-gray-600 text-sm">导航栏、面包屑、侧边栏等导航组件</p>
</div>
</div>
</section>
</div>
);
case '资源':
return (
<div className="space-y-8">
<section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm max-w-4xl mx-auto">
<h2 className="text-2xl font-bold text-gray-900 mb-4">设计资源</h2>
<p className="text-gray-700 mb-4">
我们为设计师提供了丰富的资源，包括 Sketch 和 Figma 文件、设计规范文档以及图标库，帮助您在设计阶段就能与开发团队保持一致性。
</p>
<div className="grid grid-cols-3 gap-4">
<div className="border border-gray-200 rounded-lg p-4 text-center">
<i className="fas fa-paint-brush text-3xl text-red-600 mb-3"></i>
<h3 className="font-semibold text-gray-800 mb-1">设计系统</h3>
<p className="text-gray-600 text-sm">完整的视觉规范</p>
</div>
<div className="border border-gray-200 rounded-lg p-4 text-center">
<i className="fas fa-download text-3xl text-red-600 mb-3"></i>
<h3 className="font-semibold text-gray-800 mb-1">模板下载</h3>
<p className="text-gray-600 text-sm">常用页面模板</p>
</div>
<div className="border border-gray-200 rounded-lg p-4 text-center">
<i className="fas fa-book text-3xl text-red-600 mb-3"></i>
<h3 className="font-semibold text-gray-800 mb-1">文档中心</h3>
<p className="text-gray-600 text-sm">详细使用说明</p>
</div>
</div>
</section>
<section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm max-w-4xl mx-auto">
<h2 className="text-2xl font-bold text-gray-900 mb-4">开发资源</h2>
<p className="text-gray-700 mb-4">
除了 UI 组件库，我们还提供了开发工具、代码示例和插件，帮助开发者提高工作效率和代码质量。
</p>
<div className="grid grid-cols-3 gap-4">
<div className="border border-gray-200 rounded-lg p-4 text-center">
<i className="fas fa-code text-3xl text-red-600 mb-3"></i>
<h3 className="font-semibold text-gray-800 mb-1">代码示例</h3>
<p className="text-gray-600 text-sm">实用的代码片段</p>
</div>
<div className="border border-gray-200 rounded-lg p-4 text-center">
<i className="fas fa-plug text-3xl text-red-600 mb-3"></i>
<h3 className="font-semibold text-gray-800 mb-1">插件扩展</h3>
<p className="text-gray-600 text-sm">增强功能插件</p>
</div>
<div className="border border-gray-200 rounded-lg p-4 text-center">
<i className="fas fa-tools text-3xl text-red-600 mb-3"></i>
<h3 className="font-semibold text-gray-800 mb-1">开发工具</h3>
<p className="text-gray-600 text-sm">辅助开发工具</p>
</div>
</div>
</section>
</div>
);
case '关于':
return (
<div className="space-y-8">
<section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm max-w-4xl mx-auto">
<h2 className="text-2xl font-bold text-gray-900 mb-4">关于 亘元有量</h2>
<p className="text-gray-700 mb-4">
亘元有量 是一个现代化的 UI 组件库，专注于为开发者提供高质量、易用性强的界面组件。我们的目标是帮助团队快速构建美观、一致的用户界面。
</p>
<h3 className="text-xl font-semibold text-gray-800 mb-3">我们的使命</h3>
<p className="text-gray-700 mb-4">
通过提供优秀的组件库和设计系统，降低界面开发门槛，提升产品质量和用户体验，让开发者能够专注于业务逻辑的实现。
</p>
<h3 className="text-xl font-semibold text-gray-800 mb-3">发展历程</h3>
<p className="text-gray-700 mb-4">
自 2023 年成立以来，亘元有量 已经经历了多个版本的迭代，不断优化和完善组件功能，得到了众多开发者的认可和支持。
</p>
</section>
<section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm max-w-4xl mx-auto">
<h2 className="text-2xl font-bold text-gray-900 mb-4">团队介绍</h2>
<p className="text-gray-700 mb-4">
我们的团队由经验丰富的设计师和开发者组成，致力于打造最优质的 UI 组件库。每一位团队成员都在各自的领域有着深厚的专业知识和实践经验。
</p>
<div className="grid grid-cols-3 gap-6">
<div className="text-center">
<img src="https://ai-public.mastergo.com/ai/img_res/1772629519677a3K9mP2xQ7vN4rT8wY.jpg" alt="设计师" className="w-20 h-20 rounded-full mx-auto mb-3 object-cover" />
<h3 className="font-semibold text-gray-800">张伟</h3>
<p className="text-gray-600 text-sm">首席设计师</p>
</div>
<div className="text-center">
<img src="https://ai-public.mastergo.com/ai/img_res/1772629519677x7mN2pQ9kL4rT6wY1zA.jpg" alt="开发者" className="w-20 h-20 rounded-full mx-auto mb-3 object-cover" />
<h3 className="font-semibold text-gray-800">李娜</h3>
<p className="text-gray-600 text-sm">前端负责人</p>
</div>
<div className="text-center">
<img src="https://ai-public.mastergo.com/ai/img_res/1772629519677K2jH5nM8pQ3rT7wY9zA1c.jpg" alt="产品经理" className="w-20 h-20 rounded-full mx-auto mb-3 object-cover" />
<h3 className="font-semibold text-gray-800">王强</h3>
<p className="text-gray-600 text-sm">产品负责人</p>
</div>
</div>
</section>
</div>
);
case '首页':
return (
<div className="space-y-8">
<section className="relative h-[500px] bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl overflow-hidden mt-4">
<div className="absolute inset-0 z-0">
<img
src="https://ai-public.mastergo.com/ai/img_res/1772630034114a3K9mP2xQ7vN4rT8wY.jpg"
alt="Tech background"
className="w-full h-full object-cover opacity-50"
/>
</div>
<div className="relative z-10 h-full flex flex-col justify-center px-12">
<h1 className="text-5xl font-bold text-gray-900 mb-4">欢迎使用 亘元有量</h1>
<p className="text-xl text-gray-700 mb-8 max-w-2xl">
一个现代化的 UI 组件库，帮助您快速构建美观、一致的用户界面。
</p>
<div className="flex space-x-4">
<button className="!rounded-button whitespace-nowrap bg-red-600 text-white px-6 py-3 text-lg hover:bg-red-700 transition-colors">
开始使用
</button>
<button className="!rounded-button whitespace-nowrap bg-white text-gray-800 px-6 py-3 text-lg border border-gray-300 hover:bg-gray-50 transition-colors">
查看文档
</button>
</div>
</div>
</section>
<section className="grid grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
<div className="text-red-600 text-3xl mb-4">
<i className="fas fa-rocket"></i>
</div>
<h3 className="text-xl font-semibold text-gray-800 mb-2">快速开发</h3>
<p className="text-gray-700">
丰富的预制组件，帮助您快速搭建界面原型，缩短开发周期。
</p>
</div>
<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
<div className="text-red-600 text-3xl mb-4">
<i className="fas fa-paint-brush"></i>
</div>
<h3 className="text-xl font-semibold text-gray-800 mb-2">设计一致</h3>
<p className="text-gray-700">
严格的设计规范，确保产品在不同平台和设备上保持一致的视觉体验。
</p>
</div>
<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
<div className="text-red-600 text-3xl mb-4">
<i className="fas fa-cogs"></i>
</div>
<h3 className="text-xl font-semibold text-gray-800 mb-2">可定制</h3>
<p className="text-gray-700">
灵活的样式变量和主题系统，满足不同品牌和产品的个性化需求。
</p>
</div>
</section>
<section className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
<h2 className="text-2xl font-bold text-gray-900 mb-6">最新动态</h2>
<div className="grid grid-cols-2 gap-6">
<div className="border-l-4 border-red-600 pl-4">
<h3 className="text-lg font-semibold text-gray-800 mb-2">版本 2.4.0 发布</h3>
<p className="text-gray-700 mb-2">新增了 12 个组件，优化了主题系统性能。</p>
<p className="text-sm text-gray-500">2026-02-28</p>
</div>
<div className="border-l-4 border-red-600 pl-4">
<h3 className="text-lg font-semibold text-gray-800 mb-2">设计资源更新</h3>
<p className="text-gray-700 mb-2">新增 Figma 设计模板和图标库下载。</p>
<p className="text-sm text-gray-500">2026-02-15</p>
</div>
</div>
</section>
</div>
);
default:
return (
<div className="flex items-center justify-center h-64 bg-gray-50 rounded-xl border border-gray-200">
<p className="text-gray-500 text-lg">内容待填充 - {activeSection}</p>
</div>
);
}
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
<div className="min-h-screen bg-white flex flex-col">
{/* Top Navigation */}
<header className="bg-white border-b border-gray-200 py-4 px-8 flex items-center justify-between sticky top-0 z-50 h-16">
<div className="flex items-center space-x-2">
<img
src="http://cdn.yesapi.fastobe.com/snapshot_20260304162516_980035d24db620855685765e2b30fe4b.jpg"
alt="亘元有量 Logo"
className="w-10 h-10 rounded-full object-cover"
/>
<span className="text-xl font-bold text-red-600">亘元有量</span>
<span className="text-gray-500 text-sm ml-2">2.4.0</span>
</div>
<div className="flex items-center space-x-8">
<nav className="hidden md:flex space-x-6">
{['首页', '技术文档', '更新日志', '协议条款', '官网', '后台'].map((item) => (
item === '官网' || item === '后台' ? (
<a
key={item}
href={item === '官网' ? 'https://www.example.com' : 'https://admin.example.com'}
target="_blank"
rel="noopener noreferrer"
className="!rounded-button whitespace-nowrap px-1 h-16 flex items-center text-sm font-medium transition-colors text-gray-700 hover:text-red-600"
>
{item}
<i className="fas fa-external-link-alt ml-1 text-xs"></i>
</a>
) : (
<button
key={item}
onClick={(e) => {
e.preventDefault();
setActiveSection(item === '技术文档' ? '快速开始' : item);
}}
className={`!rounded-button whitespace-nowrap px-1 h-16 flex items-center text-sm font-medium transition-colors relative ${
activeSection === item || (item === '技术文档' && activeSection === '快速开始')
? 'text-red-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600 after:rounded-full'
: 'text-gray-700 hover:text-red-600'
}`}
>
{item}
</button>
)
))}
</nav>
<div className="flex items-center space-x-4">
<a
href="https://github.com"
target="_blank"
rel="noopener noreferrer"
className="text-gray-700 hover:text-red-600"
>
<i className="fab fa-github"></i>
</a>
<button className="text-gray-700 hover:text-red-600">
<i className="fas fa-language"></i>
</button>
<button
onClick={toggleTheme}
className="text-gray-700 hover:text-red-600"
>
<i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
</button>
</div>
</div>
</header>
<div className="flex flex-1 w-full">
{activeSection === '快速开始' && (
<aside className="w-72 bg-white border-r border-gray-200 h-[calc(100vh-80px)] overflow-y-auto sticky top-20">
<div className="pl-4 pr-2 py-4">
{navigationItems.map((category, index) => (
<div key={index} className="mb-6">
<h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2 pl-2 border-b border-gray-200 pb-2">{category.category}</h3>
<ul className="space-y-1">
{category.items.map((item, itemIndex) => (
<li key={itemIndex}>
<button
onClick={() => setActiveSection(item)}
className={`w-full text-left px-3 py-2 rounded transition-colors flex items-center text-sm ${
activeSection === item
? 'bg-red-50 text-red-600'
: 'hover:bg-gray-100 text-gray-700'
}`}
>
<span className="truncate">{item}</span>
</button>
</li>
))}
</ul>
</div>
))}
</div>
</aside>
)}
{/* Mobile Navigation Button */}
<div className="md:hidden fixed bottom-4 right-4 z-50">
<button
className="!rounded-button whitespace-nowrap bg-red-600 text-white p-3 shadow-lg"
onClick={() => document.getElementById('mobile-nav')?.classList.toggle('hidden')}
>
<i className="fas fa-bars"></i>
</button>
</div>
{/* Mobile Navigation Panel */}
<div
id="mobile-nav"
className="fixed inset-0 bg-black bg-opacity-50 z-40 hidden md:hidden"
>
<div className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl">
<div className="p-4">
<button
className="!rounded-button whitespace-nowrap mb-4 bg-gray-200 p-2"
onClick={() => document.getElementById('mobile-nav')?.classList.add('hidden')}
>
<i className="fas fa-times"></i>
</button>
{navigationItems.map((category, index) => (
<div key={index} className="mb-6">
<h3 className="text-lg font-bold text-gray-900 mb-2">{category.category}</h3>
<ul>
{category.items.map((item, itemIndex) => (
<li key={itemIndex}>
<button
onClick={() => {
setActiveSection(item);
if (activeSection !== '技术文档') {
document.getElementById('mobile-nav')?.classList.add('hidden');
}
}}
className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center ${
activeSection === item
? 'bg-red-50 text-red-600 border-l-4 border-red-600'
: 'hover:bg-gray-100 text-gray-700'
}`}
>
{item}
</button>
</li>
))}
</ul>
</div>
))}
</div>
</div>
</div>
{/* Main Content */}
<main className={`flex-1 p-8 overflow-y-auto ${activeSection === '首页' ? 'max-w-7xl mx-auto' : ''}`}>
<div className={`${activeSection === '首页' || activeSection !== '快速开始' ? '' : 'w-full px-4 mx-auto'}`}>
<h1 className="text-3xl font-bold text-gray-900 mb-2">{activeSection}</h1>
{activeSection !== '首页' && <p className="text-gray-600 mb-8">本节将介绍如何在项目中使用 亘元有量。</p>}
{renderContent()}
</div>
</main>
{/* Right Sidebar */}
{activeSection === '快速开始' && (
<aside className="w-64 bg-white border-l border-gray-200 sticky top-20 self-start">
<div className="p-6">
<h3 className="font-semibold text-gray-900 mb-4">目录</h3>
<ul className="space-y-2">
<li><a href="#usage" className="text-red-600 hover:underline">用法</a></li>
<li><a href="#volar" className="text-gray-700 hover:text-red-600 hover:underline">Volar 支持</a></li>
<li><a href="#on-demand" className="text-gray-700 hover:text-red-600 hover:underline">按需引入</a></li>
<li><a href="#important" className="text-gray-700 hover:text-red-600 hover:underline">重要提示</a></li>
</ul>
</div>
</aside>
)}
{/* Mobile TOC Button */}
<div className="lg:hidden fixed bottom-4 right-16 z-50">
<button
className="!rounded-button whitespace-nowrap bg-red-600 text-white p-3 shadow-lg"
onClick={() => document.getElementById('mobile-toc')?.classList.toggle('hidden')}
>
<i className="fas fa-list"></i>
</button>
</div>
{/* Mobile TOC Panel */}
<div
id="mobile-toc"
className="fixed inset-0 bg-black bg-opacity-50 z-40 hidden lg:hidden"
>
<div className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-xl">
<div className="p-4">
<button
className="!rounded-button whitespace-nowrap mb-4 bg-gray-200 p-2"
onClick={() => document.getElementById('mobile-toc')?.classList.add('hidden')}
>
<i className="fas fa-times"></i>
</button>
<h3 className="font-semibold text-gray-900 mb-4">目录</h3>
<ul className="space-y-2">
<li><a href="#usage" className="block text-red-600 hover:underline py-2">用法</a></li>
<li><a href="#volar" className="block text-gray-700 hover:text-red-600 hover:underline py-2">Volar 支持</a></li>
<li><a href="#on-demand" className="block text-gray-700 hover:text-red-600 hover:underline py-2">按需引入</a></li>
<li><a href="#important" className="block text-gray-700 hover:text-red-600 hover:underline py-2">重要提示</a></li>
</ul>
</div>
</div>
</div>
</div>
{/* Footer */}
<footer className="bg-gray-50 border-t border-gray-200 py-8 px-8">
<div className={`${activeSection === '首页' ? 'max-w-7xl' : 'max-w-4xl'} mx-auto flex flex-col md:flex-row justify-between items-center`}>
<div className="flex items-center space-x-6 mb-4 md:mb-0">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
<span className="text-white font-bold text-sm">亘</span>
</div>
<span className="text-lg font-semibold text-red-600">亘元有量</span>
</div>
<p className="text-gray-600 text-sm">© 2023 亘元有量. All rights reserved.</p>
</div>
<div className="flex space-x-6">
<a href="#" className="text-gray-600 hover:text-red-600">
<i className="fab fa-github"></i>
</a>
<a href="#" className="text-gray-600 hover:text-red-600">
<i className="fab fa-discord"></i>
</a>
<a href="#" className="text-gray-600 hover:text-red-600">
<i className="fab fa-twitter"></i>
</a>
<a href="#" className="text-gray-600 hover:text-red-600">
<i className="fab fa-stack-overflow"></i>
</a>
</div>
</div>
</footer>
</div>
);
};
export default App