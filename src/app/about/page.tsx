import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - FlockGuide',
  description: 'Learn about FlockGuide and why we created this site to help new chicken keepers.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About FlockGuide</h1>
      <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
        <p>
          Getting into backyard chickens shouldn&apos;t require a college degree. But if you&apos;ve
          ever tried to research it, you know the feeling: hours of digging through forums, YouTube
          videos, and conflicting advice just to answer basic questions like &quot;how much space do
          chickens need?&quot; and &quot;what breed should I start with?&quot;
        </p>
        <p>
          FlockGuide is what we wished existed when we started learning about chickens. A simple,
          no-nonsense guide that covers everything from picking your first breeds to building
          (or buying) a coop to dealing with your first sick hen.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Believe</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Chickens are easier than most people think</li>
          <li>You don&apos;t need a huge yard or a lot of money to start</li>
          <li>Good information should be free</li>
          <li>When we recommend a product, it&apos;s because we actually think it&apos;s good (not because someone paid us to say so)</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">About Our Recommendations</h2>
        <p>
          Some of our articles contain affiliate links to Amazon. That means if you click a link
          and buy something, we earn a small commission at no extra cost to you. This helps keep
          the site running and the content free.
        </p>
        <p>
          We don&apos;t recommend something just to make a buck. Every product on this site has been
          researched through user reviews, community feedback, and manufacturer specs before we
          include it.
        </p>
      </div>
    </div>
  )
}
