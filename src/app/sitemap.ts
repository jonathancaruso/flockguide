import { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://backyardchickens.guide'

  const articleUrls = getAllSlugs().map(slug => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
  }))

  const categories = ['beginner-guides', 'breeds', 'coops-and-housing', 'feed-and-nutrition', 'health', 'gear-reviews']
  const categoryUrls = categories.map(slug => ({
    url: `${baseUrl}/categories/${slug}`,
    lastModified: new Date(),
  }))

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/articles`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/affiliate-disclosure`, lastModified: new Date() },
    { url: `${baseUrl}/privacy`, lastModified: new Date() },
    ...categoryUrls,
    ...articleUrls,
  ]
}
