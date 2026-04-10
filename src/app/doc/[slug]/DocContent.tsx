'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getDocContent, getDocMetadata, getDocsByCategory } from '@/lib/markdown';
import type { MarkdownComponentProps, TocNode } from '@/types';
import 'highlight.js/styles/github-dark.css';

// 自定义组件样式
const MarkdownComponents = {
  h1: ({ children }: MarkdownComponentProps) => (
    <h1 className="text-4xl font-bold text-gray-900 mb-6 pt-2">{children}</h1>
  ),
  h2: ({ children }: MarkdownComponentProps) => {
    const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
    return (
      <h2 
        className="text-2xl font-semibold text-gray-800 mb-4 mt-8 pt-4 border-t border-gray-200"
        id={id}
      >
        {children}
      </h2>
    );
  },
  h3: ({ children }: MarkdownComponentProps) => (
    <h3 className="text-xl font-medium text-gray-700 mb-3 mt-6">{children}</h3>
  ),
  p: ({ children }: MarkdownComponentProps) => (
    <p className="text-gray-700 mb-4 text-lg leading-7">{children}</p>
  ),
  code: ({ children, className }: MarkdownComponentProps & { className?: string }) => {
    const isInline = !className;
    if (isInline) {
      return <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{children}</code>;
    }
    return <code className={className}>{children}</code>;
  },
  pre: ({ children }: any) => {
    const codeRef = useRef<HTMLPreElement>(null);
    const [copied, setCopied] = useState(false);
    
    // 从 code 元素中提取语言信息
    const codeElement = children?.props;
    const className = codeElement?.className || '';
    // 提取语言：支持 "hljs language-java" 或 "hljs java" 格式
    const langMatch = className.match(/(?:language-|\b)(\w+)$/);
    const language = langMatch ? langMatch[1] : 'text';
    
    const handleCopy = async () => {
      const codeText = codeRef.current?.textContent || '';
      try {
        await navigator.clipboard.writeText(codeText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('复制失败:', err);
      }
    };
    
    return (
      <div className="relative group mb-4">
        {/* 语言标签 */}
        <div className="absolute left-3 top-0 z-10 px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-b font-medium">
          {language}
        </div>
        <button
          onClick={handleCopy}
          className="absolute right-2 top-2 z-10 px-3 py-1.5 bg-white/90 hover:bg-white text-gray-700 text-xs rounded-md border border-gray-200 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1.5"
          title="复制代码"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-600">已复制</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>复制</span>
            </>
          )}
        </button>
        <pre 
          ref={codeRef}
          className="bg-gray-50 text-gray-800 pt-8 pb-4 px-4 rounded-lg overflow-x-auto text-sm border border-gray-200"
        >
          {children}
        </pre>
      </div>
    );
  },
  ul: ({ children }: MarkdownComponentProps) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">{children}</ul>
  ),
  ol: ({ children }: MarkdownComponentProps) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">{children}</ol>
  ),
  li: ({ children }: MarkdownComponentProps) => (
    <li className="ml-4 text-lg">{children}</li>
  ),
  blockquote: ({ children }: MarkdownComponentProps) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 bg-blue-50 py-2 rounded-r mb-4">
      {children}
    </blockquote>
  ),
  table: ({ children }: MarkdownComponentProps) => (
    <table className="min-w-full divide-y divide-gray-200 mb-4">{children}</table>
  ),
  th: ({ children }: MarkdownComponentProps) => (
    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {children}
    </th>
  ),
  td: ({ children }: MarkdownComponentProps) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{children}</td>
  ),
};

interface DocContentProps {
  slug: string;
}

