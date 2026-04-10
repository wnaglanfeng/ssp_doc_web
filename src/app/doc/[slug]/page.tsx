import { Metadata } from 'next';
import { getDocMetadata } from '@/lib/markdown';
import DocContent from './DocContent';

// 动态生成 metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const doc = getDocMetadata(params.slug);
  
  if (!doc) {
    return {
      title: '文档未找到 | 亘元有量',
      description: '文档不存在或已被移除',
    };
  }
  
  return {
    title: doc.title,
    description: doc.description || `${doc.title} - 亘元有量积分墙SDK文档`,
    openGraph: {
      title: doc.title,
      description: doc.description || `${doc.title} - 亘元有量积分墙SDK文档`,
      type: 'article',
      locale: 'zh_CN',
    },
  };
}

// 页面组件
export default function DocPage({ params }: { params: { slug: string } }) {
  return <DocContent slug={params.slug} />;
}
