import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🐔</span>
              <span className="text-xl font-bold text-white">FlockGuide</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-md">
              Practical advice for raising happy, healthy backyard chickens. Written by
              real chicken keepers who have been through every mistake so you don&apos;t have to.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/articles/beginners-guide-raising-backyard-chickens" className="hover:text-barn-300">Beginner&apos;s Guide</Link></li>
              <li><Link href="/articles/best-chicken-breeds-for-beginners" className="hover:text-barn-300">Best Breeds</Link></li>
              <li><Link href="/articles/best-chicken-coops-amazon-2026" className="hover:text-barn-300">Best Coops</Link></li>
              <li><Link href="/articles" className="hover:text-barn-300">All Articles</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categories/breeds" className="hover:text-barn-300">Breeds</Link></li>
              <li><Link href="/categories/coops-and-housing" className="hover:text-barn-300">Coops &amp; Housing</Link></li>
              <li><Link href="/categories/feed-and-nutrition" className="hover:text-barn-300">Feed &amp; Nutrition</Link></li>
              <li><Link href="/categories/health" className="hover:text-barn-300">Health</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {currentYear} FlockGuide. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/affiliate-disclosure" className="hover:text-barn-300">Affiliate Disclosure</Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-barn-300">Privacy Policy</Link>
              <span>|</span>
              <span>As an Amazon Associate, we earn from qualifying purchases.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
