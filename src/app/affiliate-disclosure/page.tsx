import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure - FlockGuide',
  description: 'FTC affiliate disclosure for FlockGuide.',
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Affiliate Disclosure</h1>
      <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
        <p>
          <strong>FlockGuide</strong> is a participant in the Amazon Services LLC
          Associates Program, an affiliate advertising program designed to provide a means for
          sites to earn advertising fees by advertising and linking to Amazon.com.
        </p>
        <p>
          Some of the links on this website are affiliate links. This means that if you click on
          a product link and make a purchase, we may receive a small commission. This comes at
          no additional cost to you and helps support the creation of free content on this site.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Pick Products</h2>
        <p>
          Every product we recommend is researched through a mix of manufacturer specs, user reviews,
          community feedback, and practical value for backyard chicken keepers. We never recommend
          something just because it pays a commission.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">FTC Compliance</h2>
        <p>
          In accordance with the Federal Trade Commission&apos;s 16 CFR Part 255, &quot;Guides
          Concerning the Use of Endorsements and Testimonials in Advertising,&quot; we disclose
          our material connection to product providers. This disclosure is provided for your
          protection and in compliance with FTC guidelines.
        </p>
        <p>
          If you have any questions about this disclosure, feel free to contact us.
        </p>
      </div>
    </div>
  )
}
