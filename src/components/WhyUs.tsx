import { Award, Package, Clock, Headphones } from 'lucide-react';
import { SECTION_TITLES, TEXT_CONTENT } from '@/utils/constants';

export default function WhyUs() {
  return (
    <section id="why-us" className="w-100 py-24 bg-white">
      <div className="container max-w-7xl px-4">
        <div className="text-center mb-5">
          <p className="text-uppercase fw-semibold tracking-widest mb-3" style={{ color: 'var(--brand-500)', fontSize: '0.75rem' }}>{SECTION_TITLES.WHY_US}</p>
          <h2 className="font-display fw-bold mb-0" style={{ color: 'var(--brand-900)', fontSize: 'clamp(1.875rem, 4vw, 2.25rem)' }}>
            {TEXT_CONTENT.WHY_US_TITLE}
          </h2>
        </div>
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="rounded-4 p-4 text-center transition hover:shadow-md h-100 border-gray-100 border">
              <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ background: '#ecfeff', width: '48px', height: '48px' }}>
                <Award size={22} className="text-brand-500" />
              </div>
              <h4 className="fw-semibold fs-6 mb-2" style={{ color: 'var(--brand-900)' }}>International Certifications</h4>
              <p className="small text-gray-500 mb-0">We work closely with ISO and CE certified facilities to deliver products that meet stringent international quality and safety benchmarks.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="rounded-4 p-4 text-center transition hover:shadow-md h-100 border-gray-100 border">
              <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ background: '#f0fdf4', width: '48px', height: '48px' }}>
                <Package size={22} color="#14532d" />
              </div>
              <h4 className="fw-semibold fs-6 mb-2" style={{ color: 'var(--brand-900)' }}>Optimized Pricing</h4>
              <p className="small text-gray-500 mb-0">Competitive pricing and flexible range</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="rounded-4 p-4 text-center transition hover:shadow-md h-100 border-gray-100 border">
              <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ background: '#ecfeff', width: '48px', height: '48px' }}>
                <Clock size={22} className="text-brand-500" />
              </div>
              <h4 className="fw-semibold fs-6 mb-2" style={{ color: 'var(--brand-900)' }}>Timely Delivery</h4>
              <p className="small text-gray-500 mb-0">Efficient logistics ensuring on-time delivery worldwide.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="rounded-4 p-4 text-center transition hover:shadow-md h-100 border-gray-100 border">
              <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ background: '#f0fdf4', width: '48px', height: '48px' }}>
                <Headphones size={22} color="#14532d" />
              </div>
              <h4 className="fw-semibold fs-6 mb-2" style={{ color: 'var(--brand-900)' }}>Dedicated Support</h4>
              <p className="small text-gray-500 mb-0">Dedicated account managers for every export partner.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
