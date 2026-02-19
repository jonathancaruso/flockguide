import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - FlockGuide',
  description: 'Privacy policy for FlockGuide.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
        <p><em>Last updated: February 2026</em></p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
        <p>
          FlockGuide doesn't require you to create an account or provide any
          personal information to use this site. We may collect standard web analytics data
          (page views, browser type, general location) to understand how people use the site
          and improve our content.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies</h2>
        <p>
          We may use cookies for analytics purposes. Third-party services we use (such as
          Google Analytics) may also set cookies. You can disable cookies in your browser
          settings at any time.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Affiliate Links</h2>
        <p>
          This site contains affiliate links to Amazon and other retailers. When you click
          these links, the retailer may place cookies on your device to track the referral.
          This is standard practice for affiliate programs and doesn't give us access to
          your personal information.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
        <p>
          We may use the following third-party services that have their own privacy policies:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Google Analytics (website analytics)</li>
          <li>Amazon Associates (affiliate program)</li>
          <li>Vercel (website hosting)</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be posted on
          this page with an updated revision date.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
        <p>
          If you have questions about this privacy policy, you can reach us through our{' '}
          <a href="/contact" className="text-farm-700 underline hover:text-farm-800">contact page</a>.
        </p>
      </div>
    </div>
  )
}
