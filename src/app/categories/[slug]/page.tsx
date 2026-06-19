"use client";

import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import { categories, Product } from '@/utils/categories';
import ProductDetailsModal from '@/components/ProductDetailsModal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const category = categories.find(c => c.slug === resolvedParams.slug);

  if (!category) {
    notFound();
  }

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div id="app-wrapper" className="w-100 h-100 bg-off-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="position-relative overflow-hidden" style={{ backgroundColor: 'var(--brand-900)' }}>
        <div className="container max-w-7xl px-4 position-relative z-1" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
          {/* Breadcrumbs */}
          <nav className="d-flex align-items-center gap-2 mb-4 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <Link href="/" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
            <ChevronRight size={16} />
            <Link href="/#products" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>Categories</Link>
            <ChevronRight size={16} />
            <span className="text-white">{category.name}</span>
          </nav>

          <div className="row align-items-center">
            <div className="col-12 col-md-8 col-lg-6">
              <span className="px-3 py-1 rounded-pill fw-medium mb-3 d-inline-block" style={{ background: 'rgba(200, 169, 126, 0.2)', color: 'var(--brand-500)', fontSize: '0.875rem' }}>
                {category.products.length} Products
              </span>
              <h1 className="font-display fw-bold mb-4 display-4 text-white">{category.name}</h1>
              <p className="lead mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>{category.description}</p>
            </div>
            <div className="col-12 col-md-4 col-lg-6 d-none d-md-flex justify-content-end">
              <category.icon size={160} style={{ color: 'rgba(255,255,255,0.05)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24">
        <div className="container max-w-7xl px-4 py-5">
          <div className="row g-4">
            {category.products.map((product, index) => (
              <div key={product.id} className="col-12 col-md-6 col-lg-4">
                <div className="category-card rounded-4 overflow-hidden h-100 d-flex flex-column bg-white">
                  <div className="bg-light position-relative d-flex align-items-center justify-content-center border-bottom" style={{ aspectRatio: '4/3' }}>
                    <Image priority={index < 6} src={product.imagePlaceholder} alt={product.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain', opacity: product.imagePlaceholder === '/placeholder.jpg' ? 0.1 : 1, padding: product.imagePlaceholder === '/placeholder.jpg' ? '0' : '1rem' }} />
                    {product.imagePlaceholder === '/placeholder.jpg' && <span className="text-muted font-display fs-6 fw-medium z-1">Product Image</span>}
                  </div>
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h3 className="font-display fw-bold fs-5 mb-2 text-navy">{product.name}</h3>
                    <p className="small leading-relaxed text-gray-500 mb-4 flex-grow-1">
                      {product.description}
                    </p>
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="category-card-btn btn btn-outline-dark w-100 rounded-pill py-2 fw-medium d-flex align-items-center justify-content-center gap-2"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <ProductDetailsModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}
