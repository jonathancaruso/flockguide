import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllArticles } from '@/lib/articles'
import type { Metadata } from 'next'

const categories: Record<string, { name: string; description: string; emoji: string }> = {
  'beginner-guides': { name: 'Beginner Guides', description: 'New to chickens? Start here. We cover everything from picking your first breeds to collecting your first eggs.', emoji: '📖' },
  'breeds': { name: 'Breeds', description: 'Detailed breed profiles with egg production stats, temperament, and whether they're right for your setup.', emoji: '🐓' },
  'coops-and-housing': { name: 'Coops & Housing', description: 'Coop designs, run ideas, nesting boxes, and everything your birds need for shelter.', emoji: '🏠' },
  'feed-and-nutrition': { name: 'Feed & Nutrition', description: 'What to feed your chickens at every age, plus treats, supplements, and things to avoid.', emoji: '🌽' },
  'health': { name: 'Health', description: 'Spot problems early and keep your flock in top shape. Common diseases, parasites, and first aid.', emoji: '💊' },
  'gear-reviews': { name: 'Gear Reviews', description: 'Honest reviews of coops, feeders, waterers, heat lamps, and everything else you might need.', emoji: '⭐' },
}

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const cat = categories[slug]
  if (!cat) return {}
  return {
    title: `${cat.name} - FlockGuide`,
    description: cat.description,
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const cat = categories[slug]
  if (!cat) notFound()

  const allArticles = getAllArticles()
  const articles = allArticles.filter(a => {
    const catSlug = a.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')
    return catSlug === slug
  })

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <span className="text-4xl mb-2 block">{cat.emoji}</span>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{cat.name}</h1>
        <p className="text-gray-600">{cat.description}</p>
      </div>

      {articles.length === 0 ? (
        <div className="bg-white rounded-xl p-8 text-center">
          <p className="text-gray-500 mb-4">No articles in this category yet. We are working on it!</p>
          <Link href="/articles" className="text-farm-600 hover:text-farm-700 font-medium">
            Browse all articles →
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
            >
              <div className="h-40 bg-gradient-to-br from-farm-100 to-barn-100 flex items-center justify-center">
                <span className="text-5xl opacity-40">{cat.emoji}</span>
              </div>
              <div className="p-5">
                <span className="text-xs text-gray-400">{article.readTime}</span>
                <h2 className="font-semibold text-gray-900 group-hover:text-farm-600 transition-colors mt-1 mb-1">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-500 line-clamp-2">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(categories).map(slug => ({ slug }))
}
