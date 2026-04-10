import type { Metadata } from 'next'
import { docStructure } from '@/lib/markdown'

interface LayoutProps {
  children: React.ReactNode
  params: { slug: string }
}

// 动态生成metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const doc = docStructure.find(d => d.slug === params.slug);
  if (!doc) {
    return {
      title: '文档未找到 | 亘元有量',
      description: '文档不存在或已被移除',
    };
  }
  
  return {
    title: `${doc.title} | 亘元有量`,
    description: doc.description || `${doc.title} - 亘元有量技术文档`,
    alternates: {
      canonical: `/doc/${doc.slug}`,
    },
  };
}

export default function DocLayout({ children, params }: LayoutProps) {
  return (
    <>
      {children}
    </>
  );
}