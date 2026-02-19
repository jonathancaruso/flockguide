import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure - BackyardChickens Guide',
  description: 'FTC affiliate disclosure for BackyardChickens Guide.',
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Affiliate Disclosure</h1>
      <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
        <p>
          <strong>BackyardChickens Guide</strong> is a participant in the Amazon Services LLC
          Associates Program, an affiliate advertising program designed to provide a means for
          sites to earn advertising fees by advertising and linking to Amazon.com.
        </p>
        <p>
          Some of the links on this website are affiliate links. This means that if you click on
          a product link and make a purchase, we may receive a small commission. This comes at
          no additional cost to you and helps support the creation of free content on this site.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Promise</h2>
        <p>
          We only recommend products that we have personally used, researched, or genuinely believe
          will help you raise healthy, happy chickens. We will never recommend something solely
          because of an affiliate relationship.
        </p>
        <p>
          Our opinions are our own. Product reviews and recommendations are based on real-world
          use, user reviews, and practical value for backyard chicken keepers.
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
