import { MetadataRoute } from 'next';
import { categories } from '@/utils/categories';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.hsdugargroup.com';

  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...categoryRoutes,
  ];
}