export default function DocContent({ slug }: DocContentProps) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const currentDoc = getDocMetadata(slug);
  const docsByCategory = getDocsByCategory();

  // 提取标题用于右侧目录（支持多级标题）
  const extractHeadings = (markdown: string): TocNode[] => {
    // 匹配所有级别的标题（从 ## 到 ######）
    const headingRegex = /^(#{2,6})\s+(.+)$/gm;
    const headings: TocNode[] = [];
    
    let match;
    const levelStack: { level: number; id: string }[] = [];
    
    while ((match = headingRegex.exec(markdown)) !== null) {
      const level = match[1].length; // #的数量，2-6
      const title = match[2].trim();
      
      // 生成有效的ID
      const id = title
        .toLowerCase()
        .replace(/[^\w\u4e00-\u9fa5\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      
      if (id && title) {
        // 处理层级关系
        while (levelStack.length > 0 && levelStack[levelStack.length - 1].level >= level) {
          levelStack.pop();
        }
        
        const parentId = levelStack.length > 0 ? levelStack[levelStack.length - 1].id : undefined;
        
        headings.push({ 
          id, 
          title, 
          level,
          parentId 
        });
        
        levelStack.push({ level, id });
      }
    }
    
    return headings;
  };

  const headings = extractHeadings(content);

  // 构建层级化的目录结构
  const buildTocTree = (headings: TocNode[]): TocNode[] => {
    const root: TocNode[] = [];
    const nodeMap = new Map<string, TocNode>();
    
    // 创建所有节点
    headings.forEach(heading => {
      nodeMap.set(heading.id, { ...heading, children: [] });
    });
    
    // 构建树形结构
    headings.forEach(heading => {
      const node = nodeMap.get(heading.id);
      if (heading.parentId) {
        const parent = nodeMap.get(heading.parentId);
        if (parent) {
          parent.children!.push(node!);
        } else {
          root.push(node!);
        }
      } else {
        root.push(node!);
      }
    });
    
    return root;
  };

  const tocTree = buildTocTree(headings);

  // 创建标题组件的工厂函数
  interface HeadingProps {
    children?: React.ReactNode;
  }
  
  const createHeadingComponent = (level: number) => {
    return (props: HeadingProps) => {
      const title = props.children?.toString() || '';
      const id = title
        .toLowerCase()
        .replace(/[^\w\u4e00-\u9fa5\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      
      const className = `font-semibold text-gray-800 mb-4 mt-8 ${
        level === 2 ? 'text-2xl pt-4 border-t border-gray-200' :
        level === 3 ? 'text-xl mt-6' :
        level === 4 ? 'text-lg mt-4' :
        level === 5 ? 'text-base mt-3' :
        'text-sm mt-2'
      }`;
      
      const Tag = `h${level}` as keyof JSX.IntrinsicElements;
      
      return (
        <Tag 
          {...props} 
          id={id}
          ref={(el) => {
            if (el && id) {
              sectionRefs.current[id] = el;
            }
          }}
          className={className}
        />
      );
    };
  };

  // 递归渲染目录树
  const renderTocTree = (nodes: TocNode[], depth = 0) => {
    return (
      <ul className={depth > 0 ? 'ml-4' : ''}>
        {nodes.map((node) => (
          <li key={node.id} className="mb-1">
            <button
              onClick={() => scrollToSection(node.id)}
              className={`w-full text-left transition-all duration-200 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded text-sm ${
                activeSection === node.id 
                  ? 'text-red-600 font-medium bg-red-50 border-l-4 border-red-600' 
                  : 'text-gray-700'
              } ${depth > 0 ? 'text-xs' : ''}`}
              style={{ 
                paddingLeft: `${8 + depth * 12}px`,
                borderLeftWidth: depth > 0 ? '2px' : '4px'
              }}
            >
              <span className="truncate block">{node.title}</span>
            </button>
            {node.children!.length > 0 && (
              <div className="mt-1">
                {renderTocTree(node.children!, depth + 1)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  // 滚动监听（修复监听逻辑）
  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      let foundActive = false;
      
      // 从下往上检查，找到第一个进入视口的标题
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        const element = sectionRefs.current[heading.id];
        if (element) {
          const rect = element.getBoundingClientRect();
          // 当标题顶部进入视口上方1/3位置时激活
          if (rect.top <= windowHeight * 0.4) {
            setActiveSection(heading.id);
            foundActive = true;
            break;
          }
        }
      }
      
      // 如果没有找到激活的标题，激活第一个
      if (!foundActive && headings.length > 0) {
        setActiveSection(headings[0].id);
      }
    };

    // 添加防抖优化性能
    let ticking = false;
    const debouncedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    // 初始检查
    handleScroll();

    return () => window.removeEventListener('scroll', debouncedScroll);
  }, [headings]);

  // 平滑滚动到章节（修复滚动偏移）
  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      // 计算准确的滚动位置，考虑固定头部的高度
      const headerHeight = 80; // Header高度
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTop - headerHeight - 20; // 额外留出一些间距
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // 加载Markdown内容
  useEffect(() => {
    const loadContent = async () => {
      // 先显示旧内容，不立即显示loading，避免闪烁
      if (!content) {
        setLoading(true);
      }
      try {
        const markdownContent = await getDocContent(slug);
        setContent(markdownContent);
      } catch (error) {
        setContent(`# 加载失败\n\n文档 "${slug}" 加载失败，请稍后重试。`);
      } finally {
        setLoading(false);
      }
    };
    
    loadContent();
  }, [slug]);

  // 首次加载显示loading，切换文档时不显示（保持旧内容可见）
  if (loading && !content) {
    return (
      <div className="flex flex-1 w-full items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">加载文档中...</p>
        </div>
      </div>
    );
  }

  if (!currentDoc) {
    return (
      <div className="flex flex-1 w-full items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">文档未找到</h1>
          <p className="text-gray-600 mb-4">文档 "{slug}" 不存在或已被移除。</p>
          <Link href="/doc" className="text-red-600 hover:underline">
            返回文档首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 w-full min-h-[calc(100vh-80px)]">
      {/* 左侧导航 - 使用固定高度避免切换时重算 */}
      <aside className="w-72 bg-white border-r border-gray-200 h-[calc(100vh-80px)] overflow-y-auto sticky top-20 flex-shrink-0">
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
                      className={`w-full text-left px-3 py-2 rounded transition-colors flex items-center text-sm ${
                        slug === doc.slug
                          ? 'bg-red-50 text-red-600'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
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
      <main className="flex-1 p-8 overflow-y-auto min-h-[calc(100vh-80px)]">
        <div className="max-w-4xl mx-auto">
          <article 
            className="prose prose-lg max-w-none transition-opacity duration-300"
            style={{ opacity: loading ? 0.6 : 1 }}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                ...MarkdownComponents,
                // 支持所有级别的标题
                h2: createHeadingComponent(2),
                h3: createHeadingComponent(3),
                h4: createHeadingComponent(4),
                h5: createHeadingComponent(5),
                h6: createHeadingComponent(6),
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </main>

      {/* 右侧目录 - 使用固定高度避免切换时重算 */}
      <aside className="w-80 bg-white border-l border-gray-200 sticky top-20 self-start h-[calc(100vh-80px)] overflow-y-auto flex-shrink-0">
        <div className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">本页目录</h3>
          {tocTree.length > 0 ? (
            <div className="max-h-[calc(100vh-180px)] overflow-y-auto">
              {renderTocTree(tocTree)}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">暂无章节标题</p>
          )}
          
          {/* 目录统计信息 */}
          {tocTree.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                共 {headings.length} 个章节
                {headings.filter(h => h.level > 2).length > 0 && 
                  `，包含 ${headings.filter(h => h.level > 2).length} 个子章节`
                }
              </p>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
