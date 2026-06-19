import React, { useEffect } from 'react';
import { Product } from '@/utils/categories';
import { X, CheckCircle, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailsModal({ product, isOpen, onClose }: ProductDetailsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1050 }}>
      <div 
        className="bg-white rounded-4 overflow-hidden position-relative d-flex flex-column" 
        style={{ width: '90%', maxWidth: '900px', maxHeight: '90vh', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center p-4 border-bottom bg-off-white">
          <h2 className="font-display fw-bold text-navy mb-0 fs-4">{product.name}</h2>
          <button onClick={onClose} className="btn btn-light rounded-circle p-2 border-0 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 overflow-auto" style={{ flex: 1 }}>
          <div className="row g-5">
            {/* Left Col: Image & Actions */}
            <div className="col-12 col-md-5">
              <div className="rounded-4 overflow-hidden mb-4 bg-light d-flex align-items-center justify-content-center border position-relative" style={{ aspectRatio: '1/1' }}>
                <Image src={product.imagePlaceholder} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'contain', opacity: product.imagePlaceholder === '/placeholder.jpg' ? 0.1 : 1, padding: product.imagePlaceholder === '/placeholder.jpg' ? '0' : '1.5rem' }} />
                {product.imagePlaceholder === '/placeholder.jpg' && <span className="text-muted font-display fs-5 fw-medium z-1">Product Image</span>}
              </div>
              
              <div className="d-flex flex-column gap-3">
                <Link href="/#contact" className="btn text-white rounded-pill py-2 d-flex align-items-center justify-content-center gap-2 fw-medium" style={{ backgroundColor: 'var(--brand-500)' }} onClick={onClose}>
                  <MessageSquare size={18} /> Request Quote
                </Link>
              </div>
            </div>

            {/* Right Col: Details */}
            <div className="col-12 col-md-7">
              <h3 className="fs-5 fw-bold text-navy mb-3">Product Description</h3>
              <p className="text-gray-500 mb-4 leading-relaxed">{product.description}</p>

              <h3 className="fs-5 fw-bold text-navy mb-3">Key Features</h3>
              <ul className="list-unstyled mb-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="d-flex align-items-start gap-2 mb-2 text-gray-600">
                    <CheckCircle size={18} className="text-gold flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="fs-5 fw-bold text-navy mb-3">Specifications</h3>
              <div className="bg-off-white rounded-3 p-3 mb-4">
                {Object.entries(product.specs).map(([key, value], idx) => (
                  <div key={idx} className="d-flex justify-content-between border-bottom border-white py-2">
                    <span className="fw-medium text-gray-800">{key}</span>
                    <span className="text-gray-600 text-end">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
