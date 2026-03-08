// src/lib/markdown.ts
// 文档类型定义
export interface DocMetadata {
  slug: string;
  title: string;
  description?: string;
  category: string;
  order: number;
}

// 文档目录结构
export const docStructure: DocMetadata[] = [
  {
    slug: 'quick-start',
    title: '快速开始',
    description: '快速上手使用亘元有量组件库',
    category: '设计',
    order: 1
  },
  {
    slug: 'design-principles',
    title: '设计原则',
    description: '了解组件库的设计理念和原则',
    category: '设计',
    order: 2
  },
  {
    slug: 'installation',
    title: '安装',
    description: '安装和配置组件库的详细步骤',
    category: '开发',
    order: 1
  },
  {
    slug: 'color-system',
    title: '色彩系统',
    description: '组件库的色彩规范和用法',
    category: '设计',
    order: 3
  },
  {
    slug: 'typography',
    title: '字体排版',
    description: '字体和排版规范',
    category: '设计',
    order: 4
  },
  {
    slug: 'internationalization',
    title: '国际化',
    description: '多语言支持和国际化配置',
    category: '进阶',
    order: 1
  },
  {
    slug: 'theme-customization',
    title: '主题定制',
    description: '自定义主题和样式',
    category: '进阶',
    order: 2
  },
  {
    slug: 'accessibility',
    title: '无障碍访问',
    description: '可访问性支持和最佳实践',
    category: '进阶',
    order: 3
  }
];

// 动态导入Markdown内容
export async function getDocContent(slug: string): Promise<string> {
  try {
    // 使用 raw-loader 导入 Markdown 文件
    const content = await import(`!!raw-loader!@/docs/${slug}.md`);
    return content.default;
  } catch (error) {
    console.error(`Error loading markdown file for ${slug}:`, error);
    return `# 文档未找到\n\n文档 "${slug}" 不存在或已被移除。\n\n[返回文档首页](/doc)`;
  }
}

// 获取文档元数据
export function getDocMetadata(slug: string): DocMetadata | undefined {
  return docStructure.find(doc => doc.slug === slug);
}

// 按分类分组文档
export function getDocsByCategory() {
  const categories: { [key: string]: DocMetadata[] } = {};
  
  docStructure.forEach(doc => {
    if (!categories[doc.category]) {
      categories[doc.category] = [];
    }
    categories[doc.category].push(doc);
  });
  
  return categories;
}