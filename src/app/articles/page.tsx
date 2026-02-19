import Link from 'next/link'
import Image from 'next/image'
import { getAllArticles } from '@/lib/articles'

export const metadata = {
  title: 'All Articles - FlockGuide',
  description: 'Browse all our guides on raising backyard chickens. Breed profiles, coop plans, feeding tips, health advice, and gear reviews.',
}

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">All Articles</h1>
      <p className="text-gray-600 mb-8">Every guide we have published, newest first.</p>

      {articles.length === 0 ? (
        <p className="text-gray-500">No articles yet. Check back soon!</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
            >
              <div className="h-40 relative overflow-hidden">
                {article.image ? (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="h-full bg-gradient-to-br from-farm-100 to-barn-100 flex items-center justify-center">
                    <span className="text-5xl opacity-40">🐔</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-farm-100 text-farm-700 text-xs font-medium px-2 py-0.5 rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>
                <h2 className="font-semibold text-gray-900 group-hover:text-farm-600 transition-colors mb-1">
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
