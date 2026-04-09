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
    title: '快速接入',
    description: '快速接入',
    category: '快速接入',
    order: 1
  },
  {
    slug: 'ready-apply-account',
    title: '申请亘元有量账户',
    description: '申请亘元有量的账户',
    category: '准备',
    order: 1
  },
  {
    slug: 'ready-login-create-media',
    title: '创建媒体获取appKey',
    description: '登录并创建媒体账号，获取`appKey`',
    category: '准备',
    order: 2
  },
  {
    slug: 'ready-confirm-integration',
    title: '对接方案确认',
    description: '确认对接方案',
    category: '准备',
    order: 3
  },
  {
    slug: 'ready-special-behavior',
    title: '异常行为说明（必读）',
    description: '对于异常行为，包括但不限于刷单等异常行为的说明',
    category: '准备',
    order: 4
  },
  {
    slug: 'ready-operation',
    title: '运营规范说明（必读）',
    description: '对于运营规范的说明',
    category: '准备',
    order: 5
  },
  {
    slug: 'int-server-settings',
    title: '服务端配置',
    description: '服务端配置',
    category: '服务端配置',
    order: 1
  },
  {
    slug: 'int-sdk-android',
    title: 'Android SDK',
    description: 'Android SDK接入说明',
    category: 'SDK方式接入',
    order: 1
  },
  {
    slug: 'int-sdk-ios',
    title: 'iOS SDK',
    description: 'iOS SDK接入说明',
    category: 'SDK方式接入',
    order: 2
  },
  {
    slug: 'accessibility',
    title: '无障碍访问',
    description: '可访问性支持和最佳实践',
    category: '开始接入',
    order: 3
  },
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