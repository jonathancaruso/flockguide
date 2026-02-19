'use client'

interface AffiliateProductCardProps {
  title: string
  searchTerm: string
  priceRange?: string
  pros?: string[]
  cons?: string[]
  description?: string
  tag?: string
}

function buildAmazonSearchUrl(searchTerm: string, tag: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(searchTerm)}&tag=${tag}`
}

export function AffiliateProductCard({
  title,
  searchTerm,
  priceRange,
  pros,
  cons,
  description,
  tag = 'flockguide-20',
}: AffiliateProductCardProps) {
  const url = buildAmazonSearchUrl(searchTerm, tag)

  return (
    <div className="my-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="sm:w-24 h-24 bg-barn-50 flex items-center justify-center rounded-lg flex-shrink-0">
            <span className="text-4xl">📦</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-lg mb-1">{title}</h3>
            {priceRange && (
              <p className="text-barn-600 font-medium text-sm mb-2">{priceRange}</p>
            )}
            {description && (
              <p className="text-gray-600 text-sm mb-3">{description}</p>
            )}
            {(pros || cons) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                {pros && (
                  <div>
                    <p className="text-xs font-semibold text-farm-700 uppercase mb-1">Pros</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {pros.map((p, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-farm-500 mt-0.5">✓</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {cons && (
                  <div>
                    <p className="text-xs font-semibold text-red-600 uppercase mb-1">Cons</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {cons.map((c, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-red-400 mt-0.5">✗</span> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 bg-barn-300 hover:bg-barn-400 text-gray-900 font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
            >
              Check Price on Amazon
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-2 text-xs text-gray-400">
        Affiliate link. We may earn a commission at no extra cost to you.
      </div>
    </div>
  )
}

export function AffiliateDisclosureBanner() {
  return (
    <div className="bg-barn-50 border border-barn-200 rounded-lg p-3 my-4 text-xs text-barn-700">
      <strong>Affiliate Disclosure:</strong> This page contains affiliate links. If you buy
      something through these links, we may earn a small commission at no extra cost to you.
      We only recommend products we&apos;ve thoroughly researched.{' '}
      <a href="/affiliate-disclosure" className="underline">Learn more</a>.
    </div>
  )
}
