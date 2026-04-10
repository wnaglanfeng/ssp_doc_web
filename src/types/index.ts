// 文档相关类型
export interface DocMetadata {
  slug: string;
  title: string;
  description?: string;
  category: string;
  order: number;
}

// 更新日志类型
export interface UpdateLog {
  version: string;
  date: string;
  content: string;
}

// 产品信息类型
export interface ProductInfo {
  product: string;
  version: string;
  date: string;
  content: string;
}

// 特性卡片类型
export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  color: string;
}

// 导航菜单项类型
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// 页脚链接类型
export interface FooterLink {
  name: string;
  href: string;
  icon?: string;
}

// 代码块语言类型
export type CodeLanguage = 
  | 'java' 
  | 'javascript' 
  | 'typescript' 
  | 'json' 
  | 'xml' 
  | 'bash' 
  | 'text' 
  | 'swift' 
  | 'kotlin'
  | 'objectivec';

// Markdown组件props类型
export interface MarkdownComponentProps {
  children?: React.ReactNode;
  className?: string;
}

// 文档目录树节点类型
export interface TocNode {
  id: string;
  title: string;
  level: number;
  parentId?: string;
  children: TocNode[];
}
