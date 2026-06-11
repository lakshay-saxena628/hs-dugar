"use client";

import Link from 'next/link';
import { useRef } from 'react';
import { SECTION_TITLES, TEXT_CONTENT } from '@/utils/constants';
import { categories } from '@/utils/categories';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Products() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="w-100 py-24 bg-off-white position-relative">
      <div className="container max-w-7xl px-4">
        <div className="mb-5 text-center text-md-start">
          <p className="text-uppercase fw-semibold tracking-widest mb-3" style={{ color: 'var(--brand-500)', fontSize: '0.75rem' }}>{SECTION_TITLES.PRODUCTS}</p>
          <h2 id="products-heading" className="font-display fw-bold text-navy mb-4" style={{ fontSize: 'clamp(1.875rem, 4vw, 2.25rem)' }}>
            {TEXT_CONTENT.PRODUCTS_TITLE}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mx-md-0">Explore our comprehensive range of high-quality medical devices, designed to meet the rigorous demands of modern healthcare across various specialties.</p>
        </div>

        {/* Carousel Container */}
        <div className="position-relative mx-n4 px-4 mx-md-0 px-md-0">
          
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="btn btn-light rounded-circle shadow border d-none d-md-flex align-items-center justify-content-center p-0 position-absolute start-0 top-50 translate-middle-y z-3 bg-white"
            style={{ width: '56px', height: '56px', color: 'var(--brand-900)', marginLeft: '-28px' }}
          >
            <ChevronLeft size={28} />
          </button>

          <div 
            ref={carouselRef}
            className="d-flex gap-4 overflow-auto hide-scrollbar snap-x py-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="snap-start flex-shrink-0" style={{ width: '340px' }}>
                  <Link href={`/categories/${category.slug}`} className="text-decoration-none h-100 d-block">
                    <div className="category-card rounded-4 overflow-hidden h-100 d-flex flex-column p-4">
                      <div className="d-flex justify-content-between align-items-start mb-4">
                        <div className="icon-wrapper bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '64px', height: '64px' }}>
                          <Icon size={32} className="text-navy" />
                        </div>
                        <span className="px-3 py-1 rounded-pill fw-medium" style={{ background: 'rgba(200, 169, 126, 0.1)', color: 'var(--brand-500)', fontSize: '0.75rem' }}>
                          {category.products.length} Product{category.products.length !== 1 ? 's' : ''}
                        </span>
                      </div>
                      
                      <h3 className="font-display fw-bold fs-4 mb-2 text-navy">{category.name}</h3>
                      <p className="small leading-relaxed text-gray-500 mb-4 flex-grow-1" style={{ minHeight: '80px' }}>
                        {category.description}
                      </p>
                      
                      <div className="mt-auto pt-3 border-top">
                        <div className="category-card-btn d-flex align-items-center justify-content-center gap-2 py-2 px-4 rounded-pill border" style={{ color: 'var(--brand-900)', borderColor: '#e5e7eb' }}>
                          <span className="fw-medium text-sm">Explore Products</span>
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="btn btn-light rounded-circle shadow border d-none d-md-flex align-items-center justify-content-center p-0 position-absolute end-0 top-50 translate-middle-y z-3 bg-white"
            style={{ width: '56px', height: '56px', color: 'var(--brand-900)', marginRight: '-28px' }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
