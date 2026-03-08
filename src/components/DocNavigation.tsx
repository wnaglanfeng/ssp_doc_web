'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

export default function DocNavigation({ currentSlug }: { currentSlug: string }) {
    const pathname = usePathname();
    
    return (
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
                                            currentSlug === item.slug
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
    );
}