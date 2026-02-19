export interface FAQItem {
  question: string
  answer: string
}

export function extractFAQs(markdown: string): FAQItem[] {
  const faqSectionMatch = markdown.match(/## Frequently Asked Questions\n([\s\S]*?)(?=\n## |\n---|\n\*[A-Z]|\n\*Have|\n\*This|\nReady to|\nGot questions|\n\[|\n\*\*Affiliate|$)/)
  if (!faqSectionMatch) return []

  const section = faqSectionMatch[1]
  const faqs: FAQItem[] = []
  const parts = section.split(/\n### /).filter(Boolean)

  for (const part of parts) {
    const lines = part.trim().split('\n')
    const question = lines[0].replace(/\?*$/, '?').trim()
    const answer = lines
      .slice(1)
      .map(l => l.trim())
      .filter(Boolean)
      .join(' ')
      .trim()
    if (question && answer) {
      faqs.push({ question, answer })
    }
  }

  return faqs
}

export default function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  if (faqs.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
