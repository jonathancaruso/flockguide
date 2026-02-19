'use client'

import type { TOCItem } from '@/lib/markdown-utils'

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  if (items.length < 3) return null

  return (
    <nav className="mb-10 p-6 bg-farm-50 border border-farm-200 rounded-xl">
      <h2 className="text-lg font-bold text-[#4a7c59] mb-3 flex items-center gap-2">
        <span className="text-xl">📋</span> In This Article
      </h2>
      <ol className="space-y-1.5 list-decimal list-inside">
        {items.map((item) => (
          <li key={item.id} className="text-gray-600">
            <a
              href={`#${item.id}`}
              className="text-[#4a7c59] hover:text-farm-800 hover:underline underline-offset-2 transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
