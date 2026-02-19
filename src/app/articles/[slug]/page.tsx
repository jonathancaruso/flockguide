import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'
import { getArticleBySlug, getAllSlugs } from '@/lib/articles'
import type { Metadata } from 'next'

// Markdown components styled for chicken site
const markdownComponents: Components = {
  table: ({ children }) => (
    <div className="my-8 overflow-hidden rounded-xl border border-farm-200 shadow-sm">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-gradient-to-r from-farm-600 to-farm-700 text-white">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-semibold text-sm uppercase tracking-wide">{children}</th>
  ),
  tbody: ({ children }) => <tbody className="divide-y divide-farm-100">{children}</tbody>,
  tr: ({ children }) => <tr className="hover:bg-farm-50 transition-colors">{children}</tr>,
  td: ({ children }) => <td className="px-4 py-3 text-gray-700">{children}</td>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 pl-6 pr-4 py-4 bg-barn-50 border-l-4 border-barn-300 rounded-r-lg italic text-gray-700">
      {children}
    </blockquote>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-3 border-b-2 border-farm-200 flex items-center gap-3">
      <span className="w-1.5 h-8 bg-gradient-to-b from-farm-400 to-farm-600 rounded-full"></span>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-8 mb-4 flex items-center gap-2">
      <span className="text-barn-400">◆</span>
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold text-gray-700 mt-6 mb-3">{children}</h4>
  ),
  ul: ({ children }) => <ul className="my-4 space-y-2">{children}</ul>,
  ol: ({ children }) => <ol className="my-4 space-y-2 list-decimal list-inside">{children}</ol>,
  li: ({ children }) => (
    <li className="flex items-start gap-2 text-gray-700 ml-4">
      <span className="text-farm-500 mt-1.5 flex-shrink-0">•</span>
      <span className="flex-1">{children}</span>
    </li>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-farm-600 hover:text-farm-700 underline decoration-farm-300 hover:decoration-farm-500 underline-offset-2 transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  p: ({ children }) => <p className="my-4 text-gray-700 leading-relaxed">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
  hr: () => <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-farm-300 to-transparent" />,
}

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.title} - FlockGuide`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { '@type': 'Organization', name: 'FlockGuide' },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-farm-50/50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-farm-600 hover:text-farm-700 text-sm mb-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          All Articles
        </Link>

        <article className="bg-white rounded-2xl shadow-xl shadow-farm-100/50 overflow-hidden">
          <header className="bg-gradient-to-br from-farm-600 via-farm-700 to-farm-800 px-8 md:px-12 py-10 md:py-14">
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4 leading-tight">
              {article.title}
            </h1>
            {article.description && (
              <p className="text-farm-100 text-lg max-w-2xl">{article.description}</p>
            )}
            <div className="flex items-center gap-4 text-farm-200 text-sm mt-4">
              <span>{article.readTime}</span>
              {article.date && <span>Published {article.date}</span>}
            </div>
          </header>

          <div className="px-8 md:px-12 py-10 md:py-12">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {article.content}
            </ReactMarkdown>
          </div>

          <div className="px-8 md:px-12 py-8 bg-gradient-to-r from-barn-50 to-farm-50 border-t border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-gray-900">Want more chicken tips?</p>
                <p className="text-gray-600 text-sm">Check out our other guides</p>
              </div>
              <Link
                href="/articles"
                className="px-6 py-2.5 bg-farm-600 hover:bg-farm-700 text-white rounded-full font-medium transition-colors"
              >
                Browse All Guides →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}
