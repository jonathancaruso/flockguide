import Link from 'next/link'

export default function Home() {
  const featuredArticles = [
    {
      slug: 'beginners-guide-raising-backyard-chickens',
      title: "Complete Beginner's Guide to Raising Backyard Chickens",
      excerpt: 'Everything you need to know before getting your first flock. From picking breeds to building a coop to collecting your first eggs.',
      category: 'Beginner Guides',
      readTime: '12 min read',
    },
    {
      slug: 'best-chicken-breeds-for-beginners',
      title: '10 Best Chicken Breeds for Beginners',
      excerpt: 'Not all chickens are created equal. These 10 breeds are friendly, hardy, and lay plenty of eggs without giving you headaches.',
      category: 'Breeds',
      readTime: '11 min read',
    },
    {
      slug: 'best-chicken-coops-amazon-2026',
      title: 'Best Chicken Coops You Can Buy on Amazon (2026)',
      excerpt: 'We looked at dozens of pre-made coops so you do not have to. Here are the ones actually worth your money.',
      category: 'Gear Reviews',
      readTime: '9 min read',
    },
  ]

  const categories = [
    { name: 'Beginner Guides', slug: 'beginner-guides', emoji: '📖', desc: 'Start here if you are new to chickens' },
    { name: 'Breeds', slug: 'breeds', emoji: '🐓', desc: 'Find the right breed for your flock' },
    { name: 'Coops & Housing', slug: 'coops-and-housing', emoji: '🏠', desc: 'Shelters, runs, and nesting boxes' },
    { name: 'Feed & Nutrition', slug: 'feed-and-nutrition', emoji: '🌽', desc: 'What to feed your birds and when' },
    { name: 'Health', slug: 'health', emoji: '💊', desc: 'Keep your flock healthy and happy' },
    { name: 'Gear Reviews', slug: 'gear-reviews', emoji: '⭐', desc: 'Tested gear and honest reviews' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-farm-700 to-farm-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] bg-repeat opacity-20" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Raising Backyard Chickens Made Simple 🐔
            </h1>
            <p className="text-xl text-farm-100 mb-8">
              No fluff, no filler. Just straight talk from people who actually raise chickens.
              Breed guides, coop advice, and gear reviews to get you started right.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/articles/beginners-guide-raising-backyard-chickens"
                className="bg-white text-farm-700 px-6 py-3 rounded-lg font-semibold hover:bg-farm-50 transition-colors"
              >
                Start Here →
              </Link>
              <Link
                href="/articles/best-chicken-breeds-for-beginners"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Pick Your Breed
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Guides</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-farm-100 to-barn-100 flex items-center justify-center">
                <span className="text-6xl opacity-50">🐔</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-farm-100 text-farm-700 text-xs font-medium px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-farm-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="bg-farm-50 border border-farm-100 rounded-xl p-6 hover:shadow-md hover:border-farm-300 transition-all group"
              >
                <span className="text-3xl mb-3 block">{cat.emoji}</span>
                <h3 className="font-semibold text-gray-900 group-hover:text-farm-600 mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-500">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Chickens */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-barn-50 to-farm-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Raise Backyard Chickens?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <p className="mb-4">
                Fresh eggs every morning. Seriously, once you taste an egg from your own hens,
                grocery store eggs will never be the same. The yolks are darker, the flavor is
                richer, and you know exactly what your birds ate.
              </p>
              <p>
                Chickens are also surprisingly fun to hang out with. They have real personalities.
                Some will follow you around the yard like puppies. Others will boss the whole
                flock around. You will pick favorites (and that is OK).
              </p>
            </div>
            <div>
              <p className="mb-4">
                On top of that, chickens turn kitchen scraps into fertilizer for your garden.
                They eat bugs and weeds. They teach kids where food actually comes from.
              </p>
              <p>
                Getting started is easier than most people think. A small flock of 3 to 4 hens
                does not need much space, and the daily time commitment is about 10 minutes.
                We will walk you through everything.
              </p>
            </div>
          </div>
          <Link
            href="/articles/beginners-guide-raising-backyard-chickens"
            className="inline-flex items-center text-farm-600 font-semibold hover:text-farm-700 mt-4"
          >
            Read the full beginner&apos;s guide →
          </Link>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Getting Started in 4 Steps</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { n: 1, title: 'Check Local Laws', text: 'Most towns allow hens but not roosters. Check your city or county ordinances before buying anything.' },
              { n: 2, title: 'Set Up a Coop', text: 'You need about 4 square feet per bird inside and 10 square feet per bird in the run. Start small.' },
              { n: 3, title: 'Pick Your Breeds', text: 'Go with beginner-friendly breeds like Rhode Island Reds, Buff Orpingtons, or Plymouth Rocks.' },
              { n: 4, title: 'Bring Home Your Birds', text: 'Start with 3 to 6 pullets (young hens). They will start laying eggs around 18 to 24 weeks old.' },
            ].map((step) => (
              <div key={step.n} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-barn-400 rounded-full flex items-center justify-center text-xl font-bold text-gray-900">
                  {step.n}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
