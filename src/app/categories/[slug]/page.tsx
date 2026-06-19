import { notFound } from 'next/navigation';
import { categories } from '@/utils/categories';
import type { Metadata } from 'next';
import CategoryClient from './CategoryClient';

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const category = categories.find(c => c.slug === resolvedParams.slug);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} | HS Dugar Group`,
    description: category.description,
    openGraph: {
      title: `${category.name} | HS Dugar Group`,
      description: category.description,
      url: `https://www.hsdugargroup.com/categories/${category.slug}`,
    },
    alternates: {
      canonical: `https://www.hsdugargroup.com/categories/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const category = categories.find(c => c.slug === resolvedParams.slug);

  if (!category) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": category.name,
    "description": category.description,
    "url": `https://www.hsdugargroup.com/categories/${category.slug}`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": category.products.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": p.name,
        "description": p.description,
        "url": `https://www.hsdugargroup.com/categories/${category.slug}#${p.id}`
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.hsdugargroup.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Categories",
          "item": "https://www.hsdugargroup.com/#products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": category.name,
          "item": `https://www.hsdugargroup.com/categories/${category.slug}`
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CategoryClient slug={category.slug} />
    </>
  );
}
